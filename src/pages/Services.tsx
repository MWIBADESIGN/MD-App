import { useState } from "react";
import { motion } from "framer-motion";
import { serviceCategories, getServicesByCategory, services } from "@/lib/services-data";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? services : getServicesByCategory(activeCategory);

  return (
    <div className="pb-20">
      <div className="gradient-hero px-5 pt-10 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-extrabold text-primary-foreground mb-1">Our Services</h1>
        <p className="text-primary-foreground/70 text-sm">Comprehensive digital & IT solutions</p>
      </div>

      {/* Category Filter */}
      <div className="px-5 mt-4 mb-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => setActiveCategory("all")}
            className={`py-1.5 px-4 rounded-full text-xs font-semibold transition-colors ${
              activeCategory === "all"
                ? "gradient-accent text-accent-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            All
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`py-1.5 px-4 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
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

      {/* Services List */}
      <div className="px-5 space-y-3">
        {filtered.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Services;
