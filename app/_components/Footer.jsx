import React from "react";
import ContactUs from "./ContactUs";

function Footer() {
  return (
    <div className="bg-[#013448] text-[#d9e0e3] py-9 px-6">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col items-center pt-9">
          <img src="/images/logonavy.jpg" alt="logo" className="w-3xs px-9" />
        </div>
        <ContactUs />
        <div className="flex flex-col items-center text-xl lg:items-start justify-center">
          <span>TAX REGISTRATION NUMBER</span>
          <span>12345678</span>
        </div>
      </div>
      <div className="px-9 pt-4 flex flex-col items-center">
        <hr className="w-full border-t-2 border-white" />
        <span className="py-4 text-center">© 2025 All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
