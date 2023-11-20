"use client";

import React, { useState, useEffect } from "react";

interface ChangingTextProps {
  text: string;
}

export const ChangingText = ({ text }: ChangingTextProps) => {
  const FINAL_TEXT = text;
  const characters =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  const [title, setTitle] = useState(new Array(FINAL_TEXT.length).fill(""));

  useEffect(() => {
    const indexesToShuffle = Array.from(Array(FINAL_TEXT.length).keys());
    let intervalId: NodeJS.Timeout;

    const shuffleCharacter = (index: number) => {
      setTitle((prevTitle) => {
        const newTitle = [...prevTitle];
        newTitle[index] = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        return newTitle;
      });
    };

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
      setTimeout(() => {
        setTitle((prevTitle) => {
          const newTitle = [...prevTitle];
          newTitle[index] = FINAL_TEXT[index].toUpperCase();
          return newTitle;
        });
      }, i * 100 + 1000);
    });

    return () => clearInterval(intervalId);
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

  useEffect(() => {
    let wordIndex = 0;
    const intervals: number[] = [];
    const revealTimeouts: number[] = [];

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
      for (let i = 0; i < word.length; i++) {
        startShuffling(i, word);
      }
    };

    const startShuffling = (index: number, word: string) => {
      intervals[index] = window.setInterval(() => {
        shuffleCharacter(index, word);
      }, 100);

      revealTimeouts[index] = window.setTimeout(() => {
        stopShuffling(index, word);
      }, 1500 + index * 100);
    };

    const stopShuffling = (index: number, word: string) => {
      clearInterval(intervals[index]);
      revealCharacter(index, word);
      if (index === word.length - 1) {
        setTimeout(() => {
          wordIndex = (wordIndex + 1) % FINAL_TEXT.length;
          shuffleWord(FINAL_TEXT[wordIndex]);
        }, 2500);
      }
    };

    shuffleWord(FINAL_TEXT[wordIndex]);

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
      revealTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [FINAL_TEXT]);

  return <span>{title}</span>;
};
