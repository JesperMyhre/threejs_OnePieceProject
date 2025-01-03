import React from "react";
import { navLinks } from "../constants";
import { useState } from "react";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name }) => (
        <li key={id} className="nav-li">
          <a href="#" className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const [scrolled, setScrolled] = useState(false);
  const isScrolled = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", isScrolled);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 ${
        scrolled ? "bg-[#1b2452]" : "bg-none"
      }`}
    >
      <div className="max-w">
        <div className="flex justify-between items-center mx-auto c-space">
          <a href="/" className="w-40">
            <img
              src="./assets/onepiecelogo.png"
              alt="logo"
              className="w-full h-auto cursor-pointer hover:brightness-125"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <img
              src={isOpen ? "./assets/close.svg" : "./assets/menu.svg"}
              alt="menu"
              className="w-6 h-6 h-auto"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
