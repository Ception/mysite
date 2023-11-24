import Link from "next/link";
import { ChangingText } from "./_components/ChangingText";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-center">
        <div className="self-center pr-72">
          <span className="text-2xl text-cyan-500">404</span>
        </div>
        <div className="self-center">
          <span className="text-6xl">
            <ChangingText text="Not Found" />
          </span>
        </div>
        <div className="self-center pl-56">
          <span className="text-2xl text-cyan-500">
            <Link href="/">
              <div className="self-center">
                <span className="text-xl text-cyan-500">GO BACK</span>
              </div>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
