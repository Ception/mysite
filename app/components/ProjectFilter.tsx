"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  Search,
  Calendar,
  Tag,
  Star,
  Code,
  Globe,
  Database,
  Smartphone,
  Shield,
  X,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  status: string;
  year: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  icon: any;
  codeSnippet: string;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange: (filteredProjects: Project[]) => void;
}

const categoryIcons: { [key: string]: any } = {
  Infrastructure: Shield,
  "Web Application": Globe,
  "Backend API": Database,
  "Mobile App": Smartphone,
};

const statusColors: { [key: string]: string } = {
  Production: "success",
  Development: "warning",
  Planning: "purple",
};

export default function ProjectFilter({
  projects,
  onFilterChange,
}: ProjectFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Get unique values for filters
  const categories = [...new Set(projects.map((p) => p.category))];
  const statuses = [...new Set(projects.map((p) => p.status))];
  const years = [...new Set(projects.map((p) => p.year))].sort().reverse();
  const allTech = [...new Set(projects.flatMap((p) => p.techStack))].sort();

  // Filter projects based on current criteria
  const filterProjects = () => {
    let filtered = projects;

    // Search term filter
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.techStack.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Status filter
    if (selectedStatus) {
      filtered = filtered.filter(
        (project) => project.status === selectedStatus
      );
    }

    // Year filter
    if (selectedYear) {
      filtered = filtered.filter((project) => project.year === selectedYear);
    }

    // Technology filter
    if (selectedTech.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTech.every((tech) => project.techStack.includes(tech))
      );
    }

    onFilterChange(filtered);
  };

  // Apply filters whenever criteria change
  useEffect(() => {
    filterProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchTerm,
    selectedCategory,
    selectedStatus,
    selectedYear,
    selectedTech,
  ]);

  const handleTechToggle = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setSelectedStatus(null);
    setSelectedYear(null);
    setSelectedTech([]);
    onFilterChange(projects);
  };

  const hasActiveFilters =
    searchTerm ||
    selectedCategory ||
    selectedStatus ||
    selectedYear ||
    selectedTech.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="modern-card p-6 mb-12"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <Filter className="w-4 h-4 text-nord-0" />
          </div>
          <h3 className="text-xl font-bold text-gradient">Project Filters</h3>
          {hasActiveFilters && (
            <motion.button
              onClick={clearAllFilters}
              className="text-sm text-muted hover:text-primary transition-colors flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-3 h-3" />
              Clear All
            </motion.button>
          )}
        </div>

        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="modern-btn text-sm px-4 py-2 flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          {showAdvancedFilters ? "Hide" : "Show"} Advanced
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search projects, technologies, or descriptions..."
          className="w-full pl-12 pr-4 py-3 modern-input focus-ring"
        />
      </div>

      {/* Quick Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-semibold text-muted mb-2">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Code;
              const isSelected = selectedCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(isSelected ? null : category);
                  }}
                  className={`modern-btn text-xs px-3 py-2 flex items-center gap-2 ${
                    isSelected ? "primary" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-3 h-3" />
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-semibold text-muted mb-2">
            Status
          </label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => {
              const isSelected = selectedStatus === status;
              const colorClass = statusColors[status] || "primary";

              return (
                <motion.button
                  key={status}
                  onClick={() => {
                    setSelectedStatus(isSelected ? null : status);
                  }}
                  className={`modern-btn text-xs px-3 py-2 flex items-center gap-2 ${
                    isSelected ? colorClass : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-${colorClass} ${
                      isSelected ? "" : "animate-pulse"
                    }`}
                  />
                  {status}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Year Filter */}
        <div>
          <label className="block text-sm font-semibold text-muted mb-2">
            Year
          </label>
          <div className="flex flex-wrap gap-2">
            {years.map((year) => {
              const isSelected = selectedYear === year;

              return (
                <motion.button
                  key={year}
                  onClick={() => {
                    setSelectedYear(isSelected ? null : year);
                  }}
                  className={`modern-btn text-xs px-3 py-2 flex items-center gap-2 ${
                    isSelected ? "accent" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-3 h-3" />
                  {year}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {showAdvancedFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-border-subtle pt-6"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold text-muted mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Technologies ({selectedTech.length} selected)
              </label>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
                {allTech.map((tech) => {
                  const isSelected = selectedTech.includes(tech);

                  return (
                    <motion.button
                      key={tech}
                      onClick={() => {
                        handleTechToggle(tech);
                      }}
                      className={`modern-badge text-xs px-3 py-1 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? "bg-primary/20 text-primary border-primary/40"
                          : "bg-background-elevated text-muted border-border-subtle hover:bg-primary/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                      {isSelected && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="ml-1"
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Summary */}
      {hasActiveFilters && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg"
        >
          <div className="flex items-center gap-2 text-sm text-primary">
            <Star className="w-4 h-4" />
            <span className="font-medium">
              Active Filters:{" "}
              {[
                searchTerm && "Search",
                selectedCategory && "Category",
                selectedStatus && "Status",
                selectedYear && "Year",
                selectedTech.length > 0 &&
                  `${selectedTech.length} Technologies`,
              ]
                .filter(Boolean)
                .join(", ")}
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
