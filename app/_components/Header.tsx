import Link from "next/link";
import { MyLogo, ToggleThemeIcon } from "./SvgIcons";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0">
      <div className="w-4/5 mx-auto flex items-center justify-between pt-8">
        <Link href="/">
          <MyLogo />
        </Link>
        <div className="cursor-pointer">
          <ToggleThemeIcon />
        </div>
      </div>
    </header>
  );
}
