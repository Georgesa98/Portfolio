import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            <span className="text-primary">George</span> <span className="text-foreground">Salebe</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
            <a href="#expertise" className="text-sm hover:text-primary transition-colors">Expertise</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Button size="sm">Let's Talk</Button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
