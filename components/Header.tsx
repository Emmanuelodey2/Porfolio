import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="fixed top-12 left-0 w-full bg-transparent  z-50">
      <div className="max-w-7xl mx-auto flex items-center bg-slate-400 justify-between shadow-md rounded-full  h-16 px-20">
        {/* Logo */}
        <div className="flex items-center">
          {/* <Image
            src="/logo.png" // put your logo inside public/ folder
            alt="Portfolio Logo"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <span className="ml-3 font-bold text-lg text-gray-900">Emmanuel</span>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
