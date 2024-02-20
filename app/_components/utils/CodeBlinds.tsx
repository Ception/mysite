"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function CodeBlinds({
  children,
}: {
  children: React.ReactNode;
}) {
  const targetDivRef = useRef(null);

  const fadeSlideVariants = {
    hidden: { opacity: 0, x: -50 }, // Start faded and shifted left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={targetDivRef}
      variants={fadeSlideVariants} // Use the new variants
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
