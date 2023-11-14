import { component$ } from "@builder.io/qwik";
import { TechLogos } from "./Icons";

export const Footer = component$(() => {
  return (
    <footer class="absolute bottom-0 mx-auto w-screen p-4">
      <TechLogos />
    </footer>
  );
});
