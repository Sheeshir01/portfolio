import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function About() {
  const services = [
    { title: "Web Design", desc: "Crafting beautiful interfaces" },
    { title: "Development", desc: "Building scalable solutions" },
    { title: "Motion", desc: "Adding life to products" },
    { title: "Strategy", desc: "Planning user journeys" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Bento grid layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Large text block - asymmetric */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/5 rounded-3xl p-12 backdrop-blur-sm"
          >
            <span className="text-emerald-400 text-sm uppercase tracking-wider mb-6 block">
              About
            </span>
            <h2 className="text-white text-5xl lg:text-6xl mb-8 leading-tight">
              I help brands stand out in the digital age
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Together we can work to create impactful digital experiences. 
              I'm passionate about solving complex problems with simple, elegant solutions.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Based in San Francisco, working with clients worldwide. From startups to 
              established brands, I've helped shape digital products that people love.
            </p>
            
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-white mt-8 group"
            >
              <span>View full résumé</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/5 rounded-3xl overflow-hidden relative min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl">
              👨‍💻
            </div>
          </motion.div>

          {/* Services grid */}
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="lg:col-span-3 bg-slate-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                0{i + 1}
              </div>
              <h3 className="text-white mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm">{service.desc}</p>
            </motion.div>
          ))}

          {/* Quote block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-6 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl p-12"
          >
            <div className="text-7xl text-emerald-400/20 mb-4">"</div>
            <p className="text-white/90 text-xl leading-relaxed italic mb-6">
              Design is not just what it looks like. Design is how it works.
            </p>
            <div className="text-white/50">— Steve Jobs</div>
          </motion.div>

          {/* Experience highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-6 bg-slate-900/50 border border-white/5 rounded-3xl p-12 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="text-8xl text-white mb-4"
              >
                99%
              </motion.div>
              <p className="text-white/60">Client satisfaction rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
