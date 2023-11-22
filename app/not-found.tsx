import Link from "next/link";
import { ChangingText } from "./_components/ChangingText";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center self-center justify-center">
      <div className="flex flex-col items-start w-[37.5rem] leading-tight">
        <div className="self-start pl-[7.8rem]">
          <span className="text-xl text-cyan-500">404</span>
        </div>
        <div className="self-center h-16">
          <span className="text-6xl">
            <ChangingText text="NOT FOUND!" />
          </span>
        </div>
        <div className="self-end pr-[7.8rem]">
          <Link href="/" className="text-xl text-cyan-500">
            GO BACK
          </Link>
        </div>
      </div>
    </div>
  );
}
