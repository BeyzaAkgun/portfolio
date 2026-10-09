
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Terminal,
  Code2,
  Database,
  Download,
} from "lucide-react";
import { motion } from "motion/react";

const technologies = [
  "PYTHON",
  "JAVA",
  "TYPESCRIPT",
  "REACT",
  "SPRING BOOT",
  "FASTAPI",
  "POSTGRESQL",
];

export function Hero() {
  return (
    <section id="home" className="neo-hero">
      <div className="neo-container">
        <motion.div
          className="neo-hero-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="neo-hero-main">
            <div className="neo-hero-eyebrow">
              <span className="neo-status-dot" />
              SOFTWARE ENGINEER
              <span className="neo-eyebrow-star">✳</span>
              ISTANBUL, TR
            </div>

            <h1 className="neo-hero-title">
              HI, I'M
              <br />
              <span>BEYZA.</span>
            </h1>

            <p className="neo-hero-description">
              I build reliable backend systems, full-stack applications,
              and intelligent software solutions.
            </p>

            <div className="neo-hero-actions">
              <a href="#projects" className="neo-button neo-button-dark">
                EXPLORE MY WORK
                <ArrowUpRight size={19} />
              </a>

              <a href="#contact" className="neo-button neo-button-white">
                GET IN TOUCH
                <ArrowUpRight size={19} />
              </a>
            </div>
             <a
                href="/Beyza_Akgun_CV.pdf"
                download="Beyza_Akgun_CV.pdf"
                className="neo-hero-resume"
              >
              <Download size={18} />
              DOWNLOAD MY RESUME
              <ArrowUpRight size={16} />
              </a>

            <div className="neo-hero-socials">
              <span>FIND ME ON</span>

              <a
                href="https://github.com/BeyzaAkgun"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/beyza-akg%C3%BCn-617237278/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={21} />
              </a>
            </div>
          </div>

          <div className="neo-hero-visual">
            <div className="neo-visual-label">
              <span>WHAT I DO</span>
              <ArrowUpRight size={20} />
            </div>

            <div className="neo-code-window">
              <div className="neo-window-header">
                <div className="neo-window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span>developer.ts</span>
                <Terminal size={17} />
              </div>

              <div className="neo-code-content">
                <p>
                  <span className="neo-code-purple">const</span> developer = {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;name: <span className="neo-code-lime">"Beyza Akgün"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;role: <span className="neo-code-lime">"Software Engineer"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;focus: [
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="neo-code-lime">"Backend"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="neo-code-lime">"Full-stack"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="neo-code-lime">"AI / ML"</span>
                </p>
                <p>&nbsp;&nbsp;],</p>
                <p>
                  &nbsp;&nbsp;openToWork: <span className="neo-code-purple">true</span>
                </p>
                <p>{"};"}</p>
              </div>
            </div>

            <div className="neo-floating-card neo-floating-card-one">
              <Code2 size={21} />
              <span>BUILD</span>
            </div>

            <div className="neo-floating-card neo-floating-card-two">
              <Database size={21} />
              <span>SHIP</span>
            </div>

            <div className="neo-visual-footer">
              <span>CREATIVE THINKING.</span>
              <span>ENGINEERED SOLUTIONS.</span>
            </div>
          </div>
        </motion.div>

        <div className="neo-tech-strip">
          <div className="neo-tech-strip-label">
            TECH STACK
            <ArrowDownRight size={19} />
          </div>

          <div className="neo-tech-items">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
