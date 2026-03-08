import { Home, Briefcase, FolderKanban, BarChart3, Phone, Info } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/services", icon: Briefcase, label: "Services" },
  { path: "/projects", icon: FolderKanban, label: "Projects" },
  { path: "/statistics", icon: BarChart3, label: "Stats" },
  { path: "/contact", icon: Phone, label: "Contact" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const active = isActive(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="relative flex flex-col items-center justify-center w-full h-full gap-0.5 transition-colors"
            >
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full gradient-accent"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <tab.icon
                className={`w-5 h-5 transition-colors ${active ? "text-accent" : "text-muted-foreground"}`}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${active ? "text-accent" : "text-muted-foreground"}`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
