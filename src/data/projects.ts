export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  period: string;
  type: string;
  url?: string;
  excerpt: string;
  context: string;
  objective: string;
  actions: string[];
  results: { label: string; value: string }[];
  testimonial?: { quote: string; author: string };
  cover?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: 'slowmundo',
    title: 'SLOWMUNDO',
    client: 'Alexis Jupin',
    sector: 'Agence de voyage bas carbone',
    period: '2026',
    type: 'Création complète du site',
    url: 'https://slowmundo.fr/',
    excerpt: "Agence de voyage bas carbone fondée par Alexis Jupin : voyages responsables, itinéraires sans avion et expériences locales.",
    context: "Alexis Jupin lançait Slowmundo, une agence de voyage bas carbone, et avait besoin d'un site qui porte à la fois le projet entrepreneurial, la promesse écologique et la crédibilité d'une offre commerciale. L'enjeu était de ne pas tomber dans le greenwashing esthétique : traduire une vraie démarche bas carbone en un parcours clair pour des voyageurs qui veulent comprendre comment on part différemment.",
    objective: "Construire une identité digitale complète pour une nouvelle agence : poser l'univers de marque, structurer l'offre de voyages, rassurer sur la démarche bas carbone et permettre les premières demandes de voyage dès la mise en ligne.",
    actions: [
      "Direction artistique et charte graphique sur mesure",
      "Architecture du site et rédaction des pages",
      "Mise en avant des engagements bas carbone et de la méthodologie",
      "Structure SEO-ready et balisage pour les requêtes « voyage bas carbone » et destinations",
      "Mise en ligne et formation à l'autonomie éditoriale",
    ],
    results: [
      { label: 'Livraison', value: '22 septembre 2026' },
      { label: 'Périmètre', value: 'Site complet + charte' },
      { label: 'Approche', value: "Design au service de l'engagement" },
    ],
  },
  {
    slug: 'catapulse',
    title: 'CATAPULSE',
    client: 'Catapulse',
    sector: 'Accompagnement & coaching dirigeants',
    period: '2025-2026',
    type: 'Accompagnement SEO sur 3 mois',
    url: 'https://catapulse.bzh/',
    excerpt: "Accompagnement et coaching pour dirigeants de TPE et PME.",
    context: "Catapulse accompagne les dirigeants de TPE et PME avec une approche très humaine, mais le site restait encore trop discret sur Google au regard de la qualité de l'offre. L'objectif du premier accompagnement était donc simple : améliorer la visibilité locale sur des requêtes réellement qualifiées sans promettre artificiellement une transformation immédiate.",
    objective: "Améliorer la visibilité locale sur des requêtes qualifiées de type 'coach dirigeant rennes' ou 'accompagnement dirigeant rennes', tout en restant crédible auprès d'une cible exigeante.",
    actions: [
      "Audit SEO complet du site existant",
      "Refonte de la structure des pages stratégiques",
      "Travail sémantique sur les requêtes locales",
      "Optimisation On-page et balisage",
      "Rédaction de contenus incarnés et crédibles",
    ],
    results: [
      { label: 'Meilleur ciblage', value: '"coach dirigeant rennes"' },
      { label: 'Durée', value: '3 mois' },
      { label: 'Type', value: 'SEO local' },
    ],
    testimonial: {
      quote: "Joris a été d'une grande écoute, pédagogue, et a su me proposer des solutions adaptées à mon timing et à mon budget pour mon projet d'optimisation SEO. Je recommande.",
      author: "Marine, Catapulse",
    },
  },
  {
    slug: 'esquisse-commune',
    title: 'ESQUISSE COMMUNE',
    client: 'Esquisse Commune',
    sector: 'Coworking & location de salles',
    period: '2024-2026',
    type: 'Conception complète du site, charte graphique, wording et page GMB',
    excerpt: "Location de bureaux et réservation de salles de réunion à Chartres-de-Bretagne.",
    context: "Le principal enjeu était de construire un univers complet à partir de zéro, sans se contenter d'une simple vitrine. Il fallait définir le ton, organiser les messages, créer une charte graphique crédible et rendre l'offre facile à comprendre pour des entreprises, indépendants ou équipes qui cherchent un lieu de travail ou une salle à réserver.",
    objective: "Créer une présence claire, rassurante et différenciante pour permettre aux visiteurs de comprendre rapidement le lieu, l'offre, complétée par une page Google Business Profile pour soutenir la présence locale.",
    actions: [
      "Direction artistique et charte graphique complète",
      "Wording et structure des pages",
      "Conception et mise en ligne du site",
      "Création et optimisation de la page Google Business Profile",
      "SEO local de fond",
    ],
    results: [
      { label: 'Conception', value: '3 mois' },
      { label: 'Périmètre', value: 'Site complet + GMB' },
      { label: 'Approche', value: 'Charte graphique sur mesure' },
    ],
  },
  {
    slug: 'sct',
    title: 'SCT',
    client: 'Société CT',
    sector: "Cabinet d'ingénierie et économie de la construction",
    period: '2023-2026',
    type: "Refonte totale, charte graphique et intégration de contenu",
    url: 'https://societe-ct.com/',
    excerpt: "Cabinet d'ingénierie et d'économie de la construction.",
    context: "SCT avait besoin d'une refonte totale pour aligner son image digitale avec le niveau de sérieux de ses missions. L'ancien site ne renvoyait plus la bonne perception et laissait de côté tout le travail de structuration de contenu nécessaire pour valoriser l'entreprise.",
    objective: "Reconstruction complète sur 3 mois avec un double enjeu : poser une direction visuelle claire et remettre le contenu au centre du site.",
    actions: [
      "Refonte UX et direction artistique",
      "Création de la charte graphique",
      "Intégration complète des contenus",
      "Mise en valeur des réalisations et des messages clés",
      "Structuration éditoriale",
    ],
    results: [
      { label: 'Durée', value: '3 mois' },
      { label: 'Périmètre', value: 'Refonte complète' },
      { label: 'Résultat', value: 'Image digitale alignée' },
    ],
    testimonial: {
      quote: "Joris a su être à l'écoute de ma demande tout en apportant son expertise pour métamorphoser mon site. Je souhaitais un site vitrine simple et épuré : il a parfaitement compris l'objectif et a su proposer une solution efficace, sans complexité inutile ni surcharge technologique. Un accompagnement sérieux et très professionnel que je recommande vivement.",
      author: "Rebecca, SCT",
    },
  },
  {
    slug: 'aidhabitat',
    title: "AID'HABITAT",
    client: "Aid'Habitat",
    sector: 'Rénovation énergétique & maintien à domicile',
    period: '2023-2026',
    type: 'Création complète, SEO de fond et maintenance mensuelle',
    excerpt: "Expert en rénovation énergétique et maintien à domicile.",
    context: "Le vrai sujet était la régularité. Dans un univers concurrentiel, un site seul ne suffit pas. Il fallait installer un travail SEO de fond, capable de faire progresser la présence organique mois après mois, tout en gardant un site propre, maintenu et cohérent.",
    objective: "Doter Aid'Habitat d'un support clair, rassurant et exploitable commercialement, puis maintenir un travail SEO continu avec un article par semaine.",
    actions: [
      "Conception complète du site",
      "Charte graphique et univers visuel",
      "Rédaction d'1 article SEO par semaine",
      "Entretien mensuel et reporting",
      "Suivi long terme sur 3 ans",
    ],
    results: [
      { label: 'Rythme', value: '1 article/semaine' },
      { label: 'Durée', value: '3 ans' },
      { label: 'Périmètre', value: 'Site + SEO + Maintenance' },
    ],
    testimonial: {
      quote: "Un grand merci à Joris pour son audit SEO gratuit de mon site internet. Ses conseils en référencement naturel et en stratégie digitale étaient clairs, pertinents et surtout très actionnables. Un accompagnement professionnel, sérieux et efficace que je recommande vivement à toute personne souhaitant améliorer sa visibilité en ligne.",
      author: "Valérian, Aid'Habitat",
    },
  },
];
