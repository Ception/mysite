import { component$ } from "@builder.io/qwik";
import { QwikLogo, BunLogo, TailwindLogo, ThreeJsLogo } from "./Logos";

export const LandingPage = component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-5">
      <header class="mb-8 text-center">
        <h1 class="mb-4 text-5xl font-extrabold text-gray-900">
          My Dev Portfolio
        </h1>
        <p class="text-2xl font-semibold text-gray-700">Coming Soon</p>
      </header>
      <section class="grid grid-cols-1 gap-10 md:grid-cols-4">
        {["Qwik", "Bun", "Tailwind", "Three.js"].map((tech, index) => (
          <div
            key={index}
            class="flex transform flex-col items-center transition-transform hover:scale-105"
          >
            <div class="flex h-24 w-24 items-center justify-center rounded-full bg-white p-4 shadow-lg">
              {tech === "Qwik" && <QwikLogo />}
              {tech === "Tailwind" && <TailwindLogo />}
              {tech === "Bun" && <BunLogo />}
              {tech === "Three.js" && <ThreeJsLogo />}
            </div>
            <p class="mt-2 text-xl font-semibold text-gray-700">{tech}</p>
          </div>
        ))}
      </section>
    </div>
  );
});
