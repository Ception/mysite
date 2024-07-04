import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EnhancedImageSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hidden md:flex md:w-1/2 h-full items-center justify-center relative overflow-hidden">
      <h4 className="text-white text-2xl absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap font-light z-10">
        オタク {"{noun}"} [coll.] nerd (also: enthusiast, geek)
      </h4>
      <span className="text-white text-8xl absolute top-40 right-40 transform translate-x-1/2 -translate-y-full rotate-45 whitespace-nowrap font-bold z-10">
        オタク!
      </span>
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          rotate: isHovered ? [0, -5, 5, -5, 5, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/me.png"
          alt="Picture of me"
          width={390}
          height={690}
          className="rounded-lg shadow-lg transition-all duration-300"
          style={{
            filter: isHovered ? "brightness(100%)" : "brightness(65%)",
          }}
          priority={true}
          quality={80}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 mix-blend-overlay rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          transition={{ duration: 0.3 }}
        />
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white text-xl font-bold text-center px-4">
              Tech enthusiast, code craftsman, and lifelong learner
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default EnhancedImageSection;
