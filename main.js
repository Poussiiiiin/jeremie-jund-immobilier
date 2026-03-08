// ── ROUTER ──
// ── SEO/AEO DATA ──
const SEO = {
  'accueil':      {t:'Estimer son appartement ou maison à Sainte-Geneviève-des-Bois — Jérémie Jund (91700)',d:'Estimez votre appartement ou maison à Sainte-Geneviève-des-Bois (91700) gratuitement sous 24h. Jérémie Jund, conseiller immobilier local — Propriétés Privées. ☎ 06 43 75 88 50.'},
  'estimation':   {t:'Estimer mon appartement ou ma maison à Sainte-Geneviève-des-Bois — Gratuit 24h',d:'Estimation gratuite de votre appartement ou maison à Sainte-Geneviève-des-Bois (91700). Avis de valeur précis sous 24h, basé sur les transactions réelles du marché Essonne. Jérémie Jund.'},
  'biens':        {t:'Biens à vendre — Sainte-Geneviève-des-Bois et Essonne — Jérémie Jund',d:'Consultez les annonces immobilières de Jérémie Jund, conseiller Propriétés Privées en Essonne (91700). Maisons, appartements, terrains à vendre dans la Vallée de l\'Orge.'},
  'services-vendre':{t:'Vendre son bien immobilier à Sainte-Geneviève-des-Bois — Mandat VIP PP',d:'Vendez votre bien au meilleur prix à Sainte-Geneviève-des-Bois. Photos HDR, drone, visite virtuelle 360°, diffusion +100 portails, Mandat VIP Propriétés Privées. Réseau FNAIM.'},
  'services-acheter':{t:'Acheter un bien en Essonne (91) — Jérémie Jund Propriétés Privées',d:'Achetez votre bien en Essonne avec Jérémie Jund. Accès aux biens off-market, recherche personnalisée, accompagnement de A à Z jusqu\'à la signature notaire.'},
  'about':        {t:'À propos — Jérémie Jund, conseiller immobilier 91700',d:'Jérémie Jund, conseiller immobilier indépendant depuis 10 ans sur Sainte-Geneviève-des-Bois et la Vallée de l\'Orge. +50 transactions. Réseau Propriétés Privées.'},
  'contact':      {t:'Contact — Jérémie Jund Immobilier Sainte-Geneviève-des-Bois',d:'Contactez Jérémie Jund, conseiller immobilier à Sainte-Geneviève-des-Bois (91700). Disponible 7j/7. ☎ 06 43 75 88 50 — j.jund@proprietes-privees.com'},
  'blog':         {t:'Blog immobilier Essonne — Conseils vente et achat — Jérémie Jund',d:'Articles et conseils immobiliers pour vendre ou acheter en Essonne (91). Estimation, diagnostics, financement, compromis… par Jérémie Jund, expert local Sainte-Geneviève-des-Bois.'},
  'article-1':    {t:'Estimer son appartement ou sa maison à Sainte-Geneviève-des-Bois en 2025',d:'Comment estimer son appartement ou sa maison à Sainte-Geneviève-des-Bois (91700) ? Prix au m², méthodes d\'estimation, outils pros. Guide 2025 par Jérémie Jund, expert local Essonne.'},
  'article-2':    {t:'Les étapes d\'une vente immobilière en Essonne — Jérémie Jund',d:'De l\'estimation à l\'acte notarié : toutes les étapes d\'une vente immobilière expliquées par Jérémie Jund, conseiller à Sainte-Geneviève-des-Bois (91700).'},
  'article-3':    {t:'Mandat simple ou exclusif à Sainte-Geneviève-des-Bois ? — Jérémie Jund',d:'Comparatif mandat simple vs mandat exclusif pour vendre en Essonne. Avantages du Mandat VIP Propriétés Privées à Sainte-Geneviève-des-Bois (91700).'},
  'article-4':    {t:'Préparer son bien pour les visites immobilières en Essonne — Conseils 2025',d:'Comment préparer son appartement ou sa maison pour les visites à Sainte-Geneviève-des-Bois ? Home staging, photos HDR, conseils pratiques par Jérémie Jund.'},
  'article-5':    {t:'Diagnostics immobiliers obligatoires en Essonne (91) — Guide 2025',d:'Liste complète des diagnostics obligatoires pour vendre en Essonne en 2025 : DPE, amiante, plomb, électricité, gaz. Coûts et conseils par Jérémie Jund, 91700.'},
  'article-6':    {t:'Prix immobilier Sainte-Geneviève-des-Bois 2025 — Comment fixer le bon prix ?',d:'Prix au m² à Sainte-Geneviève-des-Bois en 2025, méthode des comparables, erreurs à éviter. Guide par Jérémie Jund, conseiller immobilier local Essonne (91700).'},
  'article-7':    {t:'Acheter en Essonne : checklist avant de faire une offre — Jérémie Jund',d:'Points essentiels à vérifier avant de faire une offre d\'achat en Essonne (91). Documents, diagnostics, copropriété, financement. Par Jérémie Jund, 91700.'},
  'article-8':    {t:'Compromis de vente en Essonne : délai rétractation et étapes 2025',d:'Tout savoir sur le compromis de vente en Essonne : délai de rétractation 10 jours, conditions suspensives, dépôt de garantie. Guide 2025 par Jérémie Jund.'},
  'article-9':    {t:'Crédit immobilier Essonne 2025 : obtenir son financement — Jérémie Jund',d:'Comment obtenir son crédit immobilier en Essonne en 2025 ? Taux, apport, PTZ, aides locales. Conseils de Jérémie Jund, conseiller immobilier Sainte-Geneviève-des-Bois.'},
  'article-10':   {t:'7 erreurs à éviter pour vendre son bien à Sainte-Geneviève-des-Bois',d:'Les 7 erreurs les plus fréquentes lors d\'une vente immobilière en Essonne et comment les éviter. Par Jérémie Jund, +50 ventes accompagnées sur le secteur 91700.'},
  'avis':{t:'Avis clients — Jérémie Jund Immobilier Sainte-Geneviève-des-Bois',d:'Avis Google et Immodvisor vérifiés de Jérémie Jund, conseiller immobilier à Sainte-Geneviève-des-Bois (91700). Note 4,9/5.'},
  'faq':          {t:'FAQ immobilier Sainte-Geneviève-des-Bois — Questions fréquentes',d:'Réponses aux questions fréquentes sur la vente et l\'achat immobilier à Sainte-Geneviève-des-Bois et en Essonne. Par Jérémie Jund, conseiller PP 91700.'},
  'services-neuf':{t:'Acheter dans le neuf en Essonne (91) — Jérémie Jund Propriétés Privées',d:'Investissez dans un programme immobilier neuf en Essonne avec Jérémie Jund. TVA réduite, PTZ, frais de notaire réduits — avantages et accompagnement complet.'},
  'services-pro': {t:'Locaux professionnels & commerciaux en Essonne — Jérémie Jund',d:'Achat, vente ou location de locaux professionnels, bureaux, fonds de commerce en Essonne (91). Jérémie Jund, conseiller immobilier d\'entreprise Propriétés Privées.'},
  'services-location':{t:'Mettre son bien en location en Essonne — Gestion locative — Jérémie Jund',d:'Confiez la mise en location de votre bien à Jérémie Jund, conseiller immobilier à Sainte-Geneviève-des-Bois. Sélection locataire, bail, gestion complète en Essonne (91).'},
  'actualites':    {t:'Actualités immobilières en Essonne — Jérémie Jund (91700)',d:'Toutes les actualités du marché immobilier français chaque semaine : taux, prix, réglementation. Décryptées par Jérémie Jund, conseiller immobilier à Sainte-Geneviève-des-Bois.'},
  'partenaires':   {t:'Partenaires de confiance — Jérémie Jund Immobilier Essonne',d:'Courtiers, notaire, diagnostiqueur, artisans : les partenaires sélectionnés par Jérémie Jund pour accompagner votre projet immobilier à Sainte-Geneviève-des-Bois (91700).'}
};

