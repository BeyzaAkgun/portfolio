import { motion } from "motion/react";
import { Code, Database, Globe, Wrench, Server, Layout, Brain, Cpu, Smartphone, Cloud, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "TypeScript", 
      "JavaScript", 
      "React", 
      "Next.js (Learning)", 
      "Vue.js",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Responsive Design"
    ],
    color: "from-blue-500 to-cyan-500",
    featured: ["TypeScript", "React", "Next.js"]
  },
  {
    title: "Backend & API",
    icon: Server,
    skills: [
      "NestJS",
      "Node.js", 
      "Express.js",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "RESTful APIs",
      "API Integration",
      "GraphQL (Basic)"
    ],
    color: "from-purple-500 to-pink-500",
    featured: ["NestJS", "Node.js", "RESTful APIs"]
  },
  {
    title: "Database & ORM",
    icon: Database,
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "SQL",
      "MongoDB",
      "MySQL",
      "Appwrite",
      "Database Design",
      "Redis (Basic)"
    ],
    color: "from-green-500 to-emerald-500",
    featured: ["PostgreSQL", "Prisma ORM"]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Docker Compose",
      "Git/GitHub",
      "Linux/Unix",
      "AWS EC2",
      "Vercel",
      "Render",
      "CI/CD",
      "Nginx"
    ],
    color: "from-orange-500 to-red-500",
    featured: ["Docker", "Git", "Linux"]
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Transformers",
      "Computer Vision",
      "NLP",
      "Pandas/NumPy"
    ],
    color: "from-indigo-500 to-purple-500",
    featured: ["Python", "TensorFlow", "PyTorch"]
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      "Python",
      "Java", 
      "C/C++",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Bash/Shell"
    ],
    color: "from-violet-500 to-indigo-500",
    featured: ["TypeScript", "Python", "Java"]
  },
  {
    title: "Mobile & Desktop",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Electron.js",
      "Desktop Applications",
      "Mobile UI/UX"
    ],
    color: "from-teal-500 to-cyan-500",
    featured: ["React Native", "Expo"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "VS Code",
      "PyCharm",
      "IntelliJ IDEA",
      "Figma",
      "Jupyter",
      "Postman",
      "Swagger",
      "Jira/Confluence"
    ],
    color: "from-amber-500 to-orange-500",
    featured: ["VS Code", "Figma", "Postman"]
  },
  {
    title: "Cybersecurity & Networks",
    icon: Terminal,
    skills: [
      "Network Security",
      "CTF Challenges",
      "Wireshark",
      "Cryptography",
      "Penetration Testing Basics"
    ],
    color: "from-red-500 to-rose-500",
    featured: ["Network Security", "Cryptography"]
  }
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/10" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl text-slate-800 font-bold">
                Technical Skills & Expertise
              </h2>
            </div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg mb-6">
              <span className="font-semibold text-blue-700">Full-stack development with focus on modern web technologies, AI/ML, and scalable systems.</span> 
              Proficient in both frontend and backend ecosystems with hands-on experience in production environments.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">
                NetPrint Stack: NestJS, TypeScript, PostgreSQL, Prisma ORM, Docker
              </span>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/95 backdrop-blur-sm border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-md`}
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
                        {category.skills.map((skill, skillIndex) => {
                          const isFeatured = category.featured.includes(skill);
                          const isNetPrintStack = [
                            "NestJS", "TypeScript", "PostgreSQL", "Prisma ORM", "Docker", 
                            "React", "Next.js", "Node.js", "RESTful APIs"
                          ].includes(skill);
                          
                          return (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.1 + skillIndex * 0.03,
                              }}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default border ${
                                isNetPrintStack 
                                  ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-300 shadow-sm"
                                  : isFeatured
                                  ? "bg-gradient-to-r from-slate-50 to-slate-100 text-slate-800 border-slate-300"
                                  : "bg-gradient-to-br from-slate-100/80 to-white text-slate-700 border-slate-200"
                              } hover:shadow-md hover:scale-105`}
                            >
                              {skill}
                              {isNetPrintStack && (
                                <span className="ml-1.5 text-xs text-blue-600">⚡</span>
                              )}
                            </motion.span>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-6 border-t border-slate-200"
          >
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <span>NetPrint Stack Focus</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-slate-400 to-slate-500"></div>
                <span>Core Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-gradient-to-r from-slate-300 to-slate-400"></div>
                <span>Additional Skills</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}