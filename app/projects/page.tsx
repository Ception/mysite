import { Metadata } from "next";
import ProjectsPageClient from "../components/ProjectsPageClient";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Projects Portfolio - Aleks Manov | Full Stack Developer",
  description:
    "Explore Aleks Manov's portfolio of innovative web applications, cloud infrastructure projects, and enterprise-grade solutions.",
  alternates: {
    canonical: "https://aleksmanov.me/projects",
  },
  openGraph: {
    title: "Projects Portfolio - Aleks Manov | Full Stack Developer",
    description:
      "Innovative web applications and cloud solutions showcasing technical excellence and modern development practices.",
    url: "https://aleksmanov.me/projects",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aleks Manov Projects Portfolio",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
