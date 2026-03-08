import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { getServiceById } from "@/lib/services-data";
import { getServiceImage } from "@/lib/service-images";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id || "");

  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Service not found</p>
      </div>
    );
  }

  const Icon = service.icon;
  const image = getServiceImage(service.id);

  return (
    <div className="pb-20">
      <div className="gradient-hero px-5 pt-8 pb-4 rounded-b-3xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-primary-foreground/70 text-sm mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
            <Icon className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-primary-foreground">{service.title}</h1>
            <p className="text-primary-foreground/60 text-xs font-medium uppercase tracking-wider">
              {service.category}
            </p>
          </div>
        </div>
      </div>

      {/* Unique Service Image */}
      <div className="px-5 -mt-2 mb-4">
        <div className="rounded-xl overflow-hidden shadow-card">
          <img src={image} alt={service.title} className="w-full h-40 object-cover" />
        </div>
      </div>

      <div className="px-5 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h2 className="text-sm font-bold text-foreground mb-2">About This Service</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{service.fullDescription}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-sm font-bold text-foreground mb-3">Features</h2>
          <div className="space-y-2">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-2 bg-card rounded-lg p-3 shadow-card">
                <div className="w-6 h-6 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-accent-foreground" />
                </div>
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {service.technologies && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-sm font-bold text-foreground mb-3">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="py-1.5 px-3 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-sm font-bold text-foreground mb-3">Benefits</h2>
          <div className="grid grid-cols-2 gap-2">
            {service.benefits.map((b) => (
              <div key={b} className="bg-card rounded-lg p-3 shadow-card text-center">
                <span className="text-xs text-muted-foreground font-medium">{b}</span>
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
            label={`Request ${service.title}`}
            message={`Hello Mwiba Designs, I would like to request your ${service.title} service.`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
