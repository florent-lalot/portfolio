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
    projet1: [],
    projet2: [],
    projet3: [],
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
    projet1: [],
    projet2: [],
    projet3: [],
    projet4: [],
    projet5: [],
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
    projet1: "",
    projet2: "",
    projet3: "",
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
    projet1: "",
    projet2: "",
    projet3: "",
    projet4: "",
    projet5: "",
  },
};

// -------------------------
// CARROUSELS (un par projet)
// -------------------------

// Mémorise la dernière catégorie affichée pour chaque projet
const lastCategory = {};

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
    const message = document.createElement("p");
    message.className = "carousel-empty";
    message.textContent = "Images à venir…";
    track.appendChild(message);
    return;
  }

  // Ajoute les images (2 fois pour un défilement infini)
  [...list, ...list].forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
  });
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
