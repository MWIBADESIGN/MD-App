import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects-data";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex items-center gap-1 text-primary-foreground/90 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      <div className="px-5 -mt-8 relative z-10 space-y-5">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-xl font-extrabold text-foreground mb-1">{project.title}</h1>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {project.category === "web" ? "Website" : project.category === "app" ? "Application" : "UI Design"}
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-sm font-bold text-foreground mb-2">About This Project</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-sm font-bold text-foreground mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="py-1.5 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-sm font-bold text-foreground mb-3">Key Highlights</h2>
          <div className="space-y-2">
            {getProjectHighlights(project.category).map((h) => (
              <div key={h} className="flex items-center gap-2 bg-card rounded-lg p-3 shadow-card">
                <div className="w-6 h-6 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent-foreground" />
                </div>
                <span className="text-sm text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3 pt-2"
        >
          <WhatsAppButton
            variant="full"
            label={`Inquire About "${project.title}"`}
            message={`Hello Mwiba Designs, I'm interested in a project like "${project.title}". Can we discuss?`}
          />
        </motion.div>
      </div>
    </div>
  );
};

const getProjectHighlights = (category: string): string[] => {
  switch (category) {
    case "web":
      return ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible", "Mobile Friendly"];
    case "app":
      return ["Cross-platform Support", "Push Notifications", "Offline Capability", "Smooth Animations", "Secure Authentication"];
    case "design":
      return ["Pixel-perfect Design", "Design System", "Dark Mode Support", "Accessibility Focused", "Interactive Prototypes"];
    default:
      return ["High Quality", "Professional Delivery", "Client Satisfaction", "On-time Completion"];
  }
};

export default ProjectDetail;
