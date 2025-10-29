import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("normal");
  const [colors, setColors] = useState({
    primary: "var(--blue)",
    secondary: "var(--white)",
  });

  const randomizeColors = () => {
    const hues = ["#facc15", "#f472b6", "#34d399", "#60a5fa", "#a78bfa"];
    setColors({
      primary: hues[Math.floor(Math.random() * hues.length)],
      secondary: hues[Math.floor(Math.random() * hues.length)],
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors, randomizeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
