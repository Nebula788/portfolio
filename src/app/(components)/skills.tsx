
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Skills() {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Responsive Design",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git & GitHub", "Vercel", "VS Code", "npm"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-40"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        >
          Skills & Technologies
        </motion.h2>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl text-white">
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:bg-blue-500/30 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;