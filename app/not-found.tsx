import Link from "next/link";
import { ChangingText } from "./_components/ChangingText";

export default function NotFound() {
  return (
    <div className="flex justify-center">
      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="absolute -top-6 left-0 text-xl h-10">404</span>
          <div className="w-96">
            <span className="text-4xl">
              <ChangingText text="NOT FOUND" />
            </span>
          </div>
          <span className="absolute -bottom-6 right-0 text-xl text-cyan-500">
            <Link href="/">GO BACK</Link>
          </span>
        </div>
      </section>
    </div>
  );
}
