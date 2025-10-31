import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("normal");
  const [colors, setColors] = useState({
    primary: "var(--blue)",   // colores base del tema normal
    secondary: "var(--white)",
  });

  const dynamicPalette = [
    "#facc15", // amarillo
    "#f472b6", // rosa
    "#34d399", // verde
    "#60a5fa", // azul claro
    "#a78bfa", // violeta
    "#fb923c", // naranja
    "#2dd4bf", // turquesa
  ];

  const randomizeColors = () => {
    const primary = dynamicPalette[Math.floor(Math.random() * dynamicPalette.length)];
    let secondary;
    do {
      secondary = dynamicPalette[Math.floor(Math.random() * dynamicPalette.length)];
    } while (secondary === primary);
    setColors({ primary, secondary });
  };

  // 🔁 Cambiar colores automáticamente en modo “canviant”
  useEffect(() => {
    let interval;

    if (theme === "canviant") {
      randomizeColors(); // primer cambio inmediato
      interval = setInterval(randomizeColors, 2000);
    }

    // 👉 si se vuelve a “normal”, restaurar colores por defecto
    if (theme === "normal") {
      setColors({
        primary: "var(--blue)",
        secondary: "var(--white)",
      });
    }

    return () => clearInterval(interval);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;

    // Añadimos transición CSS temporalmente
    root.style.transition = "background-color 0.8s ease, color 0.8s ease";
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--secondary", colors.secondary);

    // Eliminamos la transición después para que no afecte otros estilos
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