// ── FAQPage JSON-LD par article ──
const FAQ_SCHEMA = {
  'article-1': {q:[{q:'Comment estimer mon appartement à Sainte-Geneviève-des-Bois ?',a:'Pour estimer votre appartement à Sainte-Geneviève-des-Bois, Jérémie Jund effectue une évaluation gratuite basée sur les transactions réelles du secteur 91700. Le prix moyen est de 2 800 à 3 200 €/m² en 2025 selon le quartier, l\'étage et l\'état du bien.'},{q:'Comment estimer ma maison à Sainte-Geneviève-des-Bois ?',a:'L\'estimation d\'une maison à Sainte-Geneviève-des-Bois tient compte de la surface habitable, du terrain, de l\'état général et du quartier. Les maisons se situent entre 3 000 et 3 800 €/m² en 2025. Jérémie Jund se déplace gratuitement pour vous remettre un avis de valeur précis sous 24h.'},{q:'Quel est le prix au m² à Sainte-Geneviève-des-Bois en 2025 ?',a:'En 2025, le prix moyen à Sainte-Geneviève-des-Bois est de 2 800 à 3 200 €/m² pour les appartements et de 3 000 à 3 800 €/m² pour les maisons. Ces chiffres varient selon le quartier, la proximité du RER C et l\'état du bien.'},{q:'L\'estimation immobilière est-elle gratuite à Sainte-Geneviève-des-Bois ?',a:'Oui, l\'estimation de votre appartement ou maison par Jérémie Jund est totalement gratuite et sans engagement. Vous recevez un rapport écrit sous 24h.'}]},
  'article-3': {q:[{q:'Quelle est la différence entre mandat simple et mandat exclusif ?',a:'Le mandat simple permet de confier son bien à plusieurs agences, tandis que le mandat exclusif confie la vente à un seul conseiller qui s\'y investit pleinement. Le mandat exclusif génère en moyenne une vente 2 à 3 fois plus rapide à Sainte-Geneviève-des-Bois.'},{q:'Peut-on résilier un mandat exclusif à Sainte-Geneviève-des-Bois ?',a:'Oui, après 3 mois avec un préavis de 15 jours, ou avant en cas de manquement du conseiller à ses obligations.'},{q:'Le mandat exclusif coûte-t-il plus cher en Essonne ?',a:'Non, les honoraires sont identiques. La différence réside dans la qualité et la quantité de services inclus, notamment avec le Mandat VIP Propriétés Privées.'}]},
  'article-4': {q:[{q:'Faut-il faire des travaux avant de vendre son bien à Sainte-Geneviève-des-Bois ?',a:'Les petites réparations (joints, peinture, poignées) sont rentables. Les gros travaux rarement, l\'acheteur préférant choisir ses finitions. Une estimation terrain permet de trancher.'},{q:'À quelle heure organiser les visites immobilières en Essonne ?',a:'En milieu de journée pour profiter de la lumière naturelle. Évitez les heures de pointe RER C (8h-9h et 18h-19h) si le bien est proche de la gare.'}]},
  'article-5': {q:[{q:'Qui paie les diagnostics immobiliers lors d\'une vente ?',a:'Le vendeur paie les diagnostics. Ils doivent être remis à l\'acheteur dès la signature du compromis de vente.'},{q:'Combien coûtent les diagnostics immobiliers à Sainte-Geneviève-des-Bois ?',a:'Entre 150 et 300 € pour un appartement, entre 300 et 600 € pour une maison individuelle selon la surface et les diagnostics requis. Le Mandat VIP PP prend en charge jusqu\'à 150 €.'},{q:'Peut-on vendre sans diagnostics en Essonne ?',a:'Non. L\'absence de diagnostics obligatoires peut entraîner la nullité de la vente ou engager la responsabilité du vendeur après la vente.'}]},
  'article-6': {q:[{q:'Quel est le prix moyen au m² à Sainte-Geneviève-des-Bois en 2025 ?',a:'En 2025, le prix moyen est de 2 800 à 3 200 €/m² pour les appartements et de 3 000 à 3 800 €/m² pour les maisons, selon le quartier et l\'état du bien.'},{q:'En combien de temps se vend un bien à Sainte-Geneviève-des-Bois ?',a:'Un bien correctement estimé et bien présenté se vend en moyenne en 6 à 10 semaines sur le secteur du 91700 et la Vallée de l\'Orge.'},{q:'L\'estimation immobilière en ligne est-elle fiable pour l\'Essonne ?',a:'Les outils en ligne donnent une première fourchette utile mais ne remplacent pas une estimation terrain, qui seule prend en compte l\'orientation, l\'état, le vis-à-vis et les travaux.'}]},
  'article-7': {q:[{q:'Peut-on se rétracter après avoir fait une offre d\'achat en Essonne ?',a:'Une offre acceptée engage les deux parties. La rétractation sans condition n\'est possible qu\'après la signature du compromis, dans le délai légal de 10 jours.'},{q:'Combien de temps entre l\'offre et la signature notaire en Essonne ?',a:'En général 3 à 4 mois : environ 1 mois pour le compromis, puis 2 à 3 mois pour les conditions suspensives et la préparation de l\'acte authentique.'}]},
  'article-8': {q:[{q:'Quel est le délai de rétractation après un compromis de vente ?',a:'L\'acheteur dispose de 10 jours après la notification du compromis pour se rétracter sans pénalité ni justification. Ce délai bénéficie uniquement à l\'acheteur.'},{q:'Combien de temps entre le compromis et l\'acte de vente à Sainte-Geneviève-des-Bois ?',a:'En moyenne 2 à 3 mois. Ce délai permet à l\'acheteur d\'obtenir son prêt et au notaire de réunir toutes les pièces nécessaires.'},{q:'Le vendeur peut-il se rétracter après le compromis de vente ?',a:'Non. Le vendeur ne bénéficie d\'aucun délai de rétractation légal. S\'il refuse de vendre sans motif légitime, l\'acheteur peut exiger l\'exécution forcée devant le tribunal.'}]},
  'article-9': {q:[{q:'Quels sont les taux immobiliers en 2025 en Essonne ?',a:'En 2025, les taux moyens pour un crédit sur 20 ans se situent entre 3,2 et 3,8 % selon le profil et l\'établissement. Un bon dossier avec apport permet d\'obtenir des conditions préférentielles.'},{q:'Peut-on acheter sans apport en Essonne en 2025 ?',a:'C\'est difficile en 2025. Seuls les profils très solides peuvent obtenir un financement à 110 %. Dans la plupart des cas, un apport d\'au moins 10 % est requis.'},{q:'Qu\'est-ce que le PTZ pour acheter à Sainte-Geneviève-des-Bois ?',a:'Le Prêt à Taux Zéro (PTZ) est accessible aux primo-accédants en zone B1 (dont SGDB). Il permet de financer une partie de l\'achat sans intérêts, sous conditions de revenus.'}]},
  'article-10': {q:[{q:'Combien de temps faut-il pour vendre une maison à Sainte-Geneviève-des-Bois ?',a:'Un bien correctement estimé et bien présenté se vend en 6 à 10 semaines sur le secteur du 91700. Un bien surestimé peut rester plusieurs mois sans offre sérieuse.'},{q:'Vaut-il mieux vendre avant d\'acheter ou acheter avant de vendre en Essonne ?',a:'Vendre avant d\'acheter est généralement recommandé pour éviter le double crédit. Un prêt-relais peut être une solution si vous trouvez le bien idéal avant d\'avoir vendu.'},{q:'Quels sont les frais de notaire pour une vente en Essonne ?',a:'Les frais de notaire représentent environ 7 à 8 % du prix pour un bien ancien. Pour un appartement à 200 000 € à Sainte-Geneviève-des-Bois, comptez environ 15 000 € de frais.'}]}
};

