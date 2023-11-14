// Header component
import { component$ } from "@builder.io/qwik";
import { ToggleThemeIcon, MyLogo } from "./Icons";
import { Link } from "@builder.io/qwik-city";

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
        <Link href="/">
          <MyLogo />
        </Link>
      </div>
      <div class="cursor-pointer">
        <ToggleThemeIcon />
      </div>
    </div>
  );
});
