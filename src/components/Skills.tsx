
import { motion } from "motion/react";
import {
  BrainCircuit,
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillCategory = {
  title: string;
  number: string;
  icon: LucideIcon;
  color: "lime" | "pink" | "purple" | "yellow";
  description: string;
  skills: string[];
  featured: string[];
};

const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Backend & APIs",
    icon: Server,
    color: "lime",
    description:
      "Building server-side applications, APIs, and real-time systems.",
    skills: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "JWT",
      "Spring Data JPA",
      "SQLAlchemy",
    ],
    featured: ["Spring Boot", "FastAPI", "REST APIs"],
  },
  {
    number: "02",
    title: "AI / ML & Data",
    icon: BrainCircuit,
    color: "purple",
    description:
      "Developing machine learning and computer vision solutions.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
      "OpenCV",
      "Computer Vision",
      "NLP",
      "Pandas",
      "NumPy",
      "Model Evaluation",
    ],
    featured: [
      "PyTorch",
      "Scikit-learn",
      "Computer Vision",
    ],
  },
  {
    number: "03",
    title: "Frontend Development",
    icon: Layers3,
    color: "pink",
    description:
      "Creating interactive, responsive web interfaces.",
    skills: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "HTML5",
      "CSS3",
      "Sass",
      "Tailwind CSS",
    ],
    featured: ["React", "Angular", "TypeScript"],
  },
  {
    number: "04",
    title: "Databases & Caching",
    icon: Database,
    color: "yellow",
    description:
      "Working with relational databases and application caching.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Redis",
      "Database Design",
      "Data Modeling",
      "JPA / Hibernate",
    ],
    featured: ["PostgreSQL", "Redis", "SQL"],
  },
  {
    number: "05",
    title: "Testing & DevOps",
    icon: GitBranch,
    color: "lime",
    description:
      "Testing applications and working with development workflows.",
    skills: [
      "JUnit",
      "Mockito",
      "Vitest",
      "Playwright",
      "GitHub Actions",
      "Git",
      "GitHub",
      "Docker",
      "Linux (Basic)",
    ],
    featured: ["JUnit", "Mockito", "GitHub Actions"],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    icon: Wrench,
    color: "purple",
    description:
      "Tools used for development, debugging, and collaboration.",
    skills: [
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
      "Maven",
      "Jupyter Notebook",
      "Jira (Basic)",
      "Agile / Scrum",
      "Vercel",
      "Render",
    ],
    featured: ["Postman", "Maven", "VS Code"],
  },
];

const coreStack = [
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "React",
  "Angular",
  "TypeScript",
];

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.article
      className={`neo-skill-card neo-skill-${category.color}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay: (index % 3) * 0.08,
      }}
    >
      <div className="neo-skill-card-top">
        <div className="neo-skill-icon">
          <Icon size={27} strokeWidth={2.3} aria-hidden="true" />
        </div>

        <span className="neo-skill-number">
          {category.number} / 06
        </span>
      </div>

      <h3>{category.title}</h3>
      <p className="neo-skill-description">
        {category.description}
      </p>

      <div className="neo-skill-tags">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className={
              category.featured.includes(skill)
                ? "neo-skill-tag-featured"
                : ""
            }
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Skills() {
  return (
    <section className="neo-skills" id="skills">
      <div className="neo-container">
        <motion.div
          className="neo-skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="neo-section-eyebrow">
            <Braces size={18} aria-hidden="true" />
            WHAT I WORK WITH
          </span>

          <h2>
            TECH <span>STACK.</span>
          </h2>

          <p>
            Technologies I've worked with across backend
            development, full-stack applications, and applied
            AI/ML projects.
          </p>
        </motion.div>

        <div className="neo-core-stack">
          <div className="neo-core-stack-label">
            <Zap size={18} aria-hidden="true" />
            CORE STACK
          </div>

          <div className="neo-core-stack-items">
            {coreStack.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="neo-skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
