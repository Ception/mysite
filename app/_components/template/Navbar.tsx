"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({
  setIsNavOpen,
}: {
  setIsNavOpen?: (isOpen: boolean) => void;
}) {
  const [activeItem, setActiveItem] = useState("");
  const menuItems = useMemo(() => ["Who Am I?", "Projects", "Contact"], []);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = pathname.split("/")[1];
      const currentItem = path.charAt(0).toUpperCase() + path.slice(1);
      setActiveItem(menuItems.includes(currentItem) ? currentItem : "Home");
    }
  }, [menuItems, pathname]);

  const getHref = (item: string) => {
    return item === "Who Am I?" ? "/#about-me" : `/${item.toLowerCase()}`;
  };

  const handleLinkClick = (item: string) => {
    setActiveItem(item);
    if (setIsNavOpen) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className="z-30 absolute top-1/2 -translate-y-1/2 h-[calc(100vh_-_74px)] md:h-[calc(100%_-_74px)] w-full sm:w-auto">
      <div className="flex h-screen justify-center items-center w-full sm:w-auto">
        <ul className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <li
              className={`py-2 text-base md:text-lg leading-tight font-light ${
                activeItem === item ? "text-sky-500" : "text-white"
              }`}
              key={item}
              onMouseOver={() => setActiveItem(item)}
            >
              <Link
                href={getHref(item)}
                onClick={() => handleLinkClick(item)}
                className="block vertical-links-desktop"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
