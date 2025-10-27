import React, { useState } from "react";
import Navbar from "./Navbar";
import filterIcon from "../assets/filter-icon.svg";

function Header() {
  const [open, setOpen] = useState(false);
    return (
    <header className="fixed top-0 left-0 w-full h-4 flex items-center gap-4 p-4 bg-white shadow-sm z-50">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="p-1"
      >
        <img src={filterIcon} alt="Filter icon" className="w-3 h-3" />
      </button>
      {open && (
        <Navbar onLinkClick={() => setOpen(false)} />
      )}
    </header>
  );
}

export default Header;