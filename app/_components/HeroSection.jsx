import React from "react";
import Form from "./Form";

function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full flex flex-row lg:w-1/2 justify-between">
        {/* Form Section */}
        <div className="w-full md:w-2/3 px-4">
          <Form />
        </div>

        {/* Rotated Text Beside Form */}
        <div className="hidden w-1/3 md:flex justify-center items-center">
          <p className="-rotate-90 whitespace-nowrap text-[#d9e0e3] text-8xl font-bold cursor-default">
            COMING SOON
          </p>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2">
        <img className="w-full" src="/images/sidepic.png" alt="placeholder" />
      </div>
    </div>
  );
}

export default HeroSection;
