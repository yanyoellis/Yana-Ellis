const collections = [
  {id:'zeus',name:'Thunder',deity:'Zeus',accent:'#C8A24A',image:'assets/zeus-lightning.png',images:['assets/zeus-thunder-crown.png','assets/zeus-eye-of-olympus.png','assets/zeus-lightning.png'],hero:2,tagline:'Sculpted light. Controlled power.',products:[
    ['Thunder Crown Ring','Matte white gold','Yellow diamond, yellow sapphires','€ 8,900','An architectural crown fractured by a precise strike of light.'],
    ['Eye of Olympus','White gold','Yellow sapphire, diamonds','Price on request','A slender temple artifact shaped from radiance and watchful power.'],
    ['Lightning Earrings','White gold','Yellow diamonds, citrine','€ 4,800','Sharp yellow gemstones set in white gold, inspired by the thunderbolt of Zeus.']
  ]},
  {id:'poseidon',name:'Sea',deity:'Poseidon',accent:'#6FA8B8',image:'assets/poseidon-tide.png',images:['assets/poseidon-tide.png','assets/poseidon-ocean-drop.png','assets/poseidon-wave.png'],hero:0,tagline:'The ocean, held in a single line.',products:[
    ['Tide Ring','White gold','Aquamarine','€ 6,200','A fluid aquamarine ring shaped like a wave frozen in precious metal.'],
    ['Ocean Drop','White gold','Aquamarine','€ 7,400','A clear ocean drop held by an abstract, almost invisible trident.'],
    ['Wave Earrings','White gold','Blue topaz','€ 5,600','Long fluid curves that move with the quiet rhythm of water.']
  ]},
  {id:'aphrodite',name:'Foam',deity:'Aphrodite',accent:'#E7C7C9',image:'assets/aphrodite-foam.png',images:['assets/aphrodite-pearl-bloom.png','assets/aphrodite-birth-of-foam.png','assets/aphrodite-foam.png'],hero:2,tagline:'Born from light, pearl and softness.',products:[
    ['Pearl Bloom Ring','Rose gold','South Sea pearl','€ 4,300','A single pearl opening inside a weightless bloom of rose gold.'],
    ['Birth of Foam','Rose gold','Baroque pearl, mother-of-pearl','€ 7,900','A sculptural baroque pearl encircled by a ribbon of rose gold.'],
    ['Pearl Foam Necklace','Rose gold','Natural pearls','Price on request','A delicate pearl necklace inspired by sea foam and the birth of Aphrodite.']
  ]},
  {id:'hades',name:'Underworld',deity:'Hades',accent:'#6E1F2A',image:'assets/hades-onyx.png',images:['assets/hades-onyx.png','assets/hades-gate.png','assets/hades-ember.png'],hero:0,tagline:'Power does not need to announce itself.',products:[
    ['Dominion Ring','Dark gold','Black onyx','€ 8,600','A monumental signet cut with the geometry of an ancient gate.'],
    ['Gate of the Underworld','Dark gold','Onyx, garnet','Price on request','A severe black monolith framed by the warmth of one deep garnet.'],
    ['Ember Earrings','Black gold','Garnet, black diamonds','€ 6,900','Dark linear earrings carrying the restrained glow of banked embers.']
  ]},
  {id:'artemis',name:'Moon',deity:'Artemis',accent:'#C9D2D8',image:'assets/artemis-moon.png',images:['assets/artemis-crescent.png','assets/artemis-moon-arrow.png','assets/artemis-moon.png'],hero:2,tagline:'Night air, silver and the stillness of the forest.',products:[
    ['Crescent Ring','Sterling silver','Moonstone','€ 3,200','An almost complete crescent, finished by two cool points of moonlight.'],
    ['Moon Arrow','White gold','Moonstone','€ 4,900','A silver arrow passes through a quiet moonstone crescent.'],
    ['Forest Whisper','Silver','Moonstone, emerald','€ 4,400','Arrow earrings with moonstone drops and minute emerald leaves.']
  ]},
  {id:'athena',name:'Wisdom',deity:'Athena',accent:'#7E8A5A',image:'assets/athena-olive.png',images:['assets/athena-ionic.png','assets/athena-olive.png','assets/athena-column.png'],hero:1,tagline:'Clarity, proportion and the beauty of order.',products:[
    ['Ionic Ring','White gold','Emerald','€ 7,200','Classical architectural lines converge on a perfectly square emerald.'],
    ['Olive Crown Bracelet','White gold','Emeralds','€ 6,500','A structured bracelet inspired by olive branches and classical geometry.'],
    ['Column Earrings','White gold','Grey diamonds','€ 5,900','Slender columns reduced to a pure and wearable geometry.']
  ]},
  {id:'apollo',name:'Sun',deity:'Apollo',accent:'#D9B45B',image:'assets/apollo-solar.png',images:['assets/apollo-solar.png','assets/apollo-lyre.png','assets/apollo-sunray.png'],hero:0,tagline:'Light translated into perfect rhythm.',products:[
    ['Solar Crown','Yellow gold','Citrine','€ 5,700','A warm citrine encircled by a measured crown of polished rays.'],
    ['Lyre Pendant','Yellow gold','Champagne diamond','€ 6,800','The ancient lyre redrawn as a minimal instrument of gold and light.'],
    ['Sunray Earrings','Yellow gold','Citrine, champagne diamonds','€ 7,600','Fine rays descend in balance, moving like sunlight on polished stone.']
  ]}
];

