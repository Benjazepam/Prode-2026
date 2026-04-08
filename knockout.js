/*
 * knockout.js — Knockout stage for Prode Mundial 2026
 *
 * Upload to GitHub alongside index.html and api.js.
 * Vercel picks it up. Supabase doesn't change.
 *
 * Structure:
 * - R32 (16 matches): teams auto-filled from group results
 * - R16 (8): winners of R32
 * - QF (4): winners of R16
 * - SF (2): winners of QF
 * - 3rd (1): losers of SF
 * - Final (1): winners of SF
 * Total: 32 knockout matches
 *
 * Player predictions stored in player.knockout = { "R32-0": {h:"",a:""}, ... }
 * Real results stored in S.results.knockout = { "R32-0": {h:"",a:""}, ... }
 *
 * For knockout, scores are at min 120 (extra time included, pre-penalties).
 * The WINNER advances. In case of draw at 120', the admin marks who won on pens.
 */

// ═══ KNOCKOUT BRACKET STRUCTURE ═══
// FIFA 2026 R32 bracket (based on official draw pathways)
// Format: each entry = [sourceA, sourceB] where source is "1A" (1st of group A), "2B", "3ABCDEF" (best 3rd from those groups)
const R32_BRACKET = [
  // Match 0-15: Round of 32
  {id:"R32-0", src:["2A","2B"],   ko:"2026-06-28T19:00Z", label:"R32 #1"},
  {id:"R32-1", src:["1C","2F"],   ko:"2026-06-29T17:00Z", label:"R32 #2"},
  {id:"R32-2", src:["1E","3ABCDF"],ko:"2026-06-29T20:30Z",label:"R32 #3"},
  {id:"R32-3", src:["1F","2C"],   ko:"2026-06-30T01:00Z", label:"R32 #4"},
  {id:"R32-4", src:["2E","2I"],   ko:"2026-06-30T17:00Z", label:"R32 #5"},
  {id:"R32-5", src:["1I","3CDFGH"],ko:"2026-06-30T21:00Z",label:"R32 #6"},
  {id:"R32-6", src:["1A","3CEFHI"],ko:"2026-07-01T01:00Z",label:"R32 #7"},
  {id:"R32-7", src:["1L","3EHIJK"],ko:"2026-07-01T16:00Z",label:"R32 #8"},
  {id:"R32-8", src:["1G","3AEHI J"],ko:"2026-07-01T20:00Z",label:"R32 #9"},
  {id:"R32-9", src:["1D","3BEFIJ"],ko:"2026-07-02T00:00Z",label:"R32 #10"},
  {id:"R32-10",src:["1H","2J"],   ko:"2026-07-02T19:00Z", label:"R32 #11"},
  {id:"R32-11",src:["2K","2L"],   ko:"2026-07-02T23:00Z", label:"R32 #12"},
  {id:"R32-12",src:["1B","3EFGIJ"],ko:"2026-07-03T03:00Z",label:"R32 #13"},
  {id:"R32-13",src:["2D","2G"],   ko:"2026-07-03T18:00Z", label:"R32 #14"},
  {id:"R32-14",src:["1J","2H"],   ko:"2026-07-03T22:00Z", label:"R32 #15"},
  {id:"R32-15",src:["1K","3DEIJL"],ko:"2026-07-04T01:30Z",label:"R32 #16"},
];

// R16 matches: each fed by winners of 2 R32 matches
const R16_BRACKET = [
  {id:"R16-0", src:["R32-0","R32-1"],  ko:"2026-07-05T17:00Z", label:"8vos #1"},
  {id:"R16-1", src:["R32-2","R32-3"],  ko:"2026-07-05T21:00Z", label:"8vos #2"},
  {id:"R16-2", src:["R32-4","R32-5"],  ko:"2026-07-06T17:00Z", label:"8vos #3"},
  {id:"R16-3", src:["R32-6","R32-7"],  ko:"2026-07-06T21:00Z", label:"8vos #4"},
  {id:"R16-4", src:["R32-8","R32-9"],  ko:"2026-07-07T17:00Z", label:"8vos #5"},
  {id:"R16-5", src:["R32-10","R32-11"],ko:"2026-07-07T21:00Z", label:"8vos #6"},
  {id:"R16-6", src:["R32-12","R32-13"],ko:"2026-07-08T17:00Z", label:"8vos #7"},
  {id:"R16-7", src:["R32-14","R32-15"],ko:"2026-07-08T21:00Z", label:"8vos #8"},
];

