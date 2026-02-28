import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: "Junior Frontend Developer",
      company: "Self-Employed / Freelance",
      period: "Nov 2026 - Present ",
      description:
        "Building responsive web applications with React and Next.js, learning best practices and modern development workflows",
    },
    {
      icon: Code2,
      title: "Frontend Development Training",
      company: "Erxes-Academy",
      period: "2026 - Present (3 months)",
      description:
        "Built multiple portfolio projects to solidify understanding of front-end technologies and best practices",
    },
    {
      icon: GraduationCap,
      title: "Learning & Personal Projects",
      company: "Erxes-Academy",
      period: "2025 - (3 months)",
      description:
        "Completed intensive training in HTML, CSS, JavaScript, React, and Next.js through various online platforms",
    },
  ];

  return (
    <section
      id="experience"
      className="contain mx-auto px-4 py-24 bg-slate-900/30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0"
          >
            {i !== experiences.length - 1 && (
              <div className="absolute left-3.75 top-12 bottom-0 w-0.5 bg-linear-to-b from-blue-500 to-indigo-500" />
            )}

            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <exp.icon className="w-4 h-4 text-white" />
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg ml-3 p-6 shadow-xl hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all group  border border-slate-700">
              <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
              <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
              <p className="text-sm text-slate-400 mb-3">{exp.period}</p>
              <p className="text-white">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
