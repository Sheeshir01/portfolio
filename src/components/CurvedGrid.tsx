import { useTheme } from "../contexts/ThemeContext";

export function CurvedGrid() {
  const { theme } = useTheme();
  
  const getGridColor = () => {
    if (theme === "light") {
      return "rgba(20, 184, 166, 0.25)"; // Teal for light theme
    } else if (theme === "glass") {
      return "rgba(34, 211, 238, 0.3)"; // Cyan for glass theme
    }
    return "rgba(139, 92, 246, 0.3)"; // Violet for dark theme
  };

  const getEdgeColor = () => {
    if (theme === "light") {
      return "rgba(20, 184, 166, 0.35)";
    } else if (theme === "glass") {
      return "rgba(34, 211, 238, 0.4)";
    }
    return "rgba(139, 92, 246, 0.4)";
  };

  return (
    <>
      {/* Left curved grid */}
      <div className="fixed left-0 top-0 h-full w-[300px] pointer-events-none z-0 opacity-20 transition-opacity duration-700">
        <svg
          width="300"
          height="100%"
          className="absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="left-grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke={getGridColor()}
                strokeWidth="0.5"
              />
            </pattern>
            <mask id="left-curve-mask">
              <rect width="300" height="100%" fill="white" />
              <path
                d="M 300 0 Q 200 50, 300 100 L 300 200 Q 200 250, 300 300 L 300 400 Q 200 450, 300 500 L 300 600 Q 200 650, 300 700 L 300 800 Q 200 850, 300 900 L 300 1000 Q 200 1050, 300 1100 L 300 1200 Q 200 1250, 300 1300 L 300 1400 Q 200 1450, 300 1500 L 300 1600 Q 200 1650, 300 1700 L 300 1800 Q 200 1850, 300 1900 L 300 2000"
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="300"
            height="100%"
            fill="url(#left-grid)"
            mask="url(#left-curve-mask)"
          />
          {/* Curved edge highlight */}
          <path
            d="M 300 0 Q 200 50, 300 100 T 300 300 T 300 500 T 300 700 T 300 900 T 300 1100 T 300 1300 T 300 1500 T 300 1700 T 300 1900 T 300 2100"
            fill="none"
            stroke={getEdgeColor()}
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Right curved grid */}
      <div className="fixed right-0 top-0 h-full w-[300px] pointer-events-none z-0 opacity-20 transition-opacity duration-700">
        <svg
          width="300"
          height="100%"
          className="absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="right-grid"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 30 0 L 0 0 0 30"
                fill="none"
                stroke={getGridColor()}
                strokeWidth="0.5"
              />
            </pattern>
            <mask id="right-curve-mask">
              <rect width="300" height="100%" fill="white" />
              <path
                d="M 0 0 Q 100 50, 0 100 L 0 200 Q 100 250, 0 300 L 0 400 Q 100 450, 0 500 L 0 600 Q 100 650, 0 700 L 0 800 Q 100 850, 0 900 L 0 1000 Q 100 1050, 0 1100 L 0 1200 Q 100 1250, 0 1300 L 0 1400 Q 100 1450, 0 1500 L 0 1600 Q 100 1650, 0 1700 L 0 1800 Q 100 1850, 0 1900 L 0 2000"
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="300"
            height="100%"
            fill="url(#right-grid)"
            mask="url(#right-curve-mask)"
          />
          {/* Curved edge highlight */}
          <path
            d="M 0 0 Q 100 50, 0 100 T 0 300 T 0 500 T 0 700 T 0 900 T 0 1100 T 0 1300 T 0 1500 T 0 1700 T 0 1900 T 0 2100"
            fill="none"
            stroke={getEdgeColor()}
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  );
}