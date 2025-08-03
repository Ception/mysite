"use client";

import { motion } from "framer-motion";

export default function ParticleSystem() {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => {
          // Use deterministic values based on index to avoid SSR mismatch
          const startX =
            (i * 200 + 100) %
            (typeof window !== "undefined" ? window.innerWidth : 1000);
          const endX =
            ((i + 1) * 250 + 150) %
            (typeof window !== "undefined" ? window.innerWidth : 1000);
          const startY =
            (i * 150 + 80) %
            (typeof window !== "undefined" ? window.innerHeight : 1000);
          const endY =
            ((i + 1) * 180 + 120) %
            (typeof window !== "undefined" ? window.innerHeight : 1000);

          return (
            <motion.div
              key={i}
              className={`absolute w-4 h-4 ${
                i % 4 === 0
                  ? "bg-primary/20"
                  : i % 4 === 1
                  ? "bg-secondary/20"
                  : i % 4 === 2
                  ? "bg-accent/20"
                  : "bg-success/20"
              } ${
                i % 3 === 0
                  ? "rounded-full"
                  : i % 3 === 1
                  ? "rounded-lg rotate-45"
                  : "rounded-sm"
              } blur-sm`}
              animate={{
                x: [startX, endX],
                y: [startY, endY],
                rotate: [0, 180],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 40 + i * 5, // Deterministic duration
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
              style={{
                left: i * 15 + 10 + "%", // Deterministic positioning
                top: i * 12 + 15 + "%",
              }}
            />
          );
        })}
      </div>
    </>
  );
}
