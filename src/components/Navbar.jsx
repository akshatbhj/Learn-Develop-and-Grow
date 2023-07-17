import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import logo from "../assets/image/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [logoText] = useTypewriter({
    words: ["Learn Develop & Grow"],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 30,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-[#000300] flex justify-between text-white items-center h-24 w-full mx-auto px-4 py-14">
        <img
          src={logo}
          alt="/"
          className="mx-auto bg-white w-12 h-12 ml-2 mr-4 rounded-full"
        />
      <div className="mr-24 lg:mr-[18rem] " >
        <h1 className="w-full text-[15px] md:text-[16px] lg:text-3xl font-extrabold text-white">
          {logoText}
          <span>
            <Cursor cursorStyle="|" cursorColor="white" />
          </span>
        </h1>
        <div  >
          <h6 className="text-[8px] md:text-[10px] lg:text-[12px]" >LEARNING & DEVELOPMENT CENTER</h6>
        </div>
      </div>
      <ul className="hidden md:flex">
        <NavLink to="/">
          <li className="p-2 text-center lg:mx-2 hover:cursor-pointer hover:text-[red] hover:scale-105 duration-150">
            Home
          </li>
        </NavLink>
        <NavLink to="/courses">
          <li className="p-2 mx-1 hover:cursor-pointer hover:text-[red] hover:scale-105 duration-150">
            Courses
          </li>
        </NavLink>
        <NavLink to="/signup">
          <button className="p-2 mx-1 lg:mx-4 w-[120px] bg-transparent border-2 border-white text-white font-bold rounded-full hover:border-[red] hover:bg-[red] duration-150">
            Sign Up
          </button>
        </NavLink>
        <NavLink to="/signin">
          <button className="p-2.5 mx-1 lg:mx-2 w-[120px] bg-[red] text-white font-bold rounded-full hover:opacity-80 duration-150">
            Sign In
          </button>
        </NavLink>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden hover:cursor-pointer hover:text-[#f2be22]"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 md:hidden sm:hidden top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img src={logo} alt="/" className="ml-8 mt-[1rem] bg-white w-16 h-16" />
        <ul className="uppercase p-4 h-[50%] z-10">
          <NavLink to="/">
            <li className="p-4 border-b border-b-gray-600 hover:cursor-pointer hover:text-[#f2be22]">
              Home
            </li>
          </NavLink>
          <NavLink to="/courses">
            <li className="p-4 border-b border-b-gray-600 hover:cursor-pointer hover:text-[#f2be22]">
              Courses
            </li>
          </NavLink>
          <NavLink to="/signup">
            <button className="p-2 my-8 mx-auto w-full bg-transparent text-[#f2be22] border-2 border-[#f2be22] font-bold rounded-md hover:text-white">
              Sign Up
            </button>
          </NavLink>
          <NavLink to="/signin">
            <button className="p-2 mx-auto w-full bg-[#f2be22] text-black font-bold rounded-md hover:text-white">
              Sign In
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