function injectFAQSchema(articleId){
  const old=document.getElementById('faq-schema-ld');
  if(old)old.remove();
  const data=FAQ_SCHEMA[articleId];
  if(!data)return;
  const schema={
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": data.q.map(item=>({
      "@type":"Question",
      "name":item.q,
      "acceptedAnswer":{"@type":"Answer","text":item.a}
    }))
  };
  const s=document.createElement('script');
  s.type='application/ld+json';
  s.id='faq-schema-ld';
  s.textContent=JSON.stringify(schema);
  document.head.appendChild(s);
}

let _navHistory = ['accueil'];
function showPage(id, pushHistory){
  if(pushHistory===undefined)pushHistory=true;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById('pg-'+id);
  if(pg){pg.classList.add('active');setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),10);}
  // SEO meta update
  const s=SEO[id]||SEO['accueil'];
  document.getElementById('page-title').textContent=s.t;
  document.getElementById('page-desc').setAttribute('content',s.d);
  // FAQPage schema injection pour les articles
  if(id.startsWith('article-'))injectFAQSchema(id);
  // History management
  if(pushHistory){
    if(_navHistory[_navHistory.length-1]!==id)_navHistory.push(id);
    history.pushState({page:id},'',window.location.pathname+'#'+id);
  }
  // Show/hide back button
  const backBtn=document.getElementById('floatBackBtn');
  if(backBtn)backBtn.style.display=(_navHistory.length>1&&id!=='accueil')?'flex':'none';
  // Re-trigger reveals
  setTimeout(()=>{
    pg && pg.querySelectorAll('.reveal:not(.visible)').forEach(el=>{
      const r=el.getBoundingClientRect();
      if(r.top<window.innerHeight)el.classList.add('visible');
    });
  },50);
}
function goBack(){
  if(_navHistory.length>1){
    _navHistory.pop();
    const prev=_navHistory[_navHistory.length-1];
    showPage(prev,false);
    history.replaceState({page:prev},'',window.location.pathname+'#'+prev);
  } else {
    showPage('accueil',false);
  }
}
window.addEventListener('popstate',function(e){
  if(e.state&&e.state.page){
    _navHistory.pop();
    showPage(e.state.page,false);
  }
});

