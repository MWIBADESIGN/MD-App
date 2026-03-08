import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects, projectCategories } from "@/lib/projects-data";
import WhatsAppButton from "@/components/WhatsAppButton";

const Projects = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="gradient-hero px-5 pt-10 pb-8 rounded-b-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-xl font-extrabold text-primary-foreground mb-1">Our Projects</h1>
          <p className="text-primary-foreground/70 text-sm">Portfolio of our recent work</p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <div className="px-5 mt-5">
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? "gradient-accent text-accent-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="px-5 mt-4 space-y-4">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="bg-card rounded-xl overflow-hidden shadow-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold text-sm text-foreground mb-1">{project.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="flex items-center gap-1 py-1.5 px-3 rounded-md bg-secondary text-secondary-foreground font-medium text-xs"
                >
                  <ExternalLink className="w-3 h-3" />
                  View Details
                </button>
                <WhatsAppButton
                  variant="inline"
                  label="Inquire"
                  message={`Hello Mwiba Designs, I'm interested in a project like "${project.title}"`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
