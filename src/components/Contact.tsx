import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "beyzaakgun@hotmail.com",
      href: "mailto:beyzaakgun@hotmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+90 552 211 24 15",
      href: "tel:+905522112415",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/beyza-akgün",
      href: "https://linkedin.com/in/beyza-akgün",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/BeyzaAkgun",
      href: "https://github.com/BeyzaAkgun",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-white">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4 rounded-full" />
          <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just
            having a conversation about technology and innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
                    <CardContent className="p-6">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400">{contact.label}</p>
                          <p className="text-white group-hover:text-blue-300 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
              <MapPin className="w-5 h-5" />
              <span>Based in Istanbul, Turkey</span>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white gap-2"
              onClick={() => window.open("mailto:beyzaakgun@hotmail.com")}
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/20 text-center text-slate-400"
          >
            <p>© 2025 Beyza Akgün. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
