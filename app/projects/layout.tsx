import React from "react";
import MouseIcon from "../_components/ui/MouseIcon";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full overflow-y-auto text-white pt-10 md:pt-12">
      <div className="container mx-auto px-4 md:px-[70px] pt-20 md:pt-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 md:mb-24 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Featured Projects
          </span>
        </h1>
        {children}
      </div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <MouseIcon nextSectionId="project-2" />
      </div>
    </div>
  );
}
