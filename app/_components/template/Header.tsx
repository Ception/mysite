"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LOGO, MENU } from "../utils/Icons";
import { Github, Linkedin, Facebook, Twitter } from "lucide-react";
import Navbar from "./Navbar";

const SocialLinks = ({ isMobile = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { Icon: Twitter, url: "https://x.com/aleksmanov", color: "#1DA1F2" },
    {
      Icon: Facebook,
      url: "https://www.facebook.com/thataleksguy",
      color: "#4267B2",
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/aleksmanov/",
      color: "#0077B5",
    },
    { Icon: Github, url: "https://github.com/Ception", color: "#333" },
  ];

  return (
    <div
      className={`relative ${
        isMobile ? "w-full flex justify-center mt-8" : ""
      }`}
      onMouseEnter={() => !isMobile && setIsExpanded(true)}
      onMouseLeave={() => !isMobile && setIsExpanded(false)}
    >
      {!isMobile && (
        <motion.div
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          @
        </motion.div>
      )}
      <AnimatePresence>
        {(isExpanded || isMobile) && (
          <motion.div
            initial={
              isMobile ? { opacity: 0, y: 20 } : { opacity: 0, width: 0 }
            }
            animate={
              isMobile ? { opacity: 1, y: 0 } : { opacity: 1, width: "auto" }
            }
            exit={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, width: 0 }}
            className={`${
              isMobile
                ? "flex space-x-4"
                : "absolute top-0 right-12 flex space-x-2"
            }`}
          >
            {socialLinks.map(({ Icon, url, color }) => (
              <motion.a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <Icon size={20} color="white" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 z-50 w-full pt-8 md:pt-16 px-10 md:px-[70px] flex justify-between items-center bg-transparent">
        <Link href="/" className="h-9 w-9 md:h-12 md:w-12">
          <LOGO className="fill-current text-white" />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="block md:hidden"
          >
            <MENU className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center md:hidden"
          >
            <button
              onClick={() => setIsNavOpen(false)}
              className="absolute top-8 right-10 text-white text-2xl"
            >
              &times;
            </button>
            <Navbar setIsNavOpen={setIsNavOpen} isMobile />
            <SocialLinks isMobile />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className="hidden md:block mx-auto">
        <Navbar setIsNavOpen={setIsNavOpen} />
      </div>
    </>
  );
}
