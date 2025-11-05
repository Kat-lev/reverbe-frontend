import React from "react";
import Button from "./Button";
import PenIcon from "./PenIcon";
import HomeIcon from "./HomeIcon";


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
      >
        <HomeIcon className="scale-150"/>
      </Button>

      <Button
        variant="secondary"
        onClick={() => window.open('https://raio.issim.net/mozfestpost/', '_blank')}
      >
        <PenIcon />
      </Button>
    </div>
  );
}