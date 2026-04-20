import {
  Code2,
  Zap,
  Shield,
  Activity,
  BarChart3,
  Building2,
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
      "Production-ready enterprise URL shortening service with advanced analytics, fraud detection, and intelligent routing. Features Redis-buffered analytics reducing redirect latency from 50ms to <10ms.",
    features: [
      "Redis-buffered analytics (6x faster redirects)",
      "Short code pool (zero-collision allocation)",
      "Multi-window burst protection (10s/60s/3600s)",
      "QR code generation + Custom aliases",
    ],
    technologies: ["Django", "Next.js", "PostgreSQL", "Redis", "Celery"],
    icon: <Code2 className="w-6 h-6" />,
    codeLink: "https://github.com/Georgesa98/UrlShortner",
    demoLink: "#",
  },
  {
    title: "Local Reservation System",
    description:
      "Full-stack property booking platform for local markets with a free manager desktop tool, a guest web portal, and commission-based online bookings. Built around automated notifications, secure auth, and pluggable payments.",
    features: [
      "Electron desktop app for walk-in and phone reservations",
      "Next.js guest portal with paid online booking flow",
      "Shared RTL-ready UI across staff and web experiences",
      "WhatsApp, Telegram, and email automation for booking events",
    ],
    technologies: ["Django", "DRF", "PostgreSQL", "Redis", "Celery", "Electron", "Next.js", "Stripe"],
    icon: <Building2 className="w-6 h-6" />,
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
