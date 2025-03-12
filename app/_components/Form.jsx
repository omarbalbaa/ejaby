import React from "react";
import Dropdown from "./Dropdown";

function Form() {
  return (
    <div className="flex justify-center w-full">
      <div className="mt-6 pl-9 pb-9 w-96">
        <img src="/images/logowhite.jpg" alt="logo" className="w-3xs my-9" />
        <div className="flex flex-col">
          <h2 className=" w-full my-6 text-[#013448] text-lg font-semibold">
            FEEL SPECIAL AT EVERY STAY
          </h2>
          <h1 className="w-full text-4xl my-6 text-[#013448] font-bold">
            JOIN US NOW
          </h1>
        </div>

        {/* DROPDOWN */}
        <Dropdown />

        {/* NAME Input */}
        <div className="my-6 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-[#013448] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#013448]">
          <div className="shrink-0 text-base p-3 font-bold text-[#013448] select-none sm:text-sm/6">
            NAME
          </div>
          <input
            id="name"
            name="name"
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
          />
        </div>

        {/* Telephone Input */}
        <div className="my-6 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-[#013448] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#013448]">
          <div className="shrink-0 text-base p-3 font-bold text-[#013448] select-none sm:text-sm/6">
            TELEPHONE
          </div>
          <input
            id="telephone"
            name="telephone"
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
          />
        </div>

        {/* EMAIL Input */}
        <div className="my-6 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-[#013448] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#013448]">
          <div className="shrink-0 text-base p-3 font-bold text-[#013448] select-none sm:text-sm/6">
            EMAIL
          </div>
          <input
            id="email"
            name="email"
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
          />
        </div>

        {/* UNIT TYPE Input */}
        <div className="my-6 flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-[#013448] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#013448]">
          <div className="shrink-0 text-base p-3 font-bold text-[#013448] select-none sm:text-sm/6">
            UNIT TYPE
          </div>
          <input
            id="unit-type"
            name="unit-type"
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-[#013448] focus:outline-none sm:text-sm/6"
          />
          <div className="shrink-0 text-base p-3 text-[#013448] select-none sm:text-sm/6">
            OPTIONAL
          </div>
        </div>

        {/* UNIT LOCATION Input */}
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-[#013448] has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#013448]">
          <div className="shrink-0 text-base p-3 font-bold text-[#013448] select-none sm:text-sm/6">
            UNIT LOCATION
          </div>
          <input
            id="unit-location"
            name="unit-location"
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
          />
        </div>
          
          {/* BUTTON */}
          <button className="w-full my-6 py-3 rounded-md bg-[#013448] text-white font-bold text-base cursor-pointer">SUBMIT</button>

      </div>
    </div>
  );
}

export default Form;
