// Header component
import { component$ } from "@builder.io/qwik";
import { ToggleThemeIcon, MyLogo } from "./Icons";

export const Header = component$(() => {
  return (
    <div
      class="fixed left-0 right-0 top-0 flex items-center justify-between pt-8"
      style={{
        paddingLeft: "calc((100% - 5/6 * 100%) / 2)",
        paddingRight: "calc((100% - 5/6 * 100%) / 2)",
      }}
    >
      <div>
        <MyLogo />
      </div>
      <div>
        <ToggleThemeIcon />
      </div>
    </div>
  );
});
