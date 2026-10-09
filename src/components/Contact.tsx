
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  color: "lime" | "pink" | "purple" | "yellow";
};

const contacts: ContactLink[] = [
  {
    label: "EMAIL",
    value: "beyzaakgun@hotmail.com",
    href: "mailto:beyzaakgun@hotmail.com",
    icon: Mail,
    color: "lime",
  },
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/beyza-akg%C3%BCn-617237278/",
    icon: Linkedin,
    color: "purple",
  },
  {
    label: "GITHUB",
    value: "Explore my code",
    href: "https://github.com/BeyzaAkgun",
    icon: Github,
    color: "pink",
  },
  {
    label: "PHONE",
    value: "+90 552 211 24 15",
    href: "tel:+905522112415",
    icon: Phone,
    color: "yellow",
  },
];

export function Contact() {
  return (
    <section className="neo-contact" id="contact">
      <div className="neo-container">
        <motion.div
          className="neo-contact-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="neo-contact-eyebrow">
            <Sparkles size={18} aria-hidden="true" />
            HAVE SOMETHING IN MIND?
          </span>

          <h2>
            LET'S BUILD
            <span> SOMETHING.</span>
          </h2>

          <p>
            I'm open to junior software engineering opportunities,
            interesting projects, and collaborations.
            Have an idea or an opportunity? I'd love to hear from you.
          </p>

          <a
            className="neo-contact-primary"
            href="mailto:beyzaakgun@hotmail.com"
          >
            SAY HELLO
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="neo-contact-grid">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const isExternal = contact.href.startsWith("https://");

            return (
              <motion.a
                key={contact.label}
                className={`neo-contact-card neo-contact-${contact.color}`}
                href={contact.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <div className="neo-contact-card-top">
                  <Icon size={30} strokeWidth={2.2} aria-hidden="true" />
                  <ArrowUpRight
                    size={23}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                </div>
              </motion.a>
            );
          })}
        </div>

        <footer className="neo-footer">
          <div className="neo-footer-top">
            <a href="#home" className="neo-footer-logo">
              BEYZA<span>✳</span>DEV
            </a>

            <div className="neo-footer-location">
              <MapPin size={16} aria-hidden="true" />
              Based in Istanbul, Türkiye
            </div>
          </div>

          <div className="neo-footer-bottom">
            <p>
              © {new Date().getFullYear()} Beyza Akgün.
              Built with React & TypeScript.
            </p>

            <a href="#home">
              BACK TO TOP ↑
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
