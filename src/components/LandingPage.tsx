import { component$ } from "@builder.io/qwik";
import { TechLogos } from "./Logos";

export const LandingPage = component$(() => {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 p-5">
      <header class="mb-8 text-center">
        <h1 class="mb-4 text-5xl font-extrabold text-gray-900">
          My Dev Portfolio
        </h1>
        <p class="text-2xl font-semibold text-gray-700">Coming Soon</p>
      </header>
      <TechLogos />
    </div>
  );
});
