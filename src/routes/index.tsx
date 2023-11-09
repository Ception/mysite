import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/components/Header";
import { TechLogos } from "~/components/TechLogos";
import { ThreeJs } from "~/components/ThreeJs";

export default component$(() => {
  return (
    <div class="container absolute flex min-h-screen w-full flex-col items-start justify-between p-4 text-white md:p-12">
      <Header />
      <ThreeJs />
      <TechLogos />
    </div>
  );
});

export const head: DocumentHead = {
  title:
    "Aleks Manov - Innovative Developer Portfolio | Bun, Qwik & Tailwind Tech Stack",
  meta: [
    {
      name: "description",
      content:
        "Aleks Manov's Innovative Developer Portfolio showcasing a modern tech stack with Bun, Qwik, and Tailwind CSS to deliver high-performance and visually captivating web solutions.",
    },
  ],
};
