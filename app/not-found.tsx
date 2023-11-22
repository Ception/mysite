import Link from "next/link";
import { ChangingText } from "./_components/ChangingText";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen">
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-start">
          <div className="flex justify-center">
            <span className="text-xl text-cyan-500">404</span>
          </div>
          <div className="flex justify-center">
            <span className="text-6xl">
              {/* <ChangingText text="NOT FOUND!" /> */}
              NOT FOUND
            </span>
          </div>
          <div className="flex justify-end w-full">
            <Link href="/" className="text-xl text-cyan-500">
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
