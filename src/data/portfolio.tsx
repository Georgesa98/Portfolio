import {
  Code2,
  Zap,
  Shield,
  Activity,
  BarChart3,
} from "lucide-react";

export const techStack = [
  "Python",
  "Django",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Kubernetes",
  "gRPC",
];

export const projects = [
  {
    title: "URL Shortener Platform",
    description:
      "A high-performance system built with URL management front-end with horizontally scalable architecture for URL shortening services.",
    features: [
      "Distributed rate limiting",
      "Custom Prevention System (slash encoding)",
      "Base62 encoding",
      "Auto-cleanup after 30d (advanced lazy expiration)",
    ],
    technologies: ["Go", "Redis", "PostgreSQL", "Docker"],
    icon: <Code2 className="w-6 h-6" />,
    codeLink: "#",
    demoLink: "#",
  },
];

export const engineeringHighlights = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "High-Performance Data Pipeline",
    description:
      "Architected real-time data processing with Kafka, handling 100k+ events/sec with sub-100ms latency.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Distributed Task Processing",
    description:
      "Built fault-tolerant task system with internal circuit breakers for mission-critical systems.",
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Security & Rate Limiting",
    description:
      "Implemented Redis-backed rate limiting with token buckets and sophisticated authentication/traffic control.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Observability & Metrics",
    description:
      "Created comprehensive monitoring with Prometheus and Grafana for real-time health metrics.",
  },
];

export const stats = [
  {
    value: "5+",
    label: "YEARS EXPERIENCE",
    description: "Specialized in backend development and cloud infrastructure.",
  },
  {
    value: "20+",
    label: "PROJECTS DELIVERED",
    description: "From MVPs to enterprise-grade production systems.",
  },
  {
    value: "99%",
    label: "UPTIME ACHIEVED",
    description: "Consistent reliability across all production services.",
  },
  {
    value: "10k+",
    label: "ACTIVE CONTRIBUTIONS",
    description: "Active contributor to open source and private repositories.",
  },
];
