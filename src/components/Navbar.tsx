import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  const state = useStore({
    activeItem: "Home",
    menuItems: ["Home", "About", "Projects", "Contact"],
  });

  return (
    <nav class="absolute inset-0 flex">
      <ul class="absolute left-0 flex h-full flex-col items-center justify-center space-y-2">
        {state.menuItems.map((item) => (
          <li
            class={`cursor-pointer px-1 py-2 text-sm sm:px-2 sm:text-base md:px-4 ${
              state.activeItem === item ? "text-blue-600" : "text-white"
            }`}
            key={item}
            onMouseOver$={() => (state.activeItem = item)}
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            <Link href={item.toLowerCase()}>{item}</Link>
            <span
              class={`absolute right-0 top-0 w-0.5 bg-blue-500 transition-all duration-300 ease-out sm:w-1 ${
                state.activeItem === item ? "scale-y-100" : "scale-y-0"
              }`}
              style={{ transformOrigin: "bottom" }}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
});
