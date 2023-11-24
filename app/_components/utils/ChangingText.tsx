"use client";

import { useState, useEffect, useRef } from "react";

interface ChangingTextProps {
  text: string;
}

export const ChangingText = ({ text }: ChangingTextProps) => {
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

  return <span>{title.join("")}</span>;
};

interface ScramblePhrasesProps {
  text: string[];
}

export const ScramblePhrases = ({ text }: ScramblePhrasesProps) => {
  const FINAL_TEXT = text;
  const characters = "01";
  const [title, setTitle] = useState("");
  const wordIndexRef = useRef(0);
  const intervalsRef = useRef<number[]>([]);
  const revealTimeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const shuffleCharacter = (index: number, word: string) => {
      setTitle((prevTitle) => {
        const newTitle =
          prevTitle.substring(0, index) +
          characters.charAt(Math.floor(Math.random() * characters.length)) +
          prevTitle.substring(index + 1);
        return newTitle;
      });
    };

    const revealCharacter = (index: number, word: string) => {
      setTitle((prevTitle) => {
        const newTitle =
          prevTitle.substring(0, index) +
          word.charAt(index) +
          prevTitle.substring(index + 1);
        return newTitle;
      });
    };

    const shuffleWord = (word: string) => {
      setTitle(new Array(word.length + 1).join(" "));
      intervalsRef.current = [];
      revealTimeoutsRef.current = [];
      for (let i = 0; i < word.length; i++) {
        startShuffling(i, word);
      }
    };

    const startShuffling = (index: number, word: string) => {
      intervalsRef.current[index] = window.setInterval(() => {
        shuffleCharacter(index, word);
      }, 100);

      revealTimeoutsRef.current[index] = window.setTimeout(() => {
        stopShuffling(index, word);
      }, 1500 + index * 100);
    };

    const stopShuffling = (index: number, word: string) => {
      clearInterval(intervalsRef.current[index]);
      revealCharacter(index, word);
      if (index === word.length - 1) {
        setTimeout(() => {
          wordIndexRef.current = (wordIndexRef.current + 1) % FINAL_TEXT.length;
          shuffleWord(FINAL_TEXT[wordIndexRef.current]);
        }, 2500);
      }
    };

    shuffleWord(FINAL_TEXT[wordIndexRef.current]);

    return () => {
      intervalsRef.current.forEach((interval) => clearInterval(interval));
      revealTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [FINAL_TEXT]);

  return <span>{title}</span>;
};
