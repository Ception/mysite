"use client";

import Link from "next/link";
import { ChangingText } from "./_components/utils/ChangingText";

export default function Error() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative px-4 md:px-[70px]">
      <div className="h-1/2 w-full max-w-screen-md flex flex-col justify-center items-center">
        <div className="self-center pr-16">
          <span className="text-xl md:text-2xl text-cyan-500">Whoops</span>
        </div>
        <div className="self-center">
          <span className="text-4xl md:text-6xl">
            <ChangingText text="Error!" />
          </span>
        </div>
        <div className="self-center pl-4 md:pl-16">
          <span className="text-lg md:text-2xl text-cyan-500">
            <Link href="/">
              <span className="text-xl text-cyan-500">GO BACK</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
