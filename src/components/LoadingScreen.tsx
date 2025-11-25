import { motion } from "motion/react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 5 }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-transparent to-transparent"
      />
      
      {/* Name with staggered animation */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-2"
        >
          <motion.h1
            className="text-6xl md:text-8xl tracking-tighter text-white"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            {"ALEX CHEN".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.05,
                  ease: [0.33, 1, 0.68, 1]
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-violet-300/60 tracking-widest uppercase text-sm md:text-base"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Designer & Developer
          </motion.p>
        </motion.div>
        
        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "200px" }}
          transition={{ duration: 4, delay: 2.5, ease: "easeInOut" }}
          className="mx-auto mt-12 h-[2px] bg-gradient-to-r from-transparent via-violet-400 to-transparent"
        />
      </div>
    </motion.div>
  );
}
