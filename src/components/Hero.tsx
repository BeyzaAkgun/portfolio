import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl mb-6 pb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Beyza Akgün
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 mb-4">
            Computer Engineering Graduate
          </p>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Passionate about Machine Learning, Deep Learning & Full-Stack Development
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              variant="default"
              size="lg"
              className="gap-2"
              onClick={() => window.open("mailto:beyzaakgun@hotmail.com")}
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://linkedin.com/in/beyza-akgün", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://github.com/BeyzaAkgun", "_blank")}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-slate-600">
            <a
              href="tel:+905522112415"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +90 552 211 24 15
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {["Python", "Machine Learning", "Deep Learning", "React", "NLP"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 shadow-sm"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
