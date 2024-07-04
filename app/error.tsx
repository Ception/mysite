"use client";

import Link from "next/link";
import { ChangingText } from "./_components/utils/ChangingText";

export default function Error() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative px-4 md:px-[70px]">
      <div className="h-1/2 w-full max-w-screen-md flex flex-col justify-center items-center">
        <div className="self-center pr-16">
          <span className="text-2xl text-cyan-500">Whoops</span>
        </div>
        <div className="self-center overflow-hidden">
          <span className="text-6xl whitespace-nowrap">
            <ChangingText text="Error!" />
          </span>
        </div>
        <div className="self-center pl-12 md:pl-16">
          <span className="text-2xl text-cyan-500">
            <Link href="/">
              <span className="text-2xl text-cyan-500">GO BACK</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
