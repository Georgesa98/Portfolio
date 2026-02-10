import { motion } from "motion/react";
import { stats } from "@/data/portfolio";

export function StatsSection() {
  return (
    <section className="container mx-auto px-6 py-20 border-t border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="text-5xl font-bold mb-2">{stat.value}</div>
            <div className="text-xs font-semibold text-primary mb-2">{stat.label}</div>
            <div className="text-sm text-muted-foreground">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
