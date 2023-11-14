import { component$, useStore } from "@builder.io/qwik";

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
            class={`cursor-pointer px-4 py-2 text-base ${
              state.activeItem === item ? "text-blue-600" : "text-white"
            }`}
            key={item}
            onMouseOver$={() => (state.activeItem = item)}
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {item}
            <span
              class={`absolute right-0 top-0 w-1 bg-blue-500 transition-all duration-300 ease-out ${
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
