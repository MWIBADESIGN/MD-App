import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "255753704585";
const DEFAULT_MESSAGE = "Hello Mwiba Designs, I need your services";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "floating" | "inline" | "full";
  label?: string;
}

const WhatsAppButton = ({
  message = DEFAULT_MESSAGE,
  variant = "floating",
  label = "WhatsApp",
}: WhatsAppButtonProps) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  if (variant === "floating") {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-float"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    );
  }

  if (variant === "full") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-whatsapp text-whatsapp-foreground font-semibold text-sm transition-opacity hover:opacity-90"
      >
        <MessageCircle className="w-5 h-5" />
        {label}
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 py-2 px-3 rounded-md bg-whatsapp text-whatsapp-foreground font-medium text-xs transition-opacity hover:opacity-90"
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  );
};

export default WhatsAppButton;
