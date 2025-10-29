import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Button = ({ children, variant = "primary", to, onClick, className, ...props }) => {
  const baseStyles =
    "flex items-center justify-center rounded-md font-semibold transition-all duration-200 ease-in-out focus:outline-none align-middle px-4 py-2";

  const colorStyles = {
    primary: "text-[var(--blue)] bg-[var(--white)] rounded-full px-5 py-2 flex items-center gap-2",
    secondary: "text-[var(--white)] bg-[var(--blue)] hover:bg-[var(--blue)]-800 rounded-full px-5 py-2 flex items-center gap-2",
    ghost: "text-[var(--blue)] bg-transparent hover:bg-[var(--blue)]/10 px-3 py-1 rounded flex items-center gap-2",
  };

  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx(baseStyles, colorStyles[isActive ? "secondary" : variant], className)
        }
        onClick={onClick} 
        {...props}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={clsx(baseStyles, colorStyles[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
