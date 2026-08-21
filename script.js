// Animation au scroll
const elements = document.querySelectorAll(".fade, .slide");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
});

elements.forEach((el) => observer.observe(el));

// -------------------------
// MENU MOBILE (hamburger)
// -------------------------

const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector("header nav");

if (navToggle && headerNav) {
  navToggle.addEventListener("click", () => {
    const open = headerNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
  });

  // Referme le menu quand on clique sur un lien
  headerNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      headerNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// -------------------------
// IMAGES DES CARROUSELS
// -------------------------
// Chaque projet possède son propre carrousel.
// Ajoute simplement les chemins d'images au fur et à mesure.

const images = {
  // PROJET 1 : Expérience de 4 ans chez AGS Facilities
  ags: {
    decisionnelle: [
      "img/decisionnelle1.png",
      "img/decisionnelle2.png",
      "img/decisionnelle3.png",
      "img/decisionnelle4.png",
      "img/decisionnelle5.png",
      "img/decisionnelle6.png",
      "img/decisionnelle7.png",
      "img/decisionnelle8.png",
      "img/decisionnelle9.png",
    ],
    gestion: [
      "img/gestion1.png",
      "img/gestion2.png",
      "img/gestion3.png",
      "img/gestion4.png",
      "img/gestion5.png",
      "img/gestion6.png",
      "img/gestion7.png",
      "img/gestion8.png",
      "img/gestion9.png",
    ],
    communication: [
      "img/communication1.png",
      "img/communication2.png",
      "img/communication3.png",
      "img/communication4.png",
      "img/communication5.png",
    ],
  },

  // PROJET 2 : Formation Développeur IA
  // Remplis les tableaux au fur et à mesure de ta formation
  // ex : projet1: ["img/formation1-1.png", "img/formation1-2.png"]
  formation: {
    projet1: [
      "img/formation1-1.png",
      "img/formation1-2.png",
      "img/formation1-3.png",
      "img/formation1-4.png",
      "img/formation1-5.png",
    ],
    projet2: [
      "img/formation2-1.png",
      "img/formation2-2.png",
      "img/formation2-3.png",
      "img/formation2-4.png",
      "img/formation2-5.png",
      "img/formation2-6.png",
    ],
    projet3: [
      "img/formation3-1.png",
      "img/formation3-2.png",
      "img/formation3-3.png",
      "img/formation3-4.png",
      "img/formation3-5.png",
    ],
    projet4: [],
    projet5: [],
    projet6: [],
    projet7: [],
    projet8: [],
    projet9: [],
    projet10: [],
    projet11: [],
    projet12: [],
  },

  // PROJET 3 : Projets personnels
  // Remplis les tableaux au fur et à mesure
  perso: {
    projet1: [
      "img/projet1-1.png",
      "img/projet1-2.png",
      "img/projet1-3.png",
      "img/projet1-4.png",
      "img/projet1-5.png",
    ],
    projet2: ["img/projet2-1.png", "img/projet2-2.png", "img/projet2-3.png"],
    projet3: [
      "img/projet3-1.png",
      "img/projet3-2.png",
      "img/projet3-3.png",
      "img/projet3-4.png",
      "img/projet3-5.png",
    ],
    projet4: [
      "img/projet4-1.png",
      "img/projet4-2.png",
      "img/projet4-3.png",
      "img/projet4-4.png",
    ],
    projet5: [
      "img/projet5-1.png",
      "img/projet5-2.png",
      "img/projet5-3.png",
      "img/projet5-4.png",
    ],
  },
};

// -------------------------
// ÉTAPES RÉALISÉES DES PROJETS DE FORMATION
// -------------------------
// Texte affiché entre les tuiles et le carrousel quand on clique sur un projet.
// Remplis les textes au fur et à mesure de ta formation.
// Tu peux utiliser <br> pour les sauts de ligne, par exemple :
// projet1: "Étape 1 : analyse du besoin,<br>Étape 2 : développement de l'API,<br>Étape 3 : tests et validation."

const steps = {
  formation: {
    projet1:
      "Réalisation d’un site d'agence de voyage en HTML/CSS et portfolio d'architecte enrichi par une couche JavaScript permettant l’intégration d’une API, la gestion d’une authentification et la manipulation dynamique du DOM.",
    projet2:
      "Développement d'un pipeline Python consommant l'API d'inférence Hugging Face (SegFormer) pour segmenter automatiquement les vêtements sur des photos d'influenceurs. Évaluation rigoureuse des performances (métrique IoU, méthodologie validation/test), gestion robuste des erreurs réseau, et estimation chiffrée du coût de passage à l'échelle (500 000 images/mois)",
    projet3:
      "Application de recherche de recettes développée avec React et Next.js à partir d'une maquette Figma : recherche en temps réel, filtres par tags cumulables et navigation dynamique entre 50 recettes.",
    projet4: "",
    projet5: "",
    projet6: "",
    projet7: "",
    projet8: "",
    projet9: "",
    projet10: "",
    projet11: "",
    projet12: "",
  },
  perso: {
    projet1:
      "Application web de commande de pizzas développé en HTML, CSS, Vanilla JS, Web Storage API, interface client pour parcourir le catalogue, personnaliser sa pizza et choisir un créneau de retrait. Côté pizzaiolo, un tableau de bord en temps réel affiche la charge des services, les commandes en cours et permet d'en ajouter ou supprimer directement depuis le dashboard.",
    projet2:
      "Application web de réservation de services de nettoyage automobile, développée en JavaScript vanilla sans framework. Elle intègre un système de panier dynamique, des popups de réservation avec géocodage via l'API adresse.gouv.fr et cartographie Leaflet, ainsi qu'un tableau de bord admin en temps réel pour la gestion des créneaux horaires. Les données sont persistées en localStorage, avec une logique de filtrage par date, calcul de durée et affichage de la charge par créneau.",
    projet3:
      "Plateforme SaaS de gestion de maintenance (GMAO) pensée pour les gestionnaires multi-sites. Développée de A à Z avec React, Node.js, SQLite et Docker, elle permet la création et le suivi des demandes d'intervention, l'affectation de prestataires, la planification avec notifications email automatiques, et la génération de rapports PDF. L'application intègre une messagerie temps réel (Socket.io), un système de devis et facturation, ainsi qu'un portail dédié aux prestataires. Déployée en production sur directpresta.fr avec SSL, Google Analytics et référencement SEO.",
    projet4:
      "Plateforme d'intermédiation en gestion de maintenance (GMAO), développée en React et Node.js avec SQLite. L'application place un intermédiaire entre des clients multi-sites (hôtellerie, salles de sport) et un pool de prestataires : les demandes d'intervention remontent des sites, sont validées puis transmises, et l'intermédiaire missionne le prestataire, retraite ses devis et factures en y appliquant une commission paramétrable, et les réémet sous sa propre marque. Six rôles utilisateurs, messagerie temps réel, génération de documents PDF et suivi des échéances de paiement complètent l'ensemble.",
    projet5:
      "Plateforme web de prédiction football basée sur le machine learning, développée en Python avec Streamlit. Elle exploite un ensemble de modèles RF, LightGBM, XGBoost et meta-stacking calibré, entraîné sur plus de 49 000 matchs historiques issus de 16 divisions européennes. Le système intègre des données en temps réel (API Football, football-data.org) pour enrichir les prédictions avec la dimension joueurs (valeurs marchandes, statistiques individuelles), les classements et les blessures. Le tout est sécurisé par une authentification et déployé via Docker/PostgreSQL sur serveur Hetzner.",
  },
};

// -------------------------
// CARROUSELS (un par projet)
// -------------------------

// Mémorise la dernière catégorie affichée pour chaque projet
const lastCategory = {};

// Vitesse de défilement des carrousels, en pixels par seconde.
// Identique pour tous les carrousels, quel que soit le nombre d'images :
// la boucle ne "revient au début" qu'une fois toutes les images parcourues.
const CAROUSEL_SPEED = 100;

// Largeur d'une image + espace entre les images (20px).
// La largeur est lue sur l'image affichée : 450px sur ordinateur,
// 300px sur mobile (voir la règle @media dans style.css).
function carouselImageStep(track) {
  const img = track.querySelector("img");
  const width = img ? parseFloat(getComputedStyle(img).width) : 450;
  return width + 20;
}

// Charge les images d'une catégorie dans le carrousel du projet
function loadImages(project, category) {
  const carouselSection = document.querySelector(
    `[data-carousel="${project}"]`,
  );
  if (!carouselSection) return;

  const track = carouselSection.querySelector(".carousel-track");
  track.innerHTML = ""; // reset

  const list = (images[project] && images[project][category]) || [];

  // Aucune image pour le moment
  if (list.length === 0) {
    track.style.animation = "none";
    const message = document.createElement("p");
    message.className = "carousel-empty";
    message.textContent = "Images à venir…";
    track.appendChild(message);
    return;
  }

  // Ajoute les images (2 fois pour un défilement infini sans à-coup)
  [...list, ...list].forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
  });

  // Distance exacte d'une série complète d'images :
  // le défilement parcourt toutes les images avant de boucler,
  // et la durée est calculée pour garder une vitesse constante.
  const distance = list.length * carouselImageStep(track);
  track.style.setProperty("--scroll-distance", `-${distance}px`);
  track.style.animation = `scroll ${distance / CAROUSEL_SPEED}s linear infinite`;
}

