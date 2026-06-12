/*
 * api.js — Auto-results module for Prode Mundial 2026
 *
 * PRIMARY source: ESPN hidden API (real-time, no key required)
 * FALLBACK: openfootball GitHub JSON (slower, ~1-2h delay)
 *
 * Upload to GitHub alongside index.html.
 * Vercel picks it up. Supabase doesn't change.
 */

// ═══ TEAM NAME MAPPING — ESPN → Spanish ═══
const NAME_MAP_ESPN = {
  // ESPN uses English names, we use Spanish
  "Mexico":"México","South Korea":"Corea del Sur","South Africa":"Sudáfrica",
  "Czech Republic":"Chequia","Czechia":"Chequia",
  "Canada":"Canadá","Switzerland":"Suiza","Qatar":"Qatar",
  "Bosnia and Herzegovina":"Bosnia-Herz.","Bosnia-Herzegovina":"Bosnia-Herz.",
  "Brazil":"Brasil","Morocco":"Marruecos","Scotland":"Escocia","Haiti":"Haití",
  "United States":"EE.UU.","USA":"EE.UU.","Paraguay":"Paraguay",
  "Australia":"Australia","Turkey":"Turquía","Türkiye":"Turquía",
  "Germany":"Alemania","Ecuador":"Ecuador","Ivory Coast":"Costa de Marfil",
  "Côte d'Ivoire":"Costa de Marfil","Cote d'Ivoire":"Costa de Marfil",
  "Curaçao":"Curazao","Curacao":"Curazao",
  "Japan":"Japón","Netherlands":"Países Bajos","Sweden":"Suecia","Tunisia":"Túnez",
  "Belgium":"Bélgica","Iran":"Irán","Egypt":"Egipto","New Zealand":"Nueva Zelanda",
  "Spain":"España","Uruguay":"Uruguay","Saudi Arabia":"Arabia Saudita",
  "Cape Verde":"Cabo Verde",
  "France":"Francia","Norway":"Noruega","Senegal":"Senegal","Iraq":"Irak",
  "Argentina":"Argentina","Austria":"Austria","Algeria":"Argelia","Jordan":"Jordania",
  "Portugal":"Portugal","Colombia":"Colombia","Uzbekistan":"Uzbekistán",
  "DR Congo":"R.D. Congo","Congo DR":"R.D. Congo","Congo, DR":"R.D. Congo",
  "England":"Inglaterra","Croatia":"Croacia","Ghana":"Ghana","Panama":"Panamá",
  "Korea Republic":"Corea del Sur",
  // ESPN sometimes uses these abbreviations
  "MEX":"México","KOR":"Corea del Sur","ZAF":"Sudáfrica","CZE":"Chequia",
  "CAN":"Canadá","SUI":"Suiza","QAT":"Qatar","BIH":"Bosnia-Herz.",
  "BRA":"Brasil","MAR":"Marruecos","SCO":"Escocia","HAI":"Haití",
  "USA":"EE.UU.","PAR":"Paraguay","AUS":"Australia","TUR":"Turquía",
  "GER":"Alemania","ECU":"Ecuador","CIV":"Costa de Marfil","CUW":"Curazao",
  "JPN":"Japón","NED":"Países Bajos","SWE":"Suecia","TUN":"Túnez",
  "BEL":"Bélgica","IRN":"Irán","EGY":"Egipto","NZL":"Nueva Zelanda",
  "ESP":"España","URU":"Uruguay","KSA":"Arabia Saudita","CPV":"Cabo Verde",
  "FRA":"Francia","NOR":"Noruega","SEN":"Senegal","IRQ":"Irak",
  "ARG":"Argentina","AUT":"Austria","ALG":"Argelia","JOR":"Jordania",
  "POR":"Portugal","COL":"Colombia","UZB":"Uzbekistán","COD":"R.D. Congo",
  "ENG":"Inglaterra","CRO":"Croacia","GHA":"Ghana","PAN":"Panamá",
};

function mapName(n) {
  return NAME_MAP_ESPN[n] || n;
}

// ═══ ESPN API FETCH ═══
// Fetches all World Cup matches with scores for a date range
async function fetchESPN(dateFrom, dateTo) {
  // Format: YYYYMMDD
  const url = `https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard?limit=150&dates=${dateFrom}-${dateTo}`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    return data.events || [];
  } catch (e) {
    console.error("[ESPN] Fetch failed:", e.message);
    return null;
  }
}

