import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2 } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="container mx-auto px-6 py-20 border-t border-border">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-2">Technical Projects</h2>
        <p className="text-muted-foreground">Selected works demonstrating scalable architectures.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Code2 className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.features && (
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
