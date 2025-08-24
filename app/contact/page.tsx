import { Metadata } from "next";
import ContactPageClient from "../components/ContactPageClient";

export const dynamic = "force-static";
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Contact Aleks Manov - Let's Build Something Amazing Together",
  description:
    "Get in touch with Aleks Manov, Full Stack Developer & Cloud Architect. Ready to transform your ideas into exceptional digital experiences.",
  alternates: {
    canonical: "https://aleksmanov.me/contact",
  },
  openGraph: {
    title: "Contact Aleks Manov - Let's Build Something Amazing Together",
    description:
      "Get in touch with Aleks Manov for your next web development project. Expert in React, Next.js, AWS, and modern cloud solutions.",
    url: "https://aleksmanov.me/contact",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Aleks Manov - Full Stack Developer",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
