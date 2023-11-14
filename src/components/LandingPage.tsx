import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { ForwardArrow } from "./Icons";

export const LandingPage = component$(() => {
  const FINAL_TITLE: string = "Aleks Manov";
  const characters: string =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
  const state = useStore<{ title: string[] }>({
    title: new Array(FINAL_TITLE.length).fill(""), // Initial state
  });

  useVisibleTask$(() => {
    const indexesToShuffle: number[] = [...Array(FINAL_TITLE.length).keys()];

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
    }, 40);

    // Schedule each character to stop shuffling at a staggered time
    indexesToShuffle.forEach((index, i) => {
      setTimeout(
        () => {
          state.title[index] = FINAL_TITLE[index]; // Set the individual character to its final value
        },
        i * 100 + 1000,
      ); // i * 100 ensures each character is revealed one after another
    });

    // Return a cleanup function
    return () => clearInterval(intervalId);
  });

  return (
    <div class="flex h-full w-full flex-col items-center justify-center">
      <div class="flex flex-col items-start">
        <div class="flex items-center">
          <h2 class="pb-4 text-xl">{state.title.join("")}</h2>
        </div>
        <div class="flex items-center justify-center">
          <h1 class="text-6xl">Software</h1>
          <div class="line"></div>
        </div>
        <div class="flex items-center justify-center">
          <ForwardArrow />
          <h1 class="pl-4 text-6xl">Engineer</h1>
        </div>
      </div>
    </div>
  );
});
