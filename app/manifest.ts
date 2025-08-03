import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aleks Manov - Full Stack Developer & Cloud Architect",
    short_name: "Aleks Manov",
    description:
      "Portfolio of Aleks Manov, Full Stack Developer & Cloud Architect specializing in scalable web applications and cloud solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#2e3440",
    theme_color: "#88c0d0",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["portfolio", "technology", "development"],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1200x800",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "400x800",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  };
}
