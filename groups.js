/*
 * groups.js — Friend groups for Prode Mundial 2026
 *
 * Upload to GitHub alongside the other files.
 * 
 * Data stored in:
 *   S.config.groups = { "AMIG": {name:"Amigos del fútbol", code:"AMIG", prize:"El último paga la pizza"}, ... }
 *   S.players["Juan"].groups = ["AMIG","INST"]  (array of group codes the player joined)
 */

// ═══ RENDER GROUPS ADMIN TAB ═══
function renderGroupsAdmin(S, createGroup, deleteGroup) {
  const groups = S.config.groups || {};
  let o = `<div class="cd" style="padding:10px"><div style="font-size:12px;color:var(--t2)">👥 Creá grupos para tus amigos. Cada grupo tiene un código que compartís para que se unan.</div></div>`;

  // Create new group form
  o += `<div class="cd" style="padding:12px">`;
  o += `<div style="font-size:13px;font-weight:700;margin-bottom:8px">➕ Crear grupo nuevo</div>`;
  o += `<input class="inp" id="grpName" placeholder="Nombre (ej: Amigos del fútbol)" style="margin-bottom:6px">`;
  o += `<input class="inp" id="grpCode" placeholder="Código 3-6 letras (ej: AMIG)" style="margin-bottom:6px;text-transform:uppercase" maxlength="6">`;
  o += `<input class="inp" id="grpPrize" placeholder="Premio (ej: El último paga la pizza)" style="margin-bottom:8px">`;
  o += `<button class="btn bp" onclick="createGroup()">Crear grupo</button>`;
  o += `</div>`;

  // List existing groups
  Object.entries(groups).forEach(([code, grp]) => {
    const memberCount = Object.values(S.players).filter(p => (p.groups||[]).includes(code)).length;
    o += `<div class="cd" style="padding:12px;margin-bottom:8px">`;
    o += `<div style="display:flex;justify-content:space-between;align-items:center">`;
    o += `<div>`;
    o += `<div style="font-size:14px;font-weight:700">${grp.name}</div>`;
    o += `<div style="font-size:12px;color:var(--t3)">Código: <b style="color:var(--pl)">${code}</b> · ${memberCount} miembro${memberCount!==1?"s":""}</div>`;
    if (grp.prize) o += `<div style="font-size:11px;color:var(--gd);margin-top:2px">🏆 ${grp.prize}</div>`;
    o += `</div>`;
    o += `<button style="background:rgba(239,68,68,.12);border:none;border-radius:8px;padding:6px 10px;color:var(--rd);font-size:11px;font-weight:700;cursor:pointer" onclick="if(confirm('¿Borrar grupo ${code}?'))deleteGroup('${code}')">🗑️</button>`;
    o += `</div>`;
    
    // Show members
    const members = Object.entries(S.players).filter(([,p]) => (p.groups||[]).includes(code));
    if (members.length) {
      o += `<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:4px">`;
      members.forEach(([name]) => {
        o += `<span style="font-size:11px;background:var(--c2);border-radius:6px;padding:2px 8px;color:var(--t2)">👤 ${name}</span>`;
      });
      o += `</div>`;
    }
    o += `</div>`;
  });

  if (!Object.keys(groups).length) {
    o += `<div class="cd" style="text-align:center;color:var(--t3);font-size:13px">No hay grupos creados</div>`;
  }

  return o;
}

// ═══ RENDER JOIN GROUP (for players in play screen) ═══
function renderJoinGroup(S, playerName, joinGroup, leaveGroup) {
  const groups = S.config.groups || {};
  const myGroups = S.players[playerName]?.groups || [];
  
  let o = `<div class="cd" style="padding:12px">`;
  o += `<div style="font-size:13px;font-weight:700;margin-bottom:8px">👥 Mis grupos</div>`;
  
  // Joined groups
  if (myGroups.length) {
    myGroups.forEach(code => {
      const grp = groups[code];
      if (!grp) return;
      o += `<div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;border-bottom:1px solid rgba(37,37,80,.1)">`;
      o += `<div><span style="font-size:12px;font-weight:600">${grp.name}</span>`;
      if (grp.prize) o += `<span style="font-size:10px;color:var(--gd);margin-left:6px">🏆 ${grp.prize}</span>`;
      o += `</div>`;
      o += `<button style="background:none;border:none;color:var(--rd);font-size:11px;cursor:pointer;font-weight:600" onclick="leaveGroup('${code}')">Salir</button>`;
      o += `</div>`;
    });
  } else {
    o += `<div style="font-size:12px;color:var(--t3);margin-bottom:6px">No estás en ningún grupo</div>`;
  }
  
  // Join with code
  o += `<div style="display:flex;gap:6px;margin-top:8px">`;
  o += `<input class="inp" id="joinCode" placeholder="Código del grupo..." style="flex:1;text-transform:uppercase" maxlength="6">`;
  o += `<button class="btn bp" style="width:auto;padding:8px 14px;font-size:12px" onclick="joinGroup()">Unirme</button>`;
  o += `</div>`;
  o += `</div>`;
  
  return o;
}

// ═══ RENDER GROUP RANKINGS IN RANKING SCREEN ═══
function renderGroupRankings(S, myGroups, calcFn, compFn, flag) {
  const groups = S.config.groups || {};
  if (!myGroups || !myGroups.length) return "";
  
  let o = "";
  const mds = ["🥇","🥈","🥉"];
  
  myGroups.forEach(code => {
    const grp = groups[code];
    if (!grp) return;
    
    const members = Object.entries(S.players)
      .filter(([,p]) => (p.groups||[]).includes(code))
      .map(([n,d]) => ({n, p: calcFn(d), c: compFn(d)}))
      .sort((a,b) => b.p.total - a.p.total);
    
    if (!members.length) return;
    
    o += `<div class="cd" style="margin-top:8px">`;
    o += `<div style="font-size:14px;font-weight:800;margin-bottom:2px">👥 ${grp.name}</div>`;
    if (grp.prize) o += `<div style="font-size:11px;color:var(--gd);margin-bottom:8px">🏆 ${grp.prize}</div>`;
    
    members.forEach((r, pos) => {
      const isMe = S.user && r.n === S.user.name;
      o += `<div style="display:flex;align-items:center;gap:8px;padding:5px 0;border-bottom:1px solid rgba(37,37,80,.08)">`;
      o += `<div style="width:24px;height:24px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:${pos<3?13:11}px;font-weight:900;background:${pos<3?["var(--gd)","#aaa","#cd7f32"][pos]:"var(--c2)"};color:${pos<3?"#000":"var(--t3)"}">${pos<3?mds[pos]:pos+1}</div>`;
      o += `<div style="flex:1;font-size:13px;font-weight:${isMe?800:600}">${r.n}${isMe?' <span style="font-size:10px;color:var(--pl)">(vos)</span>':""}</div>`;
      o += `<div style="font-size:16px;font-weight:900;color:var(--gd)">${r.p.total}</div>`;
      o += `</div>`;
    });
    
    o += `</div>`;
  });
  
  return o;
}
