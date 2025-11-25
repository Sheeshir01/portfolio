import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "FinanceFlow",
      category: "Web App",
      year: "2024",
      description: "A modern banking dashboard with real-time analytics",
      color: "from-blue-500 to-cyan-500",
      size: "large",
    },
    {
      title: "Mindful",
      category: "Mobile App",
      year: "2024",
      description: "Meditation and wellness tracking",
      color: "from-purple-500 to-pink-500",
      size: "medium",
    },
    {
      title: "Shopwise",
      category: "E-commerce",
      year: "2023",
      description: "Next-gen shopping experience",
      color: "from-orange-500 to-red-500",
      size: "medium",
    },
    {
      title: "TaskFlow",
      category: "SaaS",
      year: "2023",
      description: "Team collaboration reimagined",
      color: "from-green-500 to-emerald-500",
      size: "large",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-wider mb-4 block">
            Selected Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-white text-5xl lg:text-6xl max-w-2xl">
              Crafting digital experiences that matter
            </h2>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="text-white/60 hover:text-white flex items-center gap-2 group"
            >
              View all projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl ${
                project.size === "large" ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  project.size === "large" ? "h-[600px]" : "h-[280px]"
                } bg-gradient-to-br ${project.color} p-8 lg:p-12 flex flex-col justify-between`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 to-slate-950/80 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20">
                      {project.category}
                    </span>
                    <span className="text-white/60 text-sm">{project.year}</span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-white text-4xl lg:text-5xl mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-lg mb-4">{project.description}</p>
                  
                  <div className="flex items-center gap-2 text-white/90 group-hover:gap-4 transition-all">
                    <span>View project</span>
                    <ArrowUpRight
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>
                </div>

                {/* Hover effect */}
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-white"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/5 rounded-3xl p-12 lg:p-16 text-center"
        >
          <h3 className="text-white text-3xl lg:text-4xl mb-4">
            Have a project in mind?
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let's create something extraordinary together
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-slate-950 rounded-full hover:bg-white/90 transition-colors"
          >
            Start a project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
