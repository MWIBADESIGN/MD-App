import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Register service worker for PWA with auto-update
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      // Check for updates periodically
      setInterval(() => reg.update(), 60 * 60 * 1000);
    }).catch(() => {});
  });
}

createRoot(document.getElementById("root")!).render(<App />);