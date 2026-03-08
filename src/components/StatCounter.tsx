import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  label: string;
  target: number;
  suffix?: string;
  icon: any;
  delay?: number;
}

const StatCounter = ({ label, target, suffix = "", icon: Icon, delay = 0 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: delay / 1000, duration: 0.4 }}
      className="bg-card rounded-xl p-5 shadow-card text-center"
    >
      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-3">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-3xl font-extrabold text-foreground">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground font-medium mt-1">{label}</div>
    </motion.div>
  );
};

export default StatCounter;
