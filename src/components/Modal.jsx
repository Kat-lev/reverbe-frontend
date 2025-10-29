import React from "react";
import Button from "./Button";

export default function Modal({ children, onClose }) {
   const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
     <div className="fixed inset-0 flex items-center justify-center z-50"
     style={{ backgroundColor: "rgba(107, 114, 128, 0.4)" }}
      onClick={handleOverlayClick}>
      <div className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full p-6">
        <div className="flex justify-end">
          <Button
            variant="primary"
            onClick={onClose}
            className="px-3! py-1! text-sm font-semibold"
          >
            ✕
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
