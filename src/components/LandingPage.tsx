import { component$ } from "@builder.io/qwik";
import { ForwardArrow, MouseIcon } from "./Icons";
import { ChangingText, ScramblePhrases } from "./ChangingText";

export const LandingPage = component$(() => {
  // const isScrambleTextOn = useSignal(false);
  const MY_NAME: string = "Aleks Manov";
  const PREFIX: string = "Software";
  const SUFFIX_PHRASES: string[] = [
    "Builder",
    "Creator",
    "Advocate",
    "Engineer",
    "Enthusiast",
  ];

  return (
    <div>
      <section class="flex h-full w-full flex-col items-center justify-center px-4">
        <div class="flex flex-col items-start">
          <div class="flex h-8 items-center">
            <span class="overflow-hidden text-xl sm:text-xl md:text-xl lg:text-2xl">
              <ChangingText text={MY_NAME} />
            </span>
          </div>
          <div class="my-4 flex items-center justify-center">
            <span class="overflow-hidden text-8xl sm:text-8xl md:text-8xl lg:text-9xl">
              {PREFIX}
            </span>
            <div class="line"></div>
          </div>
          <div class="flex h-8 items-center justify-center sm:h-14 md:h-14 lg:h-14">
            <div class="flex h-16 items-center justify-center">
              <ForwardArrow />
            </div>
            <span class="flex h-20 w-64 items-center text-8xl sm:text-8xl md:text-8xl lg:text-9xl">
              <ScramblePhrases text={SUFFIX_PHRASES} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
});
