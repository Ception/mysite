"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
}

export default function TypingAnimation({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Deleting characters
          setCurrentText((prev) => prev.slice(0, -1));

          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        } else {
          // Adding characters
          if (currentText.length < currentFullText.length) {
            setCurrentText(currentFullText.slice(0, currentText.length + 1));
          } else {
            // Finished typing, wait before deleting
            setTimeout(() => setIsDeleting(true), delayBetweenTexts);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    speed,
    deleteSpeed,
    delayBetweenTexts,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <motion.span
        key={currentTextIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-primary"
      >
        {currentText}
      </motion.span>
      <motion.span
        className="text-primary ml-1"
        animate={{ opacity: isBlinking ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      >
        |
      </motion.span>
    </div>
  );
}
