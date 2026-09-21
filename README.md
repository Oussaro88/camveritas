# Camveritas — socle

Site de reviews cam-only, angle transparence. Next.js 15.

## État
- **Build : vert.** `npm install && npm run build` compile ; `npm run dev` pour le local.
- 9 plateformes cam (Chaturbate, Stripchat, LiveJasmin, BongaCams, CamSoda, Jerkmate, MyFreeCams, Cam4, ImLive).
- Structure : home-pilier, `/best/cam-sites` (comparaison), `/review/[slug]`, 3 guides, token-calc, about/faq/privacy.

## Règle centrale : aucun éditorial importé
Rien de la prose nsfwranker n'est dans ce projet. Chaque review a ses champs
éditoriaux VIDES (`summary`, `reviewContent`, `pros`, `cons`, scores = sentinelle `TO_WRITE`).
Seuls les **faits** sont repris : nom, URL, prix affiché, flags techniques, liens affiliés,
et les données techniques mesurées dans `siteData.ts` (trackers, billing descriptor…).

## Anti-pénalité câblé
- `rating=adult` + RTA sur toutes les pages.
- **noindex automatique** tant qu'une review/guide n'est pas rédigé (voir `review/[slug]/page.tsx`
  et le drapeau `WRITTEN` des guides). Pas de contenu réel = pas d'index.
- Le **sitemap exclut** les pages non-rédigées ; elles y entrent dès qu'on écrit le texte.
- Zéro image explicite, zéro composant Live cam, zéro self-hosted ad, zéro analytics/verif nsfwranker.

## Reste à faire (ensemble)
Écrire chaque review à neuf depuis le fond (données réelles, angle veritas).
Dès qu'une review a un vrai `summary` + `reviewContent`, sa page redevient indexable
et rejoint le sitemap automatiquement.

## Liens affiliés
`src/lib/data/affiliateLinks.ts` — retaggés `source=camveritas`. Liés à ton compte CrakRevenue.

## llms.txt
Généré dynamiquement à `/llms.txt` (`src/app/llms.txt/route.ts`). Même logique que le sitemap :
ne liste que les pages réelles et indexables. Les reviews s'y ajoutent automatiquement une fois
rédigées. Aucun score ni claim n'est inventé.
