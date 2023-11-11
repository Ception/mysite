import { component$ } from "@builder.io/qwik";
import { MyLogo, ToggleThemeIcon } from "./Logos";

export const Header = component$(() => {
  const H1_TITLE = "Aleks Manov";
  const H3_TITLE = "Full Stack Developer";

  return (
    <div class="z-50 flex w-full items-center justify-between">
      <div class="flex items-center space-x-4">
        <MyLogo />
        <h1 class="text-3xl leading-tight md:text-5xl">{H1_TITLE}</h1>
        {/* <h3 class="text-xl leading-tight md:text-3xl">{H3_TITLE}</h3> */}
      </div>
      <ToggleThemeIcon />
    </div>
  );
});
