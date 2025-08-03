"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Settings, Cloud, Smartphone } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "cloud" | "mobile";
  color: string;
}

const skills: Skill[] = [
  { name: "React/Next.js", level: 95, category: "frontend", color: "primary" },
  { name: "TypeScript", level: 90, category: "frontend", color: "primary" },
  { name: "Tailwind CSS", level: 85, category: "frontend", color: "primary" },
  { name: "Node.js", level: 90, category: "backend", color: "secondary" },
  { name: "PostgreSQL", level: 85, category: "backend", color: "secondary" },
  { name: "Redis", level: 80, category: "backend", color: "secondary" },
  { name: "AWS", level: 88, category: "cloud", color: "accent" },
  { name: "Docker", level: 85, category: "cloud", color: "accent" },
  { name: "Kubernetes", level: 75, category: "cloud", color: "accent" },
  { name: "React Native", level: 80, category: "mobile", color: "success" },
  { name: "Expo", level: 85, category: "mobile", color: "success" },
];

const categories = {
  frontend: { name: "Frontend", icon: Palette },
  backend: { name: "Backend", icon: Settings },
  cloud: { name: "Cloud", icon: Cloud },
  mobile: { name: "Mobile", icon: Smartphone },
};

export default function InteractiveSkillChart() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary",
          text: "text-primary",
          border: "border-primary",
          gradient: "from-primary to-primary/60",
        };
      case "secondary":
        return {
          bg: "bg-secondary",
          text: "text-secondary",
          border: "border-secondary",
          gradient: "from-secondary to-secondary/60",
        };
      case "accent":
        return {
          bg: "bg-accent",
          text: "text-accent",
          border: "border-accent",
          gradient: "from-accent to-accent/60",
        };
      case "success":
        return {
          bg: "bg-success",
          text: "text-success",
          border: "border-success",
          gradient: "from-success to-success/60",
        };
      default:
        return {
          bg: "bg-primary",
          text: "text-primary",
          border: "border-primary",
          gradient: "from-primary to-primary/60",
        };
    }
  };

  return (
    <div
      ref={containerRef}
      className="modern-card p-8 relative overflow-hidden group"
    >
      {/* Mouse follower effect */}
      <motion.div
        className="absolute pointer-events-none w-32 h-32 rounded-full opacity-5 blur-xl"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-8 text-center">
          Interactive Skills Overview
        </h3>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`modern-btn text-sm px-6 py-3 ${
              !selectedCategory ? "primary" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`modern-btn text-sm px-6 py-3 flex items-center gap-2 ${
                  selectedCategory === key ? "primary" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const colors = getColorClasses(skill.color);
            const isHovered = hoveredSkill === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group/skill"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div
                  className={`p-6 rounded-xl border transition-all duration-300 ${
                    isHovered
                      ? `${colors.border}/40 bg-${skill.color}/10`
                      : "border-border-subtle bg-background-elevated"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4
                      className={`font-semibold transition-colors duration-300 ${
                        isHovered ? colors.text : "text-foreground"
                      }`}
                    >
                      {skill.name}
                    </h4>
                    <motion.span
                      className={`text-sm font-bold ${colors.text}`}
                      animate={{ scale: isHovered ? 1.2 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative">
                    <div className="h-2 bg-border-subtle rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Skill level indicator */}
                    <motion.div
                      className={`absolute top-0 w-3 h-3 ${colors.bg} rounded-full transform -translate-y-0.5 shadow-lg`}
                      initial={{ left: 0 }}
                      whileInView={{ left: `calc(${skill.level}% - 6px)` }}
                      viewport={{ once: true }}
                      animate={{
                        left: `calc(${skill.level}% - 6px)`,
                        scale: isHovered ? 1.5 : 1,
                        boxShadow: isHovered
                          ? `0 0 20px var(--${skill.color})`
                          : "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                      transition={{
                        left: {
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        },
                        scale: { duration: 0.2 },
                        boxShadow: { duration: 0.2 },
                      }}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="mt-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${colors.text} ${colors.border}/20 bg-${skill.color}/10 flex items-center gap-1 w-fit`}
                    >
                      {(() => {
                        const IconComponent = categories[skill.category].icon;
                        return <IconComponent className="w-3 h-3" />;
                      })()}
                      {categories[skill.category].name}
                    </span>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl border-2 ${colors.border} opacity-0 pointer-events-none`}
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                {/* Floating level indicator on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 ${colors.bg} text-nord-0 rounded-lg font-bold text-sm shadow-lg z-20`}
                  >
                    {skill.level}% Proficiency
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-current`}
                      style={{ color: `var(--${skill.color})` }}
                    />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {Object.entries(categories).map(([key, category]) => {
            const categorySkills = skills.filter(
              (skill) => skill.category === key
            );
            const avgLevel = Math.round(
              categorySkills.reduce((acc, skill) => acc + skill.level, 0) /
                categorySkills.length
            );
            const IconComponent = category.icon;

            return (
              <div
                key={key}
                className="text-center p-4 rounded-xl bg-background-elevated hover:bg-background-card transition-colors duration-300"
              >
                <div className="flex items-center justify-center mb-2">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted">{category.name}</div>
                <div className="text-xl font-bold text-primary">
                  {avgLevel}%
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Add spacing below the component */}
      <div className="h-16"></div>
    </div>
  );
}
