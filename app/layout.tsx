import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";

import dynamic from "next/dynamic";
import Loading from "./loading";

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
      <body>
        <div className="fixed w-full h-full bg-cover">
          <DynamicThreeJs />
        </div>
        <header className="fixed top-0 w-full px-8 pt-8 z-10">
          <Header />
        </header>
        <nav className="fixed left-0 h-screen px-8">
          <Navbar />
        </nav>
        <div className="flex justify-center items-center h-screen">
          <main className="relative m-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
