import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTheme } from "../contexts/ThemeContext";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const { scrollY } = useScroll();
  
  // Dynamic colors based on theme
  const getNavColors = () => {
    if (theme === "light") {
      return {
        bgStart: "rgba(255, 255, 255, 0)",
        bgEnd: "rgba(255, 255, 255, 0.9)",
        borderStart: "rgba(0, 0, 0, 0)",
        borderEnd: "rgba(0, 0, 0, 0.1)",
      };
    } else if (theme === "glass") {
      return {
        bgStart: "rgba(255, 255, 255, 0)",
        bgEnd: "rgba(255, 255, 255, 0.1)",
        borderStart: "rgba(255, 255, 255, 0)",
        borderEnd: "rgba(255, 255, 255, 0.2)",
      };
    }
    return {
      bgStart: "rgba(2, 6, 23, 0)",
      bgEnd: "rgba(2, 6, 23, 0.8)",
      borderStart: "rgba(255, 255, 255, 0)",
      borderEnd: "rgba(255, 255, 255, 0.05)",
    };
  };

  const colors = getNavColors();
  const backgroundColor = useTransform(scrollY, [0, 100], [colors.bgStart, colors.bgEnd]);
  const borderColor = useTransform(scrollY, [0, 100], [colors.borderStart, colors.borderEnd]);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const getTextColor = () => {
    if (theme === "light") return "text-slate-950";
    return "text-white";
  };

  const getTextColorMuted = () => {
    if (theme === "light") return "text-slate-600 hover:text-slate-950";
    return "text-white/60 hover:text-white";
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          borderBottomColor: borderColor,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection("Home")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${getTextColor()} hover:opacity-80 transition-opacity`}
            >
              Alex.
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 ${getTextColorMuted()} transition-colors rounded-full ${
                    theme === "light" ? "hover:bg-slate-100" : "hover:bg-white/5"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
              <div className="ml-4">
                <ThemeSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${getTextColor()} p-2`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 right-0 bottom-0 w-full ${
          theme === "light"
            ? "bg-cyan-50/98"
            : theme === "glass"
            ? "bg-slate-900/80"
            : "bg-slate-950/98"
        } backdrop-blur-xl z-40 md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              onClick={() => scrollToSection(item)}
              className={`${
                theme === "light"
                  ? "text-slate-600 hover:text-slate-950"
                  : "text-white/70 hover:text-white"
              } transition-colors text-3xl`}
            >
              {item}
            </motion.button>
          ))}
          <div className="mt-4">
            <ThemeSwitcher />
          </div>
        </div>
      </motion.div>
    </>
  );
}