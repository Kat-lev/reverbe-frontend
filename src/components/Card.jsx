import React, {useState} from "react";
import Button from "./Button";

export default function Card({
  data,
  showButtons = true, 
  collapsible = true,
}) {
  const [open, setOpen] = useState(!collapsible);

  const formatDate = (iso) =>
    new Date(iso).toLocaleString("ca-ES", { dateStyle: "medium", timeStyle: "short" });

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 space-y-4 transition hover:shadow-md">
      <header>
        <h3 className="text-lg font-semibold text-(--blue)">{data.assumpte}</h3>
        <p className="text-sm text-gray-500">
          {data.remitent} · {formatDate(data.data)}
        </p>
      </header>

      <pre className="whitespace-pre-wrap text-(--blue)">{data.cos}</pre>

{showButtons && (
      <div className="flex flex-wrap gap-3">
         {collapsible && (
        <Button variant="primary" onClick={() => setOpen(!open)}>
          {open
            ? "Ocultar reverberacions"
            : `Mostrar reverberacions (${data.reverberacions?.length || 0})`}
        </Button>
         )}
        <Button variant="primary" to={`/missatge/${data.id}`}>
          +
        </Button>
      </div>
)}

      {open && data.reverberacions?.length > 0 && (
        <div className="mt-4 border-t border-gray-100 pt-3 space-y-3">
          {data.reverberacions?.map((rev) => (
            <div
              key={rev.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4"
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
