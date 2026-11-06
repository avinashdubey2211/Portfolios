import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Layers } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Nexa Commerce",
    category: "Web",
    description: "Modern e-commerce platform with a clean shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900",
    tech: ["React", "Tailwind", "Node.js"],
    color: "from-purple-500 to-blue-500",
    link: "#",
  },
  {
    id: 2,
    title: "Finova Dashboard",
    category: "Dashboard",
    description: "Smart analytics dashboard for tracking business performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    tech: ["React", "Charts", "API"],
    color: "from-blue-500 to-cyan-500",
    link: "#",
  },
  {
    id: 3,
    title: "TravelGo",
    category: "Web",
    description: "A beautiful travel discovery and booking website.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900",
    tech: ["React", "CSS", "API"],
    color: "from-pink-500 to-purple-500",
    link: "#",
  },
  {
    id: 4,
    title: "Creative Studio",
    category: "UI/UX",
    description: "Creative agency landing page with interactive elements.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    tech: ["Figma", "React", "Framer"],
    color: "from-orange-500 to-pink-500",
    link: "#",
  },
  {
    id: 5,
    title: "HealthTrack",
    category: "Dashboard",
    description: "Health and fitness tracking dashboard interface.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900",
    tech: ["React", "Tailwind", "Charts"],
    color: "from-green-500 to-cyan-500",
    link: "#",
  },
  {
    id: 6,
    title: "Mobile Banking",
    category: "UI/UX",
    description: "Simple and modern mobile banking application design.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900",
    tech: ["Figma", "UI Design", "Prototype"],
    color: "from-indigo-500 to-purple-500",
    link: "#",
  },
];

const categories = ["All", "Web", "Dashboard", "UI/UX"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b18] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            OUR PORTFOLIO
          </span>

          <h2 className="mt-7 text-4xl font-bold md:text-6xl">
            Explore Our
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Discover some of our creative work and digital solutions designed to
            make a difference.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-purple-500 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "border-white/10 bg-white/5 text-gray-400 hover:border-purple-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-900/20"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 transition group-hover:opacity-40`}
                  />

                  <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 p-3 backdrop-blur-md">
                    <Layers size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold transition group-hover:text-purple-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-14 text-sm leading-7 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-purple-400"
                    >
                      Live Preview
                      <ExternalLink size={16} />
                    </a>

                    <button
                      type="button"
                      aria-label={`More about ${project.title}`}
                      className="rounded-full border border-white/10 p-3 transition hover:border-purple-500 hover:bg-purple-500/20"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-gray-400">
            Have a project idea? Let's build something amazing.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold transition hover:scale-105"
          >
            Start Your Project
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
