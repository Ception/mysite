"use client";

import { useState } from "react";
import Link from "next/link";
import { LOGO, MENU } from "../utils/Icons";
import Navbar from "./Navbar";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 z-50 w-full pt-8 md:pt-16 px-10 md:px-[70px] flex justify-between items-center bg-transparent">
        <Link href="/" className="h-9 w-9 md:h-12 md:w-12">
          <LOGO className="fill-current text-white" />
        </Link>
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="block md:hidden"
        >
          <MENU className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 md:hidden bg-black bg-opacity-85 transform transition-transform duration-500 ease-in-out ${
          isNavOpen ? "flex justify-center items-center z-10" : "hidden"
        }`}
      >
        <Navbar setIsNavOpen={setIsNavOpen} />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block mx-auto">
        <Navbar setIsNavOpen={setIsNavOpen} />
      </div>
    </>
  );
}
