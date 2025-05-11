"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import navItems from "./navItems";


const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

 const MobileMenu = () => {  
    return (
      <div
        className={`md:hidden block
          bg-white text-black mt-14 ${
            isMenuOpen
              ? "fixed top-2 left-0 right-0 transition py-2 px-8  ease-out duration-200"
              : "hidden"
          }`}
      >
        <ul className="space-y-6 pb-12">
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
  

  return (
    <header className="mb-24 ">
      <div className="fixed z-100 top-0 left-0 right-0 h-max">
        {/* navbar */}
          <div className="flex items-center justify-between max-w-6xl mx-auto px-8  text-white">
            <Link href="/" className="text-2xl font-bold">Huzsky</Link>
            <div className="flex items-center py-2">
              <ul 
              className=" hidden sm:flex gap-4 lg:gap-8 pr-4">
                {navItems.map(({ title, path }) => {
                  return (
                    <li key={path}
                    >
                      <Link href={path}
                      className="text-sm  lg:text-2xl font-medium lg:font-bold">{title}</Link>
                    </li>
                  );
                })}
              </ul>
              <button onClick={toggleMenu} className="flex flex-1 sm:hidden mr-2 cursor-pointer hover:text-green-400">
                {!isMenuOpen ? (
                  <FaBars className="w-5 h-5 " />
                ) : (
                  <FaXmark className="w-5 h-5" />
                )}
              </button>
              <Link className="btn-cta" href="/user/signup">
                Sign Up
              </Link>
            </div>
          </div>
          <MobileMenu />
        </div>
    </header>
  );
};

export default Header;
