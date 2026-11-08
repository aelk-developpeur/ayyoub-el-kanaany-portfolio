# Portfolio — Ayyoub El Kanaany

Portfolio français / anglais, réalisé avec Next.js App Router, TypeScript, Tailwind CSS et Framer Motion. Le sélecteur EN / FR dans la navigation change la langue de toutes les sections.

## Prérequis

- Node.js 18.17 ou supérieur
- npm

## Lancer en local

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000). Le formulaire nécessite les variables Resend décrites ci-dessous; les autres sections fonctionnent sans configuration.

## Personnaliser le contenu

- **Projets** : modifie `data/projects.ts`. Le CV fourni ne donne pas les noms, démos ou dépôts des projets; les trois fiches actuelles sont des exemples anonymisés inspirés des missions indiquées et doivent être validées avant publication.
- **Compétences** : modifie `data/skills.ts`.
- **Expérience et formation** : modifie `data/experience.ts`. La date de fin « Aujourd’hui » est reprise du CV et reste à confirmer.
- **Bio, valeurs et coordonnées** : modifie `components/about.tsx`, `components/contact.tsx` et `components/hero.tsx`.
- **Liens sociaux** : remplace les URL génériques GitHub et LinkedIn dans `components/contact.tsx`.
- **Portrait** : remplace le monogramme AK dans `components/hero.tsx` par une photo professionnelle avec un texte alternatif pertinent.
- **CV** : remplace `public/cv-ayoub-el-kanaany.pdf` pour publier une nouvelle version.
- **Style** : modifie les variables de couleur dans `app/globals.css`.

## Formulaire de contact (Resend)

Le formulaire envoie un email via le Route Handler `app/api/contact/route.ts`. Crée une clé API et configure un domaine d’envoi vérifié dans [Resend](https://resend.com), puis renseigne ces variables dans `.env.local` :

```env
RESEND_API_KEY=re_...
CONTACT_EMAIL=elkanaany.ayyoub.ing@gmail.com
FROM_EMAIL=Portfolio <contact@ton-domaine.com>
NEXT_PUBLIC_SITE_URL=https://ton-domaine.com
```

N’utilise jamais la clé Resend dans une variable `NEXT_PUBLIC_*` et ne committe pas `.env.local`. Pour tester localement, le domaine d’expédition Resend doit être autorisé par ton compte.

## Vérification de production

```bash
npm run build
npm run start
```

## GitHub

Le dépôt local est initialisé et son premier commit créé. Pour le publier, crée un dépôt vide sur GitHub puis :

```bash
git remote add origin https://github.com/<TON-UTILISATEUR>/<NOM-DU-DEPOT>.git
git branch -M main
git push -u origin main
```

## Déploiement sur Vercel

1. Connecte-toi sur [vercel.com](https://vercel.com), sélectionne **Add New → Project**, puis autorise GitHub si demandé.
2. Choisis le dépôt du portfolio. Vercel détecte automatiquement Next.js; conserve les réglages de build par défaut (`npm run build`).
3. Dans **Environment Variables**, ajoute `RESEND_API_KEY`, `CONTACT_EMAIL`, `FROM_EMAIL` et `NEXT_PUBLIC_SITE_URL`. Configure-les pour Production (et Preview si nécessaire).
4. Clique sur **Deploy**. Chaque push sur la branche principale déclenchera ensuite un nouveau déploiement.
5. Pour un domaine personnalisé : ouvre **Project → Settings → Domains**, ajoute `monsite.com` (et éventuellement `www.monsite.com`), puis configure chez ton registraire les enregistrements DNS indiqués par Vercel. Attends la validation SSL/DNS et définis une redirection entre le domaine nu et `www` si souhaité. Mets ensuite `NEXT_PUBLIC_SITE_URL` à jour et redéploie.

## Arborescence

```text
app/                 pages, styles, contact API, sitemap, robots
components/           navigation, sections, cartes et formulaire
data/                 projets, compétences, parcours
public/                CV, favicon, aperçu social et illustrations
```
