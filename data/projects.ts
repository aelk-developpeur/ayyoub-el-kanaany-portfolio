export type Project = {
  number: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  featured?: boolean;
};

// Le CV décrit des missions mais ne donne pas de noms ni de liens de projets.
// Ces fiches sont des exemples anonymisés à valider et à remplacer par les références publiables.
export const projects: Project[] = [
  {
    number: "01",
    title: "Portail métier",
    titleEn: "Business portal",
    category: "Application web · Exemple anonymisé",
    categoryEn: "Web application · Anonymized example",
    description:
      "Conception d’une application métier full-stack, de l’analyse fonctionnelle aux tests et au déploiement, avec une attention particulière à la maintenabilité.",
    descriptionEn:
      "A full-stack business application shaped from functional analysis through testing and deployment, with maintainability in mind.",
    image: "/projects/enterprise-suite.svg",
    imageAlt: "Illustration abstraite d’un tableau de bord métier",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
    demoUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    number: "02",
    title: "Audio Guide",
    titleEn: "Audio Guide",
    category: "Application mobile · Stage",
    categoryEn: "Mobile app · Internship",
    description:
      "Application de streaming audio pensée pour les touristes et leurs guides, réalisée dans le cadre d’un stage avec Flutter et une organisation agile du backlog.",
    descriptionEn:
      "An audio-streaming app for tourists and their guides, developed during an internship with Flutter and an agile backlog workflow.",
    image: "/projects/audio-guide.svg",
    imageAlt: "Illustration d’un lecteur audio avec une carte et un repère",
    technologies: ["Flutter", "Dart", "Streaming audio", "Trello"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    number: "03",
    title: "Écosystème d’API",
    titleEn: "API ecosystem",
    category: "Services backend · Exemple anonymisé",
    categoryEn: "Backend services · Anonymized example",
    description:
      "Évolution et maintenance de services web : sécurisation des accès, traitements batch, tests et optimisation des performances selon les besoins métier.",
    descriptionEn:
      "Web-service maintenance and evolution: access security, batch processing, testing and performance improvements driven by business needs.",
    image: "/projects/api-platform.svg",
    imageAlt: "Illustration de services reliés dans une architecture logicielle",
    technologies: ["Spring WebFlux", "Spring Security", "Spring Batch", "MongoDB"],
    demoUrl: null,
    githubUrl: null,
  },
];
