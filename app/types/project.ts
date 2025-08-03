import React from "react";

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  status: string;
  year: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  codeSnippet: string;
}

export interface ProjectPreview {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
}
