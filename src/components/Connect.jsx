import React from "react";
import { NavLink } from "react-router-dom";
import comm1 from "../assets/image/comm1.jpeg";


const Email = () => {
  return (
    <>
      <div className="w-full flex flex-col p-4 my-4 rounded-lg">
        <h1 className="text-5xl font-bold text-left py-4 md:my-[2rem] my-[1rem] leading-tight">
          Unleash your potential with{" "}
          <span className="text-[#f2be22] ">Learn Develop Grow.</span>
        </h1>
        <p className="font-bold text-gray-500 text-xl">
          Our site offers the inspiration and resources you need to develop
          yourself and reach your goals.
        </p>
        <NavLink to="/signup">
          <button className="w-full p-2 bg-[#f2be22] text-black font-bold mt-4 rounded-lg md:w-[30%] text-center hover:scale-105 duration-150">
            Get in touch
          </button>
        </NavLink>
      </div>
      <div className="w-full shadow-xl flex flex-col p-4 my-auto mx-auto rounded-3xl relative h-0 pb-[75%]">
        <img
          src={comm1}
          alt="/"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl "
        />
      </div>
    </>
  );
};

export default Email;
