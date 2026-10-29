// Lógica de la página: filtros, tarjetas, detalle y WhatsApp.
// ===== Configuración =====
const WHATSAPP = "51946564236"; // número con código de país, sin +
const FILTERS=[["all","Todos"],["jk","Wrangler JK"],["jl","Wrangler JL"],["jt","Gladiator"],["xj","Cherokee XJ · YJ · Comanche"],["uni","Universal"]];
const SHORT={jk:"JK",jl:"JL",jt:"Gladiator",xj:"XJ · YJ · Comanche",uni:"Universal"};
let current="all";
try{const h=location.hash.slice(1); if(FILTERS.some(f=>f[0]===h)) current=h;}catch(e){}
const soles=n=>"S/ "+n.toLocaleString("es-PE");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ALL=[]; CATALOGO.forEach(s=>s.productos.forEach(p=>ALL.push(p)));

function renderFilters(){
  const nav=document.getElementById("filters");
  nav.innerHTML=FILTERS.map(([k,l])=>`<button class="chip" data-k="${k}" aria-pressed="${k===current}">${l}</button>`).join("");
  nav.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{current=b.dataset.k;renderFilters();render();document.getElementById("catalogo").scrollIntoView({behavior:"smooth",block:"start"});});
}
function pic(p){return p.foto;}
const FEATURED=["BL-JK-G1-SMK","TL-JK-G1-CLR + BL-JK-G1-SMK","ZS-0128K-JK","TS-JK-DRL-G2-CLR + SL-JK-G1-CLR","WLB-0008-G1","TL-JK-WHEEL-G5"];
function renderFeatured(){
  const row=document.getElementById("featRow");
  row.innerHTML=FEATURED.map(c=>ALL.find(p=>p.codigo===c)).filter(Boolean).map(p=>`<button class="fcard" data-i="${ALL.indexOf(p)}"><div class="fimg"><img src="${pic(p)}" alt="" loading="lazy"></div><div class="fb"><span class="tag">${p.modelos.map(t=>SHORT[t]).join(" · ")}</span><h3>${esc(p.nombre)}</h3><div class="fp"><b>${soles(p.precio)}</b><span>Ver ›</span></div></div></button>`).join("");
  row.querySelectorAll(".fcard").forEach(b=>b.onclick=()=>open(+b.dataset.i));
}
const CMP=[["Bold",["TL-JK-G1-CLR","TL-JK-G1-SMK"],"Clásico, LED en cuadrícula"],["Destroyer",["TL-JK-G7 Clear","TL-JK-G7 Smoke"],"Robusto, muchos LED"],["Inspire",["TL-JK-G9-CLR","TL-JK-G9-SMK"],"Moderno, con líneas de luz"],["Savage",["XP-JL-TL-JK-G12-CLR","XP-JL-TL-JK-G12-SMK"],"Premium, luz en forma de S"]];
function renderCompare(){
  const cols=CMP.map(([n,codes,d])=>{const ps=codes.map(c=>ALL.find(p=>p.codigo===c)).filter(Boolean);const av=ps.filter(p=>!p.agotado);return {n,d,ps,av,first:av[0]||ps[0]};}).filter(c=>c.first);
  const mica=p=>/ahumad/i.test(p.nombre)?"Ahumada":"Transparente";
  const row=(label,f)=>`<tr><td>${label}</td>${cols.map(c=>`<td>${f(c)}</td>`).join("")}</tr>`;
  document.getElementById("cmpTable").innerHTML=`<thead><tr><th></th>${cols.map(c=>`<th>${c.n}</th>`).join("")}</tr></thead><tbody>`+
    row("",c=>`<img src="${pic(c.first)}" alt="Stops ${c.n}" loading="lazy">`)+
    row("Desde",c=>`<span class="cprice">${soles(Math.min(...(c.av.length?c.av:c.ps).map(p=>p.precio)))}</span>`)+
    row("Micas",c=>c.ps.map(p=>mica(p)+(p.agotado?" (agotada)":"")).join("<br>"))+
    row("Estilo",c=>c.d)+
    row("Para",c=>"Wrangler JK 2007-2018")+
    row("",c=>`<button class="cbtn" data-i="${ALL.indexOf(c.first)}">Ver</button>`)+`</tbody>`;
  document.querySelectorAll("#cmpTable .cbtn").forEach(b=>b.onclick=()=>open(+b.dataset.i));
}
const GROUPS=[["Luces",["Faros delanteros","Neblineros","Luces de freno","Stops traseros","Luz para la llanta","Luces auxiliares"]],["Exterior",["Máscaras","Accesorios"]],["Otros",["Audio y otros","Otros autos"]]];
function groupOf(name){for(const [g,cs] of GROUPS){if(cs.some(c=>name.startsWith(c))) return g;}return "";}
function shortName(name){return name.replace(/ \(.*\)$/,"");}
function render(){
  let html="",count=0,last=null;
  CATALOGO.forEach((sec,si)=>{
    const items=sec.productos.filter(p=>current==="all"||p.modelos.includes(current));
    if(!items.length) return;
    count+=items.length;
    const g=groupOf(sec.categoria);
    if(g&&g!==last){html+=`<h2 class="group" id="g-${g}">${g}</h2>`;last=g;}
    html+=`<h3 class="cat" id="cat-${si}">${esc(sec.categoria)}<small>${items.length} ${items.length===1?"producto":"productos"}</small></h3><div class="grid">`+items.map(card).join("")+`</div>`;
  });
  document.getElementById("list").innerHTML=count?html:`<p class="empty">No hay productos para este modelo todavía.</p>`;
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>open(+c.dataset.i));
  renderDrawer();
}
function renderDrawer(){
  let html="",last=null;
  CATALOGO.forEach((sec,si)=>{
    const g=groupOf(sec.categoria)||"Destacado";
    if(g!==last){html+=`<div class="drawer-group">${g}</div>`;last=g;}
    const n=sec.productos.filter(p=>current==="all"||p.modelos.includes(current)).length;
    html+=`<button class="drawer-link" data-cat="${si}"><span>${esc(shortName(sec.categoria))}</span><small>${n}</small></button>`;
  });
  const box=document.getElementById("drawerList"); box.innerHTML=html;
  box.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{
    let el=document.getElementById("cat-"+b.dataset.cat);
    if(!el){current="all";renderFilters();render();el=document.getElementById("cat-"+b.dataset.cat);}
    closeDrawer(); if(el) setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"start"}),60);
  });
}
const drawerEl=document.getElementById("drawer"),overlayEl=document.getElementById("overlay"),menuBtn=document.getElementById("menuBtn");
function openDrawer(){drawerEl.classList.add("open");drawerEl.setAttribute("aria-hidden","false");overlayEl.hidden=false;menuBtn.setAttribute("aria-expanded","true");document.getElementById("drawerClose").focus();}
function closeDrawer(){drawerEl.classList.remove("open");drawerEl.setAttribute("aria-hidden","true");overlayEl.hidden=true;menuBtn.setAttribute("aria-expanded","false");}
menuBtn.onclick=openDrawer; overlayEl.onclick=closeDrawer; document.getElementById("drawerClose").onclick=closeDrawer;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&drawerEl.classList.contains("open")) closeDrawer();});
document.querySelectorAll("[data-go]").forEach(a=>a.onclick=e=>{e.preventDefault();closeDrawer();let el=document.getElementById(a.dataset.go);if(!el&&current!=="all"){current="all";renderFilters();render();el=document.getElementById(a.dataset.go);}if(el) setTimeout(()=>el.scrollIntoView({behavior:"smooth",block:"start"}),60);});
function card(p){
  const i=ALL.indexOf(p), img=p.foto;
  return `<button class="card" data-i="${i}" aria-label="${esc(p.nombre)}, ${soles(p.precio)}">
    <div class="ph">${img?`<img src="${img}" alt="" loading="lazy">`:`<span class="nofoto">Foto próximamente</span>`}${p.agotado?`<span class="badge">Agotado</span>`:""}${p.oferta&&!p.agotado?`<span class="badge promo">${p.antes?"–"+Math.round((p.antes-p.precio)*100/p.antes)+"%":"Oferta"}</span>`:""}</div>
    <div class="cb"><span class="tag">${p.modelos.map(t=>SHORT[t]).join(" · ")}</span><h3>${esc(p.nombre)}</h3>
    <div class="price ${p.agotado?"sold":""}">${soles(p.precio)}${p.antes?`<small class="save">Por separado ${soles(p.antes)}</small>`:""}</div></div></button>`;
}
const dlg=document.getElementById("dlg");
function open(i){
  const p=ALL[i], img=p.foto;
  document.getElementById("dbody").innerHTML=`
    <div class="dph">${img?`<img src="${img}" alt="${esc(p.nombre)}">`:""}</div>
    <div class="db">
      <span class="tag" style="font-size:.75rem;font-weight:800;color:var(--red);text-transform:uppercase">${esc(p.cat)}</span>
      <h3 id="dtitle">${esc(p.nombre)}</h3>
      <p class="fit">Compatible con: ${esc(p.compatible)}</p>
      <p>${esc(p.descripcion)}</p>
      <ul>${p.ventajas.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <div class="code">Código: ${esc(p.codigo)}</div>
      <div class="dfoot"><div class="price ${p.agotado?"sold":""}">${soles(p.precio)}${p.antes?`<small>Por separado ${soles(p.antes)} · Ahorras ${soles(p.antes-p.precio)} (–${Math.round((p.antes-p.precio)*100/p.antes)}%)</small>`:""}${p.agotado?"<small>Agotado temporalmente · consulta disponibilidad</small>":""}</div>
      <button class="btn" id="ask">${p.agotado?"Consultar":"Lo quiero"}</button></div>
    </div>`;
  document.getElementById("ask").onclick=()=>ask(p);
  if(dlg.showModal) dlg.showModal(); else dlg.setAttribute("open","");
  dlg.scrollTop=0;
}
document.getElementById("dclose").onclick=()=>dlg.close();
dlg.addEventListener("click",e=>{if(e.target===dlg) dlg.close();});
async function ask(p){
  const msg=`Hola Jeepeto Parts, me interesa: ${p.nombre} (código ${p.codigo}). ¿Me confirmas si le queda a mi Jeep?`;
  if(WHATSAPP){ window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank","noopener"); return; }
  try{await navigator.clipboard.writeText(msg); toast("Mensaje copiado. Pégalo en el chat.");}catch(e){toast(msg);}
}
let tt; function toast(t){const el=document.getElementById("toast");el.textContent=t;el.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>el.classList.remove("on"),2800);}
document.getElementById("moparbtn").href="https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent("Hola Jeepeto Parts, quiero cotizar repuestos originales Mopar. Código(s) de pieza: ");
renderFilters(); render(); renderFeatured(); renderCompare();
