import React from "react";
import Button from "./Button";

export default function Navbar() {
  const links = [
    { to: "/style1", label: "scroll" },
    { to: "/style2", label: "1:1" },
    { to: "/style3", label: "post-it" },
    { to: "/style4", label: "toggle" },
  ];

  return (
    <nav className="flex items-center gap-4 p-4">
      {links.map((link) => (
        <Button
          key={link.to}
          to={link.to}
          variant="primary"
        >
          {link.label}
        </Button>
      ))}
    </nav>
  );
}
