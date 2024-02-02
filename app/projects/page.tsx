"use client";

import { useEffect } from "react";
import { DynamicMouseIcon } from "../page";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIconClick = () => {
    const nextSection = document.getElementById("project-2");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div
          className="h-full w-full flex justify-center items-center border"
          id="project-1"
        >
          <div className="self-center">
            <span className="text-4xl">Projects</span>
          </div>
        </div>
        <div className="fixed bottom-4 w-full flex justify-center">
          <DynamicMouseIcon
            className="hover:cursor-pointer"
            onClick={() => handleIconClick()}
          />
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center relative">
        <div
          className="h-full w-full flex justify-center items-center border"
          id="project-2"
        >
          <div className="self-center">
            <span className="text-4xl">Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
