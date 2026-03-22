# LebonInflu

> **La plateforme de mise en relation entre commerces locaux et influenceurs de proximité.**  
> Par ville, par niche, par budget — contact direct, sans intermédiaire, sans commission.

---

## Table des matières

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Architecture du projet](#architecture-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Variables d'environnement](#variables-denvironnement)
- [Scripts disponibles](#scripts-disponibles)
- [Pages et routes](#pages-et-routes)
- [Modèle de tarification](#modèle-de-tarification)
- [État du projet](#état-du-projet)

---

## Présentation

**LebonInflu** est une SaaS de marketing local qui connecte directement :
- des **entreprises locales** (restaurants, salons, boutiques…) cherchant à augmenter leur visibilité via des créateurs de contenu,
- des **influenceurs / créateurs** souhaitant monétiser leur audience auprès des commerces de leur ville.

Le positionnement clé : **aucune agence, aucun intermédiaire**. Les marques contactent directement les créateurs, et les influenceurs conservent 100 % de leurs revenus de collaboration.

---

## Fonctionnalités

### Pour les entreprises (côté marque)
- Recherche d'influenceurs par **ville**, **niche** (Food, Sport, Mode, Beauté, Tech…) et **budget max**
- Consultation des profils avec statistiques vérifiées (abonnés, taux d'engagement, tarifs)
- Contact direct avec les créateurs (email / téléphone déblocable)
- Tableau de bord dédié avec liste des influenceurs favoris et messagerie

### Pour les influenceurs / créateurs
- Création de profil en quelques minutes (multi-plateforme : TikTok, Instagram, YouTube)
- Définition de ses propres tarifs (story, post, vidéo)
- Visibilité auprès des marques locales
- Tableau de bord avec gestion du profil, visibilité on/off, demandes reçues
- **0 % de commission** sur les collaborations

### Administration
- Dashboard admin pour superviser les utilisateurs et les activités de la plateforme

---

## Stack technique

| Couche | Technologie |
|---|---|
| **Frontend** | React 19, TypeScript, Vite 7 |
| **Routing** | Wouter |
| **UI Components** | Radix UI + shadcn/ui, Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Formulaires** | React Hook Form + Zod |
| **Data fetching** | TanStack Query v5 |
| **Backend** | Node.js, Express 4 |
| **ORM** | Drizzle ORM |
| **Base de données** | PostgreSQL |
| **Auth** | Passport.js (stratégie locale) + express-session |
| **Charts** | Recharts |
| **Bundler** | Vite (dev) + esbuild (prod) |

---

## Architecture du projet

```
LebonInflu/
├── client/                        # Frontend React
│   ├── index.html
│   └── src/
│       ├── App.tsx                # Router principal (wouter)
│       ├── main.tsx
│       ├── index.css
│       ├── components/
│       │   ├── landing/           # Sections de la page d'accueil
│       │   │   ├── Hero.tsx       # Hero avec cartes influenceurs animées
│       │   │   ├── SearchSection.tsx  # Barre de recherche avec filtres
│       │   │   ├── HowItWorks.tsx
│       │   │   ├── Benefits.tsx
│       │   │   ├── ForInfluencers.tsx
│       │   │   ├── Examples.tsx
│       │   │   ├── Pricing.tsx
│       │   │   ├── FAQ.tsx
│       │   │   ├── Navbar.tsx
│       │   │   └── Footer.tsx
│       │   └── ui/                # Composants shadcn/ui (Radix)
│       ├── pages/
│       │   ├── home.tsx           # Landing page complète
│       │   ├── auth/
│       │   │   ├── login.tsx
│       │   │   └── register.tsx
│       │   ├── onboarding/
│       │   │   ├── company.tsx    # Onboarding marque (3 étapes)
│       │   │   └── influencer.tsx # Onboarding créateur (4 étapes)
│       │   ├── dashboard/
│       │   │   ├── index.tsx      # Sélecteur de vue
│       │   │   ├── company.tsx    # Dashboard marque
│       │   │   └── influencer.tsx # Dashboard créateur
│       │   └── admin/
│       │       └── dashboard.tsx  # Dashboard admin
│       ├── hooks/
│       │   ├── use-mobile.tsx
│       │   └── use-toast.ts
│       └── lib/
│           ├── queryClient.ts
│           └── utils.ts
│
├── server/                        # Backend Express
│   ├── index.ts                   # Point d'entrée, middleware, démarrage serveur
│   ├── routes.ts                  # Enregistrement des routes API (/api/*)
│   ├── storage.ts                 # Interface de stockage (CRUD)
│   ├── static.ts                  # Serve le build client en production
│   └── vite.ts                    # Intégration Vite en développement
│
├── shared/
│   └── schema.ts                  # Schéma Drizzle + types Zod partagés
│
├── script/
│   └── build.ts                   # Script de build production (esbuild)
│
├── migrations/                    # Migrations SQL (générées par drizzle-kit)
├── drizzle.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Installation et lancement

### Prérequis

- Node.js >= 20
- PostgreSQL >= 14
- npm

### 1. Cloner le dépôt

```bash
git clone https://github.com/<votre-user>/LebonInflu.git
cd LebonInflu
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer la base de données

Créez un fichier `.env` à la racine :

```env
DATABASE_URL=postgresql://user:password@localhost:5432/leboninflu
SESSION_SECRET=votre_secret_session
```

### 4. Appliquer le schéma de base de données

```bash
npm run db:push
```

### 5. Lancer en développement

```bash
npm run dev
```

L'application est accessible sur [http://localhost:5000](http://localhost:5000).  
Le frontend (Vite HMR) et le backend (Express) tournent sur le même port.

---

## Variables d'environnement

| Variable | Description | Requis |
|---|---|---|
| `DATABASE_URL` | URL de connexion PostgreSQL | ✅ |
| `SESSION_SECRET` | Secret pour les sessions Express | ✅ |
| `NODE_ENV` | `development` ou `production` | ✅ |
| `PORT` | Port du serveur (défaut : `5000`) | ❌ |

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur Express + Vite en mode développement |
| `npm run build` | Build de production (client Vite + serveur esbuild) |
| `npm run start` | Lance le serveur en production (après build) |
| `npm run check` | Vérification TypeScript |
| `npm run db:push` | Applique le schéma Drizzle à la base de données |

---

## Pages et routes

| Route | Description |
|---|---|
| `/` | Landing page publique |
| `/auth/login` | Connexion |
| `/auth/register` | Inscription (choix du rôle) |
| `/onboarding/company` | Onboarding marque (3 étapes) |
| `/onboarding/influencer` | Onboarding créateur (4 étapes) |
| `/dashboard/company` | Dashboard marque — recherche et contact d'influenceurs |
| `/dashboard/influencer` | Dashboard créateur — gestion du profil et des demandes |
| `/admin/dashboard` | Dashboard d'administration |

Toutes les routes API sont préfixées par `/api`.

---

## Modèle de tarification

| Offre | Prix | Cible |
|---|---|---|
| **Découverte** | Gratuit | Explorer la plateforme (profils masqués) |
| **Pass 30 Jours** | 39 € HT/mois | Contacts illimités, accès complet aux stats |
| **À l'unité** | 9 € / contact | Débloquer un contact ponctuel |

Les influenceurs s'inscrivent **gratuitement** et ne paient aucune commission sur leurs collaborations.

---

## État du projet

Le projet est actuellement au stade **MVP frontend / prototype**.

- ✅ Landing page complète et responsive
- ✅ Onboarding multi-étapes (marque & créateur)
- ✅ Dashboards UI fonctionnels (données mock)
- ✅ Authentification (structure Passport.js en place)
- ✅ Schéma de base de données défini (Drizzle + PostgreSQL)
- 🔲 Routes API à implémenter (`server/routes.ts`)
- 🔲 Persistance des profils influenceurs et entreprises
- 🔲 Système de messagerie réel
- 🔲 Intégration paiement (Stripe)
- 🔲 Système de vérification des statistiques réseaux sociaux

---

*Projet généré sur Replit — Décembre 2024*
