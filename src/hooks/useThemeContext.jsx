import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("normal");
  const [colors, setColors] = useState({
    primary: "var(--white)",
    secondary: "var(--blue)",
    tertiary: "var(--darkgray)",
  });

const generateRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.random() * 100;
  const lightness = Math.random() * 100;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const randomizeColors = () => {
  const primary = generateRandomColor();
  let secondary;
  do {
    secondary = generateRandomColor();
  } while (secondary === primary);
  const tertiary = generateRandomColor();
  setColors({ primary, secondary, tertiary });
};

  useEffect(() => {
    let interval;

    if (theme === "canviant") {
      randomizeColors();
      interval = setInterval(randomizeColors, 2000);
    } else if (theme === "fosc") {
      setColors({
        primary: "var(--white)",
        secondary: "var(--blue)",
        tertiary: "var(--darkgray)",
      });
    } else if (theme === "contrast") {
      setColors({
        primary: "var(--yellow)",
        secondary: "var(--black)",
        tertiary: "var(--white)",
      });      
    } else {
      setColors({
        primary: "var(--white)",
        secondary: "var(--blue)",
        tertiary: "var(--darkgray)",
      });
    }

    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    root.style.transition = "background-color 0.8s ease, color 0.8s ease";
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);
    root.style.setProperty("--tertiary", colors.tertiary);

    const timeout = setTimeout(() => {
      root.style.transition = "";
    }, 800);

    return () => clearTimeout(timeout);
  }, [colors]);

  useEffect(() => {
    const themes = ["normal", "canviant", "fosc", "contrast"];
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors, randomizeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
