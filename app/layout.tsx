import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import dynamic from "next/dynamic";
import { Providers } from "./providers";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "400" });

const DynamicThreeJs = dynamic(() => import("./_components/ThreeJs"), {
  ssr: false, // disable server-side rendering
});

export const metadata: Metadata = {
  title: "Aleks Manov's | Development Portfolio",
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
        <Providers>
          <DynamicThreeJs />
          <header className="z-20 relative">
            <Header />
          </header>
          <nav className="z-30 fixed top-[74px] h-[calc(100%_-_74px)]">
            <Navbar />
          </nav>
          <main className="relative pl-32 pr-8">
            <div className="grid grid-rows-2 items-start w-full h-screen overflow-auto">
              <div></div>
              <div className=" mt-[-8rem]">{children}</div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