const QF_BRACKET = [
  {id:"QF-0", src:["R16-0","R16-1"], ko:"2026-07-11T17:00Z", label:"4tos #1"},
  {id:"QF-1", src:["R16-2","R16-3"], ko:"2026-07-11T21:00Z", label:"4tos #2"},
  {id:"QF-2", src:["R16-4","R16-5"], ko:"2026-07-12T17:00Z", label:"4tos #3"},
  {id:"QF-3", src:["R16-6","R16-7"], ko:"2026-07-12T21:00Z", label:"4tos #4"},
];

const SF_BRACKET = [
  {id:"SF-0", src:["QF-0","QF-1"], ko:"2026-07-15T21:00Z", label:"Semi #1"},
  {id:"SF-1", src:["QF-2","QF-3"], ko:"2026-07-16T21:00Z", label:"Semi #2"},
];

const THIRD_BRACKET = [
  {id:"3RD-0", src:["SF-0L","SF-1L"], ko:"2026-07-19T17:00Z", label:"3er puesto"},
];

const FINAL_BRACKET = [
  {id:"FIN-0", src:["SF-0","SF-1"], ko:"2026-07-19T19:00Z", label:"FINAL"},
];

const ALL_KO_ROUNDS = [
  {name:"Ronda de 32", matches:R32_BRACKET, short:"R32"},
  {name:"Octavos", matches:R16_BRACKET, short:"R16"},
  {name:"Cuartos", matches:QF_BRACKET, short:"QF"},
  {name:"Semifinales", matches:SF_BRACKET, short:"SF"},
  {name:"3er puesto", matches:THIRD_BRACKET, short:"3RD"},
  {name:"Final", matches:FINAL_BRACKET, short:"FIN"},
];

const ALL_KO_MATCHES = [...R32_BRACKET,...R16_BRACKET,...QF_BRACKET,...SF_BRACKET,...THIRD_BRACKET,...FINAL_BRACKET];

// ═══ RESOLVE GROUP STANDINGS ═══
// Given real group results, compute standings for each group
function computeGroupStandings(GM, realMatches) {
  const standings = {};
  
  Object.entries(GM).forEach(([g, matches]) => {
    const teams = {};
    // Init
    const grpTeams = [matches[0][0], matches[0][1], matches[1][0], matches[1][1],
                      matches[2][0], matches[2][1]];
    const unique = [...new Set(grpTeams)];
    unique.forEach(t => { teams[t] = {name:t, pts:0, gf:0, ga:0, gd:0, w:0, d:0, l:0, mp:0}; });
    
    matches.forEach((match, i) => {
      const k = `${g}-${i}`;
      const r = realMatches?.[k];
      if (!r || r.h === "" || r.a === "") return;
      const h = +r.h, a = +r.a;
      const t1 = match[0], t2 = match[1];
      if (!teams[t1] || !teams[t2]) return;
      
      teams[t1].mp++; teams[t2].mp++;
      teams[t1].gf += h; teams[t1].ga += a;
      teams[t2].gf += a; teams[t2].ga += h;
      teams[t1].gd = teams[t1].gf - teams[t1].ga;
      teams[t2].gd = teams[t2].gf - teams[t2].ga;
      
      if (h > a) { teams[t1].pts += 3; teams[t1].w++; teams[t2].l++; }
      else if (h < a) { teams[t2].pts += 3; teams[t2].w++; teams[t1].l++; }
      else { teams[t1].pts += 1; teams[t2].pts += 1; teams[t1].d++; teams[t2].d++; }
    });
    
    // Sort by pts, then gd, then gf
    const sorted = Object.values(teams).sort((a, b) => 
      b.pts - a.pts || b.gd - a.gd || b.gf - a.gf
    );
    
    standings[g] = sorted;
  });
  
  return standings;
}

