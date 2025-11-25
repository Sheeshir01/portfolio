import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const colors = useThemeColors();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div style={{ y, opacity }} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Asymmetric */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5"
            >
              <Sparkles size={16} className={colors.accentEmerald} />
              <span className={`${colors.accentEmerald} text-sm`}>Available for freelance</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className={`${colors.textPrimary} leading-tight mb-6`}>
                <span className={`block ${colors.textTertiary} text-xl mb-3`}>Hey, I'm Shishir</span>
                <span className="block text-6xl lg:text-7xl">
                  I design &
                </span>
                <span className={`block text-6xl lg:text-7xl italic ${colors.textSecondary}`}>
                  build{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">experiences</span>
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className={`absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r ${colors.gradientAccent} origin-left`}
                    />
                  </span>
                </span>
              </h1>
              <p className={`${colors.textMuted} text-lg max-w-md leading-relaxed`}>
                A creative developer crafting digital products with a focus on 
                interaction design, motion, and delightful user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className={`group px-6 py-3 ${colors.buttonPrimary} rounded-full transition-colors flex items-center gap-2`}
              >
                Let's talk
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-10 h-10 rounded-full border ${colors.buttonSecondary} transition-colors flex items-center justify-center`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Creative Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            {/* Abstract shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-500/20 rounded-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-purple-500/20 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br ${colors.gradientAccent} rounded-[4rem] backdrop-blur-3xl`}
            />
            
            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`absolute top-12 right-12 ${colors.bgCard} border rounded-2xl p-4 min-w-[140px]`}
            >
              <div className={`text-3xl ${colors.textPrimary} mb-1`}>50+</div>
              <div className={`${colors.textMuted} text-sm`}>Projects done</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className={`absolute bottom-24 left-8 ${colors.bgCard} border rounded-2xl p-4 min-w-[140px]`}
            >
              <div className={`text-3xl ${colors.textPrimary} mb-1`}>5+</div>
              <div className={`${colors.textMuted} text-sm`}>Years exp</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`${colors.textTertiary} text-sm`}>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 ${colors.borderPrimary} rounded-full flex justify-center pt-2`}
        >
          <motion.div className={`w-1 h-2 ${colors.textSecondary} rounded-full`} />
        </motion.div>
      </motion.div>
    </section>
  );
}