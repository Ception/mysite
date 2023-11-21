import Link from "next/link";
import { ChangingText } from "./_components/ChangingText";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-[-0.5rem]">
      <div className="self-start">
        <span className="text-2xl">404</span>
      </div>
      <div className="h-16 w-[350px] whitespace-nowrap overflow-visible">
        <span className="text-6xl">
          <ChangingText text="NOT FOUND!" />
        </span>
      </div>
      <div className="self-end">
        <span className="text-xl text-sky-500">
          <Link href="/">GO BACK</Link>
        </span>
      </div>
    </div>
  );
}
