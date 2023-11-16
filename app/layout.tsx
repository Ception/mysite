import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Aleks Manov - Next.js & Tailwind Portfolio",
  description:
    "Aleks Manov's Developer Portfolio: Showcasing Next.js & Tailwind CSS for High-Performance, Visually Engaging Web Solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  );
}
