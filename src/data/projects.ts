import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "coi-energy",
    title: "COI Energy",
    description:
      "Enterprise-grade energy management platform with AI-powered document processing and real-time notifications.",
    longDescription:
      "Built comprehensive backend services for an energy management platform, leveraging Google Cloud services for document processing, real-time notifications, and advanced analytics. The system handles massive scale with high reliability.",
    technologies: [
      "NestJS",
      "Drizzle ORM",
      "PostgreSQL",
      "Google Cloud Pub/Sub",
      "Cloud Tasks",
      "BigQuery",
      "Vertex AI",
      "Google Vision API",
    ],
    metrics: [
      { label: "Requests/Day", value: "25K+" },
      { label: "Messages/Day", value: "60K+" },
      { label: "Documents Analyzed", value: "2M+" },
      { label: "Reliability", value: "99.9%" },
    ],
    featured: true,
  },
  {
    id: "logiwise",
    title: "Logiwise - Smart Warehouse Management",
    description:
      "Comprehensive warehouse management system optimizing inventory tracking and order processing for multiple warehouses.",
    longDescription:
      "Developed a full-featured warehouse management system serving multiple warehouses with real-time inventory tracking, role-based access control, and optimized order processing workflows.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "TypeScript",
    ],
    metrics: [
      { label: "Warehouses", value: "5+" },
      { label: "Daily Transactions", value: "15K+" },
      { label: "User Roles", value: "4+" },
      { label: "Processing Time Reduced", value: "30%" },
    ],
    featured: true,
  },
  {
    id: "alpha-chat",
    title: "Alpha Chat Link",
    description:
      "Real-time chat application with WebSocket support, handling thousands of concurrent users with minimal latency.",
    longDescription:
      "Built a scalable real-time chat application featuring WebSocket-based messaging, secure authentication, and a responsive React frontend. The system maintains high availability while handling thousands of concurrent connections.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "WebSockets",
    ],
    metrics: [
      { label: "Concurrent Users", value: "1K+" },
      { label: "Message Latency", value: "<200ms" },
      { label: "Messages/Day", value: "50K+" },
      { label: "Uptime", value: "99.9%" },
    ],
    githubUrl: "https://github.com/itsAhtesham/Chat-App-frontend",
    demoUrl: "https://chat-app-frontend-nu-ten.vercel.app/",
    featured: true,
  },
];
