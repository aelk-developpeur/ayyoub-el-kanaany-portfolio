import {
  AppWindow,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Workflow,
} from "lucide-react";

export const skillGroups = [
  {
    title: "Langages",
    description: "Des bases solides pour construire et faire évoluer des produits.",
    skills: [
      { name: "Java", icon: Braces },
      { name: "TypeScript", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "HTML & CSS", icon: AppWindow },
    ],
  },
  {
    title: "Frameworks & data",
    description: "Du front-end réactif aux services et données métier.",
    skills: [
      { name: "Spring Boot", icon: Boxes },
      { name: "Spring WebFlux", icon: Workflow },
      { name: "Spring Security", icon: LockKeyhole },
      { name: "Angular", icon: Layers3 },
      { name: "PostgreSQL / MySQL", icon: Database },
      { name: "Oracle / MongoDB", icon: Database },
    ],
  },
  {
    title: "Outils & pratiques",
    description: "Une livraison fiable, collaborative et documentée.",
    skills: [
      { name: "Git · GitFlow", icon: GitBranch },
      { name: "GitHub / GitLab", icon: Cloud },
      { name: "Spring Batch", icon: Workflow },
      { name: "UML 2", icon: Layers3 },
    ],
  },
];
