import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Shield, Clock, Info, Globe, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "@/lib/services-data";
import ServiceCard from "@/components/ServiceCard";

const testimonials = [
  {
    name: "James Mwenda",
    role: "CEO, TechVentures Ltd",
    text: "Mwiba Designs transformed our online presence completely. The website they built increased our customer inquiries by 300%. Truly professional and dedicated team!",
    rating: 5,
  },
  {
    name: "Amina Hassan",
    role: "Founder, Bloom Boutique",
    text: "Their poster and brand designs are absolutely stunning. Every piece captures our brand perfectly. I always recommend Mwiba Designs to other business owners.",
    rating: 5,
  },
  {
    name: "David Ochieng",
    role: "Manager, Savannah Logistics",
    text: "The mobile app they developed for us streamlined our delivery tracking. Fast, reliable, and they were always available for support. Five stars!",
    rating: 5,
  },
  {
    name: "Grace Kimani",
    role: "Director, EduBright Academy",
    text: "From document formatting to IT support, Mwiba Designs handles everything with precision. They've become an essential partner for our school operations.",
    rating: 4,
  },
  {
    name: "Peter Njoroge",
    role: "Freelance Photographer",
    text: "I needed a portfolio website that truly showcases my work. Mwiba Designs delivered beyond my expectations — clean design, fast loading, and beautiful on mobile.",
    rating: 5,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const featured = services.slice(0, 4);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="gradient-hero px-5 pt-12 pb-10 rounded-b-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-accent-foreground font-extrabold text-lg">M</span>
            </div>
            <span className="text-primary-foreground font-bold text-lg tracking-tight">Mwiba Designs</span>
          </div>
          <h1 className="text-2xl font-extrabold text-primary-foreground leading-tight mb-3">
            Professional Digital<br />
            <span className="text-gradient">& IT Services</span>
          </h1>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-xs">
            Transforming ideas into powerful digital solutions. Design, development, and IT support for your business growth.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 py-2.5 px-5 rounded-lg gradient-accent text-accent-foreground font-semibold text-sm"
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="py-2.5 px-5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-semibold text-sm transition-colors hover:bg-primary-foreground/10"
            >
              Contact Us
            </button>
          </div>
          <a
            href="https://mwibadesigns.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-semibold text-sm transition-colors hover:bg-primary-foreground/20 w-full"
          >
            <Globe className="w-4 h-4" />
            Visit Our Website
          </a>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="px-5 -mt-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Zap, label: "Fast Delivery", value: "24h" },
            { icon: Shield, label: "Quality Work", value: "100%" },
            { icon: Clock, label: "Support", value: "24/7" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-card rounded-xl p-3 shadow-card text-center"
            >
              <item.icon className="w-5 h-5 text-accent mx-auto mb-1" />
              <div className="text-base font-bold text-foreground">{item.value}</div>
              <div className="text-[10px] text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Featured Services</h2>
          <button
            onClick={() => navigate("/services")}
            className="text-xs font-medium text-accent flex items-center gap-1"
          >
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-5 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Client Reviews</h2>
          <div className="flex items-center gap-1">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === activeTestimonial ? "bg-accent" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl p-5 shadow-card"
            >
              <Quote className="w-6 h-6 text-accent/30 mb-2" />
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">{testimonials[activeTestimonial].name}</p>
                  <p className="text-[11px] text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-3">
            <button
              onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
      </section>

      {/* About Link */}
      <section className="px-5 mt-6 mb-4">
        <button
          onClick={() => navigate("/about")}
          className="w-full flex items-center gap-3 bg-card rounded-xl p-4 shadow-card transition-shadow hover:shadow-card-hover"
        >
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Info className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-sm text-foreground">About Mwiba Designs</h3>
            <p className="text-xs text-muted-foreground">Learn about our mission & vision</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </section>
    </div>
  );
};

export default Home;
