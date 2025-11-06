import { motion } from "motion/react";
import { Code2, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Bubble Sheet Scanner",
    year: "2025",
    description:
      "Advanced deep learning pipeline for automated answer sheet processing with state-of-the-art computer vision models.",
    highlights: [
      "Architected a full deep learning pipeline, comparing SegFormer against CNN models for answer sheet segmentation, achieving 99.9% segmentation accuracy",
      "Engineered an image-captioning model using EfficientNet-B0 encoder and Transformer decoder to generate answers directly from images",
      "Evaluated advanced vision-language models including Qwen VL and MiniCPM as alternative solutions",
      "Achieved 52.4% exact-match OCR accuracy for direct response generation from scanned sheets",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Transformers"],
    featured: true,
  },
  {
    title: "Employee Attrition Prediction",
    year: "2023-2024",
    description:
      "Full-stack ML application for HR analytics to predict and prevent employee turnover.",
    highlights: [
      "Developed a full-stack web application featuring an ML model for predicting employee attrition",
      "Deployed model via Flask REST API and designed interactive Vue.js frontend for data visualization",
      "Implemented end-to-end solution for HR analytics and employee retention strategies",
    ],
    technologies: ["Python", "Flask", "Vue.js", "Machine Learning", "scikit-learn"],
    featured: true,
  },
  {
    title: "Netflix Clone Web App",
    year: "2023",
    description:
      "Full-featured streaming platform clone with authentication and dynamic content delivery.",
    highlights: [
      "Built a responsive front-end using React.js that mimics the Netflix UI and user experience",
      "Integrated user authentication via Appwrite and dynamic content fetching from TMDB API",
      "Implemented modern web development practices for seamless content browsing and search",
    ],
    technologies: ["JavaScript", "React", "Appwrite", "TMDB API"],
    featured: false,
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-800">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <Card
                  className={`h-full bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] ${
                    project.featured
                      ? "border-2 border-blue-200 bg-gradient-to-br from-blue-50/50 to-purple-50/50"
                      : ""
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                            <Code2 className="w-5 h-5 text-white" />
                          </div>
                          <CardTitle className="text-2xl text-slate-800">
                            {project.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-slate-600">
                          {project.year}
                        </CardDescription>
                      </div>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          ⭐ Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-slate-700 mt-4">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-slate-700 text-sm">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
