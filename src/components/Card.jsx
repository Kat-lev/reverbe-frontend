import React, { useEffect, useState, useMemo } from "react";
import Button from "./Button";
import clsx from "clsx";
import { useTheme } from "../hooks/useThemeContext";

export default function Card({ data, variant = "scroll" }) {
  const collapsible = variant === "postit";
  const { theme } = useTheme();
  const [open] = useState(!collapsible);

  const generateRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 0 + Math.random() * 100;
    const lightness = 0 + Math.random() * 100;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  // 🎨 Estado local de colores para esta Card
  const [localColors, setLocalColors] = useState({
    primary: "var(--white)",
    secondary: "var(--blue)",
  });

  // 🌀 Efecto para actualizar colores cuando el tema cambia
  useEffect(() => {
    let interval;

    const randomizeColors = () => {
      const primary = generateRandomColor();
      let secondary;
      do {
        secondary = generateRandomColor();
      } while (secondary === primary);
      setLocalColors({ primary, secondary });
    };

    if (theme === "canviant") {
      randomizeColors();
      interval = setInterval(randomizeColors, 2000);
    } else {
      setLocalColors({
        primary: "var(--white)",
        secondary: "var(--blue)",
      });
    }

    return () => clearInterval(interval);
  }, [theme]);

  // 💡 Contraste automático
  const getContrastColor = (bgColor) => {
    const match = bgColor.match(/\d+/g);
    if (!match) return "#000";
    const [h, s, l] = match.map(Number);
    return l > 60 ? "#000" : "#fff";
  };

  const textColor = useMemo(
    () => getContrastColor(localColors.primary),
    [localColors]
  );

  const formatDate = (iso) =>
    new Date(iso).toLocaleString("ca-ES", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  const truncateText = (text, maxWords = 20) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const postitColors = [
    "bg-yellow-200 border-yellow-300",
    "bg-pink-200 border-pink-300",
    "bg-green-200 border-green-300",
    "bg-blue-200 border-blue-300",
    "bg-purple-200 border-purple-300",
  ];
  const randomColor = useMemo(() => {
    return postitColors[Math.floor(Math.random() * postitColors.length)];
  }, []);

  const style =
    variant === "postit"
      ? {}
      : {
          backgroundColor: localColors.primary,
          borderColor: localColors.secondary,
          color: textColor,
        };

   return (
    <div
      className={clsx(
        "rounded-md border transition duration-200 ease-in-out p-4 sm:p-6 md:p-8 shadow-md",
        variant === "scroll" && "hover:shadow-md space-y-4",
        variant === "single" &&
          "max-w-3xl w-full mx-auto space-y-6 md:p-10",
        variant === "postit" &&
          clsx(
            randomColor,
            "shadow-lg aspect-square max-w-xs flex flex-col justify-between hover:shadow-xl overflow-hidden"
          )
      )}
      style={style}
    >
      <div className="flex-1 overflow-hidden">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold">
          {data.assumpte}
        </h3>
        <p className="text-xs sm:text-sm opacity-80 mb-3">
          {data.remitent} · {formatDate(data.data)}
        </p>
        <pre
          className={clsx(
            "whitespace-pre-wrap text-sm sm:text-base leading-relaxed",
            collapsible && "overflow-hidden text-ellipsis h-24"
          )}
        >
          {collapsible ? truncateText(data.cos, 25) : data.cos}
        </pre>
      </div>

      {variant === "postit" && (
        <div className="mt-1 flex justify-end">
          <Button variant="ghost">+</Button>
        </div>
      )}

      {open && data.reverberacions?.length > 0 && (
        <div
          className={clsx(
            "mt-4 space-y-3 border-t border-gray-100 pt-3",
            variant === "postit" && "overflow-auto max-h-48"
          )}
        >
          {data.reverberacions.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3"
            >
              <h4 className="text-sm font-medium mb-1">{rev.assumpte}</h4>
              <p className="text-xs opacity-70 mb-2">
                {rev.remitent} · {formatDate(rev.data)}
              </p>
              <pre className="whitespace-pre-wrap text-sm">{rev.cos}</pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
