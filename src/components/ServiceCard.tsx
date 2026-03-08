import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import type { Service } from "@/lib/services-data";
import { getServiceImage } from "@/lib/service-images";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const navigate = useNavigate();
  const Icon = service.icon;
  const image = getServiceImage(service.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
    >
      <div className="h-32 overflow-hidden">
        <img src={image} alt={service.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
            <Icon className="w-5 h-5 text-accent-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-foreground">{service.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{service.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => navigate(`/services/${service.id}`)}
            className="flex items-center gap-1 py-1.5 px-3 rounded-md bg-secondary text-secondary-foreground font-medium text-xs transition-colors hover:bg-secondary/80"
          >
            Learn More
            <ArrowRight className="w-3 h-3" />
          </button>
          <WhatsAppButton
            variant="inline"
            label="WhatsApp"
            message={`Hello Mwiba Designs, I'm interested in ${service.title}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
