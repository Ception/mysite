"use client";

import { useEffect } from "react";

export default function MouseIcon() {
  useEffect(() => {
    const mouse = document.querySelector(".mouse") as HTMLElement;

    window.addEventListener("scroll", () => {
      mouse.style.opacity = window.scrollY > 0 ? "0" : "1";
    });
  }, []);
  return <div className="mouse"></div>;
}
