import { component$ } from "@builder.io/qwik";
import { ForwardArrow, MouseIcon } from "./Icons";
import { ChangingText } from "./ChangingText";

export const LandingPage = component$(() => {
  const PREFIX: string = "Software";

  return (
    <div>
      <section class="flex h-full w-full flex-col items-center justify-center px-4 sm:px-2 md:px-0">
        <div class="flex flex-col items-start">
          <div class="flex items-center">
            <h2 class="pb-4 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl">
              <ChangingText finalText="Aleks Manov" />
            </h2>
          </div>
          <div class="flex items-center justify-center">
            <h1 class="md:text-7 lg:text-7 text-7xl sm:text-7xl xl:text-8xl">
              {PREFIX}
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
