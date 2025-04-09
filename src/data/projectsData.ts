export type ProjectDetailsProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
  date?: string;
  difficulty?: string;
  features?: string[];
  contributors?: string[];
  gallery?: string[];
  learnings?: string;
  techDetails?: { name: string; role: string }[];
};

export const projectsData: ProjectDetailsProps[] = [
  {
    id: "portfolio-fullstack",
    title: "Portfolio Fullstack",
    description: "Un portfolio interactif utilisant React et Node.js pour présenter mes projets, compétences et parcours.",
    imageUrl: "/src/assets/project-images/portfolio.png",
    technologies: ["React", "Node.js", "TypeScript"],
    githubLink: "https://github.com/ahmed/portfolio",
    date: "2025-03",
    difficulty: "Intermédiaire",
    features: ["Routing dynamique", "Animations SCSS", "Design responsive"],
    gallery: [
      "/src/assets/project-images/portfolio-step1.png",
      "/src/assets/project-images/portfolio-step2.png"
    ],
    learnings: "J’ai appris à structurer un projet fullstack complet et à intégrer des effets visuels avancés.",
    techDetails: [
      { name: "React", role: "Création d’interface utilisateur dynamique" },
      { name: "Node.js", role: "Serveur backend léger" },
      { name: "TypeScript", role: "Typage statique du code" }
    ]
  },
  {
    id: "flight-reservation",
    title: "Système de Réservation de Vols",
    description: "Application web pour la réservation de vols, incluant la gestion utilisateurs, paiements et historique.",
    imageUrl: "/src/assets/project-images/vols.png",
    technologies: ["React", "Express", "MongoDB"],
    githubLink: "https://github.com/ahmed/flight-reservation",
    date: "2024-11",
    difficulty: "Avancée",
    features: ["CRUD complet", "Authentification JWT", "Recherche et filtres dynamiques"],
    gallery: [],
    learnings: "J’ai renforcé mes compétences en backend (auth, base de données) et en intégration sécurisée.",
    techDetails: [
      { name: "MongoDB", role: "Stockage des utilisateurs et réservations" },
      { name: "Express", role: "API REST sécurisée" },
      { name: "React", role: "Interface utilisateur réactive" }
    ]
  },
  {
    id: "note-app",
    title: "Application de Notes",
    description: "Application simple pour créer, modifier et supprimer des notes personnelles avec SQLite.",
    imageUrl: "/src/assets/project-images/notes.png",
    technologies: ["React", "SQLite", "Node.js"],
    githubLink: "https://github.com/ahmed/note-app",
    date: "2024-05",
    difficulty: "Débutant",
    features: ["Ajout, édition, suppression de notes", "Stockage local", "Interface minimaliste"],
    gallery: [],
    learnings: "J’ai appris à connecter une base de données légère à une app React avec une logique claire.",
    techDetails: [
      { name: "SQLite", role: "Stockage léger et rapide des données" },
      { name: "React", role: "Interface d’écriture intuitive" }
    ]
  },
  {
    id: "gestion-stock",
    title: "Système de Gestion de Stock",
    description: "Gestion d’inventaire pour une petite entreprise, avec statistiques et alertes de seuils.",
    imageUrl: "/src/assets/project-images/stock.png",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/ahmed/gestion-stock",
    date: "2023-12",
    difficulty: "Intermédiaire",
    features: ["Tableau de bord", "Alertes automatisées", "Export PDF"],
    gallery: [],
    learnings: "Travail sur des dashboards personnalisés et interactions complexes dans la base de données.",
    techDetails: [
      { name: "React", role: "Affichage dynamique des stocks" },
      { name: "MongoDB", role: "Stockage des données produits" }
    ]
  },
  {
    id: "blog-personnel",
    title: "Blog Personnel",
    description: "Plateforme de publication d’articles avec gestion de contenu, utilisateurs et commentaires.",
    imageUrl: "/src/assets/project-images/blog.png",
    technologies: ["Next.js", "TailwindCSS", "MongoDB"],
    githubLink: "https://github.com/ahmed/blog",
    date: "2024-07",
    difficulty: "Avancée",
    features: ["Login OAuth", "Éditeur riche", "Commentaires dynamiques"],
    gallery: [],
    learnings: "Utilisation de Next.js côté client et serveur, intégration Tailwind pour du style rapide.",
    techDetails: [
      { name: "Next.js", role: "Rendu hybride et SEO optimisé" },
      { name: "MongoDB", role: "Stockage flexible des articles" }
    ]
  },
  {
    id: "kaust-dashboard",
    title: "Dashboard de Suivi Scientifique (KAUST)",
    description: "Outil de visualisation et de gestion de données scientifiques pour chercheurs (stage KAUST).",
    imageUrl: "/src/assets/project-images/kaust.png",
    technologies: ["React", "D3.js", "Firebase"],
    githubLink: "https://github.com/ahmed/kaust-dashboard",
    date: "2024-08",
    difficulty: "Avancée",
    features: ["Graphiques dynamiques", "Filtrage de données", "Connexion sécurisée Firebase"],
    gallery: [],
    learnings: "Première expérience pro dans un environnement de recherche international, avec React avancé.",
    techDetails: [
      { name: "D3.js", role: "Visualisation de données complexes" },
      { name: "Firebase", role: "Authentification et stockage cloud" }
    ]
  }
];
