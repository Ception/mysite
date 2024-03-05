"use client";

import { useState, useEffect, useRef } from "react";

interface ChangingTextProps {
  text: string;
  className?: string;
}

export const ChangingText = ({ text, className }: ChangingTextProps) => {
  const FINAL_TEXT = text;
  const characters =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  const [title, setTitle] = useState(new Array(FINAL_TEXT.length).fill(""));

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeouts: NodeJS.Timeout[] = [];

    const shuffleCharacter = (index: number) => {
      setTitle((prevTitle) => {
        const newTitle = [...prevTitle];
        newTitle[index] = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        return newTitle;
      });
    };

    const startAnimation = () => {
      const indexesToShuffle = Array.from(Array(FINAL_TEXT.length).keys());

      intervalId = setInterval(() => {
        if (indexesToShuffle.length > 0) {
          const index = indexesToShuffle.shift();
          if (index !== undefined) {
            shuffleCharacter(index);
          }
        } else {
          clearInterval(intervalId);
        }
      }, 60);

      indexesToShuffle.forEach((index, i) => {
        const timeout = setTimeout(() => {
          setTitle((prevTitle) => {
            const newTitle = [...prevTitle];
            newTitle[index] = FINAL_TEXT[index];
            return newTitle;
          });
        }, i * 100 + 1000);
        timeouts.push(timeout);
      });
    };

    startAnimation();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        clearInterval(intervalId);
        timeouts.forEach(clearTimeout);
        setTitle(new Array(FINAL_TEXT.length).fill(""));
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      timeouts.forEach(clearTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [FINAL_TEXT, characters]);

  return <span className={`${className}`}>{title.join("")}</span>;
};

export const ScramblePhrases = ({
  text,
  className,
}: {
  text: string[];
  className?: string;
}) => {
  const FINAL_TEXT = text;
  const characters = "01";
  const [title, setTitle] = useState(Array(FINAL_TEXT[0].length).fill(""));
  const wordIndexRef = useRef(0);
  const intervalsRef = useRef<number[]>([]);
  const scrambleTimeoutsRef = useRef<number[]>([]);
  const revealTimeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const shuffleCharacter = (index: number, scramble: boolean) => {
      setTitle((prevTitle) => {
        const newTitle = [...prevTitle];
        newTitle[index] = scramble
          ? characters.charAt(Math.floor(Math.random() * characters.length))
          : FINAL_TEXT[wordIndexRef.current].charAt(index);
        return newTitle;
      });
    };

    const scrambleWord = (word: string) => {
      const longestWordLength = Math.max(
        ...FINAL_TEXT.map((word) => word.length)
      );
      let scrambleIndex = longestWordLength;
      const scrambleInterval = window.setInterval(() => {
        if (scrambleIndex > 0) {
          shuffleCharacter(--scrambleIndex, scrambleIndex < word.length);
        } else {
          window.clearInterval(scrambleInterval);
          intervalsRef.current = intervalsRef.current.filter(
            (id) => id !== scrambleInterval
          );
          revealWord(FINAL_TEXT[wordIndexRef.current]);
        }
      }, 100);
      intervalsRef.current.push(scrambleInterval);
    };

    const revealWord = (word: string) => {
      let revealIndex = -1;
      const revealInterval = window.setInterval(() => {
        if (revealIndex < word.length - 1) {
          shuffleCharacter(++revealIndex, false);
        } else {
          window.clearInterval(revealInterval);
          intervalsRef.current = intervalsRef.current.filter(
            (id) => id !== revealInterval
          );
          window.setTimeout(() => {
            wordIndexRef.current =
              (wordIndexRef.current + 1) % FINAL_TEXT.length;
            scrambleWord(FINAL_TEXT[wordIndexRef.current]);
          }, 1000);
        }
      }, 100);
      intervalsRef.current.push(revealInterval);
    };

    // Start by scrambling the first word
    scrambleWord(FINAL_TEXT[wordIndexRef.current]);

    // Copy the current values of the refs to variables
    const currentIntervals = intervalsRef.current;
    const currentScrambleTimeouts = scrambleTimeoutsRef.current;
    const currentRevealTimeouts = revealTimeoutsRef.current;

    return () => {
      currentIntervals.forEach(window.clearInterval);
      currentScrambleTimeouts.forEach(window.clearTimeout);
      currentRevealTimeouts.forEach(window.clearTimeout);
    };
  }, [FINAL_TEXT]);

  return (
    <span className={`${className}`}>
      {title.map((char, index) => (
        <span key={index} className="character-transition">
          {char}
        </span>
      ))}
    </span>
  );
};
