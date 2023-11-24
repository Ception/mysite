import Link from "next/link";
import { ChangingText } from "./_components/utils/ChangingText";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-center">
        <div className="self-center pr-32">
          <span className="text-xl text-cyan-500">404</span>
        </div>
        <div className="self-center">
          <span className="text-4xl">
            <ChangingText text="Not Found" />
          </span>
        </div>
        <div className="self-end pr-[7.5rem]">
          <span className="text-2xl text-cyan-500">
            <Link href="/">
              <span className="text-xl text-cyan-500">GO BACK</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
