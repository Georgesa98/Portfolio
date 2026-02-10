import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { Terminal, Database } from "lucide-react";
import { motion } from "motion/react";
import { techStack } from "@/data/portfolio";
import { GridBackground } from "@/components/ui/GridBackground";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <GridBackground />
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-primary border-primary/20">
              <Terminal className="w-3 h-3 mr-1" />
              Systems Engineer
            </Badge>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Systems<br />
            Architect &<br />
            <span className="text-primary">Backend<br />Engineer</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Backend engineer specializing in high-performance APIs, distributed architecture, and cloud infrastructure. I turn complex requirements into scalable solutions.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2">{tech}</Badge>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View Example Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:block"
        >
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-muted-foreground">system_architecture.code</span>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted-foreground">// PROJECT FILE</div>
                <div className="flex items-center justify-between py-3 border-t border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="text-sm">PostgreSQL</span>
                  </div>
                  <span className="text-primary text-sm">LIVE MONITOR</span>
                </div>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">LOAD TIME</div>
                    <div className="text-primary font-bold">2.3ms</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">UPTIME</div>
                    <div className="text-primary font-bold">99.99%</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">REQUESTS</div>
                    <div className="font-bold">120k RPM</div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
