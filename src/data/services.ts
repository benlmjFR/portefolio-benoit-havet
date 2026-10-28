// SEO landing pages (French market only), served at /fr/<slug>.
export type Service = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  audience: string;
  deliverables: string[];
  stack: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "developpeur-freelance-react-nextjs-lille",
    metaTitle: "Développeur freelance React & Next.js à Lille",
    metaDescription:
      "Développeur freelance React / Next.js à Lille et dans les Hauts-de-France. Sites rapides, SEO-friendly et applications web sur mesure. Devis gratuit sous 24h.",
    h1: "Développeur freelance React & Next.js à Lille et dans les Hauts-de-France",
    intro:
      "Je conçois des sites et applications web avec React et Next.js : rapides, bien référencés et faciles à faire évoluer. J'interviens à Lille, dans toute la région Hauts-de-France (Arras, Lens, Valenciennes, Amiens, Dunkerque…) et en remote partout en France.",
    audience:
      "PME, startups, agences web en renfort et grands comptes qui cherchent un développeur front-end / fullstack autonome, disponible rapidement.",
    deliverables: [
      "Site vitrine ou application Next.js (App Router, SSR / SSG) optimisée Core Web Vitals",
      "Intégration pixel-perfect de maquettes Figma, responsive et accessible",
      "SEO technique : métadonnées, sitemap, données structurées, multilingue",
      "Renfort d'équipe en régie ou au forfait, courte ou longue durée",
    ],
    stack: ["React", "Next.js", "TypeScript", "SCSS", "Framer Motion", "Vercel"],
    faq: [
      {
        q: "Travaillez-vous sur site à Lille ou uniquement en remote ?",
        a: "Les deux : présentiel possible à Lille et dans les Hauts-de-France, remote pour le reste de la France.",
      },
      {
        q: "Quel est le délai pour démarrer une mission ?",
        a: "Je réponds sous 24h et peux généralement démarrer sous une à deux semaines.",
      },
    ],
  },
  {
    slug: "refonte-site-web-cms-headless",
    metaTitle: "Refonte de site web & CMS headless (Storyblok, Contentful)",
    metaDescription:
      "Refonte de site avec un CMS headless (Storyblok, Contentful) et Next.js : performances, SEO et autonomie éditoriale. PME et grands comptes, Hauts-de-France & France.",
    h1: "Refonte de site web avec un CMS headless",
    intro:
      "Votre site est lent, difficile à mettre à jour ou mal référencé ? Je le reconstruis sur une architecture headless (Next.js + Storyblok ou Contentful) : vos équipes éditent le contenu en autonomie, le site reste ultra-rapide et prêt pour le SEO.",
    audience:
      "Entreprises sur WordPress vieillissant, sites multilingues, marques qui veulent séparer contenu et design.",
    deliverables: [
      "Audit de l'existant (performance, SEO, contenus) et plan de migration",
      "Modélisation des contenus et composants dans le CMS headless",
      "Front Next.js sur mesure, multilingue, avec redirections 301 pour garder le référencement",
      "Formation de vos équipes à l'édition du contenu",
    ],
    stack: ["Next.js", "Storyblok", "Contentful", "Node.js", "TypeScript", "Vercel"],
    faq: [
      {
        q: "Vais-je perdre mon référencement en changeant de site ?",
        a: "Non si la migration est préparée : plan de redirections 301, conservation des URLs clés et suivi dans la Search Console.",
      },
      {
        q: "Combien coûte une refonte headless ?",
        a: "Cela dépend du nombre de pages et de fonctionnalités. Envoyez-moi votre besoin, je vous réponds avec un devis détaillé gratuit.",
      },
    ],
  },
  {
    slug: "creation-site-internet-pme-hauts-de-france",
    metaTitle: "Création de site internet pour PME — Hauts-de-France",
    metaDescription:
      "Création de site internet professionnel pour PME, artisans et commerces dans les Hauts-de-France : rapide, moderne, bien référencé sur Google. Devis gratuit.",
    h1: "Création de site internet pour PME dans les Hauts-de-France",
    intro:
      "Avec HBLABSTUDIO, je crée des sites vitrines modernes pour les PME, commerces et artisans de la région : un site qui charge vite, qui donne confiance et qui vous fait trouver sur Google localement.",
    audience:
      "PME, commerces, artisans, restaurants et indépendants de Lille, de la métropole lilloise et de toute la région.",
    deliverables: [
      "Site vitrine sur mesure, mobile-first, livré en quelques semaines",
      "Contenu modifiable par vous-même (CMS simple)",
      "Référencement local : fiche Google, pages optimisées, données structurées",
      "Hébergement, nom de domaine et maintenance si besoin",
    ],
    stack: ["Next.js", "Storyblok", "SEO local", "Vercel"],
    faq: [
      {
        q: "Puis-je modifier mon site moi-même ?",
        a: "Oui, le site est livré avec un CMS : textes, photos et actualités se modifient sans compétence technique.",
      },
      {
        q: "Proposez-vous la maintenance ?",
        a: "Oui, en option : mises à jour, sauvegardes, petites évolutions et suivi des performances.",
      },
    ],
  },
  {
    slug: "developpeur-nodejs-sql-freelance",
    metaTitle: "Développeur Node.js, NestJS & SQL freelance — API",
    metaDescription:
      "Développeur back-end Node.js / NestJS / SQL freelance : API REST sécurisées, Prisma, PostgreSQL, Supabase. Missions en régie ou au forfait, Lille & remote France.",
    h1: "Développeur Node.js, NestJS & SQL freelance",
    intro:
      "Je développe des API et back-ends robustes en Node.js et NestJS, avec des bases SQL bien modélisées (PostgreSQL, Prisma, Supabase). Idéal pour compléter un front React / Next.js ou renforcer une équipe produit.",
    audience:
      "Startups, éditeurs SaaS, ESN et grands comptes qui recherchent un profil fullstack orienté back-end.",
    deliverables: [
      "Conception et développement d'API REST sécurisées (auth, rôles, validation)",
      "Modélisation de bases SQL, migrations et optimisation des requêtes",
      "Intégrations tierces (paiement, CRM, emailing, IA)",
      "Tests, documentation et mise en production",
    ],
    stack: ["Node.js", "NestJS", "TypeScript", "SQL", "PostgreSQL", "Prisma", "Supabase"],
    faq: [
      {
        q: "Intervenez-vous en régie (TJM) ou au forfait ?",
        a: "Les deux. Régie pour les missions longues en équipe, forfait pour un périmètre défini.",
      },
    ],
  },
  {
    slug: "integration-ia-agents-llm-entreprise",
    metaTitle: "Intégration IA & agents LLM pour entreprises",
    metaDescription:
      "Intégration de l'IA dans vos outils : agents LLM, API Claude / OpenAI, RAG, MCP. Automatisez vos process avec un développeur fullstack freelance. Hauts-de-France & France.",
    h1: "Intégration IA et agents LLM pour les entreprises",
    intro:
      "J'intègre des modèles de langage (Claude, OpenAI) dans des applications en production : assistants métier, recherche dans vos documents (RAG), agents qui automatisent des tâches répétitives via MCP.",
    audience: "PME et équipes produit qui veulent des cas d'usage IA concrets et mesurables.",
    deliverables: [
      "Atelier de cadrage : quels process automatiser, quel ROI",
      "Prototype rapide puis mise en production sécurisée",
      "Chatbot / assistant connecté à vos données (RAG, base vectorielle)",
      "Agents IA avec outils et intégrations MCP",
    ],
    stack: ["Claude API", "OpenAI", "RAG", "MCP", "Node.js", "Next.js"],
    faq: [
      {
        q: "Mes données restent-elles confidentielles ?",
        a: "Oui : choix de fournisseurs sans rétention des données, hébergement maîtrisé et accès restreints.",
      },
    ],
  },
  {
    slug: "mission-freelance-developpeur-fullstack",
    metaTitle: "Développeur fullstack React / Node.js — mission freelance",
    metaDescription:
      "Recruteurs, ESN, chasseurs de têtes : développeur fullstack React, Next.js, Node.js, SQL et IA disponible pour missions freelance. CV, TJM et disponibilités sur demande.",
    h1: "Développeur fullstack React / Next.js / Node.js disponible en mission freelance",
    intro:
      "Recruteurs, ESN et chasseurs de têtes : je suis disponible pour des missions freelance fullstack, en remote ou sur site (Lille / Hauts-de-France, Paris ponctuellement). Expérience en agence (Razorfish – Publicis) sur des projets grands comptes comme Nissan.",
    audience: "Cabinets de recrutement, ESN, grands comptes et scale-ups.",
    deliverables: [
      "Front-end React / Next.js / TypeScript, design systems",
      "Back-end Node.js / NestJS, SQL, API",
      "CMS headless (Storyblok, Contentful)",
      "IA générative : LLM, agents, RAG",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "SQL", "Storyblok", "Contentful"],
    faq: [
      {
        q: "Comment obtenir le CV et le TJM ?",
        a: "Le CV est téléchargeable sur la page d'accueil. Pour le TJM et les disponibilités, contactez-moi par email ou LinkedIn.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
