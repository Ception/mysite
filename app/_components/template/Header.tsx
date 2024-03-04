import Link from "next/link";
import { LOGO, THEME_TOGGLE } from "../utils/Icons";

export default function Header() {
  return (
    <div className="fixed top-0 z-10 w-full px-6 pt-8">
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
