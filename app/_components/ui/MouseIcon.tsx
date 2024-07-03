"use client";

import { useEffect, useState } from "react";

export default function MouseIcon({
  onClick,
  className,
  nextSectionId,
}: {
  onClick?: () => void;
  className?: string;
  nextSectionId?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const shouldBeVisible = scrollPosition < 50;
      setIsVisible(shouldBeVisible);
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div 
      className={`mouse ${className} transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`} 
      onClick={onClick}
    >
    </div>
  );
}