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
    categories: ["portfolio", "technology", "development"],
  };
}
