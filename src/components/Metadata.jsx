import React, { useState } from "react";
import RandomIcon from "./icons/RandomIcon";
import NumericDescendingIcon from "./icons/NumericDescendingIcon";
import NumericAscendingIcon from "./icons/NumericAscendingIcon";
import ToggleOffIcon from "./icons/ToggleOnIcon";
import ToggleOnIcon from "./icons/ToggleOffIcon";

function Metadata({
  dataEnabled,
  setDataEnabled,
  authorEnabled,
  setAuthorEnabled,
  dataOrder,
  setDataOrder,
  authorOrder,
  setAuthorOrder
}) {

  return (
    <div className="flex flex-col items-center gap-6 w-full overflow-x-hidden">
      <span className="text-lg font-bold">metadata</span>

      <div className="flex flex-wrap justify-center items-center gap-4 w-full text-center">
        <span className="text-lg font-medium">date</span>

        <button onClick={() => setDataEnabled(!dataEnabled)}>
          {dataEnabled ? (
          <ToggleOffIcon className="w-8 h-8" />
          ) : (
           <ToggleOnIcon className="w-8 h-8" />
          )}
        </button>

        <div className="flex items-center gap-3">

          <button
            className={`hidden md:inline px-3 py-1 ${dataOrder === "newest" ? "font-bold text-[var(--primary)]" : "opacity-100"
              } ${!dataEnabled && "opacity-100"}`}
            onClick={() => dataEnabled && setDataOrder("newest")}
          >
            ascending
          </button>
          <button
            className={`hidden md:inline px-3 py-1 ${dataOrder === "oldest" ? "font-bold text-[var(--primary)]" : "opacity-50"
              } ${!dataEnabled && "opacity-30"}`}
            onClick={() => dataEnabled && setDataOrder("oldest")}
          >
            descending
          </button>

          <button
            className={`md:hidden p-2 ${dataOrder === "newest" ? "text-[var(--primary)]" : "opacity-50"
              } ${!dataEnabled && "opacity-30"}`}
            onClick={() => dataEnabled && setDataOrder("newest")}
          >
            <NumericAscendingIcon className="w-6 h-6" />
          </button>
          <button
            className={`md:hidden p-2 ${dataOrder === "oldest" ? "text-[var(--primary)]" : "opacity-50"
              } ${!dataEnabled && "opacity-30"}`}
            onClick={() => dataEnabled && setDataOrder("oldest")}
          >
            <NumericDescendingIcon className="w-6 h-6" />
          </button>

          <button
            className={`px-3 py-1 ${dataOrder === "random" ? "font-bold" : "opacity-50"} ${!dataEnabled && "opacity-30"
              }`}
            onClick={() => dataEnabled && setDataOrder("random")}
          >
            <RandomIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 w-full text-center">
        <span className="text-lg font-medium">author</span>

        <button onClick={() => setAuthorEnabled(!authorEnabled)}>
          {authorEnabled ? (
          <ToggleOffIcon className="w-8 h-8" />
          ) : (
           <ToggleOnIcon className="w-8 h-8" />
          )}
        </button>

        <div className="flex items-center gap-3">
          <button
            className={`px-3 py-1 ${authorOrder === "az" ? "font-bold" : "opacity-50"} ${!authorEnabled && "opacity-30"
              }`}
            onClick={() => authorEnabled && setAuthorOrder("az")}
          >
            A-Z
          </button>

          <button
            className={`px-3 py-1 ${authorOrder === "za" ? "font-bold" : "opacity-50"} ${!authorEnabled && "opacity-30"
              }`}
            onClick={() => authorEnabled && setAuthorOrder("za")}
          >
            Z-A
          </button>

          <button
            className={`px-3 py-1 ${authorOrder === "random" ? "font-bold" : "opacity-50"} ${!authorEnabled && "opacity-30"
              }`}
            onClick={() => authorEnabled && setAuthorOrder("random")}
          >
            <RandomIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Metadata;
