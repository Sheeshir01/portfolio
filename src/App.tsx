import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { LoadingScreen } from "./components/LoadingScreen";
import { CurvedGrid } from "./components/CurvedGrid";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Show content after loading completes
    if (!isLoading) {
      setTimeout(() => setShowContent(true), 100);
    }
  }, [isLoading]);

  const getThemeClasses = () => {
    if (theme === "light") {
      return "bg-gradient-to-br from-cyan-50 via-teal-50 to-sky-100";
    } else if (theme === "glass") {
      return "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900";
    }
    return "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950";
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen ${getThemeClasses()} relative overflow-hidden transition-colors duration-700`}
        >
          <CurvedGrid />
          {theme === "glass" && <GlassEffect />}
          <div className="relative z-10">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </motion.div>
      )}
    </>
  );
}

// Glass theme effect overlay
function GlassEffect() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Glass morphism backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      {/* Floating glass panels */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 backdrop-blur-3xl rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 backdrop-blur-3xl rounded-full blur-3xl"
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}