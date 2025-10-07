"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaPlus, FaXmark } from "react-icons/fa6";
import navItems from "./navItems";


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // Mobile menus for mobile screen
  const MobileMenu = () => {  
    return (
      <div
        className={`md:hidden block
          bg-white text-black mt-10 ${
            isMenuOpen
              ? "fixed top-0 left-0 right-0  py-2 px-8 transition ease-out duration-200 border-t border-gray-200"
              : "hidden"
          }`}
      >
        <ul className="space-y-6 pb-8">
          {navItems.map(({ title, path }) => {
            return (
              <li key={path}>
                <Link href={path}
                onClick={toggleMenu}
                >{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  // Navigations for wider screens
  return (
    <header className="">
      <div className="w-full bg-white">
        {/* navbar */}
          <div className="flex items-center justify-between max-w-7xl mx-auto px-8  text-white">
            <Link href="/" className="text-sm text-gray-900 uppercase font-bold">Renly <br /> Rentals</Link>
            <div className="flex items-center py-2">
              <ul 
              className="hidden sm:flex gap-4 lg:gap-8 pr-4">
                {navItems.map(({ title, path }) => {
                  return (
                    <li key={path}
                    >
                      <Link href={path}
                      className="text-sm text-gray-600 font-[500] ">{title}</Link>
                    </li>
                  );
                })}
              </ul>
              <button onClick={toggleMenu} className="flex flex-1 sm:hidden mr-2 cursor-pointer hover:text-green-400">
                {!isMenuOpen ? (
                  <FaBars className="w-5 h-5 text-gray-900" />
                ) : (
                  <FaXmark className="w-5 h-5 text-gray-900" />
                )}
              </button>
                <div className="flex items-center gap-2">
                  <div >
                    <Link href='/signup' className="hidden text-xs text-gray-900 md:flex items-center gap-1">
                      <FaPlus className='w-3 h-3 text-cyan-600' />
                      Signup
                    </Link>
                  </div>
                  <Link className="hidden md:block btn-cta" href="/user/signup">
                    Submit Property
                  </Link>
                </div>
            </div>
          </div>
          <MobileMenu />
        </div>
    </header>
  );
};

export default Header;
