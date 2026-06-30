export type Testimonial = {
  author: string;
  role: string;
  quote: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    author: 'Marine',
    role: 'Catapulse',
    quote: "Joris a été d'une grande écoute, pédagogue, et a su me proposer des solutions adaptées à mon timing et à mon budget pour mon projet d'optimisation SEO. Je recommande.",
    rating: 5,
  },
  {
    author: 'Valérian',
    role: "Aid'Habitat",
    quote: "Un grand merci à Joris pour son audit SEO gratuit de mon site internet. Ses conseils en référencement naturel et en stratégie digitale étaient clairs, pertinents et surtout très actionnables. Un accompagnement professionnel, sérieux et efficace que je recommande vivement à toute personne souhaitant améliorer sa visibilité en ligne.",
    rating: 5,
  },
  {
    author: 'Rebecca',
    role: 'SCT',
    quote: "Joris a su être à l'écoute de ma demande tout en apportant son expertise pour métamorphoser mon site. Je souhaitais un site vitrine simple et épuré : il a parfaitement compris l'objectif et a su proposer une solution efficace, sans complexité inutile ni surcharge technologique. Un accompagnement sérieux et très professionnel que je recommande vivement.",
    rating: 5,
  },
];
