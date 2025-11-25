import { useTheme } from "../contexts/ThemeContext";

export function useThemeColors() {
  const { theme } = useTheme();

  return {
    // Text colors
    textPrimary: theme === "light" ? "text-slate-900" : "text-white",
    textSecondary: theme === "light" ? "text-slate-700" : "text-white/60",
    textTertiary: theme === "light" ? "text-slate-600" : "text-white/40",
    textMuted: theme === "light" ? "text-slate-500" : "text-white/50",
    
    // Background colors
    bgPrimary: theme === "light" 
      ? "bg-white" 
      : theme === "glass" 
      ? "bg-white/10 backdrop-blur-xl" 
      : "bg-slate-900/80 backdrop-blur-xl",
    
    bgSecondary: theme === "light"
      ? "bg-slate-50"
      : theme === "glass"
      ? "bg-white/5 backdrop-blur-lg"
      : "bg-slate-800/50",
    
    bgCard: theme === "light"
      ? "bg-white/95 border-slate-200/50"
      : theme === "glass"
      ? "bg-white/10 backdrop-blur-xl border-white/20"
      : "bg-slate-900/80 backdrop-blur-xl border-white/10",
    
    // Border colors
    borderPrimary: theme === "light" ? "border-slate-300/50" : "border-white/10",
    borderSecondary: theme === "light" ? "border-slate-200/50" : "border-white/5",
    
    // Accent colors (adapt slightly but keep brand identity)
    accentBlue: theme === "light" ? "text-blue-600" : "text-blue-400",
    accentPurple: theme === "light" ? "text-purple-600" : "text-purple-400",
    accentEmerald: theme === "light" ? "text-teal-600" : "text-emerald-400",
    
    // Gradient backgrounds
    gradientAccent: theme === "light"
      ? "from-teal-500/30 to-cyan-500/30"
      : theme === "glass"
      ? "from-cyan-500/20 to-blue-500/20"
      : "from-blue-500/30 to-purple-500/30",
    
    // Button styles
    buttonPrimary: theme === "light"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "bg-white text-slate-950 hover:bg-white/90",
    
    buttonSecondary: theme === "light"
      ? "border-slate-400/50 text-slate-700 hover:bg-slate-100/50"
      : "border-white/10 text-white/60 hover:text-white hover:border-white/30",
  };
}