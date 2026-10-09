
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Server,
  Code2,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  category: string;
  highlights: string[];
  skills: string[];
  icon: LucideIcon;
  color: "lime" | "pink" | "purple";
};

const experiences: ExperienceItem[] = [
  {
    title: "Microsoft Operating System Project Assistant",
    company: "KoçSistem",
    location: "Istanbul, Türkiye",
    period: "Mar 2024 — Sep 2024",
    category: "ENTERPRISE IT",
    highlights: [
      "Collaborated with technical teams to resolve 50+ IT incidents, supporting service continuity and troubleshooting.",
      "Worked with enterprise infrastructure technologies including Active Directory, DNS, DHCP, and Group Policy.",
      "Supported incident response and service restoration efforts during the global CrowdStrike outage.",
    ],
    skills: [
      "Active Directory",
      "DNS / DHCP",
      "Group Policy",
      "Incident Management",
      "Troubleshooting",
    ],
    icon: Server,
    color: "lime",
  },
  {
    title: "Software Unit Management Intern",
    company: "Prodea Information and Consultancy",
    location: "Istanbul, Türkiye",
    period: "Jun 2024 — Aug 2024",
    category: "SOFTWARE & IT",
    highlights: [
      "Supported software team activities through technical documentation and coordination.",
      "Gained exposure to issue tracking and software project workflows, including Jira.",
      "Attended training sessions introducing SAP S/4HANA and SAP Customer Experience solutions.",
    ],
    skills: [
      "Technical Documentation",
      "Software Workflows",
      "Jira (Exposure)",
      "SAP Training",
    ],
    icon: Code2,
    color: "pink",
  },
  {
    title: "Freelance Private Tutor",
    company: "Self-Employed",
    location: "Hybrid",
    period: "2023 — Present",
    category: "TEACHING & COMMUNICATION",
    highlights: [
      "Delivered personalized English lessons adapted to individual learning needs and skill levels.",
      "Created structured lesson plans and practical learning activities.",
      "Strengthened communication, planning, and problem-solving skills through one-to-one teaching.",
    ],
    skills: [
      "Communication",
      "Problem Solving",
      "Lesson Planning",
      "Mentoring",
    ],
    icon: BookOpen,
    color: "purple",
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: ExperienceItem;
  index: number;
}) {
  const Icon = experience.icon;

  return (
    <motion.article
      className={`neo-exp-card neo-exp-${experience.color}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="neo-exp-card-top">
        <div className="neo-exp-icon">
          <Icon size={26} strokeWidth={2.4} aria-hidden="true" />
        </div>

        <span className="neo-exp-category">
          {experience.category}
        </span>
      </div>

      <div className="neo-exp-card-heading">
        <h3>{experience.title}</h3>
        <p className="neo-exp-company">
          {experience.company}
          <ArrowUpRight size={18} aria-hidden="true" />
        </p>
      </div>

      <div className="neo-exp-meta">
        <span>
          <CalendarDays size={16} aria-hidden="true" />
          {experience.period}
        </span>

        <span>
          <MapPin size={16} aria-hidden="true" />
          {experience.location}
        </span>
      </div>

      <ul className="neo-exp-highlights">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="neo-exp-skills">
        {experience.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </motion.article>
  );
}

export function Experience() {
  return (
    <section className="neo-experience" id="experience">
      <div className="neo-container">
        <motion.div
          className="neo-experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="neo-section-eyebrow">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            PROFESSIONAL JOURNEY
          </span>

          <h2>
            WORK <span>EXPERIENCE.</span>
          </h2>

          <p>
            From enterprise IT operations to software team
            collaboration, building practical technical skills
            and a problem-solving mindset along the way.
          </p>
        </motion.div>

        <div className="neo-exp-timeline">
          {experiences.map((experience, index) => (
            <div className="neo-exp-entry" key={experience.company}>
              <div className="neo-exp-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <ExperienceCard
                experience={experience}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
