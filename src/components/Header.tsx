import { component$ } from "@builder.io/qwik";
import { ToggleThemeIcon } from "./Logos";

export const Header = component$(() => {
  return (
    <div class="fixed right-0 top-0 p-8">
      <div class="flex justify-end p-8">
        <ToggleThemeIcon />
      </div>
    </div>
  );
});
