import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { ThreeJs } from "~/components/ThreeJs";

export default component$(() => {
  return (
    <div class="mx-auto flex min-h-screen w-screen flex-col p-4">
      <Header />
      <main class="flex-grow">
        <ThreeJs />
      </main>
      <Footer />
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
