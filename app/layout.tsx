import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aleksmanov.me"),
  title: "Aleks Manov - Full Stack Developer & Cloud Architect",
  description:
    "Innovative Full Stack Developer and Cloud Architecture Expert specializing in scalable web applications, serverless solutions, and cutting-edge technologies. Experience in React, Next.js, AWS, and modern development practices.",
  keywords: [
    "Full Stack Developer",
    "Cloud Architecture",
    "React Developer",
    "Next.js Expert",
    "AWS Solutions",
    "TypeScript",
    "Node.js",
    "Serverless",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Aleks Manov" }],
  creator: "Aleks Manov",
  openGraph: {
    title: "Aleks Manov - Full Stack Developer & Cloud Architect",
    description:
      "Innovative developer creating cutting-edge web applications and cloud solutions",
    url: "https://aleksmanov.me",
    siteName: "Aleks Manov Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleks Manov - Full Stack Developer & Cloud Architect",
    description:
      "Innovative developer creating cutting-edge web applications and cloud solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonStructuredData />
        <WebsiteStructuredData />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
