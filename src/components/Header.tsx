import { component$ } from "@builder.io/qwik";

export const Header = component$(() => {
  const H1_TITLE = "Aleks Manov";
  const H3_TITLE = "Full Stack Developer";

  return (
    <div class="z-50">
      <h1 class="m-0 text-3xl leading-tight md:text-5xl">{H1_TITLE}</h1>
      <h3 class="m-0 text-2xl leading-tight md:text-4xl">{H3_TITLE}</h3>
    </div>
  );
});
