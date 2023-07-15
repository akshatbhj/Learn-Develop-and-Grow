import React from "react";
import homeImg from "../assets/image/courses.jpg";
import { MdAccountBox } from "react-icons/md";

const Courses = () => {
  return (
    <div className="w-full pt-[12rem] pb-[2rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img src={homeImg} alt="/" />
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
              Unlock your full potential and excel in personal and professional
              growth.
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
              Unlock your full potential and excel in personal and professional
              growth.
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
};

export default Courses;
