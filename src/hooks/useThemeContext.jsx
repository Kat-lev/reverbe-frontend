import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("normal");
  const [colors, setColors] = useState({
    primary: "var(--gray)",
    secondary: "var(--blue)",
  });

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);        // 0-359 grados
  const saturation = 50 + Math.random() * 50;         // 50%-100%
  const lightness = 20 + Math.random() * 50;          // 20%-70%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const randomizeColors = () => {
  const primary = generateRandomColor();
  let secondary;
  do {
    secondary = generateRandomColor();
  } while (secondary === primary);
  setColors({ primary, secondary });
};

  useEffect(() => {
    let interval;

    if (theme === "canviant") {
      randomizeColors();
      interval = setInterval(randomizeColors, 2000);
    }

    if (theme === "normal") {
      setColors({
        primary: "var(--gray)",
        secondary: "var(--blue)",
      });
    }

    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    root.style.transition = "background-color 0.8s ease, color 0.8s ease";
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);

    const timeout = setTimeout(() => {
      root.style.transition = "";
    }, 800);

    return () => clearTimeout(timeout);
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors, randomizeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