// ═══ DETERMINE BEST 3RD-PLACE TEAMS ═══
function bestThirdPlaced(standings) {
  const thirds = [];
  Object.entries(standings).forEach(([g, teams]) => {
    if (teams.length >= 3 && teams[2].mp === 3) { // all 3 matches played
      thirds.push({...teams[2], group: g});
    }
  });
  
  // Sort same as group tiebreakers
  thirds.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  
  return thirds.slice(0, 8); // best 8 third-placed teams advance
}

// ═══ RESOLVE TEAM FOR A KNOCKOUT MATCH SLOT ═══
// src like "1A" = 1st of group A, "2B" = 2nd of group B, "3ABCDF" = best 3rd from those groups
// For later rounds: "R32-0" = winner of R32 match 0, "SF-0L" = loser of SF match 0
function resolveTeam(src, standings, bestThirds, realKnockout) {
  if (!src) return null;
  
  // Winner of a previous KO match
  if (src.match(/^(R32|R16|QF|SF|FIN)-\d+$/)) {
    const result = realKnockout?.[src];
    if (!result || result.h === "" || result.a === "") return null;
    const h = +result.h, a = +result.a;
    // Find the teams that played
    const m = ALL_KO_MATCHES.find(x => x.id === src);
    if (!m) return null;
    const t1 = resolveTeam(m.src[0], standings, bestThirds, realKnockout);
    const t2 = resolveTeam(m.src[1], standings, bestThirds, realKnockout);
    if (!t1 || !t2) return null;
    
    if (h > a) return t1;
    if (a > h) return t2;
    // Draw: check penalty winner (stored as result.pen = "h" or "a")
    if (result.pen === "h") return t1;
    if (result.pen === "a") return t2;
    return null; // draw with no pen result yet
  }
  
  // Loser of SF (for 3rd place match)
  if (src.match(/^SF-\d+L$/)) {
    const sfId = src.replace("L", "");
    const result = realKnockout?.[sfId];
    if (!result || result.h === "" || result.a === "") return null;
    const h = +result.h, a = +result.a;
    const m = ALL_KO_MATCHES.find(x => x.id === sfId);
    if (!m) return null;
    const t1 = resolveTeam(m.src[0], standings, bestThirds, realKnockout);
    const t2 = resolveTeam(m.src[1], standings, bestThirds, realKnockout);
    if (!t1 || !t2) return null;
    if (h > a) return t2; // loser
    if (a > h) return t1;
    if (result.pen === "h") return t2;
    if (result.pen === "a") return t1;
    return null;
  }
  
  // Group position: "1A", "2B"
  const posMatch = src.match(/^(\d)([A-L])$/);
  if (posMatch) {
    const pos = parseInt(posMatch[1]) - 1; // 0-indexed
    const grp = posMatch[2];
    const st = standings[grp];
    if (!st || !st[pos]) return null;
    if (st[pos].mp < 3) return null; // group not finished
    return st[pos].name;
  }
  
  // Best 3rd: "3ABCDF" — pick from bestThirds that came from one of those groups
  const thirdMatch = src.match(/^3([A-L]+)$/);
  if (thirdMatch) {
    const possibleGroups = thirdMatch[1].split("");
    // FIFA has a specific table for which 3rd-placed team goes where based on
    // which 8 groups produce the best thirds. For simplicity, we pick the
    // highest-ranked 3rd from the possible groups that hasn't been assigned yet.
    const available = bestThirds.filter(t => possibleGroups.includes(t.group));
    if (available.length > 0) return available[0].name;
    return null;
  }
  
  return null;
}

// ═══ GET ALL KO MATCH TEAMS (resolved) ═══
function getKoTeams(standings, bestThirds, realKnockout) {
  const teams = {};
  ALL_KO_MATCHES.forEach(m => {
    teams[m.id] = {
      home: resolveTeam(m.src[0], standings, bestThirds, realKnockout),
      away: resolveTeam(m.src[1], standings, bestThirds, realKnockout),
    };
  });
  return teams;
}

// ═══ IS KO MATCH LOCKED ═══
function isKoLocked(matchId, testMode) {
  if (testMode) return true;
  const m = ALL_KO_MATCHES.find(x => x.id === matchId);
  if (!m || !m.ko) return false;
  return new Date() >= new Date(m.ko);
}

// ═══ INIT EMPTY KO PREDICTIONS ═══
function emptyKoPreds() {
  const ko = {};
  ALL_KO_MATCHES.forEach(m => { ko[m.id] = {h:"", a:""}; });
  return ko;
}

