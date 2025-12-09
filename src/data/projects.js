// src/data/projects.js
// Jeu de données central pour les pages Works et Project.
// Remplace les images et textes par tes contenus réels.
import legendesImg from './img/legendessuisses.png'
import tbmoodboardImg from './img/tbmoodboard.png'
import aurealithImg from './img/aurealith.png'
import musicprojectImg from './img/musicproject.png'
import socialpulseImg from './img/socialpulse.png'

export default [
  {
    id: "SocialPulse",
    title: "Social Pulse",
    type: "Design & UX / UI",
    year: "2024",
    image: socialpulseImg,
    short: "Maquettes et flows d’un dashboard pour suivre la performance des réseaux sociaux en temps réel.",
    description:
      "Social Pulse rassemble KPI clés (engagement, reach, impressions, trends) dans un dashboard clair et actionnable. J’ai conçu les flows de navigation, les composants réutilisables (cartes KPI, graphiques, timeline), des vues filtrées par période et canal. Objectifs : visibilité rapide des tendances, priorisation des actions et expérience responsive pour usage desktop & tablette.",
    role: "Tous (projet seul)",
    tech: ["Figma"]
  },
  {
    id: "MusicProject",
    title: "Music Project",
    type: "Programmation",
    year: "2024",
    image: musicprojectImg,
    short: "Site interactif pour explorer genres musicaux avec visualisations et filtres dynamiques.",
    description:
      "Music Project propose une exploration visuelle des genres et sous-genres musicaux. J’ai implémenté des visualisations interactives (graphes, etc) pour révéler similitudes et influences, des filtres avancés (pays, décennie, tempo) et un mini-player pour pré-écoute. Côté technique : chargement des assets, optimisation des interactions D3.js, et architecture front-end modulaire pour faciliter l’ajout de nouvelles sources de données.",
    role: "Développeur",
    tech: ["Vue.js", "D3.js"],
    external: ""
  },
  {
    id: "LegendesSuisses",
    title: "Legendes suisses",
    type: "Design & UX / UI",
    year: "2025",
    image: legendesImg,
    short: "Plateforme immersive racontant des légendes suisses via cartes et récits illustrés.",
    description:
      "Legendes Suisses est une expérience narrative qui mêle storytelling, cartographie et illustrations. J’ai conçu des parcours thématiques, une carte interactive pour localiser chaque légende, et des mises en page optimisées pour la lecture. Le projet met l’accent sur l’accessibilité du contenu, la lisibilité et l’immersion visuelle pour encourager la découverte culturelle.",
    role: "Designer & UX/UI",
    tech: ["D3", "Figma"],
    external: ""
  },
  {
    id: "AureaLith",
    title: "AureaLith",
    type: "ECommerce",
    year: "2025",
    image: aurealithImg,
    short: "Boutique Shopify dédiée aux soins pour femmes, axée sur l’expérience produit et fidélisation.",
    description:
      "AureaLith est une boutique orientée produit et storytelling : fiches détaillées, guides d’utilisation, bundles et upsell intelligents. J’ai conçu l’arborescence produit, optimisé le funnel checkout sur Shopify et travaillé les micro-interactions pour rassurer l’acheteuse (avis, garanties, politique retours). Le focus technique portait sur la performance, l’accessibilité et les optimisations SEO pour pages produits.",
    role: "Tous (projet seul)",
    tech: ["Shopify"],
    external: ""
  },
  {
    id: "TBMoodboard",
    title: "TB Moodboard",
    type: "Design & UX / UI",
    year: "2025",
    image: tbmoodboardImg,
    short: "Refonte du site présentant les travaux de bachelor de la HEIG-VD : clair et filtrable.",
    description:
      "TB Moodboard restructure la présentation des travaux de bachelor pour faciliter la découverte et la comparaison des projets : grille filtrable, pages projet détaillées, et mise en avant des visuels média. J’ai conçu une navigation centrée sur les parcours étudiants, des pages modulaires pour différents types de livrables, et des templates exportables pour les futures promotions. Le résultat : meilleure lisibilité des travaux et parcours visiteur repensé.",
    role: "Création des maquettes",
    tech: ["Figma", "Lovable"],
    external: ""
  }
];