const state={scene:'intro',collection:0,arch:0,sound:false};
const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
const scenes={intro:q('#intro'),pantheon:q('#pantheon'),hall:q('#hall')};
const archGallery=q('#arch-gallery'),stage=q('#relic-stage'),curtain=q('.transition-curtain');

function buildUI(){
  archGallery.innerHTML=collections.map((c,i)=>`<button class="arch-card ${i===0?'is-current':''}" type="button" role="listitem" data-index="${i}" style="--arch-accent:${c.accent};--arch-image:url('${c.image||'assets/pantheon-hero.png'}')"><span class="arch-shape"></span><span class="arch-label"><strong>${c.name}</strong><span>Inspired by ${c.deity}</span></span></button>`).join('');
  q('#map-collections').innerHTML=collections.map((c,i)=>`<button class="map-node" data-map="${i}" style="--map-accent:${c.accent}" aria-label="${c.name} hall"><i></i><span>${c.name}</span></button>`).join('');
  q('#collection-select').innerHTML=collections.map(c=>`<option>${c.name} — ${c.deity}</option>`).join('');
  qa('.arch-card').forEach(el=>el.addEventListener('click',()=>openHall(+el.dataset.index)));
  qa('.map-node').forEach(el=>el.addEventListener('click',()=>el.dataset.map==='pantheon'?showScene('pantheon'):openHall(+el.dataset.map)));
  archGallery.addEventListener('scroll',syncArchFromScroll,{passive:true});
}

function showScene(name){
  if(name==='pantheon'&&state.scene==='intro'){enterPantheon();return}
  Object.entries(scenes).forEach(([key,el])=>{const active=key===name;el.classList.toggle('is-active',active);el.setAttribute('aria-hidden',String(!active))});
  state.scene=name;syncMap();
}

function enterPantheon(){
  if(state.scene==='transition'||scenes.intro.classList.contains('entering'))return;
  state.scene='transition';
  document.body.classList.add('entered');
  scenes.intro.classList.add('entering');
  curtain.classList.add('is-active');
  setTimeout(()=>{showScene('pantheon');scenes.intro.classList.remove('entering')},1150);
  setTimeout(()=>curtain.classList.remove('is-active'),1850);
}

function openHall(index){
  state.collection=(index+collections.length)%collections.length;
  const c=collections[state.collection];
  curtain.querySelector('span').textContent=`Approaching ${c.name}`;
  curtain.classList.add('is-active');
  setTimeout(()=>{renderHall(c);showScene('hall')},650);
  setTimeout(()=>curtain.classList.remove('is-active'),1450);
}

function renderHall(c){
  scenes.hall.style.setProperty('--hall-accent',c.accent);
  q('#hall-deity').textContent=`Inspired by ${c.deity}`;
  q('#hall-title').textContent=c.name;
  q('#hall-intro').textContent=c.tagline;
  stage.innerHTML=c.products.map((p,i)=>`<button class="relic ${i===c.hero?'is-main':''}" type="button" data-product="${state.collection}-${i}" aria-label="View ${p[0]}"><img class="relic-image" src="${c.images[i]}" alt="${p[0]}"><span class="plinth"><span class="relic-label"><strong>${p[0]}</strong><span>Relic ${String(i+1).padStart(2,'0')}</span></span></span></button>`).join('');
  qa('.relic').forEach(el=>el.addEventListener('click',()=>openProduct(el.dataset.product)));
  q('#collection-select').selectedIndex=state.collection;
}