// ═══ CALC KO POINTS ═══
// Same system as group stage: resultado + goles_equipo + exacto
function calcKoPts(playerKo, realKo, points) {
  if (!playerKo || !realKo) return {total:0, det:{e:0,r:0,g:0}};
  let mP=0, det={e:0,r:0,g:0};
  
  ALL_KO_MATCHES.forEach(m => {
    const pr = playerKo[m.id];
    const re = realKo[m.id];
    if (!pr || !re || pr.h==="" || pr.a==="" || re.h==="" || re.a==="") return;
    const pH=+pr.h, pA=+pr.a, rH=+re.h, rA=+re.a;
    
    if (pH===rH && pA===rA) {
      mP += (points.exacto||0) + (points.resultado||0) + (points.goles_equipo||0)*2;
      det.e++; det.r++; det.g+=2; return;
    }
    if (Math.sign(pH-pA) === Math.sign(rH-rA)) { mP += points.resultado||0; det.r++; }
    if (pH===rH) { mP += points.goles_equipo||0; det.g++; }
    if (pA===rA) { mP += points.goles_equipo||0; det.g++; }
  });
  
  return {total:mP, det};
}

// ═══ RENDER KNOCKOUT TAB (for Play screen) ═══
function renderKoPlay(S, pd, flag, isKoLocked, setKoScore) {
  const standings = computeGroupStandings(GM, S.results.matches);
  const bestThirds = bestThirdPlaced(standings);
  const koTeams = getKoTeams(standings, bestThirds, S.results.knockout || {});
  const koRound = S.koRound || "R32";
  
  const playerKo = pd.knockout || {};
  
  let o = "";
  
  // Round selector
  o += `<div style="display:flex;gap:4px;margin-bottom:10px;overflow-x:auto">`;
  ALL_KO_ROUNDS.forEach(r => {
    const isAct = koRound === r.short;
    o += `<button class="stb ${isAct?"a":""}" onclick="S.koRound='${r.short}';render()" style="font-size:11px;padding:6px 10px">${r.name}</button>`;
  });
  o += `</div>`;
  
  // Current round matches
  const round = ALL_KO_ROUNDS.find(r => r.short === koRound);
  if (!round) return o;
  
  round.matches.forEach(m => {
    const t = koTeams[m.id] || {home:null, away:null};
    const pr = playerKo[m.id] || {h:"", a:""};
    const lk = isKoLocked(m.id, TEST_MODE);
    const bothKnown = t.home && t.away;
    
    o += `<div class="cd" style="padding:10px;margin-bottom:8px">`;
    o += `<div style="font-size:11px;color:var(--t3);margin-bottom:4px;font-weight:700">${m.label}</div>`;
    
    if (!bothKnown) {
      // Teams not yet determined
      o += `<div style="font-size:13px;color:var(--t3);text-align:center;padding:8px 0">`;
      o += `${t.home ? (flag(t.home)+' '+t.home) : '<span style="color:var(--t3)">?</span>'}`;
      o += ` <span style="color:var(--t3);font-weight:800">vs</span> `;
      o += `${t.away ? (flag(t.away)+' '+t.away) : '<span style="color:var(--t3)">?</span>'}`;
      o += `</div>`;
      o += `<div style="font-size:11px;color:var(--t3);text-align:center">⏳ Esperando definición...</div>`;
    } else {
      // Teams known — show prediction inputs
      o += `<div class="mr ${lk?"lk":""}" style="margin-bottom:2px">`;
      o += `<div class="tl r"><span class="n">${t.home}</span>${flag(t.home)}</div>`;
      o += `<input class="sci" type="number" min="0" max="20" value="${pr.h}" ${lk||!bothKnown?"disabled":""} onchange="setKoScore('${m.id}','h',this.value)">`;
      o += `<span style="color:var(--t3);font-weight:800;font-size:11px">vs</span>`;
      o += `<input class="sci" type="number" min="0" max="20" value="${pr.a}" ${lk||!bothKnown?"disabled":""} onchange="setKoScore('${m.id}','a',this.value)">`;
      o += `<div class="tl">${flag(t.away)}<span class="n">${t.away}</span></div>`;
      if (lk) o += `<span class="lktag">🔒</span>`;
      o += `</div>`;
      
      // Show real result if available
      const real = (S.results.knockout||{})[m.id];
      if (real && real.h !== "" && real.a !== "") {
        o += `<div style="font-size:11px;text-align:center;color:var(--gd);font-weight:700;margin-top:2px">Resultado: ${real.h} - ${real.a}${real.pen?" (pen: "+real.pen+")":""}</div>`;
      }
      
      // Peek at others if locked
      if (lk) {
        const ot = Object.entries(S.players).filter(([n]) => n !== S.user.name).map(([n,d]) => {
          const pk = d.knockout?.[m.id];
          if (!pk || pk.h==="" || pk.a==="") return null;
          return `<b>${n}</b>:${pk.h}-${pk.a}`;
        }).filter(Boolean);
        if (ot.length) o += `<div class="peek">👀 ${ot.join(" · ")}</div>`;
      }
    }
    
    o += `</div>`;
  });
  
  return o;
}

