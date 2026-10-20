const resep = [
{id:"rendang",nama:"Rendang Sapi",daerah:"Sumatera Barat",emoji:"🥘",kat:"Daging",waktu:"3 jam",porsi:"8 porsi",level:"Sedang",
 desc:"Daging sapi dimasak perlahan dalam santan dan rempah hingga kering, gelap, dan beraroma dalam.",
 bahan:["1 kg daging sapi (sandung lamur), potong kotak","1,5 liter santan dari 3 butir kelapa","3 sdm kelapa parut sangrai (kerisik)","3 batang serai, memarkan","6 lembar daun jeruk","2 lembar daun kunyit","3 buah asam kandis","3 sdm gula merah sisir","Garam secukupnya","Bumbu halus: 10 bawang merah, 6 bawang putih, 100 g cabai merah keriting, 3 cm jahe, 4 cm lengkuas, 3 cm kunyit"],
 langkah:["Haluskan semua bumbu halus, lalu sangrai kelapa parut sampai cokelat dan tumbuk jadi kerisik.","Masukkan daging, bumbu halus, serai, daun jeruk, daun kunyit, dan asam kandis ke dalam wajan besar.","Tuang santan, masak dengan api sedang sambil diaduk agar santan tidak pecah.","Setelah santan mengental, kecilkan api dan masukkan kerisik, gula merah, dan garam.","Masak sekitar 2,5 jam sambil sesekali diaduk sampai kuah mengering dan minyak keluar.","Angkat saat daging empuk dan berwarna cokelat pekat."],
 tips:"Semakin lama dimasak, rendang makin awet. Simpan dalam wadah tertutup dan rasanya makin meresap keesokan harinya."},
{id:"soto",nama:"Soto Ayam",daerah:"Jawa",emoji:"🍲",kat:"Berkuah",waktu:"1 jam",porsi:"5 porsi",level:"Mudah",
 desc:"Kuah kuning bening berempah dengan suwiran ayam, soun, dan sambal yang menyegarkan.",
 bahan:["1 ekor ayam kampung (±1 kg)","2,5 liter air","3 batang serai, memarkan","4 lembar daun jeruk","2 lembar daun salam","Garam dan gula secukupnya","Bumbu halus: 8 bawang merah, 5 bawang putih, 4 kemiri, 3 cm kunyit, 2 cm jahe, ½ sdt merica","Pelengkap: soun, tauge, telur rebus, seledri, bawang goreng, jeruk nipis, sambal"],
 langkah:["Rebus ayam dengan air sampai mendidih, buang busa yang muncul.","Tumis bumbu halus bersama serai, daun jeruk, dan daun salam sampai harum.","Masukkan tumisan ke dalam rebusan ayam, masak 40 menit sampai ayam empuk.","Angkat ayam, goreng sebentar jika suka, lalu suwir-suwir.","Koreksi rasa kuah dengan garam dan gula.","Susun soun, tauge, ayam, dan telur di mangkuk, siram kuah panas, lalu taburi seledri dan bawang goreng."],
 tips:"Peras jeruk nipis dan tambahkan sambal sesaat sebelum makan agar rasa segarnya terasa."},
{id:"kupat-tahu",nama:"Kupat Tahu",daerah:"Jawa Barat",emoji:"🥜",kat:"Sayur",waktu:"45 menit",porsi:"4 porsi",level:"Mudah",
 desc:"Ketupat, tahu goreng, dan sayur segar disiram bumbu kacang manis pedas khas Priangan.",
 bahan:["4 potong ketupat, iris tebal","8 potong tahu putih, goreng","150 g tauge, seduh air panas","100 g kol, iris halus, rebus sebentar","Kerupuk, bawang goreng, dan kecap manis","Bumbu kacang: 200 g kacang tanah goreng, 3 bawang putih, 5 cabai rawit, 2 cm kencur, 3 sdm gula merah, 1 sdt garam, 1 sdm air asam jawa, 400 ml air"],
 langkah:["Haluskan kacang tanah goreng bersama bawang putih, cabai rawit, dan kencur.","Rebus bumbu halus dengan air, gula merah, garam, dan air asam sampai mengental.","Goreng tahu sampai kuning keemasan lalu potong-potong.","Tata ketupat, tahu, tauge, dan kol di piring.","Siram bumbu kacang, tambahkan kecap manis, bawang goreng, dan kerupuk."],
 tips:"Gunakan kencur untuk aroma khas kupat tahu. Sesuaikan jumlah cabai rawit dengan tingkat pedas yang diinginkan."},
{id:"bakwan",nama:"Bakwan Sayur",daerah:"Seluruh Nusantara",emoji:"🥕",kat:"Gorengan",waktu:"30 menit",porsi:"15 buah",level:"Mudah",
 desc:"Gorengan sayur yang renyah di luar dan lembut di dalam, cocok untuk teman hujan sore.",
 bahan:["150 g tepung terigu","50 g tepung beras","100 g kol, iris tipis","1 buah wortel, serut kasar","50 g tauge","2 batang daun bawang, iris","2 bawang putih, haluskan","1 sdt kaldu bubuk","1 sdt garam","200 ml air es","Minyak untuk menggoreng"],
 langkah:["Campur tepung terigu, tepung beras, bawang putih, kaldu bubuk, dan garam.","Tuang air es sedikit demi sedikit sambil diaduk sampai adonan agak kental.","Masukkan kol, wortel, tauge, dan daun bawang, aduk rata.","Panaskan minyak banyak dengan api sedang.","Ambil satu sendok adonan, goreng sampai kuning keemasan dan renyah.","Tiriskan lalu sajikan dengan cabai rawit."],
 tips:"Air es dan minyak yang benar-benar panas membuat bakwan renyah dan tidak menyerap banyak minyak."},
{id:"mendoan",nama:"Tempe Mendoan",daerah:"Banyumas, Jawa Tengah",emoji:"🍘",kat:"Gorengan",waktu:"25 menit",porsi:"4 porsi",level:"Mudah",
 desc:"Tempe tipis berbalut tepung berbumbu, digoreng setengah matang agar tetap lembut.",
 bahan:["2 papan tempe, iris tipis lebar","100 g tepung terigu","2 sdm tepung beras","3 batang daun bawang, iris halus","2 bawang putih, haluskan","½ sdt ketumbar bubuk","¼ sdt kunyit bubuk","1 sdt garam","150 ml air","Sambal kecap: kecap manis, cabai rawit iris, bawang merah iris"],
 langkah:["Campur semua tepung, bumbu halus, ketumbar, kunyit, garam, dan daun bawang.","Tambahkan air sedikit demi sedikit, aduk sampai adonan encer dan lengket.","Celupkan irisan tempe ke adonan sampai terbalut rata.","Goreng dalam minyak panas hanya 1 sampai 2 menit tiap sisi sampai setengah matang.","Tiriskan dan sajikan hangat dengan sambal kecap."],
 tips:"Setengah matang adalah ciri mendoan. Kata mendo dalam bahasa Banyumasan berarti lembek."}
];
const $=s=>document.querySelector(s);
const grid=$("#grid"),chips=$("#chips"),modal=$("#modal"),isi=$("#m-isi");
let kat="Semua",kata="",pemicu=null;
const kategori=["Semua",...new Set(resep.map(r=>r.kat))];

