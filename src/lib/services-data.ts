import {
  Palette, Layout, FileText, Monitor, Globe, Smartphone, Code,
  Wrench, Cpu, Settings, FileSpreadsheet, PenTool, Layers, Laptop, Image
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: any;
  features: string[];
  technologies?: string[];
  benefits: string[];
}

export const serviceCategories = [
  { id: "design", label: "Design Services" },
  { id: "development", label: "Development Services" },
  { id: "it", label: "IT & Technical" },
  { id: "office", label: "Office Services" },
];

export const services: Service[] = [
  {
    id: "graphics-design",
    title: "Graphics Design",
    category: "design",
    description: "Professional graphic design solutions for branding, marketing materials, and visual content.",
    fullDescription: "We create stunning visual content that communicates your brand message effectively. From logos and brochures to social media graphics and advertisements, our design team delivers pixel-perfect results.",
    icon: Palette,
    features: ["Logo & Brand Identity", "Marketing Materials", "Social Media Graphics", "Print Design", "Packaging Design"],
    benefits: ["Stand out from competition", "Professional brand image", "Consistent visual identity", "High-quality deliverables"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "design",
    description: "User-centered interface design that creates intuitive and engaging digital experiences.",
    fullDescription: "Our UI/UX design process focuses on creating seamless user experiences through research-driven design, wireframing, prototyping, and usability testing.",
    icon: Layout,
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Usability Testing"],
    benefits: ["Improved user satisfaction", "Higher conversion rates", "Reduced development costs", "Better user retention"],
  },
  {
    id: "presentation-design",
    title: "Presentation Design",
    category: "design",
    description: "Impactful presentation designs that captivate audiences and deliver your message.",
    fullDescription: "We design professional presentations for business pitches, conferences, and educational purposes that leave lasting impressions on your audience.",
    icon: Layers,
    features: ["Business Presentations", "Pitch Decks", "Conference Slides", "Infographics", "Animated Presentations"],
    benefits: ["Engaging visual storytelling", "Professional appearance", "Better audience retention", "Clear message delivery"],
  },
  {
    id: "document-formatting",
    title: "Document Formatting",
    category: "design",
    description: "Professional document formatting and layout services for reports, proposals, and publications.",
    fullDescription: "We ensure your documents are professionally formatted, well-structured, and visually appealing, meeting industry standards and best practices.",
    icon: FileText,
    features: ["Report Formatting", "Proposal Layout", "Academic Papers", "Business Documents", "Template Creation"],
    benefits: ["Professional appearance", "Consistent formatting", "Time savings", "Industry compliance"],
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "development",
    description: "Custom website development with modern technologies for businesses of all sizes.",
    fullDescription: "We build responsive, fast, and SEO-optimized websites using the latest web technologies. From simple landing pages to complex web portals, we deliver solutions that drive results.",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimization", "CMS Integration", "E-commerce", "Performance Optimization"],
    technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress", "PHP"],
    benefits: ["Online presence", "Lead generation", "Brand credibility", "24/7 availability"],
  },
  {
    id: "web-app-development",
    title: "Web Application Development",
    category: "development",
    description: "Scalable web applications built with cutting-edge frameworks and technologies.",
    fullDescription: "We develop robust web applications that solve complex business problems. Our solutions are scalable, secure, and built for performance.",
    icon: Monitor,
    features: ["Custom Web Apps", "SaaS Platforms", "Dashboard Development", "API Integration", "Real-time Features"],
    technologies: ["React", "Node.js", "Firebase", "PostgreSQL", "TypeScript"],
    benefits: ["Process automation", "Improved efficiency", "Scalable solutions", "Data-driven decisions"],
  },
  {
    id: "mobile-app-development",
    title: "Mobile Application Development",
    category: "development",
    description: "Native and cross-platform mobile apps for iOS and Android devices.",
    fullDescription: "We create mobile applications that deliver exceptional user experiences across all devices. Our apps are performant, secure, and designed for engagement.",
    icon: Smartphone,
    features: ["Cross-platform Apps", "Native Apps", "App Store Deployment", "Push Notifications", "Offline Support"],
    technologies: ["Flutter", "React Native", "Firebase", "REST APIs"],
    benefits: ["Wider reach", "User engagement", "Brand loyalty", "Revenue generation"],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    category: "development",
    description: "Pixel-perfect frontend development with modern JavaScript frameworks.",
    fullDescription: "We transform designs into clean, responsive, and interactive user interfaces using modern frontend technologies and best practices.",
    icon: Code,
    features: ["Responsive Layouts", "Interactive UI", "Animation & Transitions", "Component Libraries", "Performance Optimization"],
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    benefits: ["Fast load times", "Smooth interactions", "Cross-browser support", "Maintainable code"],
  },
  {
    id: "hardware-support",
    title: "Hardware IT Technical Support",
    category: "it",
    description: "Comprehensive hardware support and troubleshooting for businesses and individuals.",
    fullDescription: "Our certified technicians provide expert hardware support including setup, configuration, troubleshooting, and maintenance for all types of computing equipment.",
    icon: Cpu,
    features: ["Hardware Setup", "Troubleshooting", "Network Configuration", "Server Management", "Equipment Procurement"],
    benefits: ["Minimal downtime", "Expert diagnosis", "Cost-effective solutions", "Preventive maintenance"],
  },
  {
    id: "computer-repair",
    title: "Computer Repair & Maintenance",
    category: "it",
    description: "Professional computer repair services with quick turnaround and quality assurance.",
    fullDescription: "We offer comprehensive computer repair and maintenance services including virus removal, hardware replacement, system optimization, and data recovery.",
    icon: Wrench,
    features: ["Virus Removal", "Hardware Repair", "System Optimization", "Data Recovery", "OS Installation"],
    benefits: ["Quick turnaround", "Quality parts", "Warranty on repairs", "Data safety"],
  },
  {
    id: "electronics-support",
    title: "Electronics Devices Support",
    category: "it",
    description: "Technical support for all electronic devices including setup, repair, and optimization.",
    fullDescription: "We provide comprehensive support for electronic devices including smartphones, tablets, printers, networking equipment, and smart devices.",
    icon: Settings,
    features: ["Device Setup", "Troubleshooting", "Connectivity Solutions", "Smart Device Setup", "Peripheral Configuration"],
    benefits: ["All-device expertise", "Quick resolution", "Ongoing support", "Cost savings"],
  },
  {
    id: "microsoft-office",
    title: "Microsoft Office Services",
    category: "office",
    description: "Expert Microsoft Office solutions for productivity, automation, and training.",
    fullDescription: "We help businesses maximize their Microsoft Office productivity through custom templates, automation with macros, advanced Excel solutions, and comprehensive training.",
    icon: FileSpreadsheet,
    features: ["Excel Automation", "Custom Templates", "PowerPoint Design", "Word Formatting", "Office Training"],
    benefits: ["Increased productivity", "Time savings", "Professional outputs", "Staff empowerment"],
  },
  {
    id: "notes-writing",
    title: "Notes Writing & Documentation",
    category: "office",
    description: "Professional documentation, note-taking, and technical writing services.",
    fullDescription: "We provide professional documentation services including technical writing, meeting notes, process documentation, user manuals, and knowledge base creation.",
    icon: PenTool,
    features: ["Technical Writing", "Process Documentation", "User Manuals", "Meeting Minutes", "Knowledge Base"],
    benefits: ["Clear communication", "Knowledge preservation", "Process standardization", "Professional quality"],
  },
  {
    id: "poster-design",
    title: "Poster Design",
    category: "design",
    description: "Eye-catching poster designs for events, promotions, campaigns, and brand awareness.",
    fullDescription: "We create stunning, high-impact poster designs that grab attention and communicate your message effectively. From event flyers and promotional banners to campaign visuals and brand posters, our designs are crafted to leave a lasting impression.",
    icon: Image,
    features: ["Event Posters", "Promotional Flyers", "Campaign Visuals", "Banner Design", "Social Media Posters"],
    benefits: ["High visual impact", "Brand consistency", "Print & digital ready", "Fast turnaround"],
  },
];

export const getServicesByCategory = (categoryId: string) =>
  services.filter((s) => s.category === categoryId);

export const getServiceById = (id: string) =>
  services.find((s) => s.id === id);
