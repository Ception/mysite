import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import "../styles/globals.css";
import Header from "./_components/template/Header";
import dynamic from "next/dynamic";
import { Providers } from "./providers";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const DynamicThreeJs = dynamic(() => import("./_components/ThreeJs"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Aleks Manov's | Development Portfolio",
  description: "Aleks Manov's Portfolio: Combining Next.js, Tailwind CSS, and Three.js for Innovative, High-Performance Development Portfolio.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body className="overflow-x-hidden">
        <Providers>
          <DynamicThreeJs />
          <header className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
          </header>
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen w-full">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}