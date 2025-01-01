'use client';
import { BsFillMapFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md px-10 fixed w-full z-10">
      {/* Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        <BsFillMapFill className="text-black" size={28} />
        <h1 className="text-black text-2xl font-bold">WhatBytes</h1>
      </div>

      {/* Profile Section */}
      <div className="hidden sm:flex items-center gap-2 border-2 border-gray-200 p-2 rounded-lg cursor-pointer">
        <CgProfile className="text-black" size={28} />
        <h1 className="text-black font-semibold">Amaan Ahmad</h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <HiMenu
          size={30}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer text-black"
        />
      </div>

      {/* Mobile Profile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-10 bg-white shadow-lg p-4 border rounded-lg sm:hidden">
          <div className="flex items-center gap-2">
            <CgProfile className="text-black" size={28} />
            <h1 className="text-black font-semibold">Amaan Ahmad</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
