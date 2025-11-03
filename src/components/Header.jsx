import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import filterIcon from "../assets/filter-icon.svg";
import toggleOnIcon from "../assets/toggle-on.svg";
import toggleOffIcon from "../assets/toggle-off.svg";
import { useTheme } from "../hooks/useThemeContext";

function Header() {
  const [open, setOpen] = useState(false);

  const { theme, setTheme, randomizeColors } = useTheme();

  const [dataEnabled, setDataEnabled] = useState(false);
  const [authorEnabled, setAuthorEnabled] = useState(false);

  const [dataOrder, setDataOrder] = useState("newest"); 
  const [authorOrder, setAuthorOrder] = useState("az");

  const getStyleTranslate = () =>
    theme === "canviant" ? "translate-x-[3.25rem]" : "-translate-x-[3.25rem]";

  return (
    <header className="bg-(--primary) text-(--secondary) transition-colors duration-500 fixed top-0 left-0 w-full shadow-sm z-50">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation and filters"
          className="p-1"
        >
          <img src={filterIcon} alt="Filter icon" className="w-10 h-10" />
        </button>

        {open && (
          <div className="flex justify-center flex-1">
            <Navbar onLinkClick={() => setOpen(false)} />
          </div>
        )}

        <div className="w-10" />
      </div>

      {open && (
        <div className="animate-fade-in-down">
          <div className="flex flex-col items-center justify-center gap-8 p-6">

            {/* ESTIL */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-bold">estil</span>
              <div className="flex items-center gap-3 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex justify-center">
                  <div
                    className={`h-0.5 w-20 bg-(--blue) transition-transform duration-300 ${getStyleTranslate()}`}
                  ></div>
                </div>
                <Button variant="primary" onClick={() => setTheme("normal")}>
                  clar
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setTheme("canviant");
                    randomizeColors();
                  }}
                >
                  canviant
                </Button>
                <Button variant="primary" onClick={() => setTheme("fosc")}>
                  fosc
                </Button>
                <Button variant="primary" onClick={() => setTheme("contrast")}>
                  alt contrast
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <span className="text-lg font-bold">metadades</span>

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

          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
