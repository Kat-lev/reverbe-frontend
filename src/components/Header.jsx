import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import filterIcon from "../assets/filter-icon.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState("newest");
  const [style, setStyle] = useState("normal");

  const getOrderTranslate = () => {
    switch (order) {
      case "oldest":
        return "-translate-x-[6.5rem]";
      case "newest":
        return "translate-x-0";
      case "random":
        return "translate-x-[6.5rem]";
      default:
        return "translate-x-0";
    }
  };

  const getStyleTranslate = () =>
    style === "animated" ? "translate-x-[3.25rem]" : "-translate-x-[3.25rem]";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
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
        <div className="bg-white animate-fade-in-down">
          <div className="flex flex-col items-center justify-center gap-8 p-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-bold text-(--blue)">ordre</span>
              <div className="flex items-center gap-3 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex justify-center">
                  <div
                    className={`h-0.5 w-20 bg-(--blue) transition-transform duration-300 ${getOrderTranslate()}`}
                  ></div>
                </div>
                <Button variant="primary" onClick={() => setOrder("oldest")}>
                  cronològic
                </Button>
                <Button variant="primary" onClick={() => setOrder("newest")}>
                  invers
                </Button>
                <Button variant="primary" onClick={() => setOrder("random")}>
                  a l&apos;atzar
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-lg font-bold text-(--blue)">estil</span>
              <div className="flex items-center gap-3 relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex justify-center">
                  <div
                    className={`h-0.5 w-20 bg-(--blue) transition-transform duration-300 ${getStyleTranslate()}`}
                  ></div>
                </div>
                <Button variant="primary" onClick={() => setStyle("normal")}>
                  normal
                </Button>
                <Button variant="primary" onClick={() => setStyle("animated")}>
                  canviant
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
