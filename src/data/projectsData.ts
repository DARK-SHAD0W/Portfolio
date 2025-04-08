export type ProjectDetailsProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  date: string;
  difficulty: string;
  features: string[];
  contributors?: string[];
};

export const projectsData: ProjectDetailsProps[] = [
  {
    id: "portfolio-fullstack",
    title: "Portfolio Fullstack",
    description: "Un portfolio interactif utilisant React et Node.js pour présenter mes projets, compétences et parcours.",
    imageUrl: "/src/assets/project-images/portfolio.png",
    technologies: ["React", "Node.js", "TypeScript"],
    githubLink: "https://github.com/ahmed/portfolio",
    demoLink: "https://ahmed-portfolio.com",
    date: "Mars 2025",
    difficulty: "Moyen",
    features: [
      "Présentation de projets en temps réel",
      "Responsive design",
      "Effets d'animation 3D",
      "Navigation fluide avec React Router"
    ],
    contributors: ["Ahmed Yahya Letaief"]
  },
  {
    id: "systeme-gestion",
    title: "Système de Gestion",
    description: "Une application de gestion d'inventaire utilisant MongoDB, Express, React et Node.js.",
    imageUrl: "/src/assets/project-images/gestion.png",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/ahmed/gestion",
    date: "Janvier 2025",
    difficulty: "Difficile",
    features: [
      "CRUD complet",
      "Authentification utilisateur",
      "Gestion des stocks en temps réel",
      "Rapports d'inventaire automatisés"
    ],
    contributors: ["Ahmed Yahya Letaief", "Collaborateur X"]
  },
  {
    id: "application-chat",
    title: "Application de Chat",
    description: "Une application de messagerie en temps réel avec Socket.io, Node.js et React.",
    imageUrl: "/src/assets/project-images/chat.png",
    technologies: ["Socket.io", "Node.js", "React"],
    githubLink: "https://github.com/ahmed/chat",
    date: "Décembre 2024",
    difficulty: "Moyen",
    features: [
      "Chat en temps réel",
      "Notifications de nouveaux messages",
      "Interface utilisateur simple",
      "Connexion sécurisée avec JWT"
    ],
    contributors: ["Ahmed Yahya Letaief"]
  },
];
