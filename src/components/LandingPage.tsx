import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export const LandingPage = component$(() => {
  const FINAL_TITLE: string = "Aleks Manov";
  const characters: string = "アレックスマノ.フ ソフトウェアエンジア"; // aleks manov software engineer
  const state = useStore<{ title: string[] }>({
    title: new Array(FINAL_TITLE.length).fill(" "), // Initial state with spaces
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
        i * 100 + 1200,
      ); // i * 100 ensures each character is revealed one after another
    });

    // Return a cleanup function
    return () => clearInterval(intervalId);
  });

  return (
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center space-x-4">
        <h1 class="text-3xl leading-tight md:text-5xl">
          {state.title.join("")}
        </h1>
      </div>
    </div>
  );
});
