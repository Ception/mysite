"use client";

import { useEffect } from "react";

export default function MouseIcon({
  onClick,
  className,
  nextSectionId,
}: {
  onClick?: () => void;
  className?: string;
  nextSectionId?: string;
}) {
  useEffect(() => {
    const mouse = document.querySelector(".mouse") as HTMLElement;

    window.addEventListener("scroll", () => {
      mouse.style.opacity = window.scrollY > 0 ? "0" : "1";
    });
  }, []);

  const defaultOnClick = () => {
    if (nextSectionId) {
      const nextSection = document.getElementById(nextSectionId);
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`mouse hover:cursor-pointer ${className}`}
      onClick={onClick || defaultOnClick}
    ></div>
  );
}
