"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import TypingAnimation from "./TypingAnimation";
import { projectPreviews } from "../data/projects";
import {
  Plus,
  ArrowRight,
  Palette,
  Settings,
  Cloud,
  Smartphone,
  Lightbulb,
  Users,
  Target,
  Rocket,
} from "lucide-react";

// Dynamic imports for performance optimization
const InteractiveSkillChart = dynamic(() => import("./InteractiveSkillChart"), {
  loading: () => (
    <div className="h-40 animate-pulse bg-background-elevated rounded-lg" />
  ),
  ssr: false,
});

const ClientOnlyParticleSystem = dynamic(
  () => import("./ClientOnlyParticleSystem"),
  {
    ssr: false,
  }
);

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    "Full Stack Developer",
    "Cloud Architecture Expert",
    "Innovation Engineer",
    "Digital Solutions Architect",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      icon: Palette,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "primary",
    },
    {
      title: "Backend",
      icon: Settings,
      techs: ["Node.js", "Express.js", "PostgreSQL", "Redis", "GraphQL"],
      color: "secondary",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      techs: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      color: "accent",
    },
    {
      title: "Mobile & Tools",
      icon: Smartphone,
      techs: ["React Native", "Expo", "Git", "Linux", "Monitoring"],
      color: "success",
    },
  ];

  return (
    <div className="min-h-screen">
      <ClientOnlyParticleSystem />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="text-gradient block relative">
                ALEKS
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
              </span>
              <span className="text-foreground block mt-4">MANOV</span>
            </motion.h1>

            <motion.div
              className="h-20 flex items-center justify-center mb-8 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="modern-card px-8 py-4 bg-gradient-to-r from-background-elevated to-background-card border border-primary/20">
                <TypingAnimation
                  texts={skills}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium"
                  speed={80}
                  deleteSpeed={40}
                  delayBetweenTexts={2500}
                />
              </div>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-xl md:text-2xl text-muted leading-relaxed mb-6">
                Crafting exceptional digital experiences through innovative
                technology, scalable architecture, and meticulous attention to
                detail.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  5+ Years Experience
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  50+ Projects Delivered
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Full Stack Expertise
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link
              href="/projects"
              className="modern-btn primary text-lg px-10 py-5 group flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="modern-btn accent text-lg px-10 py-5 group flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span>Get In Touch</span>
            </Link>
          </motion.div>

          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 + i * 0.1 }}
              className={`absolute w-2 h-2 rounded-full pulse-subtle ${
                i % 4 === 0
                  ? "bg-primary"
                  : i % 4 === 1
                  ? "bg-secondary"
                  : i % 4 === 2
                  ? "bg-accent"
                  : "bg-success"
              }`}
              style={{
                left: `${5 + i * 8}%`,
                top: `${15 + (i % 5) * 15}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">My Journey</span>
            </h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              From curious problem-solver to full-stack architect - every line
              of code tells a story of passion, growth, and innovation
            </p>
          </motion.div>

          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-visible">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 2, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
                ></motion.div>

                <div className="space-y-20 px-4">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center justify-center"
                  >
                    <div className="w-full max-w-md lg:mr-16 px-2 mb-4 lg:mb-0">
                      <div className="modern-card p-6 lg:p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary">
                          <div className="absolute inset-0 bg-white/30 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Settings className="w-7 h-7 text-nord-0" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-primary">
                              Code Philosophy
                            </h4>
                            <div className="text-sm text-muted">
                              The Foundation
                            </div>
                          </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">
                          &quot;Clean code is not written by following a set of
                          rules. Clean code is written by developers who care
                          about their craft and their fellow humans.&quot;
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {["Clean Code", "Empathy", "Craftsmanship"].map(
                            (tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.6 + i * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                              >
                                {tag}
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex-shrink-0 my-4 lg:my-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg"
                      ></motion.div>
                      <div className="absolute inset-0 w-6 h-6 bg-primary rounded-full animate-ping opacity-25"></div>
                    </div>

                    <div className="hidden lg:block w-full max-w-md ml-8 lg:ml-16 opacity-0"></div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center justify-center"
                  >
                    <div className="hidden lg:block w-full max-w-md mr-8 lg:mr-16 opacity-0"></div>

                    <div className="relative z-10 flex-shrink-0 my-4 lg:my-0 order-1 lg:order-2">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full border-4 border-background shadow-lg"
                      ></motion.div>
                      <div className="absolute inset-0 w-6 h-6 bg-secondary rounded-full animate-ping opacity-25"></div>
                    </div>

                    <div className="w-full max-w-md lg:ml-16 px-2 mb-4 lg:mb-0 order-2 lg:order-3">
                      <div className="modern-card p-6 lg:p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent">
                          <div className="absolute inset-0 bg-white/30 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Cloud className="w-7 h-7 text-nord-0" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-secondary">
                              Innovation Mindset
                            </h4>
                            <div className="text-sm text-muted">
                              The Evolution
                            </div>
                          </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">
                          &quot;Technology is best when it brings people
                          together. I build solutions that don&apos;t just work
                          - they inspire and empower users to achieve
                          more.&quot;
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {["User-Centric", "Scalable", "Future-Ready"].map(
                            (tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.4 + i * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="text-xs px-3 py-1 bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                              >
                                {tag}
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row items-center justify-center"
                  >
                    <div className="w-full max-w-md lg:mr-16 px-2 mb-4 lg:mb-0">
                      <div className="modern-card p-6 lg:p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-warning">
                          <div className="absolute inset-0 bg-white/30 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <Plus className="w-7 h-7 text-nord-0" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-accent">
                              Real Impact
                            </h4>
                            <div className="text-sm text-muted">
                              The Mission
                            </div>
                          </div>
                        </div>

                        <p className="text-muted leading-relaxed mb-4">
                          &quot;Code is my paintbrush, servers are my canvas.
                          Every project is an opportunity to create something
                          that matters and makes a difference.&quot;
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {[
                            "Problem Solver",
                            "Team Player",
                            "Impact Driven",
                          ].map((tag, i) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5 + i * 0.1,
                              }}
                              viewport={{ once: true }}
                              className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex-shrink-0 my-4 lg:my-0">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="w-6 h-6 bg-gradient-to-br from-accent to-warning rounded-full border-4 border-background shadow-lg"
                      ></motion.div>
                      <div className="absolute inset-0 w-6 h-6 bg-accent rounded-full animate-ping opacity-25"></div>
                    </div>

                    <div className="hidden lg:block w-full max-w-md ml-8 lg:ml-16 opacity-0"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="modern-card p-0 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-12 gap-4 h-full p-8">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.02 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-br from-primary to-secondary rounded-sm"
                    ></motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 p-6 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                  <div className="text-center lg:text-left">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="w-32 h-32 mx-auto lg:mx-0 mb-8 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center relative group-hover:rotate-3 transition-transform duration-500"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-nord-0 to-nord-1 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-gradient">
                          AM
                        </span>
                      </div>

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0"
                      >
                        <div className="absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full opacity-60"></div>
                        <div className="absolute top-1/2 -right-2 w-3 h-3 bg-secondary rounded-full opacity-40"></div>
                        <div className="absolute -bottom-2 left-1/2 w-2 h-2 bg-accent rounded-full opacity-50"></div>
                        <div className="absolute top-1/2 -left-2 w-3 h-3 bg-warning rounded-full opacity-30"></div>
                      </motion.div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gradient mb-2">
                      Aleks Manov
                    </h3>
                    <p className="text-lg text-muted mb-6">
                      Full Stack Architect & Digital Craftsman
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted">
                          Available for collaboration
                        </span>
                      </div>
                      <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted">
                          Based in the Digital Realm
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-center text-gradient">
                      Core Values
                    </h4>

                    {[
                      {
                        icon: Lightbulb,
                        title: "Innovation First",
                        desc: "Always pushing boundaries",
                        color: "primary",
                      },
                      {
                        icon: Users,
                        title: "Collaboration",
                        desc: "Better together than apart",
                        color: "secondary",
                      },
                      {
                        icon: Target,
                        title: "Purpose Driven",
                        desc: "Every line has meaning",
                        color: "accent",
                      },
                      {
                        icon: Rocket,
                        title: "Growth Mindset",
                        desc: "Learning never stops",
                        color: "success",
                      },
                    ].map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center gap-4 p-4 rounded-xl bg-${value.color}/5 border border-${value.color}/10 hover:bg-${value.color}/10 hover:border-${value.color}/20 transition-all duration-300 group`}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${value.color} to-${value.color}/80 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300`}
                        >
                          <value.icon className="w-6 h-6 text-nord-0" />
                        </div>
                        <div>
                          <div
                            className={`font-semibold text-${value.color} mb-1`}
                          >
                            {value.title}
                          </div>
                          <div className="text-sm text-muted">{value.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-center text-gradient">
                      By The Numbers
                    </h4>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { number: "5+", label: "Years", color: "primary" },
                        {
                          number: "50+",
                          label: "Projects",
                          color: "secondary",
                        },
                        { number: "24/7", label: "Available", color: "accent" },
                        { number: "∞", label: "Passion", color: "success" },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.6 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className={`text-center p-4 rounded-xl bg-${stat.color}/10 border border-${stat.color}/20 hover:scale-105 transition-transform duration-300`}
                        >
                          <div
                            className={`text-2xl font-bold text-${stat.color} mb-1`}
                          >
                            {stat.number}
                          </div>
                          <div className="text-sm text-muted">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-center p-4 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20"
                    >
                      <div className="text-lg font-bold text-gradient mb-1">
                        ∞ Lines of Code
                      </div>
                      <div className="text-sm text-muted">And counting...</div>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-16 h-16 border border-primary/10 rounded-full opacity-50 group-hover:rotate-45 transition-transform duration-1000"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 border border-secondary/10 rounded-lg rotate-12 opacity-50 group-hover:rotate-45 transition-transform duration-1000"></div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"></div>
          <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              A carefully curated toolkit for building next-generation
              applications
            </p>
          </motion.div>

          <InteractiveSkillChart />

          {/* Add spacing between interactive chart and tech categories */}
          <div className="h-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, index) => {
              const getColorClasses = (color: string) => {
                switch (color) {
                  case "primary":
                    return {
                      icon: "text-primary",
                      title: "text-primary",
                      bg: "from-primary to-secondary",
                    };
                  case "secondary":
                    return {
                      icon: "text-secondary",
                      title: "text-secondary",
                      bg: "from-secondary to-accent",
                    };
                  case "accent":
                    return {
                      icon: "text-accent",
                      title: "text-accent",
                      bg: "from-accent to-warning",
                    };
                  case "success":
                    return {
                      icon: "text-success",
                      title: "text-success",
                      bg: "from-success to-secondary",
                    };
                  default:
                    return {
                      icon: "text-primary",
                      title: "text-primary",
                      bg: "from-primary to-secondary",
                    };
                }
              };

              const colors = getColorClasses(category.color);

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="modern-card p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.bg}`}
                  ></div>

                  <div className="mb-6 relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-nord-0" />
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-0.5 w-12 bg-gradient-to-r ${colors.bg} origin-left`}
                    />
                  </div>

                  <h3 className={`text-2xl font-bold mb-6 ${colors.title}`}>
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.1 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className={`modern-badge bg-${category.color}/10 ${colors.icon} border-${category.color}/20 hover:bg-${category.color}/20 transition-all duration-200 cursor-default text-sm`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div
                    className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br ${colors.bg} opacity-10 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500`}
                  ></div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="modern-card p-8 inline-block">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Continuously evolving with the latest technologies
              </h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Always Learning
                </span>
                <span className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 bg-secondary rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  Industry Best Practices
                </span>
                <span className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  Future-Ready Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Showcasing innovative solutions and technical excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projectPreviews.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="modern-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                <motion.div
                  className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-8 relative overflow-hidden`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-white/20 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>

                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-nord-0 font-bold text-lg group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted mb-8 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.2 + techIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="modern-badge text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="relative">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-3 text-primary hover:text-secondary transition-all duration-300 font-medium group/link"
                  >
                    <span>Explore Project</span>
                    <div className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center group-hover/link:border-secondary group-hover/link:bg-secondary/10 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </Link>
                </div>

                {/* Background decoration */}
                <div
                  className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                ></div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-secondary/30 rounded-full group-hover:scale-150 transition-transform duration-500"
                  style={{ transitionDelay: "0.1s" }}
                ></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="modern-card p-8 inline-block relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  Want to see more of my work?
                </h4>
                <p className="text-muted mb-6">
                  Explore my complete portfolio with detailed case studies and
                  live demos
                </p>
                <Link
                  href="/projects"
                  className="modern-btn primary text-lg px-10 py-4 group/btn flex items-center gap-3 mx-auto w-fit"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-secondary/5 rounded-full blur-2xl"></div>
          <div className="absolute top-2/3 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-gradient">Innovation Journey</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Mapping the path of continuous learning and technological
              evolution
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
            >
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-8"
              >
                <div className="modern-card p-8 w-full max-w-sm hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-nord-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        Cloud Architecture
                      </h3>
                      <div className="h-0.5 w-20 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "AWS Solutions",
                      "Serverless Computing",
                      "Infrastructure as Code",
                      "CI/CD Pipelines",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-muted"
                      >
                        <ArrowRight className="w-3 h-3 text-success flex-shrink-0" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="modern-card p-8 w-full max-w-sm hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-nord-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-accent mb-1">
                        Innovation Lab
                      </h3>
                      <div className="h-0.5 w-20 bg-gradient-to-r from-accent to-transparent"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "AI Integration",
                      "Performance Optimization",
                      "Security Best Practices",
                      "Open Source Contributions",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-muted"
                      >
                        <ArrowRight className="w-3 h-3 text-success flex-shrink-0" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center relative z-10 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-nord-0 mb-1">
                      ALEKS
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-nord-0">
                      MANOV
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                <div className="absolute inset-4 rounded-full border border-secondary/40 animate-pulse"></div>
                <div className="absolute inset-8 rounded-full border border-accent/20 pulse-subtle"></div>

                <div className="absolute top-1/2 left-full w-20 h-px bg-gradient-to-r from-primary to-transparent hidden lg:block"></div>
                <div className="absolute top-1/2 right-full w-20 h-px bg-gradient-to-l from-primary to-transparent hidden lg:block"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="modern-card p-8 w-full max-w-sm hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-nord-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-1">
                        Full Stack Development
                      </h3>
                      <div className="h-0.5 w-20 bg-gradient-to-r from-secondary to-transparent"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Modern Frontend",
                      "Scalable Backend",
                      "Mobile Development",
                      "API Design",
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-muted"
                      >
                        <ArrowRight className="w-3 h-3 text-success flex-shrink-0" />
                        <span>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.1 }}
                viewport={{ once: true }}
                className={`absolute w-2 h-2 rounded-full pulse-subtle ${
                  i % 3 === 0
                    ? "bg-primary"
                    : i % 3 === 1
                    ? "bg-secondary"
                    : "bg-accent"
                }`}
                style={{
                  left: `${10 + i * 11}%`,
                  top: `${20 + (i % 4) * 20}%`,
                }}
              />
            ))}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center relative z-10"
          >
            <div className="mb-16">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-gradient block mb-4">
                  Let&apos;s Create Something
                </span>
                <span className="text-foreground block relative">
                  Amazing Together
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Ready to transform your ideas into exceptional digital
                experiences? Let&apos;s collaborate and build something
                extraordinary.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
              >
                <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-nord-0" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Custom Solutions
                  </h4>
                  <p className="text-sm text-muted">
                    Tailored to your unique needs
                  </p>
                </div>

                <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Cloud className="w-6 h-6 text-nord-0" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Modern Tech
                  </h4>
                  <p className="text-sm text-muted">
                    Cutting-edge technologies
                  </p>
                </div>

                <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Smartphone className="w-6 h-6 text-nord-0" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    End-to-End
                  </h4>
                  <p className="text-sm text-muted">
                    From concept to deployment
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                href="/contact"
                className="modern-btn primary text-lg px-10 py-5 group flex items-center gap-3 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>

              <Link
                href="https://github.com/Ception"
                target="_blank"
                className="modern-btn accent text-lg px-10 py-5 group flex items-center gap-3 transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span>Connect on GitHub</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-border-subtle"
            >
              <p className="text-muted mb-4">Or reach out directly</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
                <a
                  href="mailto:contact@aleksmanov.me"
                  className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  contact@aleksmanov.me
                </a>
                <a
                  href="https://linkedin.com/in/aleksmanov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-secondary transition-colors cursor-pointer"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  LinkedIn: aleksmanov
                </a>
                <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
            viewport={{ once: true }}
            className={`absolute w-2 h-2 rounded-full pulse-subtle ${
              i % 3 === 0
                ? "bg-primary"
                : i % 3 === 1
                ? "bg-secondary"
                : "bg-accent"
            }`}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </section>
    </div>
  );
}
