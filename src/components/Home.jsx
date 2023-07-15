import React from "react";
import homeVideo from "../assets/video/homeVideo.mp4"; // Sample Video
import { MdAccountBox } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full py-[4rem] lg:mt-[4rem] mb-[4rem] lg:mb-[1rem]  px-4 h-screen">
        <div className="max-w-full mx-auto grid lg:grid-cols-2 items-center py-4 md:py-4">
          <video
            muted
            loop
            autoPlay
            src={homeVideo}
            width="500"
            className="rounded-[3%] mx-auto my-4 -z-10 "
          ></video>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#f2be22] font-bold lg:text-5xl lg:p-8 md:text-4xl sm:text-3xl text-4xl py-2 mt-4 md:mt-2 mx-4 lg:mx-auto">
              Improve Your Skills Faster
            </p>
            <p className="font-bold text-gray-500 lg:pb-4 md:text-2xl text-xl md:ml-8 mx-4 mt-4 md:mt-2 sm:mx-8">
              Speed up the skill acquisition process by finding unlimited
              courses that matches your niche.
            </p>
            <NavLink to="/signup">
              <button className="bg-[#f2be22] w-[200px] rounded-md my-6 mx-auto font-semibold py-3 text-black md:mx-0 hover:text-white hover:scale-105 duration-150 mt-6 sm:mt-6 md:mt-4 lg:mt-2">
                Get in touch
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full pt-[6rem] pb-[2rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-5xl font-bold text-center py-8 md:my-[4rem] my-[2rem]">
              Check out our <span className="text-[#f2be22]">courses</span>
            </h1>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <MdAccountBox
              width={100}
              fontSize={75}
              className="mx-auto mt-[-3rem] bg-white"
            />
            <h1 className="text-3xl font-bold text-center py-8">Standard</h1>
            <p className="text-4xl text-center font-bold">Rs 3000/-</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Unlock your full potential and excel in personal and
                professional growth.
              </p>
              <p className="py-2 border-b mx-8">Duration 6 months</p>
            </div>
            <button className="bg-[#f2be22] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black">
              Enroll Now
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <MdAccountBox
              width={100}
              fontSize={75}
              className="mx-auto mt-[-3rem] bg-white"
            />
            <h1 className="text-3xl font-bold text-center py-8">Premium</h1>
            <p className="text-4xl text-center font-bold">Rs 6000/-</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Unlock your full potential and excel in personal and
                professional growth.
              </p>
              <p className="py-2 border-b mx-8">Duration 12 months</p>
            </div>
            <button className="bg-[#f2be22] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-black">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      );
    </>
  );
};

export default Home;
