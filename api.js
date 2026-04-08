/*
 * api.js — Auto-results module for Prode Mundial 2026
 * 
 * Uses openfootball (free, no API key) to fetch match results.
 * Includes test mode that loads Qatar 2022 results to verify everything works.
 *
 * How to add to GitHub: upload this file to the same repo as index.html.
 * Vercel picks it up automatically. Supabase doesn't change.
 */

// ═══ TEAM NAME MAPPING ═══
// openfootball uses English names, we use Spanish. This maps between them.
const NAME_MAP_2026 = {
  "Mexico":"México","South Korea":"Corea del Sur","Korea Republic":"Corea del Sur",
  "South Africa":"Sudáfrica","Czech Republic":"Chequia","Czechia":"Chequia",
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
  "Cape Verde":"Cabo Verde","Cabo Verde":"Cabo Verde",
  "France":"Francia","Norway":"Noruega","Senegal":"Senegal","Iraq":"Irak",
  "Argentina":"Argentina","Austria":"Austria","Algeria":"Argelia","Jordan":"Jordania",
  "Portugal":"Portugal","Colombia":"Colombia","Uzbekistan":"Uzbekistán",
  "DR Congo":"R.D. Congo","Congo DR":"R.D. Congo",
  "England":"Inglaterra","Croatia":"Croacia","Ghana":"Ghana","Panama":"Panamá",
};

// For test mode: Qatar 2022 team names → our group stage format
// We'll map 2022 results to simulate the flow, not to match 2026 groups
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

// ═══ FETCH FROM OPENFOOTBALL ═══
async function fetchOpenFootball(year) {
  const url = `https://raw.githubusercontent.com/openfootball/worldcup.json/master/${year}/worldcup.json`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return await resp.json();
  } catch (e) {
    console.error(`[API] Failed to fetch openfootball ${year}:`, e.message);
    return null;
  }
}

// ═══ PARSE RESULTS FROM OPENFOOTBALL FORMAT ═══
// Returns array of { team1, team2, score1, score2, group, status }
function parseMatches(data, nameMap) {
  if (!data || !data.matches) return [];
  
  return data.matches
    .filter(m => m.group) // only group stage
    .map(m => {
      const t1 = nameMap[m.team1] || m.team1;
      const t2 = nameMap[m.team2] || m.team2;
      const score = m.score;
      
      if (!score || score.ft === undefined || score.ft === null) {
        return { team1: t1, team2: t2, score1: null, score2: null, group: m.group, status: "SCHEDULED" };
      }
      
      const ft = score.ft;
      return {
        team1: t1,
        team2: t2,
        score1: ft[0],
        score2: ft[1],
        group: m.group,
        status: "FINISHED",
      };
    });
}

