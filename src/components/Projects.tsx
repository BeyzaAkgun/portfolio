
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Plane,
  Globe2,
  ScanLine,
  Gem,
  Activity,
  TrendingUp,
  MessagesSquare,
  Users,
  ShieldCheck,
  Scale,
  Code2,
  FolderGit2,
  Clapperboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  color: "lime" | "pink" | "purple" | "yellow";
  image?: string;
  github?: string;
  githubFrontend?: string;
  githubBackend?: string;
  demo?: string;
};

const featuredProjects: Project[] = [
  {
    title: "Airline Operations Dashboard",
    category: "FULL-STACK / BACKEND",
    description:
      "A full-stack flight management application built with Angular, Spring Boot, and PostgreSQL. Features flight search, status filtering, CRUD operations, reactive form validation, and REST APIs. Includes 24 automated tests and GitHub Actions CI.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "TypeScript",
      "PostgreSQL",
      "JUnit",
    ],
    icon: Plane,
    color: "lime",
    image: "/projects/airline-dashboard.png",
    github: "https://github.com/BeyzaAkgun/airline-operations",
  },
  {
    title: "Country Guessing Game",
    category: "REAL-TIME / FULL-STACK",
    description:
      "An interactive geography game with eight game modes, a 3D globe, real-time multiplayer, and an XP-based ranking system. Built with React and FastAPI, using Redis for matchmaking, PostgreSQL for persistence, JWT authentication, and WebSockets.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "WebSockets",
    ],
    icon: Globe2,
    color: "purple",
    image: "/projects/country-game.png",
    githubFrontend: "https://github.com/BeyzaAkgun/Country-Guessing-Game",
    githubBackend:
      "https://github.com/BeyzaAkgun/country-guessing-game-backend",
    // Live demo can be added after the reported UI issues are fixed.
  },
  {
    title: "Bubble Sheet Scanner",
    category: "AI / COMPUTER VISION",
    description:
      "A template-free Optical Mark Recognition pipeline for detecting answer regions in scanned exam papers and predicting marked answers. Evaluated multiple segmentation architectures and combined EfficientNet-B0 with a Transformer-based recognition model.",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "SegFormer",
      "Transformers",
    ],
    icon: ScanLine,
    color: "pink",
    image: "/projects/bubble-sheet.png",
    github:
      "https://github.com/BeyzaAkgun/Bubble-Sheet-Scanner-Using-Deep-Learning",
  },
  {
    title: "Real-Time Jewelry Pricing",
    category: "FULL-STACK / API INTEGRATION",
    description:
      "A responsive jewelry catalog with dynamic gold-based pricing, filtering, sorting, and metal finish selection. Built with React and Express, including server-side gold price integration, caching, request deduplication, and fallback handling.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "REST APIs",
    ],
    icon: Gem,
    color: "yellow",
    image: "/projects/jewelry-pricing.png",
    github: "https://github.com/BeyzaAkgun/renart-case-study",
    // Add a live link only after verifying the deployed version.
  },
];

const otherProjects: Project[] = [
  {
    title: "Network Metrics Dashboard",
    category: "DATA / MONITORING",
    description:
      "Interactive network monitoring with configurable thresholds, downloadable reports, and optional hand-gesture navigation.",
    technologies: ["Python", "Streamlit", "Pandas", "OpenCV", "MediaPipe"],
    icon: Activity,
    color: "purple",
  },
  {
    title: "Telecom Customer Churn",
    category: "MACHINE LEARNING",
    description:
      "XGBoost churn prediction with SHAP model explanations and an interactive Tableau dashboard. Achieved 0.8377 ROC-AUC.",
    technologies: ["Python", "XGBoost", "SHAP", "Tableau"],
    icon: TrendingUp,
    color: "pink",
    github: "https://github.com/BeyzaAkgun/telco-churn-prediction",
    demo:
      "https://public.tableau.com/app/profile/beyza.akg.n/viz/Book1_17812775873850/TelcoCustomerChurnDashboard",
  },
  {
    title: "ChatGPT & DeepSeek Manager",
    category: "BROWSER AUTOMATION",
    description:
      "A browser userscript for searching, selecting, and managing conversations with bulk actions and platform-specific interfaces.",
    technologies: ["JavaScript", "Tampermonkey", "DOM APIs"],
    icon: MessagesSquare,
    color: "lime",
    github: "https://github.com/BeyzaAkgun/chatgpt-deepseek-manager",
  },
  {
    title: "Employee Attrition Prediction",
    category: "FULL-STACK / ML",
    description:
      "A team-built employee attrition prediction application with a Vue.js frontend, Spring Boot authentication, and Flask ML services.",
    technologies: ["Vue.js", "Spring Boot", "Flask", "Scikit-learn"],
    icon: Users,
    color: "yellow",
    github: "https://github.com/BeyzaAkgun/employee-attrition-prediction",
  },
  {
    title: "Insurance Premium Prediction",
    category: "ML / API DEVELOPMENT",
    description:
      "A Random Forest classification application with feature engineering, a validated FastAPI prediction endpoint, and a Streamlit interface.",
    technologies: ["Python", "FastAPI", "Scikit-learn", "Streamlit"],
    icon: ShieldCheck,
    color: "pink",
    github: "https://github.com/BeyzaAkgun/insurance-premium-prediction",
  },
  {
    title: "Seesaw Simulation",
    category: "JAVASCRIPT / SIMULATION",
    description:
      "An interactive seesaw simulation with torque calculations, smooth animations, and persistent browser state.",
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
    icon: Scale,
    color: "lime",
    github:
      "https://github.com/BeyzaAkgun/seesaw-simulation-beyza-akgun",
    demo: "https://beyzaakgun.github.io/seesaw-simulation-beyza-akgun/",
  },
  {
    title: "CTU-13 Cybersecurity",
    category: "SECURITY / DATA ANALYSIS",
    description:
      "An academic network traffic analysis project exploring preprocessing, feature selection, and malicious traffic classification.",
    technologies: ["Python", "Machine Learning", "Cybersecurity"],
    icon: Activity,
    color: "purple",
    github: "https://github.com/BeyzaAkgun/cybersecurity-ctu13",
  },
  {
    title: "Java Algorithms",
    category: "ALGORITHMS / DATA STRUCTURES",
    description:
      "Java algorithm implementations, including a grid percolation simulation using the union-find data structure.",
    technologies: ["Java", "Algorithms", "Union-Find"],
    icon: Code2,
    color: "yellow",
    github: "https://github.com/BeyzaAkgun/Algorithms-java",
  },

  {
  title: "Netflix Clone",
  category: "FRONTEND / MOVIE DISCOVERY",
  description:
    "A responsive movie discovery application built with React, featuring TMDB API integration, debounced search, and trending movie discovery powered by Appwrite.",
  technologies: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "TMDB API",
    "Appwrite",
  ],
  icon: Clapperboard,
  color: "purple",
  github: "https://github.com/BeyzaAkgun/NetflixClone",
},
];

