import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-3 py-1.5 max-md:px-1 bg-slate-900 fixed z-20">
      <img src={logo} alt="logo" width={40} height={40} />

      <div className="flex items-center gap-3">
        <button className="text-white bg-blue-600 hover:bg-blue-700 font-medium text-base px-5 py-1.5 rounded">
          Login
        </button>
        <button className="text-white bg-green-600 hover:bg-green-700 font-medium rounded px-5 py-1.5">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
