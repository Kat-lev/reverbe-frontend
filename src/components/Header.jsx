import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import filterIcon from "../assets/filter-icon.svg";
import { useTheme } from "../hooks/useThemeContext";
import Metadata from "./Metadata";

function Header({
  dataEnabled,
  setDataEnabled,
  authorEnabled,
  setAuthorEnabled,
  dataOrder,
  setDataOrder,
  authorOrder,
  setAuthorOrder
}) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, randomizeColors } = useTheme();

  const getStyleTranslate = () =>
    theme === "canviant" ? "translate-x-[3.25rem]" : "-translate-x-[3.25rem]";

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
        <div ref={dropdownRef} className="animate-fade-in-down">
          <div className="flex flex-col items-center justify-center gap-8 p-6">
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

            <Metadata
              dataEnabled={dataEnabled}
              setDataEnabled={setDataEnabled}
              authorEnabled={authorEnabled}
              setAuthorEnabled={setAuthorEnabled}
              dataOrder={dataOrder}
              setDataOrder={setDataOrder}
              authorOrder={authorOrder}
              setAuthorOrder={setAuthorOrder}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
