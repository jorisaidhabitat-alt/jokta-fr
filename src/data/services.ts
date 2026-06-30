export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  benefits: string[];
  pricing: string;
  duration: string;
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'seo',
    title: 'Référencement naturel (SEO)',
    shortTitle: 'SEO',
    tagline: "Améliorez votre visibilité durable sur Google",
    description: "J'améliore votre visibilité sur Google avec un travail technique, sémantique et éditorial adapté à votre activité. Audit, optimisation On-page, netlinking, contenu : un dispositif complet pour faire progresser votre présence organique sur les requêtes qui comptent.",
    benefits: [
      "Audit technique complet",
      "Stratégie de contenu et de mots-clés",
      "Optimisation On-page & UX",
      "Netlinking & E-E-A-T",
      "Suivi mensuel des positions et du trafic",
    ],
    pricing: 'À partir de 500 € / mois en accompagnement',
    duration: '3 à 6 mois minimum pour observer les premiers résultats',
  },
  {
    slug: 'sea',
    title: 'Publicité en ligne (SEA)',
    shortTitle: 'SEA',
    tagline: "Générez des contacts qualifiés via Google & Social Ads",
    description: "Je mets en place et j'ajuste vos campagnes publicitaires Google Ads et Social Ads pour générer des contacts plus qualifiés. Structure de compte propre, copywriting d'annonces, tracking avancé et A/B testing continu : un dispositif lisible et pilotable.",
    benefits: [
      "Structure de compte granulaire",
      "Rédaction d'annonces (copywriting)",
      "Tracking avancé (GTM / GA4)",
      "A/B testing continu",
      "Reporting mensuel clair",
    ],
    pricing: 'À partir de 500 € / mois (hors budget média)',
    duration: 'Résultats visibles dès les premières semaines',
  },
  {
    slug: 'creation-site',
    title: 'Création de site web',
    shortTitle: 'Création site',
    tagline: "Des sites clairs, rapides et pensés pour convertir",
    description: "Je crée des sites clairs, rapides et bien structurés, pensés pour vos visiteurs et pour le référencement. Design UI/UX brutalist ou plus classique selon votre univers, développement Webflow ou WordPress, optimisation mobile first et intégration de vos outils marketing.",
    benefits: [
      "Design UI/UX sur mesure",
      "Développement Webflow ou WordPress",
      "Optimisation Mobile First",
      "Intégration d'outils marketing",
      "Structure SEO-ready",
    ],
    pricing: 'Sur devis selon périmètre',
    duration: "De 4 à 12 semaines selon l'ampleur",
  },
  {
    slug: 'audit-seo',
    title: 'Audit SEO',
    shortTitle: 'Audit SEO',
    tagline: "Identifiez précisément les leviers de croissance",
    description: "Audit complet de votre site et de votre écosystème digital pour identifier les freins techniques, les opportunités sémantiques et les axes prioritaires d'amélioration. Livrable clair et actionnable, avec une roadmap priorisée.",
    benefits: [
      "Audit technique (crawl, performance, indexation)",
      "Audit sémantique et concurrentiel",
      "Analyse de la structure et du maillage interne",
      "Recommandations priorisées",
      "Roadmap actionnable",
    ],
    pricing: 'À partir de 750 € pour un audit complet',
    duration: '1 à 2 semaines',
  },
];
