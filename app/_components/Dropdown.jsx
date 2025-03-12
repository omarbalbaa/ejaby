import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React from "react";

function Dropdown() {
  return (
    <div className="mt-2">
      <div className="flex items-center rounded-md bg-white outline-1 -outline-offset-1 outline-[#013448] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#013448]">
        <div className="grid w-full focus-within:relative">
          <select
            id="dropdown"
            name="dropdown"
            aria-label="dropdown"
            className="col-start-1 font-bold row-start-1 w-full appearance-none rounded-md p-3 text-base text-[#013448] placeholder:text-[#013448] sm:text-sm/6"
          >
            <option value="" disabled selected hidden>
              WHAT ARE YOU INTERESTED IN?
            </option>
            <option>Marina 1</option>
            <option>Marina 2</option>
            <option>Marina 3</option>
            <option>Marina 4</option>
            <option>Marina 5</option>
            <option>Marina 6</option>
            <option>Marina 7</option>
            <option>mazarine</option>
            <option>plage</option>
            <option>zahra</option>
            <option>diplo 3</option>
            <option>marassi</option>
            <option>seashell</option>
            <option>blumar </option>
            <option>hacienda bay</option>
            <option>hacienda white </option>
            <option>hacienda red </option>
            <option>playa </option>
            <option>D - bay </option>
            <option>la vista </option>
            <option>mountain view </option>
            <option>katameya coast </option>
            <option>sea view</option>
            <option>jefaira </option>
            <option>foka bay </option>
            <option>ramla </option>
            <option>almaza bay </option>
            <option>jamila</option>
            <option>hacienda heneish </option>
            <option>hacienda west </option>
            <option>porto marina </option>
            <option>playa ghazala </option>
            <option>amwaj</option>
            <option>lasirena</option>
            <option>lazorde bay</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#013448] sm:size-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
