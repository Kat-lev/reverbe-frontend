import React, { useState, useMemo } from "react";
import Button from "./Button";
import clsx from "clsx";

export default function Card({ data, variant = "scroll" }) {
  const collapsible = variant === "postit";
  const showButtons = variant === "postit";
  const [open, setOpen] = useState(!collapsible);

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

  return (
    <div
      className={clsx(
        "rounded-md border border-(--blue) transition duration-200 ease-in-out",
        "p-4 sm:p-6 md:p-8",
        variant === "scroll" && " bg-white shadow-sm hover:shadow-md space-y-4",
        variant === "single" &&
          " bg-white shadow-md max-w-3xl w-full mx-auto space-y-6 md:p-10",
        variant === "postit" &&
          clsx(
            randomColor,
            "shadow-lg aspect-square max-w-xs flex flex-col justify-between hover:shadow-xl overflow-hidden"
          )
      )}
    >
      <div className="flex-1 overflow-hidden">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-(--blue)">
          {data.assumpte}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-3">
          {data.remitent} · {formatDate(data.data)}
        </p>
        <pre
          className={clsx(
            "whitespace-pre-wrap text-(--blue) text-sm sm:text-base leading-relaxed",
            collapsible && "overflow-hidden text-ellipsis h-24"
          )}
        >
          {collapsible ? truncateText(data.cos, 25) : data.cos}
        </pre>
      </div>

      {variant === "postit" && (
        <div className="mt-1 flex justify-end">
          <Button variant="ghost" onClick={() => openModal(data)}>
            +
          </Button>
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
              <h4 className="text-sm font-medium text-gray-700 mb-1">
                {rev.assumpte}
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                {rev.remitent} · {formatDate(rev.data)}
              </p>
              <pre className="whitespace-pre-wrap text-gray-700 text-sm">
                {rev.cos}
              </pre>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