// ═══ PARSE ESPN EVENTS ═══
// Returns array of { team1, team2, score1, score2, status, isKO }
function parseESPN(events) {
  const results = [];
  for (const ev of events) {
    try {
      const comp = ev.competitions?.[0];
      if (!comp) continue;
      const competitors = comp.competitors || [];
      if (competitors.length < 2) continue;

      // ESPN has home/away — figure out which is which
      const home = competitors.find(c => c.homeAway === "home") || competitors[0];
      const away = competitors.find(c => c.homeAway === "away") || competitors[1];

      const t1 = mapName(home.team?.displayName || home.team?.shortDisplayName || "");
      const t2 = mapName(away.team?.displayName || away.team?.shortDisplayName || "");

      const status = ev.status?.type?.name || "";
      const completed = status === "STATUS_FINAL" || ev.status?.type?.completed === true;

      if (!completed) {
        results.push({ team1: t1, team2: t2, score1: null, score2: null, status: "SCHEDULED" });
        continue;
      }

      const s1 = parseInt(home.score);
      const s2 = parseInt(away.score);
      if (isNaN(s1) || isNaN(s2)) continue;

      // Check if it's a knockout match (no group info)
      const isKO = !comp.groups && !ev.season?.slug?.includes("group");

      results.push({ team1: t1, team2: t2, score1: s1, score2: s2, status: "FINISHED", isKO });
    } catch (e) {
      console.error("[ESPN] Error parsing event:", e.message);
    }
  }
  return results;
}

// ═══ MAP TO OUR KEY FORMAT (group stage) ═══
function mapToKeys(parsedMatches, groupMatchesObj) {
  const results = {};
  parsedMatches.forEach(m => {
    if (m.score1 === null || m.isKO) return;
    Object.entries(groupMatchesObj).forEach(([g, matches]) => {
      matches.forEach((match, i) => {
        const key = `${g}-${i}`;
        if (
          (match[0] === m.team1 && match[1] === m.team2) ||
          (match[0] === m.team2 && match[1] === m.team1)
        ) {
          if (match[0] === m.team1) {
            results[key] = { h: String(m.score1), a: String(m.score2) };
          } else {
            results[key] = { h: String(m.score2), a: String(m.score1) };
          }
        }
      });
    });
  });
  return results;
}

// ═══ MAP KNOCKOUT RESULTS ═══
// Returns { "R32-0": {h:"2", a:"1"}, ... }
function mapKOToKeys(parsedMatches, allKoMatches, koTeamsFn) {
  const results = {};
  parsedMatches.forEach(m => {
    if (m.score1 === null || !m.isKO) return;
    // Try to match by team names
    allKoMatches.forEach(km => {
      const home = koTeamsFn(km.id)?.home;
      const away = koTeamsFn(km.id)?.away;
      if (!home || !away) return;
      if (
        (home === m.team1 && away === m.team2) ||
        (home === m.team2 && away === m.team1)
      ) {
        if (home === m.team1) {
          results[km.id] = { h: String(m.score1), a: String(m.score2) };
        } else {
          results[km.id] = { h: String(m.score2), a: String(m.score1) };
        }
      }
    });
  });
  return results;
}

