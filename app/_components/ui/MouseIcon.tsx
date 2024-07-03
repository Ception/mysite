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
    console.log("Inside useEffect, mouse element:", mouse);

    const handleScroll = () => {
      console.log("inside handleScroll");
      if (mouse) {
        console.log("Scroll position:", window.scrollY);
        mouse.style.opacity = window.scrollY > 50 ? "0" : "1";
      } else {
        console.log("Mouse element not found");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log("added window event");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("removed window event");
    };
  }, []); // Added missing dependency array

  return (
    <div className={`mouse ${className}`} onClick={onClick} id={nextSectionId}>
      {/* Mouse icon JSX goes here */}
    </div>
  );
}