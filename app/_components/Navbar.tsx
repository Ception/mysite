"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const menuItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="fixed inset-y-0 w-full">
      <div className="h-full w-4/5 mx-auto flex">
        <nav className="flex h-full w-16">
          <ul className="m-auto flex h-4/5 flex-col justify-center space-y-2">
            {menuItems.map((item) => (
              <li
                className={`relative cursor-pointer px-1 py-2 text-sm sm:px-2 sm:text-base md:px-4 ${
                  activeItem === item ? "text-blue-600" : "text-white"
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
                  </span>{" "}
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
        </nav>
      </div>
    </div>
  );
}
