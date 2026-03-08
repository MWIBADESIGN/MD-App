import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Youtube, label: "YouTube", url: "https://youtube.com" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/mwibadesigns" },
  { icon: Linkedin, label: "LinkedIn", url: "#" },
  { icon: Twitter, label: "Twitter", url: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    const waMessage = `Hello Mwiba Designs!\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(
      `https://wa.me/255753704585?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );
    toast({ title: "Opening WhatsApp..." });
  };

  return (
    <div className="pb-20">
      <div className="gradient-hero px-5 pt-10 pb-6 rounded-b-3xl">
        <h1 className="text-xl font-extrabold text-primary-foreground mb-1">Contact Us</h1>
        <p className="text-primary-foreground/70 text-sm">Get in touch with our team</p>
      </div>

      <div className="px-5 mt-6 space-y-4">
        {/* Contact Info */}
        <div className="bg-card rounded-xl p-4 shadow-card space-y-3">
          {[
            { icon: Phone, label: "+255 753 704 585", href: "tel:+255753704585" },
            { icon: Phone, label: "+255 750 555 783", href: "tel:+255750555783" },
            { icon: Mail, label: "abdillahmwiba@gmail.com", href: "mailto:abdillahmwiba@gmail.com" },
            { icon: MapPin, label: "DODOMA CC, CBE Dodoma", href: undefined },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-sm text-foreground"
            >
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              {item.label}
            </a>
          ))}
        </div>

        {/* WhatsApp */}
        <WhatsAppButton variant="full" label="Chat on WhatsApp" />

        {/* Social Media */}
        <div className="bg-card rounded-xl p-4 shadow-card">
          <h3 className="text-sm font-bold text-foreground mb-3">Follow Us</h3>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl p-4 shadow-card space-y-3"
        >
          <h3 className="text-sm font-bold text-foreground">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full py-2.5 px-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent"
            maxLength={100}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full py-2.5 px-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent"
            maxLength={20}
          />
          <textarea
            placeholder="Your Message *"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows={3}
            className="w-full py-2.5 px-3 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent resize-none"
            maxLength={1000}
          />
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg gradient-accent text-accent-foreground font-semibold text-sm"
          >
            Send via WhatsApp
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
