"use client";

import { useEffect } from "react";

export default function MouseIcon() {
  useEffect(() => {
    const mouse = document.querySelector(".mouse");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        mouse.style.opacity = "0";
      } else {
        mouse.style.opacity = "1";
      }
    });
  }, []);
  return <div className="mouse"></div>;
}
