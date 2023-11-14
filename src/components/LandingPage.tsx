import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { ForwardArrow, MouseIcon } from "./Icons";

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
    }, 100);

    // Schedule each character to stop shuffling at a staggered time
    indexesToShuffle.forEach((index, i) => {
      setTimeout(
        () => {
          state.title[index] = FINAL_TITLE[index].toUpperCase(); // Set the individual character to its final value
        },
        i * 100 + 1200,
      ); // i * 100 ensures each character is revealed one after another
    });

    // Return a cleanup function
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <section class="flex h-full w-full flex-col items-center justify-center px-4 sm:px-2 md:px-0">
        <div class="flex flex-col items-start">
          <div class="flex items-center">
            <h2 class="pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
              {state.title.join("")}
            </h2>
          </div>
          <div class="flex items-center justify-center">
            <h1 class="md:text-7 lg:text-7 text-7xl sm:text-7xl xl:text-8xl">
              Software
            </h1>
            <div class="line"></div>
          </div>
          <div class="flex items-center justify-center">
            <ForwardArrow />
            <h1 class="pl-4 text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl">
              Engineer
            </h1>
          </div>
        </div>
      </section>
      <div class="fixed bottom-0 left-0 right-0 m-0 flex w-full animate-bounce items-center justify-center p-0">
        <MouseIcon />
      </div>
    </div>
  );
});