// ── SCROLL EFFECTS ──
window.addEventListener('scroll',()=>{
  const h=document.getElementById('header');
  h.classList.toggle('scrolled',window.scrollY>10);
  const bt=document.getElementById('backTop');
  bt.classList.toggle('visible',window.scrollY>400);
  // Reveal on scroll
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight*0.88)el.classList.add('visible');
  });
});

// ── MOBILE NAV ──
function openMobileNav(){document.getElementById('mobileNav').classList.add('open');document.body.style.overflow='hidden'}
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');document.body.style.overflow=''}

// ── FAQ TOGGLE ──
function toggleFaq(q){
  const a=q.nextElementSibling;
  const isOpen=a.classList.contains('open');
  // Close all in same list
  q.closest('.faq-list')&&q.closest('.faq-list').querySelectorAll('.faq-a.open').forEach(x=>{x.classList.remove('open');x.previousElementSibling.classList.remove('open')});
  if(!isOpen){a.classList.add('open');q.classList.add('open');}
}

// ── FORM SUBMIT ──
function submitForm(e, id, formName){
  e.preventDefault();
  const form = e.target;
  const hp = form.querySelector('[name="honeypot"]');
  if(hp && hp.value) return; // honeypot spam check

  const btn = form.querySelector('button[type="submit"]');
  if(btn){ btn.disabled = true; btn.textContent = 'Envoi en cours…'; }

  const data = new FormData(form);
  data.append('form-name', formName);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString()
  })
  .then(() => {
    form.style.display = 'none';
    const s = document.getElementById(id);
    if(s){ s.style.display = 'block'; }
  })
  .catch(() => {
    if(btn){ btn.disabled = false; btn.textContent = 'Envoyer mon message →'; }
    alert('Une erreur est survenue. Merci de me contacter directement au 06 43 75 88 50.');
  });
}

// ── NOTE SELECTOR ──
function setNote(n,btn){
  document.querySelectorAll('.note-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
}

// ── COOKIES ──
function acceptCookies(level){
  document.getElementById('cookieBanner').classList.add('hidden');
  localStorage.setItem('cookie-consent',level);
}
// ── HERO PHOTO EFFECT ──
window.addEventListener('DOMContentLoaded',()=>{
  const bg = document.getElementById('heroBg');
  if(bg){ bg.classList.add('loaded'); }
  if(localStorage.getItem('cookie-consent'))document.getElementById('cookieBanner').classList.add('hidden');
  document.querySelectorAll('.reveal').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight)el.classList.add('visible');
  });
});

// Locale pages (generate generically)
['bretigny','fleury','morsang','villemoisson','viry'].forEach(slug=>{
  // Locale pages now static — no stub needed
});


