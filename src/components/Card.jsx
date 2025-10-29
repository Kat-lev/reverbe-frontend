import React, {useState} from "react";
import Button from "./Button";
import clsx from "clsx";

export default function Card({ data, variant = "scroll" }) {
  const collapsible = variant === "postit";
  const showButtons = variant === "postit";
  const [open, setOpen] = useState(!collapsible);

  const formatDate = (iso) =>
    new Date(iso).toLocaleString("ca-ES", { dateStyle: "medium", timeStyle: "short" });

  return (
    <div
      className={clsx(
        "rounded-md border border-(--blue) bg-white transition duration-200 ease-in-out",
        "p-4 sm:p-6 md:p-8",
        variant === "scroll" && "shadow-sm hover:shadow-md space-y-4",
        variant === "single" &&
          "shadow-md max-w-3xl w-full mx-auto space-y-6 md:p-10",
        variant === "postit" &&
          "shadow-lg w-full h-full flex flex-col justify-between hover:shadow-xl"
      )}
    >
    <div className="flex-1 overflow-auto">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-(--blue)">
          {data.assumpte}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-3">
          {data.remitent} · {formatDate(data.data)}
        </p>
        <pre className="whitespace-pre-wrap text-(--blue) text-sm sm:text-base leading-relaxed">
          {data.cos}
        </pre>
      </div>

{showButtons && (
        <div className="mt-4 flex justify-end">
          <Button variant="primary" onClick={() => setOpen(!open)}>
            {open ? "-" : "+"}
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