// Charge le texte des étapes réalisées dans le bloc du projet
function loadSteps(project, category) {
  const stepsSection = document.querySelector(`[data-steps="${project}"]`);
  if (!stepsSection) return;

  const text = (steps[project] && steps[project][category]) || "";
  stepsSection.querySelector("p").innerHTML =
    text !== "" ? text : "Description des étapes à venir…";
}
// -------------------------
// GESTION DU CLIC SUR LES CARDS
// -------------------------

document.querySelectorAll(".card[data-project]").forEach((card) => {
  card.addEventListener("click", () => {
    const project = card.dataset.project;
    const category = card.dataset.category;
    const carouselSection = document.querySelector(
      `[data-carousel="${project}"]`,
    );
    const stepsSection = document.querySelector(`[data-steps="${project}"]`);
    if (!carouselSection) return;

    // Si on clique sur la même card → on ouvre/ferme le carrousel (et les étapes)
    if (category === lastCategory[project]) {
      carouselSection.classList.toggle("hidden");
      if (stepsSection) stepsSection.classList.toggle("hidden");
      return;
    }

    // Sinon → on charge les étapes + les images et on affiche le tout
    lastCategory[project] = category;
    loadImages(project, category);
    loadSteps(project, category);
    carouselSection.classList.remove("hidden");
    if (stepsSection) stepsSection.classList.remove("hidden");
  });
});

