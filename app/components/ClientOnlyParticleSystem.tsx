"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ParticleSystem with no SSR
const ParticleSystem = dynamic(() => import("./ParticleSystem"), {
  ssr: false,
  loading: () => null, // No loading component to avoid flash
});

export default function ClientOnlyParticleSystem() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ParticleSystem />;
}
