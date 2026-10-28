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
  nav.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{current=b.dataset.k;renderFilters();render();window.scrollTo({top:document.getElementById("list").offsetTop-120,behavior:"smooth"});});
}
function render(){
  let html="",count=0;
  CATALOGO.forEach(sec=>{
    const items=sec.productos.filter(p=>current==="all"||p.modelos.includes(current));
    if(!items.length) return;
    count+=items.length;
    html+=`<h2 class="cat">${esc(sec.categoria)}<small>${items.length} ${items.length===1?"producto":"productos"}</small></h2><div class="grid">`+items.map(card).join("")+`</div>`;
  });
  document.getElementById("list").innerHTML=count?html:`<p class="empty">No hay productos para este modelo todavía.</p>`;
  document.querySelectorAll(".card").forEach(c=>c.onclick=()=>open(+c.dataset.i));
}
function card(p){
  const i=ALL.indexOf(p), img=p.foto;
  return `<button class="card" data-i="${i}" aria-label="${esc(p.nombre)}, ${soles(p.precio)}">
    <div class="ph">${img?`<img src="${img}" alt="" loading="lazy">`:`<span class="nofoto">Foto próximamente</span>`}${p.agotado?`<span class="badge">Agotado</span>`:""}</div>
    <div class="cb"><span class="tag">${p.modelos.map(t=>SHORT[t]).join(" · ")}</span><h3>${esc(p.nombre)}</h3>
    <div class="price ${p.agotado?"sold":""}">${soles(p.precio)}</div></div></button>`;
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
      <div class="dfoot"><div class="price ${p.agotado?"sold":""}">${soles(p.precio)}${p.agotado?"<small>Agotado temporalmente · consulta disponibilidad</small>":""}</div>
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
renderFilters(); render();
