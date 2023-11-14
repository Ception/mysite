import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/Header";
import { LandingPage } from "~/components/LandingPage";
import { Navbar } from "~/components/Navbar";
import { ThreeJs } from "~/components/ThreeJs";

export default component$(() => {
  return (
    <div class="flex min-h-screen w-full items-center justify-center overflow-hidden px-4 sm:px-2 md:px-0">
      <ThreeJs />
      <div class="relative flex h-5/6 w-full flex-col sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-5/6">
        <Header />
        <Navbar />
        <main>
          <LandingPage />
        </main>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title:
    "Aleks Manov - Innovative Developer Portfolio | Bun, Qwik Tailwind & Three.js Tech Stack",
  meta: [
    {
      name: "description",
      content:
        "Aleks Manov's Innovative Developer Portfolio showcasing a modern tech stack with Bun, Qwik, and Tailwind CSS to deliver high-performance and visually captivating web solutions.",
    },
  ],
};
