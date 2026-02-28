import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Link } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Coffee Shop Website",
      desc: "Responsive portfolio showcasing my projects and skills with smooth animations",
      tech: ["HTML", "Tailwind CSS", "JavaScript"],
      link: "https://coffee-n1fj.vercel.app/",
    },
    {
      title: "Book Store Website",
      desc: "Interactive weather app with real-time data fetching and clean UI design",
      tech: ["React", "Open API", "Tailwind CSS"],
      link: "https://team2-r77x.vercel.app/",
    },
    {
      title: "Health Tracker Website",
      desc: "Feature-rich task manager with local storage and responsive design",
      tech: ["Next.js", "TypeScript", "Supabase"],
      link: "https://health-track-lfnq.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all group">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-blue-400">
                  <span>{project.title}</span>
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs border-slate-600 text-slate-300"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-slate-600 text-slate-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors"
                  asChild
                >
                  <a href={project.link}>View Project</a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
