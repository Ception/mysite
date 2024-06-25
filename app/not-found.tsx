import Link from "next/link";
import { ChangingText } from "./_components/utils/ChangingText";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center relative px-4 md:px-[70px]">
      <div className="h-1/2 w-full max-w-screen-md flex flex-col justify-center items-center">
        <div className="self-center mr-64">
          <span className="text-xl md:text-2xl text-cyan-500">404</span>
        </div>
        <div className="self-center">
          <span className="text-4xl md:text-6xl">
            <ChangingText text="Not Found!" />
          </span>
        </div>
        <div className="self-center ml-52">
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
