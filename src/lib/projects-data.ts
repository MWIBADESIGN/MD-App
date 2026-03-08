export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
}

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "app", label: "Apps" },
  { id: "design", label: "UI Design" },
];

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment integration, product management, and order tracking for a retail business.",
    category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "fitness-app",
    title: "FitTrack Mobile App",
    description: "Cross-platform fitness tracking app with workout plans, progress analytics, and social features.",
    category: "app",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "REST API"],
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    description: "Modern responsive website for a financial services company with a focus on trust and professionalism.",
    category: "web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    id: "dashboard-ui",
    title: "Analytics Dashboard UI",
    description: "Clean and intuitive analytics dashboard design with data visualization components and dark mode support.",
    category: "design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Figma", "UI/UX", "Design System"],
  },
  {
    id: "food-delivery-app",
    title: "QuickBite Delivery App",
    description: "Food delivery mobile application with real-time tracking, restaurant listings, and secure payments.",
    category: "app",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "Google Maps API"],
  },
  {
    id: "brand-identity",
    title: "Brand Identity Package",
    description: "Complete brand identity design including logo, color palette, typography, and brand guidelines for a tech startup.",
    category: "design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
    technologies: ["Illustrator", "Photoshop", "Brand Strategy"],
  },
  {
    id: "real-estate-portal",
    title: "PropertyHub Real Estate Portal",
    description: "A comprehensive property listing platform with advanced search filters, virtual tours, mortgage calculators, and agent booking system for a leading real estate agency.",
    category: "web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Mapbox"],
  },
  {
    id: "healthcare-app",
    title: "MediCare Health App",
    description: "Patient-facing healthcare app enabling appointment scheduling, telemedicine video calls, prescription management, and health record access with HIPAA-compliant data handling.",
    category: "app",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "WebRTC", "AWS"],
  },
  {
    id: "restaurant-website",
    title: "Saveur Restaurant Website",
    description: "Elegant restaurant website featuring an interactive menu, table reservation system, chef profiles, and integration with food delivery platforms.",
    category: "web",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    technologies: ["React", "Tailwind CSS", "Supabase", "Stripe"],
  },
  {
    id: "social-media-design",
    title: "Social Media Campaign Kit",
    description: "Complete social media design package including Instagram posts, stories, Facebook banners, and Twitter headers for a fashion brand's seasonal campaign launch.",
    category: "design",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    technologies: ["Canva", "Photoshop", "Social Media Strategy"],
  },
  {
    id: "inventory-management",
    title: "StockFlow Inventory System",
    description: "Enterprise inventory management web application with barcode scanning, real-time stock tracking, automated reorder alerts, and multi-warehouse support for a distribution company.",
    category: "web",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    id: "travel-app",
    title: "Wanderlust Travel App",
    description: "Feature-rich travel companion app with itinerary planning, offline maps, local recommendations, currency conversion, and social sharing of travel experiences.",
    category: "app",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Dart", "Google Maps", "Firebase"],
  },
  {
    id: "saas-landing-page",
    title: "CloudSync SaaS Landing Page",
    description: "High-converting landing page design for a cloud storage SaaS product with animated hero sections, pricing tables, testimonial carousels, and A/B tested CTAs.",
    category: "design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["Figma", "Prototyping", "Motion Design"],
  },
  {
    id: "school-management",
    title: "EduTrack School Management",
    description: "Comprehensive school management platform with student enrollment, grade tracking, attendance monitoring, parent communication portal, and timetable generation.",
    category: "web",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    technologies: ["React", "Express.js", "MySQL", "Socket.io"],
  },
  {
    id: "banking-app",
    title: "FinWallet Banking App",
    description: "Secure mobile banking application with biometric authentication, peer-to-peer transfers, bill payments, spending analytics, and investment portfolio tracking.",
    category: "app",
    image: "https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?w=600&h=400&fit=crop",
    technologies: ["Kotlin", "Swift", "REST API", "Encryption"],
  },
  {
    id: "ngo-website",
    title: "GreenEarth NGO Website",
    description: "Impactful website for an environmental NGO featuring donation integration, volunteer signup, project galleries, impact statistics, and a blog for awareness campaigns.",
    category: "web",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    technologies: ["WordPress", "PHP", "PayPal API", "SEO"],
  },
  {
    id: "mobile-game-ui",
    title: "Puzzle Quest Game UI",
    description: "Playful and immersive UI design for a mobile puzzle game, including character selection screens, level maps, achievement badges, and in-app store layouts.",
    category: "design",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
    technologies: ["Figma", "Spine Animation", "Game UI/UX"],
  },
];
