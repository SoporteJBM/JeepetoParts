// Lógica de la página: filtros, tarjetas, detalle y WhatsApp.
// ===== Configuración =====
const WHATSAPP = "51946564236"; // número con código de país, sin +
const FILTERS=[["all","Todos"],["jk","Wrangler JK"],["jl","Wrangler JL"],["jt","Gladiator"],["uni","Universal"]];
const SHORT={jk:"JK",jl:"JL",jt:"Gladiator",uni:"Universal"};
let current="all";

const soles=n=>n?"S/ "+n.toLocaleString("es-PE"):"Consultar";
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ALL=[]; CATALOGO.forEach(s=>s.productos.forEach(p=>ALL.push(p)));

function renderFilters(){
  const nav=document.getElementById("filters");
  nav.innerHTML=FILTERS.map(([k,l])=>`<button class="chip" data-k="${k}" aria-pressed="${k===current}">${l}</button>`).join("");
  nav.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{current=b.dataset.k;renderFilters();render();document.getElementById("catalogo").scrollIntoView({behavior:"smooth",block:"start"});});
}
function pic(p){return p.foto;}
function pic2(p){return p.foto2||"";}
const FEATURED=["BL-JK-G1-SMK","TL-JK-G1-CLR + BL-JK-G1-SMK","ZS-0128K-JK","TS-JK-DRL-G2-CLR + SL-JK-G1-CLR","WLB-0008-G1","TL-JK-WHEEL-G5"];
function renderFeatured(){
  const row=document.getElementById("featRow");
  row.innerHTML=FEATURED.map(c=>ALL.find(p=>p.codigo===c)).filter(Boolean).map(p=>`<button class="fcard" data-i="${ALL.indexOf(p)}"><div class="fimg${pic2(p)?" has2":""}"><img src="${pic(p)}" alt="" loading="lazy">${pic2(p)?`<img class="alt" src="${pic2(p)}" alt="" loading="lazy">`:""}</div><div class="fb"><span class="tag">${p.modelos.map(t=>SHORT[t]).join(" · ")}</span><h3>${esc(p.nombre)}</h3><div class="fp"><b>${soles(p.precio)}</b><span>Ver ›</span></div></div></button>`).join("");
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
function renderGallery(){
  document.querySelectorAll(".gal-row figure[data-code]").forEach(f=>{
    const p=ALL.find(q=>q.codigo===f.dataset.code); if(!p) return;
    const im=document.createElement("img"); im.className="alt"; im.alt=p.nombre; im.loading="lazy"; im.src=pic(p); f.appendChild(im);
    const cap=f.querySelector("figcaption"); cap.innerHTML=`<span class="mn">${esc(cap.textContent)}</span><span class="pn">${esc(p.nombre)} · ${soles(p.precio)}</span>`;
    const go=()=>open(ALL.indexOf(p)); f.onclick=go; f.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}};
  });
}
const GROUPS=[["Luces",["Faros delanteros","Neblineros","Luces de freno","Stops traseros","Luz para la llanta","Luces auxiliares"]],["Exterior",["Máscaras","Espejos","Accesorios"]],["Otros",["Audio y otros","Otros autos"]]];
function groupOf(name){for(const [g,cs] of GROUPS){if(cs.some(c=>name.startsWith(c))) return g;}return "";}
function shortName(name){return name.replace(/ \(.*\)$/,"");}
const EXP=new Set(); const PER=999;
const PAGES=[
 {k:"promociones",t:"Promociones",s:"Combos en oferta de Xprite, más baratos que comprar las piezas por separado.",cats:["Promociones"]},
 {k:"delantera",t:"Parte delantera",s:"Faros, neblineros, direccionales y máscaras para el frente de tu Jeep.",cats:["Faros delanteros","Neblineros","Direccionales y marcadores","Máscaras"]},
 {k:"trasera",t:"Parte trasera",s:"Stops, tercera luz, luz de llanta de repuesto y protectores.",cats:["Stops traseros","Luces de freno","Luz para la llanta","Protectores de stops"]},
 {k:"auxiliares",t:"Luces auxiliares",s:"Pods, barra LED, soportes y rock lights. Uso fuera de carretera.",cats:["Luces auxiliares"]},
 {k:"accesorios",t:"Accesorios",s:"Espejos, seguros de capó, tapa de gasolina, apoyapiés y más.",cats:["Espejos","Accesorios","Audio y otros"]},
 {k:"otros",t:"Otros autos",s:"Focos LED, decodificadores y luces para otros vehículos.",cats:["Otros autos"]}];
