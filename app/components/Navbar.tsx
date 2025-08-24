"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-nord-0/95 backdrop-blur-xl border-nord-3/30"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-gradient relative group"
          >
            ALEKS
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-primary"
                  : "text-nord-4 hover:text-primary"
              }`}
            >
              <span>Home</span>
              {isActive("/") && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              )}
            </Link>

            <Link
              href="/projects"
              prefetch={false}
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                isActive("/projects")
                  ? "text-secondary"
                  : "text-nord-4 hover:text-secondary"
              }`}
            >
              <span>Projects</span>
              {isActive("/projects") && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
              )}
            </Link>

            <Link
              href="/contact"
              prefetch={false}
              className={`modern-btn primary text-sm ${
                isActive("/contact") ? "bg-success text-nord-0" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 modern-card mt-4 p-6">
            <Link
              href="/"
              className={`block font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-primary"
                  : "text-nord-4 hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/projects"
              className={`block font-medium transition-all duration-300 ${
                isActive("/projects")
                  ? "text-secondary"
                  : "text-nord-4 hover:text-secondary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className={`block modern-btn primary text-center ${
                isActive("/contact") ? "bg-success text-nord-0" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