// ═══ OPENFOOTBALL FALLBACK ═══
async function fetchOpenFootball(year) {
  const url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/${year}/worldcup.json`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return await resp.json();
  } catch (e) {
    console.error(`[OFB] Failed to fetch ${year}:`, e.message);
    return null;
  }
}

function parseOpenFootball(data) {
  if (!data || !data.matches) return [];
  return data.matches.filter(m => m.group).map(m => {
    const t1 = mapName(m.team1);
    const t2 = mapName(m.team2);
    const ft = m.score?.ft;
    if (!ft) return { team1: t1, team2: t2, score1: null, score2: null, status: "SCHEDULED" };
    return { team1: t1, team2: t2, score1: ft[0], score2: ft[1], status: "FINISHED" };
  });
}

// ═══ MAIN: AUTO-FETCH AND UPDATE ═══
async function autoFetchResults(GM, S, dbSet, onUpdate) {
  console.log("[API] Fetching results from ESPN...");

  // Fetch from tournament start to ~5 weeks out
  const events = await fetchESPN("20260611", "20260720");

  let parsed = [];
  if (events && events.length > 0) {
    parsed = parseESPN(events);
    console.log(`[ESPN] Got ${parsed.length} events, ${parsed.filter(e=>e.status==="FINISHED").length} finished`);
  } else {
    // Fallback to openfootball
    console.log("[ESPN] No data, trying openfootball fallback...");
    const data = await fetchOpenFootball("2026");
    if (data) parsed = parseOpenFootball(data);
  }

  const mapped = mapToKeys(parsed, GM);
  if (Object.keys(mapped).length === 0) {
    console.log("[API] No finished group matches found");
    return;
  }

  let changed = false;
  Object.entries(mapped).forEach(([key, score]) => {
    const current = S.results.matches?.[key];
    if (!current || current.h === "" || current.a === "") {
      if (!S.results.matches) S.results.matches = {};
      S.results.matches[key] = score;
      changed = true;
    } else if (current.h !== score.h || current.a !== score.a) {
      S.results.matches[key] = score;
      changed = true;
    }
  });

  if (changed) {
    await dbSet("prode-results", S.results);
    console.log(`[API] Updated ${Object.keys(mapped).length} group results`);
    if (onUpdate) onUpdate();
  } else {
    console.log("[API] No group result changes");
  }
}

// ═══ TEST MODE: LOAD QATAR 2022 RESULTS ═══
const NAME_MAP_2022 = {
  "Qatar":"Qatar","Ecuador":"Ecuador","Senegal":"Senegal",
  "Netherlands":"Países Bajos","England":"Inglaterra","Iran":"Irán",
  "United States":"EE.UU.","USA":"EE.UU.","Wales":"Gales",
  "Argentina":"Argentina","Saudi Arabia":"Arabia Saudita",
  "Mexico":"México","Poland":"Polonia",
  "France":"Francia","Australia":"Australia",
  "Denmark":"Dinamarca","Tunisia":"Túnez",
  "Spain":"España","Costa Rica":"Costa Rica",
  "Germany":"Alemania","Japan":"Japón",
  "Belgium":"Bélgica","Canada":"Canadá",
  "Morocco":"Marruecos","Croatia":"Croacia",
  "Brazil":"Brasil","Serbia":"Serbia",
  "Switzerland":"Suiza","Cameroon":"Camerún",
  "Portugal":"Portugal","Ghana":"Ghana",
  "Uruguay":"Uruguay","South Korea":"Corea del Sur","Korea Republic":"Corea del Sur",
};

async function testWithQatar2022(GM, S, dbSet, onUpdate) {
  console.log("[TEST] Loading Qatar 2022 data...");
  const data = await fetchOpenFootball("2022");
  if (!data) return { success: false, message: "No se pudo cargar datos del 2022" };

  const parsed = data.matches.filter(m => m.group).map(m => {
    const t1 = NAME_MAP_2022[m.team1] || m.team1;
    const t2 = NAME_MAP_2022[m.team2] || m.team2;
    const ft = m.score?.ft;
    if (!ft) return null;
    return { team1: t1, team2: t2, score1: ft[0], score2: ft[1] };
  }).filter(Boolean);

  const finished = parsed.filter(m => m.score1 !== null);
  const testResults = {};
  let idx = 0;
  Object.entries(GM).forEach(([g, matches]) => {
    matches.forEach((match, i) => {
      if (idx < finished.length) {
        const fm = finished[idx];
        testResults[`${g}-${i}`] = { h: String(fm.score1), a: String(fm.score2) };
        idx++;
      }
    });
  });

  S.results.matches = { ...S.results.matches, ...testResults };
  await dbSet("prode-results", S.results);
  if (onUpdate) onUpdate();

  const msg = `✅ Test OK: ${Object.keys(testResults).length} resultados del Mundial 2022 cargados.`;
  console.log("[TEST]", msg);
  return { success: true, message: msg, count: Object.keys(testResults).length };
}

// ═══ CLEAR TEST DATA ═══
async function clearTestResults(S, dbSet, onUpdate) {
  S.results.matches = {};
  S.results.specials = {};
  S.results.knockout = {};
  S.results.scorers = [];
  await dbSet("prode-results", S.results);
  if (onUpdate) onUpdate();
  return "🗑️ Todo borrado (resultados, especiales, eliminatorias, goleadores)";
}

// ═══ CHECK API STATUS ═══
async function checkApiStatus() {
  try {
    const events = await fetchESPN("20260611", "20260720");
    if (events === null) throw new Error("ESPN no responde");
    const finished = (events || []).filter(e => e.status?.type?.completed);
    // Also check openfootball as secondary info
    const ofbResp = await fetch("https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json");
    const ofbData = ofbResp.ok ? await ofbResp.json() : null;
    const ofbTotal = ofbData?.matches?.length || 0;
    const ofbScored = ofbData?.matches?.filter(m => m.score?.ft)?.length || 0;
    return {
      ok: true,
      msg: `ESPN: ${(events||[]).length} partidos, ${finished.length} terminados · openfootball: ${ofbTotal} partidos, ${ofbScored} con resultado`,
    };
  } catch (e) {
    return { ok: false, msg: "Error: " + e.message };
  }
}
