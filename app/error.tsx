"use client";

import Link from "next/link";
import { ChangingText } from "./_components/ChangingText";

export default function Error() {
  return (
    <div className="h-screen flex items-center self-center justify-center">
      <div className="flex flex-col items-start w-[37.5rem] leading-tight">
        <div className="self-start pl-[9.1rem]">
          <span className="text-lg text-cyan-500">Whoops</span>
        </div>
        <div className="self-center h-16">
          <span className="text-2xl">
            <ChangingText text="Something went wrong!" />
          </span>
        </div>
        <div className="self-end pr-[9.1rem]">
          <Link href="/" className="text-xl text-cyan-500">
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
}
