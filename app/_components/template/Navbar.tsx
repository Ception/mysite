"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar({
  setIsNavOpen,
  isMobile = false,
}: {
  setIsNavOpen?: (isOpen: boolean) => void;
  isMobile?: boolean;
}) {
  const [activeItem, setActiveItem] = useState("");
  const menuItems = useMemo(
    () => ["Home", "Who Am I?", "Projects", "Contact"],
    []
  );
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = pathname.split("/")[1];
      const currentItem = path.charAt(0).toUpperCase() + path.slice(1);
      setActiveItem(menuItems.includes(currentItem) ? currentItem : "Home");
    }
  }, [menuItems, pathname]);

  const getHref = (item: string) => {
    if (item === "Home") {
      return "/";
    } else if (item === "Who Am I?") {
      return "/#about-me";
    } else {
      return `/${item.toLowerCase()}`;
    }
  };

  const handleLinkClick = (item: string) => {
    setActiveItem(item);
    if (setIsNavOpen) {
      setIsNavOpen(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <nav
      className={`${
        isMobile
          ? "w-full"
          : "md:ml-[-40px] z-30 fixed top-1/2 transform -translate-y-1/2 h-[calc(100vh_-_74px)] md:h-[calc(100%_-_74px)] w-full sm:w-auto"
      }`}
    >
      <motion.ul
        className={`flex ${
          isMobile
            ? "flex-col items-center space-y-6"
            : "flex-col space-y-2 h-full justify-center"
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item) => (
          <motion.li
            variants={itemVariants}
            className={`py-2 ${
              isMobile ? "text-4xl" : "text-5xl md:text-lg"
            } leading-tight font-light text-center`}
            key={item}
            onMouseOver={() => setActiveItem(item)}
          >
            <Link
              href={getHref(item)}
              onClick={() => handleLinkClick(item)}
              className={`block ${
                activeItem === item ? "text-sky-500" : "text-white"
              } ${!isMobile ? "vertical-links-desktop" : ""}`}
            >
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
