"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShutterEffect({
  children,
  reverse = false,
  backgroundReveal = false,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  backgroundReveal?: boolean;
}) {
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  const shutterBars = 15; // Number of shutter bars
  const animationDuration = 0.1; // Duration for each bar's animation

  const shutterVariants = {
    hidden: (index: number) => ({
      width: reverse ? "100%" : "0%",
      transition: {
        duration: animationDuration,
        delay: index * 0.01,
      },
    }),
    visible: (index: number) => ({
      width: reverse ? "0%" : "100%",
      transition: {
        duration: 0.2,
        delay: index * 0.02,
        ease: "easeInOut",
      },
    }),
  };

  useEffect(() => {
    const totalAnimationTime = (shutterBars - 1) * 0.05 + animationDuration;
    setTimeout(() => setIsAnimationComplete(true), totalAnimationTime * 300);
  }, [shutterBars]);

  return (
    <div className="relative overflow-hidden max-h-[560px] self-center">
      {backgroundReveal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-gradient-to-br from-cyan-500 to-blue-500"></div>
      )}
      {children}
      <AnimatePresence>
        {!isAnimationComplete &&
          Array.from({ length: shutterBars }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute top-0 h-full bg-slate-300"
              style={{
                width: `${100 / shutterBars}%`,
                left: `${index * (100 / shutterBars)}%`,
                backgroundColor: `#21282a`,
              }}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={shutterVariants}
              custom={index}
            />
          ))}
      </AnimatePresence>
    </div>
  );
}