// -------------------------
// SLIDER "PROJETS RÉALISÉS"
// (défilement d'un projet à la fois)
// -------------------------

const projectsTrack = document.querySelector(".projects-track");
const projectPanels = document.querySelectorAll(".project-panel");
let projectIndex = 0;

function updateProjectsSlider() {
  projectsTrack.style.transform = `translateX(-${projectIndex * 100}%)`;

  const prevBtn = document.querySelector(
    '.slider-btn.prev[data-slider="projects"]',
  );
  const nextBtn = document.querySelector(
    '.slider-btn.next[data-slider="projects"]',
  );
  prevBtn.disabled = projectIndex === 0;
  nextBtn.disabled = projectIndex === projectPanels.length - 1;
}

document
  .querySelector('.slider-btn.prev[data-slider="projects"]')
  .addEventListener("click", () => {
    if (projectIndex > 0) projectIndex--;
    updateProjectsSlider();
  });

document
  .querySelector('.slider-btn.next[data-slider="projects"]')
  .addEventListener("click", () => {
    if (projectIndex < projectPanels.length - 1) projectIndex++;
    updateProjectsSlider();
  });

updateProjectsSlider();

// -------------------------
// SLIDER "EXPÉRIENCES PROFESSIONNELLES"
// (défilement carte par carte)
// -------------------------

const expTrack = document.querySelector(".exp-track");
const expViewport = document.querySelector(".exp-viewport");
const expCards = document.querySelectorAll(".exp-card");
let expIndex = 0;

function expStep() {
  // largeur d'une carte + l'espace entre les cartes
  const card = expCards[0];
  const gap = 20;
  return card.offsetWidth + gap;
}

function expMaxIndex() {
  const visible = Math.max(1, Math.floor(expViewport.offsetWidth / expStep()));
  return Math.max(0, expCards.length - visible);
}

function updateExpSlider() {
  const max = expMaxIndex();
  if (expIndex > max) expIndex = max;

  expTrack.style.transform = `translateX(-${expIndex * expStep()}px)`;

  const prevBtn = document.querySelector(
    '.slider-btn.prev[data-slider="experiences"]',
  );
  const nextBtn = document.querySelector(
    '.slider-btn.next[data-slider="experiences"]',
  );
  prevBtn.disabled = expIndex === 0;
  nextBtn.disabled = expIndex === max;
}

document
  .querySelector('.slider-btn.prev[data-slider="experiences"]')
  .addEventListener("click", () => {
    if (expIndex > 0) expIndex--;
    updateExpSlider();
  });

document
  .querySelector('.slider-btn.next[data-slider="experiences"]')
  .addEventListener("click", () => {
    if (expIndex < expMaxIndex()) expIndex++;
    updateExpSlider();
  });

window.addEventListener("resize", updateExpSlider);
updateExpSlider();
