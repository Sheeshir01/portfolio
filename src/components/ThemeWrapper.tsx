import { ReactNode } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function ThemeWrapper({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  
  // Apply global theme-specific CSS classes
  const themeClass = theme === "light" 
    ? "theme-light" 
    : theme === "glass" 
    ? "theme-glass" 
    : "theme-dark";
  
  return (
    <div className={themeClass}>
      {children}
    </div>
  );
}
