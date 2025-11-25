import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: "dark" as const,
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      hoverGradient: "hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500",
      label: "Dark",
    },
    {
      id: "light" as const,
      gradient: "from-teal-400 via-cyan-400 to-sky-400",
      hoverGradient: "hover:from-teal-300 hover:via-cyan-300 hover:to-sky-300",
      label: "Light",
    },
    {
      id: "glass" as const,
      gradient: "from-cyan-400 via-blue-400 to-violet-400",
      hoverGradient: "hover:from-cyan-300 hover:via-blue-300 hover:to-violet-300",
      label: "Glass",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      {themes.map((themeOption, index) => (
        <motion.button
          key={themeOption.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          onClick={() => setTheme(themeOption.id)}
          className={`relative overflow-hidden transition-all duration-300 ${
            theme === themeOption.id ? "scale-110" : "scale-100"
          }`}
          style={{
            width: "42px",
            height: "42px",
          }}
        >
          {/* Amoeba-shaped SVG background */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))" }}
          >
            <defs>
              <linearGradient id={`gradient-${themeOption.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={getGradientColor(themeOption.gradient, 0)} />
                <stop offset="50%" stopColor={getGradientColor(themeOption.gradient, 1)} />
                <stop offset="100%" stopColor={getGradientColor(themeOption.gradient, 2)} />
              </linearGradient>
            </defs>
            {/* Amoeba shape - organic blob */}
            <path
              d="M50,10 C65,10 75,15 85,30 C92,42 92,58 85,70 C75,85 65,90 50,90 C35,90 25,85 15,70 C8,58 8,42 15,30 C25,15 35,10 50,10 Z"
              fill={`url(#gradient-${themeOption.id})`}
              className={`transition-all duration-300 ${themeOption.hoverGradient}`}
            />
          </svg>

          {/* Active indicator */}
          {theme === themeOption.id && (
            <motion.div
              layoutId="active-theme"
              className="absolute inset-0 border-2 border-white/40 rounded-[45%]"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {themeOption.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}

// Helper function to extract gradient colors
function getGradientColor(gradient: string, index: number): string {
  const colorMap: Record<string, string[]> = {
    "from-violet-600 via-purple-600 to-indigo-600": ["#7c3aed", "#9333ea", "#4f46e5"],
    "from-teal-400 via-cyan-400 to-sky-400": ["#14b8a6", "#06b6d4", "#0ea5e9"],
    "from-cyan-400 via-blue-400 to-violet-400": ["#22d3ee", "#60a5fa", "#a78bfa"],
  };
  return colorMap[gradient]?.[index] || "#000000";
}