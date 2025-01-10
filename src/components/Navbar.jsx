import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const menuItems = [
  { id: "home", name: "Home" },
  { id: "about", name: "About Us" },
  { id: "plans", name: "Pricing Plans" },
  { id: "trainers", name: "Trainers" },
  { id: "contact", name: "Contact Us" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  const handleScroll = () => setIsSticky(window.scrollY > 50);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 ${isSticky ? "bg-gray-900 shadow-lg" : "bg-transparent"} transition-all duration-300`}>
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold text-red-500 cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Bulls Gym
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="text-white text-lg font-medium hover:text-red-500 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transform ${menu ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 shadow-lg flex flex-col items-center justify-center`}
        style={{ width: "80vw", maxHeight: "80vh", borderRadius: "10px" }}
      >
        <div className="flex flex-col gap-6 w-full px-6">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="text-lg font-medium hover:text-red-500 transition-colors duration-300 cursor-pointer text-center py-2 border-b border-gray-700 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