function ProjectLinks({ project }: { project: Project }) {
  const links = [
    project.github && {
      label: "GitHub",
      url: project.github,
      icon: Github,
    },
    project.githubFrontend && {
      label: "Frontend",
      url: project.githubFrontend,
      icon: Github,
    },
    project.githubBackend && {
      label: "Backend",
      url: project.githubBackend,
      icon: Github,
    },
    project.demo && {
      label: "Live Demo",
      url: project.demo,
      icon: ExternalLink,
    },
  ].filter(
    (link): link is { label: string; url: string; icon: LucideIcon } =>
      Boolean(link)
  );

  return (
    <div className="neo-project-links">
      {links.map(({ label, url, icon: Icon }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="neo-project-link"
        >
          <Icon size={16} aria-hidden="true" />
          {label}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const Icon = project.icon;

  return (
    <div className={`neo-project-media neo-project-${project.color}`}>
      {project.image && !failed ? (
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="neo-project-placeholder">
          <Icon size={58} strokeWidth={1.6} aria-hidden="true" />
          <span>{project.title}</span>
          <small>{project.category}</small>
        </div>
      )}
    </div>
  );
}

function FeaturedCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      className={`neo-featured-card ${index === 0 ? "neo-featured-main" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
    >
      <ProjectImage project={project} />

      <div className="neo-featured-content">
        <div className="neo-project-meta">
          <span>PROJECT / {String(index + 1).padStart(2, "0")}</span>
          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="neo-project-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function OtherCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.article
      className={`neo-other-card neo-project-${project.color}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="neo-other-card-top">
        <Icon size={29} strokeWidth={2} aria-hidden="true" />
        <span>{project.category}</span>
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="neo-project-tags">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </motion.article>
  );
}

export function Projects() {
  return (
    <section className="neo-projects" id="projects">
      <div className="neo-container">
        <div className="neo-projects-heading">
          <span className="neo-section-eyebrow">
            <FolderGit2 size={17} aria-hidden="true" />
            SELECTED WORK
          </span>

          <h2>
            THINGS I'VE <span>BUILT.</span>
          </h2>

          <p>
            A selection of projects spanning backend engineering,
            full-stack development, real-time applications, and AI.
          </p>
        </div>

        <div className="neo-projects-subheading">
          <h3>FEATURED PROJECTS</h3>
          <span>01 — 04</span>
        </div>

        <div className="neo-featured-grid">
          {featuredProjects.map((project, index) => (
            <FeaturedCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="neo-projects-subheading neo-other-heading">
          <h3>OTHER PROJECTS</h3>
          <span>MORE THINGS I'VE WORKED ON</span>
        </div>

        <div className="neo-other-grid">
          {otherProjects.map((project) => (
            <OtherCard key={project.title} project={project} />
          ))}
        </div>

        <div className="neo-projects-footer">
          <p>Curious about what else I've built?</p>
          <a
            href="https://github.com/BeyzaAkgun"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button"
          >
            <Github size={19} aria-hidden="true" />
            EXPLORE MY GITHUB
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
