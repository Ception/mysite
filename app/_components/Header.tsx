import Link from "next/link";
import { MyLogo, ToggleThemeIcon } from "./SvgIcons";

export default function Header() {
  return (
    <div className="fixed w-full px-8 top-0 pt-8 z-10">
      <div className="flex justify-between">
        <Link href="/">
          <MyLogo />
        </Link>
        <div className="cursor-pointer">
          <ToggleThemeIcon />
        </div>
      </div>
    </div>
  );
}
