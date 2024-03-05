import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";
import Header from "./_components/template/Header";
import Navbar from "./_components/template/Navbar";
import dynamic from "next/dynamic";
import { Providers } from "./providers";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

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
          <header className="container mx-auto px-4">
            <Header />
          </header>
          <main className="container mx-auto px-4 relative h-full w-full overflow-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