const MODE=document.body.dataset.mode;
function pageOf(cat){const p=PAGES.find(p=>p.cats.some(c=>cat.startsWith(c)));return p?p.k:"";}
function fileOf(k){return k==="inicio"?"index.html":k+".html";}
function linkOf(k,anchor){return MODE==="files"?fileOf(k)+(anchor?"#"+anchor:""):"#"+(anchor&&k==="inicio"?anchor:k);}
let PAGE=MODE==="files"?document.body.dataset.page:(PAGES.some(p=>p.k===location.hash.slice(1))?location.hash.slice(1):"inicio");
function goTo(k,anchor){
  closeDrawer();
  if(MODE==="files"&&k!==PAGE){location.href=linkOf(k,anchor);return;}
  if(k!==PAGE){setPage(k,true);}
  if(anchor){setTimeout(()=>{const el=document.getElementById(anchor);if(el)el.scrollIntoView({behavior:"smooth",block:"start"});},80);}else window.scrollTo({top:0});
}
function setPage(k,push){
  PAGE=k; document.body.dataset.page=k;
  if(MODE==="hash"&&push){history.replaceState(null,"",k==="inicio"?location.pathname:"#"+k);}
  const pg=PAGES.find(p=>p.k===k);
  if(pg){document.getElementById("pageTitle").textContent=pg.t;document.getElementById("pageSub").textContent=pg.s;document.title=pg.t+" · Jeepeto Parts";}
  else document.title="Jeepeto Parts · Accesorios Xprite para Jeep";
  document.querySelectorAll("[data-page-link]").forEach(a=>{a.href=linkOf(a.dataset.pageLink,a.dataset.anchor);a.classList.toggle("on",!a.dataset.anchor&&a.dataset.pageLink===k);});
  render();
}
function renderZones(){
  document.getElementById("zoneGrid").innerHTML=PAGES.map(pg=>{
    const items=CATALOGO.filter(s=>pg.cats.some(c=>s.categoria.startsWith(c))).flatMap(s=>s.productos);
    const p=items.find(q=>pic2(q)&&!q.agotado)||items[0];
    return `<a class="zone" data-page-link="${pg.k}" href="${linkOf(pg.k)}"><img src="${p?(pic2(p)||pic(p)):""}" alt="" loading="lazy"><span><b>${pg.t}</b><small>${items.length} productos →</small></span></a>`;
  }).join("");
}
function render(){
  let html="",count=0;
  CATALOGO.forEach((sec,si)=>{
    if(pageOf(sec.categoria)!==PAGE) return;
    const items=sec.productos.filter(p=>current==="all"||p.modelos.includes(current));
    if(!items.length) return;
    count+=items.length;
    html+=`<h3 class="cat" id="cat-${si}">${esc(sec.categoria)}<small>${items.length} ${items.length===1?"producto":"productos"}</small></h3><div class="grid">`+items.map(card).join("")+`</div>`;
  });
  document.getElementById("list").innerHTML=PAGE==="inicio"?"":(count?html:`<p class="empty">No hay productos de esta sección para este modelo todavía.</p>`);
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>open(+c.dataset.i));
  renderDrawer();
}
function renderDrawer(){
  let html=`<a class="drawer-link" data-page-link="inicio" href="${linkOf("inicio")}"><span>Inicio</span></a>`;
  PAGES.forEach(pg=>{
    html+=`<a class="drawer-group" data-page-link="${pg.k}" href="${linkOf(pg.k)}" style="display:block;text-decoration:none">${pg.t}</a>`;
    CATALOGO.forEach((sec,si)=>{ if(!pg.cats.some(c=>sec.categoria.startsWith(c))) return;
      html+=`<button class="drawer-link" data-pg="${pg.k}" data-cat="${si}"><span>${esc(shortName(sec.categoria))}</span><small>${sec.productos.length}</small></button>`;});
  });
  const box=document.getElementById("drawerList"); box.innerHTML=html;
  box.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{if(current!=="all"&&b.dataset.pg===PAGE){current="all";renderFilters();}goTo(b.dataset.pg,"cat-"+b.dataset.cat);});
  bindPageLinks(box);
}
function bindPageLinks(root){
  (root||document).querySelectorAll("[data-page-link]").forEach(a=>{a.href=linkOf(a.dataset.pageLink,a.dataset.anchor);a.onclick=e=>{e.preventDefault();goTo(a.dataset.pageLink,a.dataset.anchor);};});
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
    <div class="ph${pic2(p)?" has2":""}">${img?`<img src="${img}" alt="" loading="lazy">`:`<span class="nofoto">Foto próximamente</span>`}${pic2(p)?`<img class="alt" src="${pic2(p)}" alt="" loading="lazy">`:""}${p.agotado?`<span class="badge">Agotado</span>`:""}${p.oferta&&!p.agotado?`<span class="badge promo">${p.antes?"–"+Math.round((p.antes-p.precio)*100/p.antes)+"%":"Oferta"}</span>`:""}</div>
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
      <p>${esc(p.descripcion)}</p>
      <ul>${p.ventajas.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      <dl class="spec">
        <dt>Marca</dt><dd>${esc(p.marca||"Xprite (original)")}</dd>
        <dt>Código Xprite</dt><dd>${esc(p.codigo)}</dd>
        <dt>Compatible con</dt><dd>${esc(p.compatible)}</dd>
        ${p.incluye?`<dt>Incluye</dt><dd>${esc(p.incluye)}</dd>`:""}
        ${p.instalacion?`<dt>Instalación</dt><dd>${esc(p.instalacion)}</dd>`:""}
        <dt>Disponibilidad</dt><dd class="${p.agotado?"no":"ok"}">${p.agotado?"Agotado temporalmente · consulta reposición":"A pedido · llega en 2 a 3 semanas"}</dd>
        <dt>Garantía</dt><dd>1 año por defecto de fábrica · nosotros pagamos el envío del reemplazo</dd>
      </dl>
      ${p.incluye&&p.instalacion?"":`<p class="spec-note">¿Dudas sobre qué incluye o cómo se instala? Pregúntanos por WhatsApp antes de pedir.</p>`}
      <div class="dfoot"><div class="price ${p.agotado?"sold":""}">${soles(p.precio)}${p.antes?`<small>Por separado ${soles(p.antes)} · Ahorras ${soles(p.antes-p.precio)} (–${Math.round((p.antes-p.precio)*100/p.antes)}%)</small>`:""}</div>
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
renderFilters(); renderZones(); setPage(PAGE,false); renderFeatured(); renderCompare(); renderGallery(); bindPageLinks();
if(MODE==="hash") window.addEventListener("hashchange",()=>{const h=location.hash.slice(1);if(PAGES.some(p=>p.k===h)&&h!==PAGE){setPage(h,false);window.scrollTo({top:0});}});
if(MODE==="files"&&location.hash){setTimeout(()=>{const el=document.getElementById(location.hash.slice(1));if(el)el.scrollIntoView({block:"start"});},120);}

// ===== Buscador por vehículo =====
(function(){
  const M={jk:{n:"Wrangler JK",y:[2007,2018]},jl:{n:"Wrangler JL",y:[2018,2026]},jt:{n:"Gladiator JT",y:[2020,2026],doors:4}};
  const $=id=>document.getElementById(id);
  const mS=$("fdModel"),yS=$("fdYear"),dS=$("fdDoors"),go=$("fdGo"),out=$("fdOut");
  if(!mS) return;
  const jeepItems=()=>ALL.filter(p=>!p.cat.startsWith("Otros autos"));
  function sync(){
    const m=M[mS.value];
    if(!m){yS.innerHTML='<option value="">—</option>';yS.disabled=dS.disabled=true;go.disabled=mS.value!=="otro";return;}
    const cur=yS.value;let h='<option value="">Elige…</option>';
    for(let y=m.y[1];y>=m.y[0];y--) h+=`<option${String(y)===cur?" selected":""}>${y}</option>`;
    yS.innerHTML=h;yS.disabled=false;
    if(m.doors){dS.value=String(m.doors);dS.disabled=true;}else dS.disabled=false;
    go.disabled=!(yS.value&&dS.value);
  }
  function wa(t){return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;}
  function show(scroll){
    const k=mS.value;
    if(k==="otro"){
      out.innerHTML=`<div class="fd-res"><p class="fd-sum">Por ahora no tenemos productos confirmados para CJ, YJ o TJ.</p><a class="btn-main btn-wa" target="_blank" rel="noopener" href="${wa("Hola Jeepeto Parts, tengo un Jeep (modelo y año: ). ¿Qué accesorios le quedan?")}">Pregúntanos por WhatsApp</a></div>`;
      return;
    }
    const m=M[k],y=+yS.value,d=+dS.value;
    try{localStorage.setItem("jp-mijeep",JSON.stringify({k,y,d}));}catch(e){}
    const ok=[],ask=[],uni=[];
    jeepItems().forEach(p=>{
      const t=p.compatible.toLowerCase();
      if(p.modelos.includes(k)){
        if(/solo 4 puertas/.test(t)&&d!==4) return;
        (/consultar/.test(t)?ask:ok).push(p);
      }else if(p.modelos.length===1&&p.modelos[0]==="uni"&&!/consultar/.test(t)) uni.push(p);
    });
    const grp=list=>{const by={};list.forEach(p=>(by[p.cat]=by[p.cat]||[]).push(p));
      return Object.entries(by).map(([c,ps])=>`<h3 class="cat">${esc(c)}<small>${ps.length} ${ps.length===1?"producto":"productos"}</small></h3><div class="grid">${ps.map(card).join("")}</div>`).join("");};
    const name=`${m.n} ${y} · ${d} puertas`;
    out.innerHTML=`<div class="fd-res">
      <p class="fd-sum"><b>${ok.length}</b> accesorios confirmados para tu <b>${esc(name)}</b></p>
      <p class="fd-note">La versión (Sport, Sahara, Rubicon) puede cambiar algunos enchufes. Antes de pagar te lo confirmamos con el VIN de tu Jeep.</p>
      ${grp(ok)}
      ${ask.length?`<details class="fd-more"><summary>Pregúntanos antes (${ask.length})</summary><p class="fd-note">Podrían quedarle, pero hay que confirmarlo.</p>${grp(ask)}</details>`:""}
      ${uni.length?`<details class="fd-more"><summary>Universales que sirven en cualquier Jeep (${uni.length})</summary><p class="fd-note">Se montan con soportes o abrazaderas; no dependen del modelo.</p>${grp(uni)}</details>`:""}
      <a class="btn-main btn-wa fd-wa" target="_blank" rel="noopener" href="${wa(`Hola Jeepeto Parts, tengo un ${name}. ¿Qué me recomiendan?`)}">Cotizar para mi ${esc(m.n)}</a>
    </div>`;
    out.querySelectorAll(".card").forEach(c=>c.onclick=()=>open(+c.dataset.i));
    if(scroll) out.scrollIntoView({behavior:"smooth",block:"start"});
  }
  mS.onchange=()=>{sync();if(mS.value==="otro")show(false);else out.innerHTML="";};
  yS.onchange=dS.onchange=()=>{go.disabled=!(yS.value&&dS.value);};
  go.onclick=()=>show(true);
  try{const s=JSON.parse(localStorage.getItem("jp-mijeep")||"null");
    if(s&&M[s.k]){mS.value=s.k;sync();yS.value=String(s.y);dS.value=String(s.d);go.disabled=false;}}catch(e){}
})();
