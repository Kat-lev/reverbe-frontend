import React, { useState } from "react";
import toggleOnIcon from "../assets/toggle-on.svg";
import toggleOffIcon from "../assets/toggle-off.svg";

function Metadata() {
  const [dataEnabled, setDataEnabled] = useState(false);
  const [authorEnabled, setAuthorEnabled] = useState(false);

  const [dataOrder, setDataOrder] = useState("newest");
  const [authorOrder, setAuthorOrder] = useState("az");

  return (
    <div className="flex flex-col items-center gap-6">
      <span className="text-lg font-bold">metadades</span>

      {/* DATA */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">data</span>

        <button onClick={() => setDataEnabled(!dataEnabled)}>
          <img
            src={dataEnabled ? toggleOnIcon : toggleOffIcon}
            alt="toggle data metadata"
            className="w-8 h-8"
          />
        </button>

        <div className="flex items-center gap-3">
          <button
            className={`${dataOrder === "oldest" ? "font-bold" : "opacity-50"} ${
              !dataEnabled && "opacity-30"
            }`}
            onClick={() => dataEnabled && setDataOrder("oldest")}
          >
            cronològic
          </button>

          <button
            className={`${dataOrder === "newest" ? "font-bold" : "opacity-50"} ${
              !dataEnabled && "opacity-30"
            }`}
            onClick={() => dataEnabled && setDataOrder("newest")}
          >
            invers
          </button>

          <button
            className={`${dataOrder === "random" ? "font-bold" : "opacity-50"} ${
              !dataEnabled && "opacity-30"
            }`}
            onClick={() => dataEnabled && setDataOrder("random")}
          >
            random
          </button>
        </div>
      </div>

      {/* AUTHOR */}
      <div className="flex items-center gap-4">
        <span className="text-lg font-medium">autor</span>

        <button onClick={() => setAuthorEnabled(!authorEnabled)}>
          <img
            src={authorEnabled ? toggleOnIcon : toggleOffIcon}
            alt="toggle author metadata"
            className="w-8 h-8"
          />
        </button>

        <div className="flex items-center gap-3">
          <button
            className={`${authorOrder === "az" ? "font-bold" : "opacity-50"} ${
              !authorEnabled && "opacity-30"
            }`}
            onClick={() => authorEnabled && setAuthorOrder("az")}
          >
            A-Z
          </button>

          <button
            className={`${authorOrder === "za" ? "font-bold" : "opacity-50"} ${
              !authorEnabled && "opacity-30"
            }`}
            onClick={() => authorEnabled && setAuthorOrder("za")}
          >
            Z-A
          </button>

          <button
            className={`${authorOrder === "random" ? "font-bold" : "opacity-50"} ${
              !authorEnabled && "opacity-30"
            }`}
            onClick={() => authorEnabled && setAuthorOrder("random")}
          >
            random
          </button>
        </div>
      </div>
    </div>
  );
}

export default Metadata;
