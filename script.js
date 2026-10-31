(function(){
const $=(s,r=document)=>r.querySelector(s),PV=window.__PV;
const pages=[["home","Home","index.html"],["info","Info","info.html"],["pesan","Pesan","pesan.html"],["profil","Profil","profil.html"]];
let cur=document.body.dataset.page||"home";
const st=(k,v)=>{try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){}};
const ss=(k,v)=>{try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){}};
document.body.insertAdjacentHTML("afterbegin",`<div id="bg"></div><div class="veil"></div><canvas id="sand"></canvas>
<header class="top"><a class="brand" data-go="home" href="index.html">Teluk Penyu</a><button id="mbtn" class="mbtn"><span>Menu</span><i></i></button></header>
<nav class="drawer">${pages.map((p,i)=>`<a class="nb" style="--n:${i}" data-go="${p[0]}" href="${p[2]}">${p[1]}</a>`).join("")}</nav>
<div id="curtain" class="curtain cover"><b>Pantai Teluk Penyu</b></div>`);
const cu=$("#curtain");
const mark=()=>document.querySelectorAll(".drawer [data-go]").forEach(a=>a.classList.toggle("on",a.dataset.go===cur));
const stagger=()=>document.querySelectorAll("main section>*").forEach((e,i)=>e.style.setProperty("--i",i));
function bind(){const f=$("#fpesan");if(!f)return;f.cin.min=new Date().toISOString().slice(0,10);
f.onsubmit=e=>{e.preventDefault();const d=Math.round((new Date(f.cout.value)-new Date(f.cin.value))/864e5),o=f.kamar.selectedOptions[0],out=$("#hasil");out.textContent="";
if(!(d>0)){out.textContent="Tanggal check-out harus setelah tanggal check-in.";return}
const h=document.createElement("h3");h.textContent="Pesanan diterima";const p=document.createElement("p");p.textContent=`${f.nama.value}, kamar ${o.value} untuk ${f.tamu.value} tamu selama ${d} malam.`;const t=document.createElement("div");t.className="tot";t.textContent="Rp "+(d*o.dataset.h).toLocaleString("id-ID");out.append(h,p,t)}}
const cover=cb=>{cu.className="curtain pre";cu.offsetWidth;cu.className="curtain cover";setTimeout(cb,700)},reveal=()=>cu.className="curtain leave";
function swap(k){$("main").innerHTML=PV[k];cur=k;document.body.dataset.page=k;scrollTo(0,0);document.body.style.setProperty("--d",".5s");mark();stagger();bind()}
document.addEventListener("click",e=>{const a=e.target.closest("[data-go]");
if(!a){if(!e.target.closest(".drawer,#mbtn"))document.body.classList.remove("open");return}
e.preventDefault();document.body.classList.remove("open");if(a.dataset.go===cur)return;
cover(()=>{if(PV){swap(a.dataset.go);reveal()}else location.href=a.getAttribute("href")})});
$("#mbtn").onclick=e=>{e.stopPropagation();document.body.classList.toggle("open")};
const first=!ss("seen");ss("seen","1");document.body.style.setProperty("--d",first?"1.6s":".5s");
mark();stagger();bind();setTimeout(reveal,first?1500:350);
/* pasir */
const cv=$("#sand"),x=cv.getContext("2d");let W,H,P=[],lx=0,ly=0;
const rs=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight};rs();addEventListener("resize",rs);
const col=()=>`hsl(${32+Math.random()*14} ${60+Math.random()*25}% ${48+Math.random()*24}%)`;
const mv=(cx,cy)=>{const d=Math.hypot(cx-lx,cy-ly);lx=cx;ly=cy;
for(let i=0;i<Math.min(8,2+d/8);i++)P.push({x:cx+(Math.random()-.5)*18,y:cy+(Math.random()-.5)*8,vx:(Math.random()-.5)*1.2,vy:Math.random()*1.2,s:2+Math.random()*2.5,l:1,c:col()})};
const burst=(px,py)=>{for(let i=0;i<28;i++){const a=Math.random()*6.283,v=2+Math.random()*5;P.push({x:px,y:py,vx:Math.cos(a)*v,vy:Math.sin(a)*v,s:2+Math.random()*2.5,l:1,c:col(),f:.94})}};
addEventListener("pointermove",e=>mv(e.clientX,e.clientY));
addEventListener("touchmove",e=>{const t=e.touches[0];if(t)mv(t.clientX,t.clientY)},{passive:true});
addEventListener("pointerdown",e=>burst(e.clientX,e.clientY));
function loop(){x.clearRect(0,0,W,H);
P=P.filter(p=>p.l>0&&p.y<H+10);
for(const p of P){p.vy+=.08;if(p.f){p.vx*=p.f;p.vy*=p.f}p.x+=p.vx;p.y+=p.vy;p.l-=.01;x.globalAlpha=Math.min(1,p.l*1.5);x.fillStyle=p.c;x.fillRect(p.x,p.y,p.s,p.s)}
x.globalAlpha=1;requestAnimationFrame(loop)}loop();
})();