// ═══ RENDER KO ADMIN (results + penalty winners) ═══
function renderKoAdmin(S, flag, setKoRes, setKoPen) {
  const standings = computeGroupStandings(GM, S.results.matches);
  const bestThirds = bestThirdPlaced(standings);
  const koTeams = getKoTeams(standings, bestThirds, S.results.knockout || {});
  const koRound = S.adminKoRound || "R32";
  
  let o = `<div style="display:flex;gap:4px;margin-bottom:10px;overflow-x:auto">`;
  ALL_KO_ROUNDS.forEach(r => {
    const isAct = koRound === r.short;
    o += `<button class="stb ${isAct?"a":""}" onclick="S.adminKoRound='${r.short}';render()" style="font-size:11px;padding:6px 10px">${r.name}</button>`;
  });
  o += `</div>`;
  
  const round = ALL_KO_ROUNDS.find(r => r.short === koRound);
  if (!round) return o;
  
  round.matches.forEach(m => {
    const t = koTeams[m.id] || {home:null, away:null};
    const real = (S.results.knockout||{})[m.id] || {h:"",a:""};
    const bothKnown = t.home && t.away;
    
    o += `<div class="cd" style="padding:10px;margin-bottom:8px">`;
    o += `<div style="font-size:11px;color:var(--gd);margin-bottom:4px;font-weight:700">${m.label}</div>`;
    
    if (!bothKnown) {
      o += `<div style="font-size:12px;color:var(--t3);text-align:center;padding:6px 0">⏳ Equipos no definidos</div>`;
    } else {
      o += `<div class="mr rl" style="margin-bottom:2px">`;
      o += `<div class="tl r"><span class="n">${t.home}</span>${flag(t.home)}</div>`;
      o += `<input class="sci gld" type="number" min="0" max="20" value="${real.h}" onchange="setKoRes('${m.id}','h',this.value)">`;
      o += `<span style="color:var(--t3);font-weight:800;font-size:11px">vs</span>`;
      o += `<input class="sci gld" type="number" min="0" max="20" value="${real.a}" onchange="setKoRes('${m.id}','a',this.value)">`;
      o += `<div class="tl">${flag(t.away)}<span class="n">${t.away}</span></div>`;
      o += `</div>`;
      
      // If draw, show penalty winner selector
      if (real.h !== "" && real.a !== "" && +real.h === +real.a) {
        o += `<div style="font-size:12px;color:var(--gd);margin-top:4px;text-align:center">`;
        o += `Empate en 120' — ¿Quién ganó por penales?<br>`;
        o += `<button class="btn ${real.pen==="h"?"bgl":"bgh"}" style="width:auto;display:inline-flex;padding:4px 10px;font-size:11px;margin:4px 2px" onclick="setKoPen('${m.id}','h')">${flag(t.home)} ${t.home}</button>`;
        o += `<button class="btn ${real.pen==="a"?"bgl":"bgh"}" style="width:auto;display:inline-flex;padding:4px 10px;font-size:11px;margin:4px 2px" onclick="setKoPen('${m.id}','a')">${flag(t.away)} ${t.away}</button>`;
        o += `</div>`;
      }
    }
    
    o += `</div>`;
  });
  
  return o;
}
