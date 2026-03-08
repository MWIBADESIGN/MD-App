import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell, Sparkles, Star, Megaphone, Volume2, VolumeX } from "lucide-react";

interface Notification {
  id: number;
  message: string;
  icon: "sparkles" | "star" | "megaphone" | "bell";
}

const broadcastMessages: Omit<Notification, "id">[] = [
  { message: "🎨 Get started with your designs at MD!", icon: "sparkles" },
  { message: "🚀 Transform your ideas into digital reality!", icon: "star" },
  { message: "💻 Professional web & app development available!", icon: "megaphone" },
  { message: "📱 Need a mobile app? We've got you covered!", icon: "bell" },
  { message: "🎯 Quality IT solutions at affordable prices!", icon: "sparkles" },
  { message: "✨ New service: UI/UX Design - Check it out!", icon: "star" },
  { message: "🔧 24/7 IT support for your business needs!", icon: "megaphone" },
  { message: "📊 Visit our website: mwibadesigns.netlify.app", icon: "bell" },
  { message: "💡 Custom graphics & branding solutions!", icon: "sparkles" },
  { message: "📞 Contact us today: +255 750 555 783", icon: "megaphone" },
  { message: "🖼️ New: Poster Design service now available!", icon: "star" },
];

const iconMap = {
  sparkles: Sparkles,
  star: Star,
  megaphone: Megaphone,
  bell: Bell,
};

const playNotificationSound = () => {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();

    const playChime = (startTime: number) => {
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(880, startTime);
      osc1.frequency.setValueAtTime(1108, startTime + 0.15);
      osc1.frequency.setValueAtTime(1318, startTime + 0.3);
      gain1.gain.setValueAtTime(0, startTime);
      gain1.gain.linearRampToValueAtTime(0.3, startTime + 0.05);
      gain1.gain.exponentialRampToValueAtTime(0.01, startTime + 0.8);
      osc1.connect(gain1).connect(ctx.destination);
      osc1.start(startTime);
      osc1.stop(startTime + 0.8);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(1760, startTime);
      osc2.frequency.setValueAtTime(2217, startTime + 0.15);
      gain2.gain.setValueAtTime(0, startTime);
      gain2.gain.linearRampToValueAtTime(0.1, startTime + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.01, startTime + 0.6);
      osc2.connect(gain2).connect(ctx.destination);
      osc2.start(startTime);
      osc2.stop(startTime + 0.6);
    };

    const now = ctx.currentTime;
    playChime(now);
    playChime(now + 1.2);

    setTimeout(() => ctx.close(), 3500);
  } catch (e) {
    // Audio not supported
  }
};

const NOTIF_INTERVAL = 8 * 60 * 60 * 1000;
const INITIAL_DELAY = 20000;

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem("md-notif-sound");
    return saved !== "false";
  });
  const [showToggle, setShowToggle] = useState(false);
  const messageIndex = useRef(0);
  const notifCount = useRef(0);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("md-notif-sound", String(next));
      return next;
    });
  }, []);

  const dismiss = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const showNotification = useCallback(() => {
    if (notifCount.current >= 3) return;

    const msg = broadcastMessages[messageIndex.current % broadcastMessages.length];
    const newNotif = { ...msg, id: Date.now() };
    setNotifications((prev) => [...prev.slice(-1), newNotif]);
    messageIndex.current += 1;
    notifCount.current += 1;
    setShowToggle(true);

    if (soundEnabled) {
      playNotificationSound();
    }

    setTimeout(() => dismiss(newNotif.id), 8000);
  }, [dismiss, soundEnabled]);

  useEffect(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const msToMidnight = midnight.getTime() - now.getTime();

    const resetTimer = setTimeout(() => {
      notifCount.current = 0;
    }, msToMidnight);

    const initialTimer = setTimeout(showNotification, INITIAL_DELAY);
    const interval = setInterval(showNotification, NOTIF_INTERVAL);

    return () => {
      clearTimeout(resetTimer);
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showNotification]);

  return (
    <div className="fixed top-2 left-2 right-2 z-[90] flex flex-col gap-2 max-w-lg mx-auto pointer-events-none">
      {/* Sound toggle button */}
      {showToggle && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={toggleSound}
          className="pointer-events-auto self-end w-8 h-8 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          title={soundEnabled ? "Mute notifications" : "Unmute notifications"}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </motion.button>
      )}

      <AnimatePresence>
        {notifications.map((notif) => {
          const Icon = iconMap[notif.icon];
          return (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="pointer-events-auto bg-card border border-border rounded-xl p-3 shadow-lg flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-accent-foreground" />
              </div>
              <p className="text-sm text-foreground flex-1 pt-1">{notif.message}</p>
              <button
                onClick={() => dismiss(notif.id)}
                className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 pt-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default NotificationSystem;
