"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  // Memoize the menuItems array
  const menuItems = useMemo(() => ["Home", "About", "Projects", "Contact"], []);
  const pathname = usePathname(); // Use usePathname to get the current pathname

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use the pathname from usePathname hook
      const path = pathname.split("/")[1];
      const currentItem = path.charAt(0).toUpperCase() + path.slice(1);

      setActiveItem(menuItems.includes(currentItem) ? currentItem : "Home");
    }
  }, [menuItems, pathname]); // Add pathname to dependency array

  const getHref = (item: string) => {
    return item === "Home" ? "/" : `/${item.toLowerCase()}`;
  };

  return (
    <div className="fixed">
      <div className="flex h-screen items-center pl-8">
        <ul className="flex flex-col space-y-2 bottom-[74px] relative">
          {menuItems.map((item) => (
            <li
              className={`py-2 text-lg leading-tight ${
                activeItem === item ? "text-sky-500" : "text-white"
              }`}
              key={item}
              onMouseOver={() => setActiveItem(item)}
              onClick={() => setActiveItem(item)}
            >
              <Link href={getHref(item)}>
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
    </div>
  );
}