chips.innerHTML=kategori.map(k=>`<button class="chip${k==="Semua"?" aktif":""}" data-k="${k}">${k}</button>`).join("");
chips.addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;
  kat=b.dataset.k;chips.querySelectorAll(".chip").forEach(c=>c.classList.toggle("aktif",c===b));tampil()});
$("#cari").addEventListener("input",e=>{kata=e.target.value.trim().toLowerCase();tampil()});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("tampil");io.unobserve(e.target)}}),{threshold:.15});

function tampil(){
  const d=resep.filter(r=>(kat==="Semua"||r.kat===kat)&&(r.nama+r.daerah+r.desc).toLowerCase().includes(kata));
  grid.innerHTML=d.map(r=>`<article class="card"><div class="card-top"><span>${r.emoji}</span>${foto(r)}</div>
    <div class="card-body"><p class="daerah">${r.daerah}</p><h3>${r.nama}</h3><p class="desc">${r.desc}</p>
    <div class="meta"><span>⏱ ${r.waktu}</span><span>🍽 ${r.porsi}</span><span>${r.level}</span></div>
    <button class="btn" data-id="${r.id}">Baca Resep</button></div></article>`).join("");
  $("#kosong").hidden=d.length>0;
  grid.querySelectorAll(".card").forEach(c=>io.observe(c));
}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(!b)return;
  const r=resep.find(x=>x.id===b.dataset.id);pemicu=b;
  isi.innerHTML=`<div class="m-head">${foto(r,"m-foto")}<div class="em">${r.emoji}</div><h2 id="m-judul">${r.nama}</h2>
    <p class="daerah">${r.daerah} · ${r.waktu} · ${r.porsi}</p></div>
    <div class="m-cols"><div><h4>Bahan</h4><ul class="bahan">${r.bahan.map(b=>`<li><label><input type="checkbox"><span>${b}</span></label></li>`).join("")}</ul></div>
    <div><h4>Langkah</h4><ol class="langkah">${r.langkah.map(l=>`<li>${l}</li>`).join("")}</ol></div></div>
    <div class="tips"><strong>Tips:</strong> ${r.tips}</div>`;
  modal.hidden=false;document.body.style.overflow="hidden";$("#tutup").focus();
});
function tutup(){modal.hidden=true;document.body.style.overflow="";pemicu&&pemicu.focus()}
$("#tutup").addEventListener("click",tutup);
modal.addEventListener("click",e=>{if(e.target===modal)tutup()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)tutup()});

