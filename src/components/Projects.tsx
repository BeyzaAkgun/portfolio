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

const projects = [
  {
    title: "NestPrint API – E-Commerce Backend",
    year: "2026 (Ongoing)",
    description: "Modular and scalable backend API tailored for NetPrint technology stack. Built with NestJS, Prisma ORM, and PostgreSQL.",
    highlights: [
      "Developed modular backend API architecture using NestJS and TypeScript",
      "Database modeling with PostgreSQL + Prisma ORM, JWT authentication, and role-based authorization",
      "Designed RESTful endpoints for product, order, and user management",
      "Added Docker containerization, Swagger API documentation, and basic unit tests"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "JWT", "REST API"],
    featured: true,
    github: "https://github.com/BeyzaAkgun/nestprint-api",
    demo: null,
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Dynamic Pricing E-Commerce Platform",
    year: "2025",
    description: "Full-stack product listing platform with dynamic pricing based on real-time gold prices.",
    highlights: [
      "Built full-stack application with React frontend and Express.js backend",
      "Implemented real-time dynamic pricing with GoldAPI integration",
      "Added product filtering, sorting, and responsive design",
      "Deployed on Render and Vercel with CI/CD pipelines"
    ],
    technologies: ["React", "Express.js", "Node.js", "REST API", "GoldAPI", "Vercel", "Render"],
    featured: true,
    github: "https://github.com/BeyzaAkgun/renart-case-study",
    demo: "https://renart-frontend-vnj3.onrender.com",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "Employee Attrition Prediction – ML Web App",
    year: "2023-2024",
    description: "Full-stack machine learning application predicting employee attrition with 90% accuracy using AdaBoost.",
    highlights: [
      "Developed microservices architecture with Vue.js frontend, Spring Boot auth, and Flask ML API",
      "Built prediction model with AdaBoost Classifier achieving 90% accuracy",
      "Implemented CSV/Excel upload, data processing pipeline, and dashboard visualization",
      "Gained experience with Docker containerization and team development"
    ],
    technologies: ["Vue.js", "Spring Boot", "Flask", "PostgreSQL", "Docker", "Machine Learning"],
    featured: true,
    github: "https://github.com/BeyzaAkgun/employee-attrition-prediction",
    demo: null,
    icon: <Brain className="w-5 h-5" />
  },
  {
    title: "Netflix Clone – Movie Discovery App",
    year: "2023",
    description: "Modern and responsive movie discovery app built with TypeScript. Integrated with TMDB API.",
    highlights: [
      "Built responsive movie discovery app using React + TypeScript",
      "Integrated TMDB API and implemented real-time search with Appwrite",
      "Optimized search with 500ms debounce and designed dark mode UI with Tailwind CSS",
      "Deployed on Vercel with performance optimizations"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "TMDB API", "Appwrite", "Vercel"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/NetflixClone",
    demo: "https://netflix-clone-tau-swart.vercel.app",
    icon: <Smartphone className="w-5 h-5" />
  },

  // 🧠 AI/ML PROJECTS
  {
    title: "Bubble Sheet Scanner – Deep Learning Pipeline",
    year: "2025 (Capstone Project)",
    description: "Template-free Optical Mark Recognition (OMR) pipeline with semantic segmentation and image captioning for automatic answer sheet reading.",
    highlights: [
      "Compared SegFormer, ResNet-34, and U-Net models achieving 99.9% segmentation accuracy",
      "Built image captioning model using EfficientNet-B0 encoder + Transformer decoder",
      "Achieved 52.4% exact-match OCR accuracy on 5,042 scans",
      "Performed comparative evaluation with vision-language models"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Transformers", "Computer Vision"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/bubble-sheet-scanner",
    demo: null,
    icon: <Cpu className="w-5 h-5" />
  },
    {
    title: "Insurance Premium Category – ML API",
    year: "2025",
    description: "Insurance premium categorization using FastAPI + Streamlit + Docker. Planned AWS EC2 deployment.",
    highlights: [
      "Performed feature engineering on age, weight, smoker status, etc.",
      "Developed ML model for BMI calculation and premium categorization",
      "Built full-stack app with FastAPI backend and Streamlit frontend",
       "Docker containerization completed, planning AWS EC2 deployment"
    ],
    technologies: ["Python", "FastAPI", "Streamlit", "Docker", "AWS EC2", "Machine Learning"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/insurance-premium-category",
    demo: null,
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Spam Classification – Transformer Models",
    year: "2025 (CMPE 346 Final Project)",
    description: "Comparison of BERT, RoBERTa, DistilBERT, ALBERT, and T5 models for spam classification.",
    highlights: [
      "Compared 5 transformer models on 3 different datasets",
      "Achieved 98.21% accuracy with RoBERTa on YouTube spam dataset",
      "Achieved 99.64% accuracy with BERT on Enron email dataset",
      "Evaluated models using accuracy and F1-score metrics"
    ],
    technologies: ["Python", "Transformers", "PyTorch", "HuggingFace", "NLP"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/cmpe346-spam-classification",
    demo: null,
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    title: "Multilingual Sentiment Analysis",
    year: "2025 (CMPE 346 Assignment)",
    description: "Transformer-based multilingual sentiment analysis model published on Hugging Face Hub.",
    highlights: [
      "Fine-tuned bert-base-multilingual-cased model for sentiment analysis",
      "Published and shared the model on Hugging Face Hub",
      "Evaluated performance using F1-score metrics",
      "Built model capable of classifying positive/negative sentiment on multilingual texts"
    ],
    technologies: ["Python", "Transformers", "HuggingFace", "PyTorch", "NLP"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/multilingual-sentiment-analysis",
    demo: null,
    icon: <Globe className="w-5 h-5" />
  }

  // ⚡ OTHER WEB PROJECTS
  ,
  {
    title: "Advanced React Calculator",
    year: "2025",
    description: "Modern calculator with voice recognition, dark mode, and calculation history features.",
    highlights: [
      "Built modern responsive calculator using React",
      "Integrated voice recognition with Web Speech API",
      "Implemented dark/light mode toggle and calculation history",
      "Added keyboard support and responsive design for better UX"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Web Speech API"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/react-calculator",
    demo: "https://react-calculator-beyza.vercel.app",
    icon: <Calculator className="w-5 h-5" />
  },
  {
    title: "ChatGPT & DeepSeek Manager",
    year: "2025",
    description: "Tampermonkey userscript for managing ChatGPT and DeepSeek conversations with a modern UI.",
    highlights: [
      "Developed modern management interface as a Tampermonkey userscript",
      "Added advanced search, bulk operations, and bulk deletion",
      "Improved UX with drag-select and Shift+Click features",
      "Multi-platform support for both ChatGPT and DeepSeek"
    ],
    technologies: ["JavaScript", "Tampermonkey", "UI/UX", "Chrome Extension"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/chatgpt-deepseek-manager",
    demo: null,
    icon: <MessageSquare className="w-5 h-5" />
  },
  {
    title: "CTU-13 Cybersecurity Analysis",
    year: "2024",
    description: "Cybersecurity analysis and ML experiments on CTU-13 network traffic dataset.",
    highlights: [
      "Performed exploratory data analysis on CTU-13 network traffic dataset",
      "Implemented feature engineering and ML experiments for botnet detection",
      "Evaluated basic ML models for network intrusion detection",
      "Documented findings in project report"
    ],
    technologies: ["Python", "Machine Learning", "Cybersecurity", "Data Analysis"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/cybersecurity-ctu13",
    demo: null,
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: "Seesaw Physics Simulation",
    year: "2025",
    description: "Pure JavaScript physics simulation of a seesaw with realistic torque calculations.",
    highlights: [
      "Built interactive physics simulation using pure JavaScript",
      "Implemented realistic torque calculations (Torque = weight × distance)",
      "Used CSS transforms and smooth animations for natural motion",
      "Implemented persistent state management with localStorage"
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Physics Simulation"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/seesaw-simulation",
    demo: "https://beyzaakgun.github.io/seesaw-simulation",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "AI Quiz App",
    year: "2023",
    description: "Flask-based web quiz application with multiple-choice questions on Python and AI topics.",
    highlights: [
      "Built web-based quiz application using Flask",
      "Added score persistence and highest score tracking with SQLite",
      "Created 5 questions on Python and AI topics",
      "Designed clean and responsive UI"
    ],
    technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "Jinja2"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/ai-quiz-app",
    demo: null,
    icon: <Brain className="w-5 h-5" />
  },

  // 🚀 ONGOING PROJECTS
   {
    title: "NestPrint API – E-Commerce Backend",
    year: "2026 (Ongoing)",
    description: "Modular and scalable backend API tailored for NetPrint technology stack. Built with NestJS, Prisma ORM, and PostgreSQL.",
    highlights: [
      "Developed modular backend API architecture using NestJS and TypeScript",
      "Database modeling with PostgreSQL + Prisma ORM, JWT authentication, and role-based authorization",
      "Designed RESTful endpoints for product, order, and user management",
      "Added Docker containerization, Swagger API documentation, and basic unit tests"
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "JWT", "REST API"],
    featured: true,
    github: "https://github.com/BeyzaAkgun/nestprint-api",
    demo: null,
    icon: <Database className="w-5 h-5" />
  },

  {
    title: "Country Guesser Game",
    year: "2026 (Ongoing)",
    description: "Interactive world map game to guess countries. FastAPI backend with modern frontend.",
    highlights: [
      "Developing country guessing game on interactive world map",
      "Implemented country info API and user tracking system with FastAPI",
      "Planning difficulty ML scoring and user progression features",
      "Designed responsive and mobile-friendly UI"
    ],
    technologies: ["FastAPI", "React", "JavaScript", "Maps API", "Machine Learning"],
    featured: false,
    github: "https://github.com/BeyzaAkgun/country-guesser-game",
    demo: null,
    icon: <Globe className="w-5 h-5" />
  }
];

// ================= PROJECTS COMPONENT =================
export function Projects() {
  const netprintProjects = projects.slice(0, 4);
  const aiProjects = projects.slice(4, 7);
  const webProjects = projects.slice(7, 12);
  const ongoingProjects = projects.slice(12);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* 🎯 NETPRINT PROJECTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl text-center text-slate-800 font-bold">NetPrint Projects</h2>
          </div>
          <p className="text-center text-slate-600 mb-10 max-w-3xl mx-auto text-lg">
            <span className="font-semibold text-blue-700">Focused on NestJS, TypeScript, PostgreSQL, and Prisma ORM</span> full-stack projects. Specialized in e-commerce platforms, API integrations, and user experience.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {netprintProjects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
          </div>
        </motion.div>

        {/* 🧠 AI/ML PROJECTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800">AI & Machine Learning Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
          </div>
        </motion.div>

        {/* ⚡ OTHER WEB PROJECTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800">Other Web Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
          </div>
        </motion.div>

        {/* 🚀 ONGOING PROJECTS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-800">Ongoing Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {ongoingProjects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    year: string;
    description: string;
    highlights: string[];
    technologies: string[];
    featured: boolean;
    github: string;
    demo: string | null;
    icon: JSX.Element;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={project.featured ? "md:col-span-2" : ""}
    >
      <Card
        className={`h-full bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
          project.featured
            ? "border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
            : ""
        }`}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  {project.icon}
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">{project.year}</CardDescription>
                </div>
              </div>

              {project.title.includes("NestPrint") && (
                <Badge className="mb-3 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  🎯 NetPrint Stack Compatible
                </Badge>
              )}
            </div>

            {project.featured && (
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                ⭐ Featured
              </Badge>
            )}
          </div>

          <p className="text-slate-700 mt-4">{project.description}</p>
        </CardHeader>

        <CardContent>
          {/* Öne çıkanlar */}
          <ul className="space-y-2 mb-6">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-slate-700 text-sm">
                <span className="text-blue-600 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Teknolojiler */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className={`text-xs border-slate-300 ${
                  ["NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", "React", "Node.js"].includes(
                    tech
                  )
                    ? "border-blue-300 bg-blue-50 text-blue-700 font-medium"
                    : ""
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* GitHub ve Live Demo Butonları */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 flex-1"
              onClick={() => window.open(project.github, "_blank")}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            {project.demo && (
              <Button
                variant="default"
                size="sm"
                className="gap-2 flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                onClick={() => project.demo && window.open(project.demo, "_blank")}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

