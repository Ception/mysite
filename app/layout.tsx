import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";

import dynamic from "next/dynamic";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

const DynamicThreeJs = dynamic(() => import("./_components/ThreeJs"), {
  ssr: false, // disable server-side rendering
});

export const metadata: Metadata = {
  title: "Aleks Manov | Development Portfolio",
  description:
    "Aleks Manov's Portfolio: Combining Next.js, Tailwind CSS, and Three.js for Innovative, High-Performance Development Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className="fixed min-h-screen">
        <DynamicThreeJs />
        <div className="relative w-full h-full">
          <Header />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
