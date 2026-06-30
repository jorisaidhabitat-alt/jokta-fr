# JOKTA — jokta.fr

Site officiel de JOKTA, freelance SEO à Rennes. Construit avec Astro (SSG), Tailwind CSS et déployé sur Vercel.

## Stack

- **Astro 5** — multi-pages, pré-rendu statique, JS minimal envoyé au client
- **Tailwind CSS v4** — design system
- **Sharp** — optimisation d'images (WebP)
- **Tarteaucitron** — bannière cookies RGPD
- **Sitemap automatique** via `@astrojs/sitemap`

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert le build en local
```

## Configuration

Copier `.env.example` vers `.env` et renseigner :

- `PUBLIC_GSC_VERIFICATION` — la valeur du meta tag Google Search Console
- `PUBLIC_GA4_ID` — l'ID GA4 (G-XXXXXXXXXX) — à reporter aussi dans `src/components/CookieBanner.astro`

## Structure

```
src/
├─ data/          # contenu typé (services, projets, témoignages, site)
├─ components/    # composants Astro réutilisables
├─ layouts/       # layout principal avec metas et JSON-LD
├─ pages/         # routes statiques
└─ styles/        # global.css avec @theme Tailwind v4
public/
├─ img/           # images optimisées (WebP)
│  └─ originals/  # sources avant conversion
└─ cases/         # screenshots cas clients
scripts/
├─ convert-images.mjs         # convertit /img/originals → WebP
└─ optimize-public-images.mjs # convertit tout PNG/JPG public en WebP
```

## Déploiement Vercel

1. Pousser sur GitHub
2. Importer le repo dans Vercel (framework détecté automatiquement)
3. Renseigner les variables d'environnement `PUBLIC_GSC_VERIFICATION` et `PUBLIC_GA4_ID`
4. Pointer le domaine `jokta.fr` vers Vercel (DNS)
