import Link from "next/link";
import { LOGO, THEME_TOGGLE } from "../utils/Icons";

export default function Header() {
  return (
    <div className="absolute w-full px-6 top-0 pt-8 z-10">
      <div className="flex justify-between">
        <Link href="/">
          <LOGO size={42} />
        </Link>
        {/* <div className="cursor-pointer">
          <THEME_TOGGLE size={32} />
        </div> */}
      </div>
    </div>
  );
}
