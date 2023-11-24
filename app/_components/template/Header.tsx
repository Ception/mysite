import Link from "next/link";
import { LOGO, THEME_TOGGLE } from "../utils/SvgIcons";

export default function Header() {
  return (
    <div className="absolute w-full px-8 top-0 pt-8 z-10">
      <div className="flex justify-between">
        <Link href="/">
          <LOGO />
        </Link>
        <div className="cursor-pointer">
          <THEME_TOGGLE />
        </div>
      </div>
    </div>
  );
}
