import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import { LandingPage } from "../components/LandingPage";
import { ThreeJsLandingPage } from "~/components/ThreeJs";

export default component$(() => {
  return (
    <div>
      {/* <LandingPage /> */}
      <ThreeJsLandingPage />
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
