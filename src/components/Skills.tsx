import { motion } from "motion/react";
import {
  Code,
  Database,
  Wrench,
  Server,
  Layout,
  Brain,
  Smartphone,
  Cloud,
  Terminal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  // 1️⃣ AI / ML & Data Science (EN ÖNEMLİ)
  {
    title: "AI / ML & Data Science",
    icon: Brain,
    skills: [
      "Python",
      "PyTorch",
      "Scikit-learn",
      "TensorFlow",
      "Transformers",
      "Computer Vision",
      "NLP",
      "Feature Engineering",
      "Model Evaluation",
      "Pandas / NumPy",
    ],
    color: "from-indigo-500 to-purple-500",
    featured: ["Python", "PyTorch", "Scikit-learn"],
  },

  // 2️⃣ Backend & API Development
  {
    title: "Backend & API Development",
    icon: Server,
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "Flask",
      "RESTful APIs",
      "API Design",
      "Authentication & Authorization",
    ],
    color: "from-purple-500 to-pink-500",
    featured: ["FastAPI", "RESTful APIs"],
  },

  // 3️⃣ Database & Data Systems
  {
    title: "Database & Data Systems",
    icon: Database,
    skills: [
      "PostgreSQL",
      "SQL",
      "MySQL",
      "MongoDB",
      "Database Design",
      "Data Modeling",
    ],
    color: "from-green-500 to-emerald-500",
    featured: ["PostgreSQL", "SQL"],
  },

  // 4️⃣ Frontend Development
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Vue.js",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive Design",
    ],
    color: "from-blue-500 to-cyan-500",
    featured: ["TypeScript", "React"],
  },

  // 5️⃣ DevOps & Cloud
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Docker Compose",
      "Git / GitHub",
      "Linux(Basic)",
      "AWS EC2",
      "CI / CD",
      "Vercel",
      "Render",
    ],
    color: "from-orange-500 to-red-500",
    featured: ["Docker", "Linux", "Git / GitHub"],
  },

  // 6️⃣ Programming Languages
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C / C++",
      "SQL",
      "Bash / Shell",
    ],
    color: "from-violet-500 to-indigo-500",
    featured: ["Python", "TypeScript"],
  },

  // 7️⃣ Mobile & Desktop
  {
    title: "Mobile & Desktop",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Mobile UI / UX",
      "Desktop Applications",
    ],
    color: "from-teal-500 to-cyan-500",
    featured: ["React Native", "Expo"],
  },

  // 8️⃣ Tools & Platforms
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Figma",
      "Jupyter Notebook",
    ],
    color: "from-amber-500 to-orange-500",
    featured: ["VS Code", "Postman", "Figma"],
  },


];

export function Skills() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/10"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Technical Skills & Expertise
              </h2>
            </div>

            <p className="text-slate-600 max-w-3xl mx-auto text-lg mb-6">
              <span className="font-semibold text-blue-700">
                AI/ML-focused software engineer with strong backend and data
                engineering expertise.
              </span>{" "}
              Experienced in building scalable systems and data-driven
              applications.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Core Stack: Python, FastAPI, PostgreSQL, React, Docker
              </span>
            </div>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full bg-white/95 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-800">
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => {
                          const isFeatured =
                            category.featured.includes(skill);

                          return (
                            <span
                              key={skill}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                                isFeatured
                                  ? "bg-gradient-to-r from-slate-50 to-slate-100 text-slate-800 border-slate-300"
                                  : "bg-gradient-to-br from-slate-100/80 to-white text-slate-700 border-slate-200"
                              }`}
                            >
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
