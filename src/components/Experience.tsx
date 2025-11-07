import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const experiences = [
  {
    title: "Microsoft Operating System Project Assistant",
    company: "KoçSistem",
    location: "Istanbul, TR",
    period: "Mar 2024 - Sep 2024",
    highlights: [
      "Resolved 50+ IT incidents collaboratively, significantly reducing average resolution time and improving service efficiency",
      "Gained hands-on experience in enterprise IT environments using Active Directory, DNS, DHCP, and Group Policy",
      "Played a key role in the rapid response team during the CrowdStrike incident, contributing to the restoration of 99% system uptime",
    ],
    skills: ["Active Directory", "DNS", "DHCP", "IT Support"],
  },
  {
    title: "Software Unit Management Intern",
    company: "Prodea Information and Consultancy",
    location: "Istanbul, TR",
    period: "Jun 2024 - Aug 2024",
    highlights: [
      "Assisted in configuration and testing of SAP modules (SAP S/4HANA, SAP IS Retail) for client digital transformation projects",
      "Prepared and updated technical project documentation and user manuals, ensuring clarity for client deliverables",
      "Participated in project lifecycle activities using Jira and Confluence, collaborating with team on sprint planning and task execution",
      "Attended training sessions on SAP S/4 HANA and SAP CX solutions to enhance technical knowledge",
    ],
    skills: ["SAP S/4HANA", "SAP IS Retail", "Jira", "Confluence"],
  },
  {
    title: "Freelance Private Tutor",
    company: "Self-Employed",
    location: "Hybrid",
    period: "2023 - Present",
    highlights: [
      "Tutored Python programming, mathematics, and English to students of varying skill levels",
      "Developed customized lesson plans to improve student understanding and academic performance",
      "Boosted student outcomes through personalized teaching methods and practical coding exercises",
    ],
    skills: ["Python", "Teaching", "Curriculum Development"],
  },
];

export function Experience() {
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
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-slate-800 mb-2">
                          {exp.title}
                        </CardTitle>
                        <p className="text-xl text-slate-600 mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span>📍 {exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-slate-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
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
