# LebonInflu

> **La plateforme de mise en relation entre commerces locaux et influenceurs de proximité.**  
> Par ville, par niche, par budget — contact direct, sans intermédiaire, sans commission.

---

## Présentation

**LebonInflu** est une SaaS de marketing local qui connecte directement :
- des **entreprises locales** (restaurants, salons, boutiques…) cherchant à augmenter leur visibilité via des créateurs de contenu,
- des **influenceurs / créateurs** souhaitant monétiser leur audience auprès des commerces de leur ville.

Le positionnement clé : **aucune agence, aucun intermédiaire**. Les marques contactent directement les créateurs, et les influenceurs conservent 100 % de leurs revenus de collaboration.

---

## Fonctionnalités

### Pour les entreprises
- Recherche d'influenceurs par **ville**, **niche** (Food, Sport, Mode, Beauté, Tech…) et **budget max**
- Consultation des profils avec statistiques vérifiées (abonnés, taux d'engagement, tarifs)
- Contact direct avec les créateurs (email / téléphone déblocable)
- Tableau de bord avec liste des favoris

### Pour les influenceurs / créateurs
- Création de profil multi-plateforme (TikTok, Instagram, YouTube)
- Définition de ses propres tarifs (story, post, vidéo)
- Visibilité auprès des marques locales
- Tableau de bord avec gestion du profil et des demandes reçues
- **0 % de commission** sur les collaborations

---

## Stack technique

### Frontend

| Technologie | Rôle |
|---|---|
| React 19 + TypeScript | Framework UI |
| Vite 7 | Bundler et dev server |
| Wouter | Routing client-side |
| Tailwind CSS v4 | Styling utilitaire |
| shadcn/ui + Radix UI | Composants accessibles |
| Framer Motion | Animations |
| React Hook Form + Zod | Gestion et validation des formulaires |
| TanStack Query v5 | Data fetching et cache |
| Recharts | Visualisation de données |

### Backend

| Technologie | Rôle |
|---|---|
| Node.js + Express 4 | Serveur HTTP |
| Drizzle ORM | ORM TypeScript-first |
| PostgreSQL | Base de données relationnelle |
| Passport.js | Authentification (stratégie locale) |
| express-session | Gestion des sessions |

---

## Architecture du projet

```
LebonInflu/
├── client/                        # Frontend React
│   └── src/
│       ├── App.tsx                # Router principal
│       ├── components/
│       │   ├── landing/           # Sections de la page d'accueil
│       │   └── ui/                # Composants shadcn/ui
│       └── pages/
│           ├── auth/              # Login / Register
│           ├── onboarding/        # Onboarding marque & créateur
│           ├── dashboard/         # Dashboards marque, créateur, admin
│           └── home.tsx           # Landing page
│
├── server/                        # Backend Express
│   ├── index.ts                   # Point d'entrée
│   ├── routes.ts                  # Routes API (/api/*)
│   └── storage.ts                 # Interface CRUD
│
├── shared/
│   └── schema.ts                  # Schéma Drizzle + types Zod partagés
│
└── migrations/                    # Migrations SQL
```

---

## Pages et routes

| Route | Description |
|---|---|
| `/` | Landing page publique |
| `/auth/login` | Connexion |
| `/auth/register` | Inscription |
| `/onboarding/company` | Onboarding marque (3 étapes) |
| `/onboarding/influencer` | Onboarding créateur (4 étapes) |
| `/dashboard/company` | Dashboard marque |
| `/dashboard/influencer` | Dashboard créateur |
| `/admin/dashboard` | Administration |

---

## Modèle de tarification

| Offre | Prix | Description |
|---|---|---|
| **Découverte** | Gratuit | Parcourir la plateforme (coordonnées masquées) |
| **Pass 30 Jours** | 39 € HT | Contacts illimités + accès complet aux stats |
| **À l'unité** | 9 € / contact | Débloquer un contact ponctuel |

Les influenceurs s'inscrivent **gratuitement** et ne paient aucune commission.

---

## État du projet

| Fonctionnalité | Statut |
|---|---|
| Landing page responsive | ✅ |
| Onboarding multi-étapes (marque & créateur) | ✅ |
| Dashboards UI (marque, créateur, admin) | ✅ |
| Authentification (Passport.js) | ✅ |
| Schéma base de données (Drizzle + PostgreSQL) | ✅ |
| Routes API | 🔲 |
| Persistance des profils | 🔲 |
| Messagerie | 🔲 |
| Intégration paiement (Stripe) | 🔲 |
| Vérification des stats réseaux sociaux | 🔲 |