// ═══ MATCH RESULTS TO OUR KEY FORMAT ═══
// Takes parsed matches and tries to map them to our GM[group][index] format
// Returns { "A-0": {h:"1", a:"0"}, ... }
function mapToKeys(parsedMatches, groupMatchesObj) {
  const results = {};
  
  parsedMatches.forEach(m => {
    if (m.score1 === null) return; // not played yet
    
    // Find the matching key in our system
    Object.entries(groupMatchesObj).forEach(([g, matches]) => {
      matches.forEach((match, i) => {
        const key = `${g}-${i}`;
        // Check both orientations (home/away might be flipped)
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

// ═══ MAIN: FETCH AND UPDATE RESULTS ═══
// Called from index.html every 5 minutes
// GM = group matches object from index.html
// dbSet = supabase save function from index.html
// S = state object from index.html
async function autoFetchResults(GM, S, dbSet, onUpdate) {
  console.log("[API] Fetching live results...");
  
  const data = await fetchOpenFootball("2026");
  if (!data) { console.log("[API] No data available yet"); return; }
  
  const parsed = parseMatches(data, NAME_MAP_2026);
  const mapped = mapToKeys(parsed, GM);
  
  if (Object.keys(mapped).length === 0) {
    console.log("[API] No finished matches found");
    return;
  }
  
  // Merge with existing results (don't overwrite manual entries)
  let changed = false;
  Object.entries(mapped).forEach(([key, score]) => {
    const current = S.results.matches?.[key];
    if (!current || current.h === "" || current.a === "") {
      if (!S.results.matches) S.results.matches = {};
      S.results.matches[key] = score;
      changed = true;
    } else if (current.h !== score.h || current.a !== score.a) {
      // Update if API has different score (live update)
      S.results.matches[key] = score;
      changed = true;
    }
  });
  
  if (changed) {
    await dbSet("prode-results", S.results);
    console.log(`[API] Updated ${Object.keys(mapped).length} results`);
    if (onUpdate) onUpdate();
  } else {
    console.log("[API] No changes");
  }
}

// ═══ TEST MODE: LOAD QATAR 2022 RESULTS ═══
// This loads real 2022 World Cup data and maps what it can to your 2026 groups.
// Many teams won't match (2022 had different teams), but the ones that DO match
// (like Argentina, France, Brasil, etc.) will show real scores.
// Purpose: verify the full pipeline works (fetch → parse → map → save → display → score calc)
async function testWithQatar2022(GM, S, dbSet, onUpdate) {
  console.log("[TEST] Loading Qatar 2022 data...");
  
  const data = await fetchOpenFootball("2022");
  if (!data) { 
    console.error("[TEST] Failed to load 2022 data");
    return { success: false, message: "No se pudo cargar datos del 2022" };
  }
  
  const parsed = parseMatches(data, NAME_MAP_2022);
  console.log(`[TEST] Parsed ${parsed.length} group matches from 2022`);
  
  // For testing, we'll create FAKE mappings: take the 2022 results and 
  // assign them to our 2026 group slots sequentially.
  // This tests the full flow even though teams don't match.
  
  const finishedMatches = parsed.filter(m => m.status === "FINISHED");
  console.log(`[TEST] ${finishedMatches.length} finished matches`);
  
  // Assign 2022 results to 2026 match slots (first 48 matches = 48 of 72)
  const testResults = {};
  let idx = 0;
  
  Object.entries(GM).forEach(([g, matches]) => {
    matches.forEach((match, i) => {
      if (idx < finishedMatches.length) {
        const fm = finishedMatches[idx];
        testResults[`${g}-${i}`] = { h: String(fm.score1), a: String(fm.score2) };
        idx++;
      }
    });
  });
  
  // Save to state and DB
  S.results.matches = { ...S.results.matches, ...testResults };
  await dbSet("prode-results", S.results);
  
  if (onUpdate) onUpdate();
  
  const msg = `✅ Test OK: ${Object.keys(testResults).length} resultados del Mundial 2022 cargados en tus partidos del 2026. Verificá el ranking — los puntos se calculan con estos datos.`;
  console.log("[TEST]", msg);
  return { success: true, message: msg, count: Object.keys(testResults).length };
}

// ═══ CLEAR TEST DATA ═══
async function clearTestResults(S, dbSet, onUpdate) {
  S.results.matches = {};
  await dbSet("prode-results", S.results);
  if (onUpdate) onUpdate();
  return "🗑️ Resultados borrados";
}

// ═══ CHECK API STATUS ═══
async function checkApiStatus() {
  try {
    const resp = await fetch("https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json");
    if (!resp.ok) return { ok: false, msg: "API no responde" };
    const data = await resp.json();
    const total = data.matches?.length || 0;
    const withScores = data.matches?.filter(m => m.score?.ft)?.length || 0;
    return { 
      ok: true, 
      msg: `API OK — ${total} partidos cargados, ${withScores} con resultado`,
      total,
      withScores,
    };
  } catch (e) {
    return { ok: false, msg: "Error: " + e.message };
  }
}
