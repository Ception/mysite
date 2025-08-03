"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export default function MermaidChart({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    mermaid.initialize({ startOnLoad: true, theme: "dark" });
    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mermaid" ref={ref}>
      {chart}
    </div>
  );
}
