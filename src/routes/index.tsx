import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-400 to-gray-600">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white">My Dev Portfolio</h1>
        <p className="mt-4 rounded bg-black bg-opacity-50 p-2 text-2xl text-white">
          Coming Soon
        </p>
      </div>
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
