import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "language", proficiency: 95 },
  { name: "TypeScript", category: "language", proficiency: 90 },
  { name: "Java", category: "language", proficiency: 70 },
  { name: "SQL", category: "language", proficiency: 85 },

  // Frontend
  { name: "React", category: "frontend", proficiency: 88 },
  { name: "Next.js", category: "frontend", proficiency: 80 },
  { name: "Tailwind CSS", category: "frontend", proficiency: 92 },
  { name: "Redux Toolkit", category: "frontend", proficiency: 85 },
  { name: "TanStack Query", category: "frontend", proficiency: 82 },
  { name: "HTML/CSS", category: "frontend", proficiency: 95 },

  // Backend
  { name: "Node.js", category: "backend", proficiency: 95 },
  { name: "NestJS", category: "backend", proficiency: 90 },
  { name: "Express.js", category: "backend", proficiency: 92 },
  { name: "PostgreSQL", category: "backend", proficiency: 88 },
  { name: "MongoDB", category: "backend", proficiency: 85 },
  { name: "Drizzle ORM", category: "backend", proficiency: 85 },
  { name: "Prisma", category: "backend", proficiency: 82 },
  { name: "WebSockets", category: "backend", proficiency: 85 },
  { name: "RESTful APIs", category: "backend", proficiency: 95 },

  // DevOps & Cloud
  { name: "Docker", category: "devops", proficiency: 80 },
  { name: "GitHub Actions", category: "devops", proficiency: 78 },
  { name: "Google Cloud Platform", category: "devops", proficiency: 85 },
  { name: "Cloud Pub/Sub", category: "devops", proficiency: 82 },
  { name: "BigQuery", category: "devops", proficiency: 75 },
  { name: "Vertex AI", category: "devops", proficiency: 72 },
];

export const skillCategories = [
  { id: "language", label: "Languages", icon: "Code2" },
  { id: "frontend", label: "Frontend", icon: "Layout" },
  { id: "backend", label: "Backend", icon: "Server" },
  { id: "devops", label: "DevOps & Cloud", icon: "Cloud" },
] as const;
