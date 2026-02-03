import { motion } from "motion/react";
import { Award, GraduationCap, TrendingUp, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-slate-800 font-bold">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          <Card className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
            <CardContent className="p-8">
              {/* University Info */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-1">
                    Istanbul Bilgi University
                  </h3>
                  <p className="text-xl text-slate-600 mb-1">
                    B.Sc. in Computer Engineering
                  </p>
                  <p className="text-slate-500 mb-4">
                    2021 – 2025 · Istanbul, Turkey
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    50% Merit-Based Scholarship
                  </div>
                </div>
              </div>

              {/* GPA & Award */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm text-slate-600">GPA</p>
                    <p className="text-slate-800 font-medium">
                      3.21 / 4.00 · Dean’s Honor List
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="text-sm text-slate-600">Award</p>
                    <p className="text-slate-800 font-medium">
                      Best Senior Design Project
                    </p>
                  </div>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <p className="text-slate-700 font-medium">
                    Relevant Coursework
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Machine Learning",
                    "Deep Learning",
                    "Natural Language Processing",
                    "Data Science",
                    "Probability & Statistics",
                    "Algorithms & Data Structures",
                    "Database Systems",
                    "Cryptography",
                    "Software Engineering",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
