import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

interface ChangingTextProps {
  text: string;
}

export const ChangingText = component$((props: ChangingTextProps) => {
  const FINAL_TEXT: string = props.text;
  const characters: string =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  const state = useStore<{ title: string[] }>({
    title: new Array(FINAL_TEXT.length).fill(""), // Initial state
  });

  useVisibleTask$(() => {
    const indexesToShuffle: number[] = [...Array(FINAL_TEXT.length).keys()];

    const shuffleCharacter = (index: number) => {
      state.title[index] = characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    };

    const intervalId: NodeJS.Timeout = setInterval(() => {
      if (indexesToShuffle.length > 0) {
        const index: number | undefined = indexesToShuffle.shift(); // Get the next index to shuffle
        if (index !== undefined) {
          shuffleCharacter(index);
        }
      } else {
        clearInterval(intervalId);
      }
    }, 60);

    // Schedule each character to stop shuffling at a staggered time
    indexesToShuffle.forEach((index, i) => {
      setTimeout(
        () => {
          state.title[index] = FINAL_TEXT[index].toUpperCase(); // Set the individual character to its final value
        },
        i * 100 + 1000,
      ); // i * 100 ensures each character is revealed one after another
    });

    // Return a cleanup function
    return () => clearInterval(intervalId);
  });

  return <span>{state.title.join("")}</span>;
});

interface ScramblePhrasesProps {
  text: string[];
}

export const ScramblePhrases = component$((props: ScramblePhrasesProps) => {
  const FINAL_TEXT: string[] = props.text;
  const characters: string = "01";
  const state = useStore<{ title: string }>({
    title: "", // Initial state
  });

  useVisibleTask$(() => {
    let wordIndex = 0;
    const intervals: NodeJS.Timeout[] = [];
    const revealTimeouts: NodeJS.Timeout[] = [];

    const shuffleCharacter = (index: number) => {
      state.title =
        state.title.substring(0, index) +
        characters.charAt(Math.floor(Math.random() * characters.length)) +
        state.title.substring(index + 1);
    };

    const revealCharacter = (index: number, word: string) => {
      state.title =
        state.title.substring(0, index) +
        word.charAt(index) +
        state.title.substring(index + 1);
    };

    const shuffleWord = (word: string) => {
      state.title = new Array(word.length + 1).join(" ");
      for (let i = 0; i < word.length; i++) {
        startShuffling(i, word);
      }
    };

    const startShuffling = (index: number, word: string) => {
      intervals[index] = setInterval(() => {
        shuffleCharacter(index);
      }, 100);

      revealTimeouts[index] = setTimeout(
        () => {
          stopShuffling(index, word);
        },
        1500 + index * 100,
      ); // Staggered reveal for smoothness
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

    // Return a cleanup function
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
      revealTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  });

  return <span>{state.title}</span>;
});
