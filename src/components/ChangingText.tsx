import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

interface ChangingTextProps {
  finalText: string;
}

export const ChangingText = component$((props: ChangingTextProps) => {
  const FINAL_TEXT: string = props.finalText;
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
    }, 100);

    // Schedule each character to stop shuffling at a staggered time
    indexesToShuffle.forEach((index, i) => {
      setTimeout(
        () => {
          state.title[index] = FINAL_TEXT[index].toUpperCase(); // Set the individual character to its final value
        },
        i * 100 + 1200,
      ); // i * 100 ensures each character is revealed one after another
    });

    // Return a cleanup function
    return () => clearInterval(intervalId);
  });

  return <div>{state.title.join("")}</div>;
});
