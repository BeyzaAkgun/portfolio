import { motion } from "motion/react";
import { Code, Brain, Globe, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "C/C++", "SQL", "JavaScript", "HTML/CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "Transformers",
      "CNNs",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Web/Mobile",
    icon: Globe,
    skills: [
      "React",
      "React Native",
      "Expo",
      "Node.js",
      "Flask",
      "FastAPI",
      "Vue.js",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "Docker",
      "Linux",
      "VS Code",
      "PyCharm",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-800">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-slate-800">
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + skillIndex * 0.05,
                            }}
                            className="px-3 py-2 bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700 rounded-lg hover:shadow-md transition-shadow cursor-default border border-slate-200"
                          >
                            {skill}
                          </motion.span>
                        ))}
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
