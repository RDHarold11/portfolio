import React, { useState } from "react";
import { Link } from "react-scroll";

import logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed text-gray-300 w-full h-[80px] items-center px-4 bg-[#0a192f]">
      <div className="flex justify-between items-center max-w-[1300px] mx-auto py-4">
        <div>
          <img src={logo} alt="logo" style={{ width: "50px" }} />
        </div>
        <ul className="hidden md:flex">
          <li className="font-bold"><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="font-bold"><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li className=" font-bold"><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className=" font-bold"><Link to="work" smooth={true} duration={500}>Work</Link></li>
          <li className="font-bold"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        {/* Menu hamburguesa */}
        <div className="z-20 md:hidden flex" onClick={handleClick}>
          {!toggle ? (
            <FaBars cursor="pointer" size={30}></FaBars>
          ) : (
            <FaTimes cursor="pointer" size={30}></FaTimes>
          )}
        </div>
        {/* Menu monile */}
        <ul
          className={
            !toggle
              ? "hidden"
              : "absolute z-10 top-0 left-0 w-full h-screen text-center bg-[#0a192f] flex flex-col transition-all duration-75 justify-center text-white items-center"
          }
        >
          <li className="py-6 text-4xl hover:bg-pink-500 w-full mx-auto transition ease-in-out delay-100">
          <Link onClick={handleClick}  to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="py-6 text-4xl hover:bg-pink-500 w-full mx-auto transition ease-in-out delay-100">
          <Link onClick={handleClick}  to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="py-6 text-4xl hover:bg-pink-500 w-full mx-auto transition ease-in-out delay-100">
          <Link onClick={handleClick}  to="skills" smooth={true} duration={500}>Skills</Link>
          </li>
          <li className="py-6 text-4xl hover:bg-pink-500 w-full mx-auto transition ease-in-out delay-100">
          <Link onClick={handleClick}  to="work" smooth={true} duration={500}>Work</Link>
          </li>
          <li className="py-6 text-4xl hover:bg-pink-500 w-full mx-auto transition ease-in-out delay-100">
          <Link onClick={handleClick}  to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
