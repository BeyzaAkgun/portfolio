import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Github,
  Database,
  Cpu,
  Globe,
  MessageSquare,
  Shield,
  Calculator,
  Brain,
  Smartphone
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { JSX } from "react";

// ================= PROJECT DATA =================
const projects = {
  featured: [
    {
      title: "Employee Attrition Prediction – ML Web App",
      year: "2023–2024",
      description:
        "End-to-end machine learning web application predicting employee attrition using structured HR data.",
      highlights: [
        "Built ML pipeline with AdaBoost achieving 90% accuracy",
        "Designed microservice architecture (Vue.js, Flask ML API, Spring Boot auth)",
        "Implemented CSV/Excel upload and data preprocessing pipeline",
        "Containerized services with Docker and collaborated in a team setting"
      ],
      technologies: ["Vue.js", "Flask", "Spring Boot", "PostgreSQL", "Docker", "Machine Learning"],
      github: "https://github.com/BeyzaAkgun/employee-attrition-prediction",
      demo: null,
      icon: <Brain className="w-5 h-5" />
    }
  ],

  ai_ml: [
    {
      title: "Bubble Sheet Scanner – Deep Learning Pipeline",
      year: "2025 (Capstone)",
      description:
        "Template-free OMR pipeline using semantic segmentation and image captioning for automated answer sheet analysis.",
      highlights: [
        "Evaluated SegFormer, ResNet-34, and U-Net with 99.9% segmentation accuracy",
        "Built image captioning model with EfficientNet-B0 + Transformer",
        "Processed 5,000+ scanned sheets with OCR and vision-language models",
        "Performed comparative evaluation across deep learning architectures"
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Transformers", "Computer Vision"],
      github: "https://github.com/BeyzaAkgun/bubble-sheet-scanner",
      demo: null,
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Spam Classification – Transformer Models",
      year: "2025",
      description:
        "Benchmarking multiple transformer architectures for spam detection across diverse datasets.",
      highlights: [
        "Compared BERT, RoBERTa, DistilBERT, ALBERT, and T5",
        "Achieved 99.64% accuracy on Enron dataset with BERT",
        "Evaluated models using accuracy and F1-score metrics",
        "Conducted multi-dataset experimental analysis"
      ],
      technologies: ["Python", "PyTorch", "Hugging Face", "Transformers", "NLP"],
      github: "https://github.com/BeyzaAkgun/cmpe346-spam-classification",
      demo: null,
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      title: "CTU-13 Cybersecurity – Network Traffic Analysis",
      year: "2024",
      description:
        "Machine learning experiments on real-world botnet traffic for intrusion detection.",
      highlights: [
        "Performed EDA on CTU-13 network traffic dataset",
        "Engineered features for botnet detection",
        "Tested classical ML models for intrusion classification",
        "Documented findings with security-focused insights"
      ],
      technologies: ["Python", "Machine Learning", "Cybersecurity", "Data Analysis"],
      github: "https://github.com/BeyzaAkgun/cybersecurity-ctu13",
      demo: null,
      icon: <Shield className="w-5 h-5" />
    }
  ],

  web: [
    {
      title: "Dynamic Pricing E-Commerce Platform",
      year: "2025",
      description:
        "Full-stack platform with real-time dynamic pricing based on gold market data.",
      highlights: [
        "Developed React frontend and Express.js backend",
        "Integrated real-time pricing with external APIs",
        "Implemented filtering, sorting, and responsive UI",
        "Deployed with CI/CD on Vercel and Render"
      ],
      technologies: ["React", "Node.js", "Express.js", "REST API", "Vercel", "Render"],
      github: "https://github.com/BeyzaAkgun/renart-case-study",
      demo: "https://renart-frontend-vnj3.onrender.com",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Netflix Clone – Movie Discovery App",
      year: "2023",
      description:
        "TypeScript-based movie discovery application integrated with TMDB API.",
      highlights: [
        "Built responsive UI with React and Tailwind CSS",
        "Implemented debounced search and dark mode",
        "Integrated Appwrite for backend services",
        "Deployed and optimized performance on Vercel"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "TMDB API", "Vercel"],
      github: "https://github.com/BeyzaAkgun/NetflixClone",
      demo: "https://netflix-clone-tau-swart.vercel.app",
      icon: <Smartphone className="w-5 h-5" />
    }
  ],

  ongoing: [
    {
      title: "Country Guessing Game",
      year: "2026 (Ongoing)",
      description:
        "Interactive world map game focused on data-driven logic and scalable backend design.",
      highlights: [
        "Developing FastAPI backend for country data and user tracking",
        "Designing hint generation and scoring logic",
        "Planning ML-based difficulty and progression system",
        "Building responsive, mobile-friendly UI"
      ],
      technologies: ["FastAPI", "React", "TypeScript", "Maps API", "Machine Learning"],
      github: "https://github.com/BeyzaAkgun/country-guesser-game",
      demo: null,
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "NestPrint API – E-Commerce Backend",
      year: "2026 (Ongoing)",
      description:
        "Modular and scalable backend API built with NestJS, Prisma ORM, and PostgreSQL for an e-commerce platform.",
      highlights: [
        "Designed modular backend architecture using NestJS and TypeScript",
        "Implemented PostgreSQL data models with Prisma ORM and JWT-based auth",
        "Built RESTful APIs for product, order, and user management",
        "Added Docker, Swagger documentation, and basic unit testing"
      ],
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "JWT", "REST API"],
      github: "https://github.com/BeyzaAkgun/nestprint-api",
      demo: null,
      icon: <Database className="w-5 h-5" />
    }
  ]
};

// ================= COMPONENTS =================
export function Projects() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30" id="projects">
      <div className="max-w-6xl mx-auto space-y-20">
        <ProjectSection title="Featured & Core Projects" items={projects.featured} />
        <ProjectSection title="AI & Machine Learning Projects" items={projects.ai_ml} />
        <ProjectSection title="Web & Full-Stack Projects" items={projects.web} />
        <ProjectSection title="Ongoing Explorations" items={projects.ongoing} />
      </div>
    </section>
  );
}

function ProjectSection({ title, items }: { title: string; items: any[] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}>
      <Card className="h-full bg-white/90 backdrop-blur border-slate-200 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">{project.icon}</div>
            <div>
              <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
              <CardDescription>{project.year}</CardDescription>
            </div>
          </div>
          <p className="text-slate-700 mt-3">{project.description}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-4 text-sm text-slate-700">
            {project.highlights.map((h: string, i: number) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.github, "_blank")}>
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Button>
            {project.demo && (
              <Button size="sm" className="flex-1" onClick={() => window.open(project.demo, "_blank")}>
                <ExternalLink className="w-4 h-4 mr-2" /> Live
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