function openProduct(key){
  let [ci,pi]=String(key).split('-').map(Number);
  if(Number.isNaN(ci)){ci=0;pi=2}
  const c=collections[ci],p=c.products[pi];
  q('#product-dialog').style.setProperty('--product-accent',c.accent);
  q('#product-collection').textContent=`${c.name} Collection · ${String(pi+1).padStart(2,'0')}`;
  q('#product-name').textContent=p[0];q('#product-description').textContent=p[4];q('#product-material').textContent=p[1];q('#product-stones').textContent=p[2];q('#product-price').textContent=p[3];
  q('#product-visual').innerHTML=`<img src="${c.images[pi]}" alt="${p[0]}">`;
  q('#product-dialog').showModal();
}

function setArch(index){
  state.arch=(index+collections.length)%collections.length;
  const cards=qa('.arch-card'),card=cards[state.arch];
  cards.forEach((x,i)=>x.classList.toggle('is-current',i===state.arch));
  q('#arch-index').textContent=String(state.arch+1).padStart(2,'0');
  card.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});
}
function syncArchFromScroll(){
  if(innerWidth<=900)return;
  const center=archGallery.getBoundingClientRect().left+archGallery.clientWidth/2;
  const cards=qa('.arch-card');let best=0,dist=Infinity;
  cards.forEach((c,i)=>{const r=c.getBoundingClientRect(),d=Math.abs(r.left+r.width/2-center);if(d<dist){dist=d;best=i}});
  state.arch=best;cards.forEach((x,i)=>x.classList.toggle('is-current',i===best));q('#arch-index').textContent=String(best+1).padStart(2,'0');
}
function syncMap(){qa('.map-node').forEach(n=>n.classList.toggle('is-active',state.scene==='pantheon'?n.dataset.map==='pantheon':state.scene==='hall'&&n.dataset.map==state.collection))}

qa('[data-action]').forEach(button=>button.addEventListener('click',()=>{
  const action=button.dataset.action;
  if(action==='pantheon'){qa('dialog[open]').forEach(d=>d.close());showScene('pantheon')}
  if(action==='collections'){qa('dialog[open]').forEach(d=>d.close());showScene('pantheon');setTimeout(()=>setArch(0),100)}
  if(action==='about')q('#about-dialog').showModal();
  if(action==='contact'){qa('dialog[open]').forEach(d=>d.close());setTimeout(()=>q('#contact-dialog').showModal(),80)}
  if(action==='close-product')q('#product-dialog').close();
}));
qa('.dialog-close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
qa('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
q('#enter-button').addEventListener('click',enterPantheon);
q('#arches-prev').addEventListener('click',()=>setArch(state.arch-1));q('#arches-next').addEventListener('click',()=>setArch(state.arch+1));
q('#next-hall').addEventListener('click',()=>openHall(state.collection+1));
q('#viewing-form').addEventListener('submit',e=>{e.preventDefault();const status=q('.form-status');status.textContent='Request received. The house will be in touch.';e.currentTarget.querySelector('button').disabled=true;setTimeout(()=>{e.currentTarget.reset();e.currentTarget.querySelector('button').disabled=false;status.textContent=''},4200)});

let audioCtx,master;
q('.sound-toggle').addEventListener('click',async()=>{
  state.sound=!state.sound;const b=q('.sound-toggle');b.setAttribute('aria-pressed',state.sound);q('.sound-label').textContent=state.sound?'Sound on':'Sound off';
  if(!audioCtx){audioCtx=new (window.AudioContext||window.webkitAudioContext)();master=audioCtx.createGain();master.gain.value=0;master.connect(audioCtx.destination);const osc=audioCtx.createOscillator(),gain=audioCtx.createGain(),filter=audioCtx.createBiquadFilter();osc.type='sine';osc.frequency.value=48;filter.type='lowpass';filter.frequency.value=180;gain.gain.value=.028;osc.connect(filter).connect(gain).connect(master);osc.start()}
  await audioCtx.resume();master.gain.cancelScheduledValues(audioCtx.currentTime);master.gain.linearRampToValueAtTime(state.sound?1:0,audioCtx.currentTime+.8);
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!qa('dialog[open]').length&&state.scene==='hall')showScene('pantheon');if(e.key==='ArrowRight'&&state.scene==='pantheon')setArch(state.arch+1);if(e.key==='ArrowLeft'&&state.scene==='pantheon')setArch(state.arch-1)});
document.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',`${e.clientX}px`);document.documentElement.style.setProperty('--my',`${e.clientY}px`);if(state.scene==='intro'&&innerWidth>900){const x=(e.clientX/innerWidth-.5)*9,y=(e.clientY/innerHeight-.5)*5;q('.temple-back').style.transform=`scale(1.04) translate(${-x}px,${-y}px)`}});
buildUI();renderHall(collections[0]);syncMap();
