"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="flex h-screen items-center">
      <ul className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <li
            className={`px-1 py-2 text-lg ${
              activeItem === item ? "text-sky-500" : "text-white"
            }`}
            key={item}
            onMouseOver={() => setActiveItem(item)}
          >
            <Link href={`/${item.toLowerCase()}`}>
              <span
                className="block transform rotate-180"
                style={{ writingMode: "vertical-rl" }}
              >
                {item}
              </span>
            </Link>
            <span
              className={`absolute right-0 top-0 w-0.5 bg-blue-500 transition-all duration-300 ease-out sm:w-1 ${
                activeItem === item ? "scale-y-100" : "scale-y-0"
              }`}
              style={{ transformOrigin: "bottom" }}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
