import { motion } from "motion/react";

export function Skills() {
  const skills = {
    design: ["Figma", "Adobe XD", "Sketch", "Prototyping", "Design Systems", "UI/UX"],
    development: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Framer Motion"],
    tools: ["Git", "Webpack", "Vercel", "Supabase", "Prisma", "GraphQL"],
  };

  const marqueeItems = [
    "React", "TypeScript", "Figma", "Next.js", "Tailwind CSS", 
    "Motion", "Node.js", "UI/UX", "Design Systems", "GraphQL"
  ];

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-purple-400 text-sm uppercase tracking-wider mb-4 block">
            Skills & Tools
          </span>
          <h2 className="text-white text-5xl lg:text-6xl mb-6">
            My creative toolkit
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            A diverse set of skills that allows me to tackle any challenge
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Traditional list */}
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-white/40 uppercase text-sm tracking-wider mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/5 rounded-3xl p-12 h-full flex flex-col justify-center">
              <div className="space-y-8">
                {[
                  { label: "Design", value: 95 },
                  { label: "Development", value: 90 },
                  { label: "Problem Solving", value: 98 },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-3">
                      <span className="text-white">{item.label}</span>
                      <span className="text-white/60">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/60 italic">
                  "Constantly learning and evolving with the ever-changing landscape 
                  of web technologies"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 py-8"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/70 whitespace-nowrap"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
