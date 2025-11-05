import React from "react";
import Button from "./Button";

export default function FooterButtons() {
  return (
    <div
      className="
        fixed bottom-4 left-0 w-full
        flex justify-between items-center
        px-6 sm:px-10
        z-40
      "
    >
      <Button
        variant="secondary"
        onClick={() => window.open('https://raio.issim.net', '_blank')}
        className="px-4 py-2 sm:px-6 sm:py-3 shadow-md"
      >
        🏠
      </Button>

      <Button
        variant="secondary"
        onClick={() => window.open('https://raio.issim.net/mozfestpost/', '_blank')}
        className="px-4 py-2 sm:px-6 sm:py-3 shadow-md"
      >
        ✍️
      </Button>
    </div>
  );
}