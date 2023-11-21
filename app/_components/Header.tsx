import Link from "next/link";
import { MyLogo, ToggleThemeIcon } from "./SvgIcons";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <MyLogo />
      </Link>
      <div className="cursor-pointer">
        <ToggleThemeIcon />
      </div>
    </div>
  );
}
