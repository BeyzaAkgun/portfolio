import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ExternalLink,
  Github,
  Cpu,
  Globe,
  MessageSquare,
  Shield,
  Brain,
  Smartphone,
  TrendingUp,
  Activity,
  Code2,
  Calculator
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Project = {
  title: string;
  year: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  github_frontend?: string;
  github_backend?: string;
  demo?: string | null;
  icon: ReactNode;
};

type ProjectSectionProps = {
  title: string;
  items: Project[];
};

// ================= PROJECT DATA =================
const projects = {
  featured: [
    {
      title: "Country Guessing Game",
      year: "2026",
      description:
        "Full-stack geography game featuring 8 game modes, real-time multiplayer, ranking systems, and interactive world map gameplay.",
      highlights: [
        "Built 8 unique game modes including Flag Quiz, Capitals, Speed Round, and Daily Challenge",
        "Implemented real-time multiplayer ranked matches using WebSockets",
        "Designed XP, leveling, rank progression, and global leaderboard systems",
        "Developed responsive React UI with interactive world map and 3D globe experience"
      ],
      technologies: ["React", "TypeScript", "FastAPI", "WebSockets", "Tailwind CSS", "Three.js"],
      github_frontend: "https://github.com/BeyzaAkgun/country-guessing-game",
      github_backend: "https://github.com/BeyzaAkgun/country-guessing-game-backend",
      demo: "https://country-guessing-game-five.vercel.app/",
      icon: <Globe className="w-5 h-5" />
    },
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
      github: "https://github.com/BeyzaAkgun/Bubble-Sheet-Scanner-Using-Deep-Learning",
      demo: null,
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Insurance Premium Risk Prediction",
      year: "2025",
      description:
        "Production-ready machine learning application for insurance risk assessment and real-time premium prediction.",
      highlights: [
        "Built classification model predicting insurance risk levels using engineered health and demographic features",
        "Developed FastAPI prediction service with REST endpoints for real-time inference",
        "Containerized the application with Docker and deployed on AWS EC2",
        "Integrated Streamlit frontend for interactive risk analysis and model serving"
      ],
      technologies: ["Python", "Scikit-learn", "FastAPI", "Docker", "AWS", "Streamlit"],
      github: "https://github.com/BeyzaAkgun/insurance-premium-prediction",
      demo: null,
      icon: <Activity className="w-5 h-5" />
    },
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
      title: "Telecom Customer Churn Prediction",
      year: "2025",
      description:
        "Machine learning solution for customer churn prediction with explainable AI and business-focused retention insights.",
      highlights: [
        "Built XGBoost churn prediction model identifying key customer retention drivers",
        "Applied SHAP analysis to explain model predictions and support business decisions",
        "Engineered behavioral and service-based features from telecom customer data",
        "Created Tableau dashboard for churn risk monitoring and customer segmentation"
      ],
      technologies: ["Python", "XGBoost", "SHAP", "Pandas", "Scikit-learn", "Tableau"],
      github: "",
      demo: null,
      icon: <TrendingUp className="w-5 h-5" />
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
      github: "",
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
    },
    {
      title: "Seesaw Simulation",
      year: "2024",
      description:
        "Pure JavaScript physics simulation of a playground seesaw with torque-based movement and interactive object drops.",
      highlights: [
        "Implemented torque-based physics using weight × distance from pivot",
        "Created smooth animation and seesaw rotation with CSS transforms",
        "Persisted simulation state with localStorage",
        "Built a responsive UI with interaction history and visual measurement scale"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Physics Simulation", "LocalStorage"],
      github: "https://github.com/BeyzaAkgun/seesaw-simulation-beyza-akgun",
      demo: null,
      icon: <Code2 className="w-5 h-5" />
    }
  ],

  tools: [
    {
      title: "ChatGPT & DeepSeek Manager",
      year: "2024",
      description:
        "Modern userscript for bulk deleting and managing conversations in ChatGPT and DeepSeek with advanced search and multi-select tools.",
      highlights: [
        "Added real-time search with highlighted matching conversations",
        "Implemented bulk delete, toggle all, clear all, and drag-select actions",
        "Supported Shift+Click range selection and draggable control panel",
        "Built platform-aware logic for ChatGPT and DeepSeek interfaces"
      ],
      technologies: ["Tampermonkey", "JavaScript", "DOM Manipulation", "UI/UX", "Automation"],
      github: "https://github.com/BeyzaAkgun/chatgpt-deepseek-manager",
      demo: null,
      icon: <Code2 className="w-5 h-5" />
    },
    {
      title: "Advanced React Calculator",
      year: "2024",
      description:
        "Feature-rich calculator built with React, including voice recognition, history, and dark mode.",
      highlights: [
        "Supported voice-based calculations through Web Speech API",
        "Built dark/light mode toggle with responsive modern UI",
        "Added calculation history for quick reuse of previous operations",
        "Enabled keyboard shortcuts for fast input and accessibility"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Web Speech API", "Lucide React"],
      github: "https://github.com/BeyzaAkgun/react-calculator",
      demo: null,
      icon: <Calculator className="w-5 h-5" />
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
        <ProjectSection title="Tools & Automation Projects" items={projects.tools} />
      </div>
    </section>
  );
}

function ProjectSection({ title, items }: ProjectSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-800">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((project, index) => (
          <ProjectCard key={project.title + index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const repoLinks: { label: string; url: string }[] = [];

  if (project.github_frontend) {
    repoLinks.push({ label: "Frontend", url: project.github_frontend });
  }
  if (project.github_backend) {
    repoLinks.push({ label: "Backend", url: project.github_backend });
  }
  if (project.github && !project.github_frontend && !project.github_backend) {
    repoLinks.push({ label: "GitHub", url: project.github });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Card className="h-full bg-white/90 backdrop-blur border-slate-200 shadow-lg hover:shadow-xl transition-all">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
              {project.icon}
            </div>
            <div>
              <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
              <CardDescription>{project.year}</CardDescription>
            </div>
          </div>
          <p className="text-slate-700 mt-3">{project.description}</p>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2 mb-4 text-sm text-slate-700">
            {project.highlights.map((h, i) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {repoLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
              >
                <Github className="w-4 h-4 mr-2" /> {link.label}
              </Button>
            ))}

            {project.demo && (
              <Button
                size="sm"
                className="flex-1"
                onClick={() => window.open(project.demo!, "_blank", "noopener,noreferrer")}
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Live
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}