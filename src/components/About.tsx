
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  GraduationCap,
  Medal,
  Sparkles,
} from "lucide-react";

const coursework = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Algorithms & Data Structures",
  "Database Systems",
  "Software Engineering",
  "Probability & Statistics",
  "Cryptography",
];

export function About() {
  return (
    <section className="neo-education" id="education">
      <div className="neo-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="neo-education-heading">
            <span className="neo-section-eyebrow">
              <GraduationCap size={18} aria-hidden="true" />
              MY BACKGROUND
            </span>

            <h2>
              EDUCATION <span>& MORE.</span>
            </h2>

            <p>
              The academic foundation behind my work in software
              engineering, backend development, and applied AI.
            </p>
          </div>

          <div className="neo-education-layout">
            <article className="neo-education-main neo-card">
              <div className="neo-education-topline">
                <span>2021 — 2025</span>
                <GraduationCap size={30} aria-hidden="true" />
              </div>

              <span className="neo-education-label">
                BACHELOR OF SCIENCE
              </span>

              <h3>Istanbul Bilgi University</h3>

              <p className="neo-education-degree">
                Computer Engineering
              </p>

              <p className="neo-education-location">
                Istanbul, Türkiye
              </p>

              <div className="neo-education-stats">
                <div>
                  <span>GPA</span>
                  <strong>3.21 / 4.00</strong>
                </div>

                <div>
                  <span>SCHOLARSHIP</span>
                  <strong>50%</strong>
                </div>
              </div>

              <div className="neo-education-coursework">
                <h4>
                  <BookOpen size={18} aria-hidden="true" />
                  RELEVANT COURSEWORK
                </h4>

                <div className="neo-project-tags">
                  {coursework.map((course) => (
                    <span key={course}>{course}</span>
                  ))}
                </div>
              </div>
            </article>

            <div className="neo-achievements">
              <article className="neo-achievement neo-achievement-lime">
                <Award size={32} aria-hidden="true" />
                <span>ACADEMIC AWARD</span>
                <h3>Best Senior Design Project</h3>
                <p>
                  Recognition for the Bubble Sheet Scanner
                  deep learning capstone project.
                </p>
              </article>

              <article className="neo-achievement neo-achievement-pink">
                <Medal size={32} aria-hidden="true" />
                <span>ACADEMIC HONORS</span>
                <h3>Dean's Honor List</h3>
                <p>
                  Academic recognition during my Computer
                  Engineering studies.
                </p>
              </article>

              <article className="neo-achievement neo-achievement-purple">
                <Sparkles size={32} aria-hidden="true" />
                <span>CERTIFICATION</span>
                <h3>Trust4Future Blockchain</h3>
                <p>
                  Additional learning and certification
                  in blockchain technology.
                </p>
              </article>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
