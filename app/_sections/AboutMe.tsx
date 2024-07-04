"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SendMailButton } from "../_components/ui/CustomButton";
import Link from "next/link";

const categories = ["Skills", "Experience", "Passions"] as const;
type Category = (typeof categories)[number];

interface ContentType {
  [key: string]: string[];
}

const content: ContentType = {
  Skills: [
    "Full-stack development",
    "React & Next.js",
    "Node.js & Express",
    "Database management",
    "UI/UX design",
  ],
  Experience: [
    "5+ years in web development",
    "Led multiple successful projects",
    "Mentored junior developers",
    "Contributed to open-source",
  ],
  Passions: [
    "Creating intuitive interfaces",
    "Solving complex challenges",
    "Continuous learning",
    "Building impactful applications",
  ],
};

export default function AboutMe() {
  const [activeCategory, setActiveCategory] = useState<Category>("Skills");

  const myAge = (): number => {
    const birthDate = new Date(1991, 3, 28);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row relative justify-center items-center bg-[#21282a] text-white"
      id="about-me"
    >
      <div className="w-full md:w-1/2 p-8 md:p-16 pt-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Hello World!</h2>
        <p className="mb-4 text-gray-300">
          I&apos;m Aleks, a {myAge()}-year-old tech enthusiast who fell in love
          with technology at the age of 12. For me, technology is not just a
          career; it&apos;s a calling that I&apos;ve been passionately pursuing.
        </p>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-500">
            What I Do
          </h3>
          <div className="flex mb-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`mr-4 px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? "bg-cyan-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="list-disc list-inside text-gray-300"
          >
            {content[activeCategory].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <Link href="/contact">
          <SendMailButton
            text="Get in touch"
            icon="SEND_MAIL"
            iconSize={24}
            buttonSize="md"
          />
        </Link>
      </div>
      <div className="hidden md:flex md:w-1/2 h-full items-center justify-center relative">
        <h4 className="text-white text-2xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-light">
          オタク {"{noun}"} [coll.] nerd (also: enthusiast, geek)
        </h4>
        <span className="text-white text-8xl absolute top-40 right-40 transform translate-x-1/2 -translate-y-full rotate-45 whitespace-nowrap font-bold">
          オタク!
        </span>
        <Image
          src="/me.png"
          alt="Picture of me"
          width={390}
          height={690}
          className="rounded-lg shadow-lg opacity-35 hover:opacity-75 transition-opacity duration-300"
          priority={true}
          quality={80}
        />
      </div>
    </div>
  );
}
