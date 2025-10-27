import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { to: "/style1", label: "Scroll" },
    { to: "/style2", label: "1 to 1" },
    { to: "/style3", label: "Post-it" },
    { to: "/style4", label: "Toggle" },
  ];

  return (
    <nav className="flex items-center gap-4 p-4">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive
              ? "font-bold underline"
              : "hover:underline"
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}