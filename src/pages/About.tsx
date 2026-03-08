import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const values = [
  { icon: Target, title: "Mission", text: "To deliver exceptional digital solutions that empower businesses to thrive in the digital age." },
  { icon: Eye, title: "Vision", text: "To be the leading digital services provider in East Africa, known for innovation and quality." },
  { icon: Award, title: "Quality", text: "We maintain the highest standards in every project, ensuring client satisfaction with every delivery." },
  { icon: Users, title: "Team", text: "Our skilled team of designers, developers, and IT professionals work together to deliver excellence." },
];

const About = () => {
  return (
    <div className="pb-20">
      <div className="gradient-hero px-5 pt-10 pb-8 rounded-b-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
            <span className="text-accent-foreground font-extrabold text-xl">M</span>
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-primary-foreground">Mwiba Designs</h1>
            <p className="text-primary-foreground/60 text-xs">Professional Digital & IT Services</p>
          </div>
        </div>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          Mwiba Designs is a professional digital services and IT solutions company dedicated to helping businesses and individuals succeed through technology and creative design.
        </p>
      </div>

      {/* Team Image */}
      <div className="px-5 mt-4">
        <div className="rounded-xl overflow-hidden shadow-card">
          <img src="/images/about-team.png" alt="Mwiba Designs Team" className="w-full h-44 object-cover" />
        </div>
      </div>

      <div className="px-5 mt-4 space-y-3">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-4 shadow-card"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}

        <div className="pt-2">
          <WhatsAppButton variant="full" label="Get in Touch" />
        </div>
      </div>
    </div>
  );
};

export default About;
