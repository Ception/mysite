"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { projects } from "../data/projects";

// Dynamic imports for performance optimization
const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  {
    loading: () => (
      <div className="h-40 animate-pulse bg-background-elevated rounded-lg" />
    ),
    ssr: false,
  }
);

const ProjectFilter = dynamic(() => import("./ProjectFilter"), {
  loading: () => (
    <div className="h-20 animate-pulse bg-background-elevated rounded-lg" />
  ),
  ssr: false,
});

const ClientOnlyParticleSystem = dynamic(
  () => import("./ClientOnlyParticleSystem"),
  {
    ssr: false,
  }
);

// Import styles separately for better tree shaking
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Plus,
  Github,
  ExternalLink,
  Code,
  Eye,
  EyeOff,
  Star,
  Calendar,
  Tag,
  Activity,
  Zap,
  Shield,
  Globe,
  Database,
  Smartphone,
} from "lucide-react";

export default function ProjectsPageClient() {
  const [showCode, setShowCode] = useState<{ [key: string]: boolean }>({});
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const toggleCode = (projectId: string) => {
    setShowCode((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "text-success";
      case "Development":
        return "text-warning";
      case "Planning":
        return "text-purple";
      default:
        return "text-primary";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Infrastructure":
        return "primary";
      case "Web Application":
        return "secondary";
      case "Backend API":
        return "success";
      case "Mobile App":
        return "purple";
      default:
        return "primary";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Infrastructure":
        return Shield;
      case "Web Application":
        return Globe;
      case "Backend API":
        return Database;
      case "Mobile App":
        return Smartphone;
      default:
        return Code;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      <ClientOnlyParticleSystem />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gradient block mb-4">Featured</span>
            <span className="text-foreground block relative">
              Projects
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A showcase of innovative solutions spanning cloud infrastructure,
            full-stack applications, and enterprise-grade backends. Each project
            represents a commitment to excellence and technical innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Star className="w-6 h-6 text-nord-0" />
              </div>
              <div className="text-2xl font-bold text-primary">
                {filteredProjects.length}
              </div>
              <div className="text-sm text-muted">Projects</div>
            </div>

            <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-6 h-6 text-nord-0" />
              </div>
              <div className="text-2xl font-bold text-secondary">100%</div>
              <div className="text-sm text-muted">Success Rate</div>
            </div>

            <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Activity className="w-6 h-6 text-nord-0" />
              </div>
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted">Monitoring</div>
            </div>

            <div className="modern-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-nord-0" />
              </div>
              <div className="text-2xl font-bold text-success">2024</div>
              <div className="text-sm text-muted">Latest</div>
            </div>
          </motion.div>
        </motion.div>

        <ProjectFilter
          projects={projects}
          onFilterChange={setFilteredProjects}
        />

        <div className="space-y-20">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            const ProjectIcon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card p-8 lg:p-12 relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              >
                <motion.div
                  className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-white/20 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-between items-start mb-10">
                  <div className="flex-1 mb-8 lg:mb-0 py-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <ProjectIcon className="w-8 h-8 text-nord-0" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-primary font-mono text-lg font-bold">
                            #{project.id}
                          </span>
                          <span className="text-muted text-sm flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`modern-badge bg-${getCategoryColor(
                              project.category
                            )}/10 text-${getCategoryColor(
                              project.category
                            )} border-${getCategoryColor(
                              project.category
                            )}/20 flex items-center gap-2`}
                          >
                            <CategoryIcon className="w-4 h-4" />
                            {project.category}
                          </span>
                          <span
                            className={`modern-badge ${getStatusColor(
                              project.status
                            )} flex items-center gap-2`}
                          >
                            <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {project.shortTitle}
                    </h2>
                    <h3 className="text-lg md:text-xl text-muted mb-6 leading-relaxed">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.button
                      onClick={() => toggleCode(project.id)}
                      className="modern-btn accent px-6 py-3 flex items-center gap-3 group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {showCode[project.id] ? (
                        <>
                          <EyeOff className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                          Hide Code
                        </>
                      ) : (
                        <>
                          <Eye className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                          View Code
                        </>
                      )}
                    </motion.button>

                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="modern-btn primary px-6 py-3 flex items-center gap-3 group/btn"
                      >
                        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        GitHub
                      </Link>
                    )}

                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="modern-btn success px-6 py-3 flex items-center gap-3 group/btn"
                      >
                        <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                          <Tag className="w-3 h-3 text-nord-0" />
                        </div>
                        Project Overview
                      </h4>
                      <p className="text-muted leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                          <Star className="w-3 h-3 text-nord-0" />
                        </div>
                        Key Features
                      </h4>
                      <div className="grid gap-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.1 + featureIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-background-elevated/50 hover:bg-background-elevated transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
                        <Code className="w-3 h-3 text-nord-0" />
                      </div>
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="modern-badge bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {showCode[project.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -20 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="mt-10 overflow-hidden"
                    >
                      <div className="modern-card p-6 bg-nord-0/50 border border-primary/20">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-bold text-primary flex items-center gap-3">
                            <Code className="w-5 h-5" />
                            Code Snippet
                          </h4>
                          <button
                            onClick={() => toggleCode(project.id)}
                            className="text-muted hover:text-primary transition-colors"
                          >
                            <EyeOff className="w-5 h-5" />
                          </button>
                        </div>
                        <SyntaxHighlighter
                          language="typescript"
                          style={nord}
                          customStyle={{
                            background: "transparent",
                            padding: "0",
                            margin: "0",
                            fontSize: "14px",
                          }}
                        >
                          {project.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div
                  className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700`}
                ></div>

                <div className="absolute top-8 right-8 w-3 h-3 bg-primary/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <div
                  className="absolute bottom-8 left-8 w-2 h-2 bg-secondary/30 rounded-full group-hover:scale-150 transition-transform duration-500"
                  style={{ transitionDelay: "0.1s" }}
                ></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="modern-card p-16 relative overflow-hidden group">
            <div className="relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-gradient block mb-4">
                  Ready to Collaborate?
                </span>
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl text-muted mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                These projects represent just the beginning of what&apos;s
                possible. Let&apos;s discuss how we can bring your vision to
                life with innovative technology and exceptional execution.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="modern-btn primary text-lg px-10 py-5 group flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
                >
                  <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  <span>Start a Project</span>
                </Link>
                <Link
                  href="https://github.com/Ception"
                  target="_blank"
                  className="modern-btn success text-lg px-10 py-5 group flex items-center gap-3 transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View All on GitHub</span>
                </Link>
              </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute top-8 right-8 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-secondary/5 rounded-full blur-lg group-hover:scale-150 transition-transform duration-700"></div>
          </div>
        </motion.div>
      </div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 2 + i * 0.1 }}
          className={`absolute w-2 h-2 rounded-full pulse-subtle ${
            i % 3 === 0
              ? "bg-primary"
              : i % 3 === 1
              ? "bg-secondary"
              : "bg-accent"
          }`}
          style={{
            left: `${5 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