/* Efek riak pada semua tombol */
document.addEventListener("click",e=>{const b=e.target.closest(".btn");if(!b)return;
  const r=b.getBoundingClientRect(),s=Math.max(r.width,r.height),sp=document.createElement("span");
  sp.className="ripple";sp.style.cssText=`width:${s}px;height:${s}px;left:${e.clientX-r.left-s/2}px;top:${e.clientY-r.top-s/2}px`;
  b.appendChild(sp);setTimeout(()=>sp.remove(),600)});

const naik=$("#naik");
addEventListener("scroll",()=>naik.classList.toggle("muncul",scrollY>500),{passive:true});
naik.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

/* Gambar dari link raw (otomatis cadangan emoji jika gagal) */
function foto(r,c=""){const u=GAMBAR[r.id];return u?`<img class="${c}" src="${esc(u)}" alt="${esc(r.nama)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:""}

/* Menu pojok kanan atas */
const mb=$("#menuBtn"),ml=$("#menuList");
function menu(b){mb.classList.toggle("buka",b);ml.classList.toggle("buka",b);mb.setAttribute("aria-expanded",b);mb.setAttribute("aria-label",b?"Tutup menu":"Buka menu")}
mb.addEventListener("click",()=>menu(!ml.classList.contains("buka")));
ml.addEventListener("click",e=>{if(e.target.closest("a"))menu(false)});
document.addEventListener("click",e=>{if(!e.target.closest("#menuBtn,#menuList"))menu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")menu(false)});

/* Pindah halaman (router berbasis hash): tiap menu membuka halamannya sendiri */
const HALAMAN=[...document.querySelectorAll(".page")],NAMA={home:"Home",info:"Info",resep:"List Resep",anggota:"Anggota Kelompok"};
function buka(){
  let h=location.hash.replace(/^#\/?/,"")||"home";if(!NAMA[h])h="home";
  HALAMAN.forEach(p=>{const on=p.dataset.page===h;p.hidden=!on;p.classList.remove("masuk");if(on){void p.offsetWidth;p.classList.add("masuk")}});
  ml.querySelectorAll("a").forEach(a=>a.toggleAttribute("aria-current",a.dataset.page===h));
  document.body.classList.toggle("home",h==="home");
  document.title=(h==="home"?"":NAMA[h]+" – ")+"Dapur Nusantara";
  if(!modal.hidden)tutup();
  scrollTo({top:0,behavior:"instant"});
}
addEventListener("hashchange",buka);

/* Animasi pembuka: lambang kawung digambar, nama muncul huruf per huruf, lalu pintu terbuka */
const intro=$("#intro");
$("#introNama").innerHTML=[..."Dapur Nusantara"].map((c,i)=>c===" "?'<span class="sp"></span>':`<span style="--d:${i}">${c}</span>`).join("");
setTimeout(()=>{intro.remove();document.documentElement.style.setProperty("--tunda","0s")},3600);

/* Anggota kelompok: dibaca dari ANGGOTA di data.js (tidak bisa diedit dari website) */
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
$("#aGrid").innerHTML=ANGGOTA.map(a=>{
  const ava=`<div class="ava"><span>${esc((a.nama||"?").trim().charAt(0).toUpperCase())}</span>${a.foto?`<img src="${esc(a.foto)}" alt="" referrerpolicy="no-referrer" onerror="this.remove()">`:""}</div>`;
  return `<div class="member">${ava}<h3>${esc(a.nama)}</h3><p class="peran">${esc(a.peran)}</p><p class="desc">${esc(a.deskripsi)}</p></div>`}).join("");
tampil();
buka();
