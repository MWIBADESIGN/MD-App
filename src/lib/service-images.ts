// Individual unique images for each service
export const serviceImages: Record<string, string> = {
  "graphics-design": "/images/svc-graphics-design.png",
  "ui-ux-design": "/images/svc-ui-ux-design.png",
  "presentation-design": "/images/svc-presentation-design.png",
  "document-formatting": "/images/svc-document-formatting.png",
  "website-development": "/images/svc-website-development.png",
  "web-app-development": "/images/svc-web-app-development.png",
  "mobile-app-development": "/images/svc-mobile-app-development.png",
  "frontend-development": "/images/svc-frontend-development.png",
  "hardware-support": "/images/svc-hardware-support.png",
  "computer-repair": "/images/svc-computer-repair.png",
  "electronics-support": "/images/svc-electronics-support.png",
  "microsoft-office": "/images/svc-microsoft-office.png",
  "notes-writing": "/images/svc-notes-writing.png",
  "poster-design": "/images/svc-poster-design.png",
};

export const getServiceImage = (serviceId: string): string => {
  return serviceImages[serviceId] || "/images/svc-graphics-design.png";
};
