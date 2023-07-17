import React from "react";
import homeVideo from "../assets/video/homeVideo.mp4";
import homeImg from "../assets/image/courses.jpg";
import { MdAccountBox } from "react-icons/md";
import { NavLink } from "react-router-dom";
import comm1 from "../assets/image/comm1.jpeg";
import logo from "../assets/image/logo.jpg";

const Home = () => {
  const professorReview = {
    name: "Professor Firoz",
    course: "",
    review:
      '"Great leaders are not born they are made through challenges, obstacles and hardships."',
  };

  return (
    <>
      <div className="w-full py-[4rem] lg:mt-[4rem] mb-[4rem] lg:mb-[1rem]  px-4 h-screen mt-10 ">
        <div className="max-w-full mx-auto grid lg:grid-cols-2 items-center py-4 md:py-4">
          <video
            controls
            muted
            autoPlay
            loop
            src={homeVideo}
            width="500"
            className="rounded-[3%] mx-auto my-4"
          ></video>
          <div className="flex flex-col justify-center items-center">
            <p className="text-white font-bold lg:text-4xl lg:p-8 md:text-3xl md:text-center lg:text-left sm:text-3xl text-2xl py-2 mt-4 md:mt-2 mx-4 lg:mx-auto">
              UNLEASH & EMPOWER YOUR TRUE POTENTIAL WITH LEARN DEVELOP &{" "}
              <span className="text-[red] font-extrabold">GROW</span>
            </p>
            <p className="font-bold text-gray-500 lg:pb-4 md:text-xl text-2xl md:ml-8 mx-4 mt-8 md:mt-2 sm:mx-8">
              Speed up the skill acquisition process by finding unlimited
              courses that matches your niche.
            </p>
            <NavLink to="/signup">
              <button className="bg-[red] w-[200px] rounded-md my-6 mx-auto font-bold py-3 text-white md:mx-0 hover:text-white hover:scale-105 duration-150 mt-16 sm:mt-6 md:mt-4 lg:mt-2">
                Get in touch
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-full pt-[6rem] pb-[2rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-">
          <div className="w-full flex flex-col p-4 my-2 rounded-lg text-left ">
            <h1 className="text-4xl font-bold text-left py-2 md:my-[2rem] my-[1rem] mt-[-2rem] lg:text-5xl leading-tight">
              Enhance communication, leadership, and self-confidence.
            </h1>
            <p className="font-bold text-gray-500 text-xl mt-[1rem] ">
              Our site offers the inspiration and resources you need to develop
              yourself and reach your goals.
            </p>
            <div className="flex items-center mt-6">
              <input
                type="email"
                class="w-full sm:w-auto px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none"
                placeholder="Email address"
              />
              <button
                type="submit"
                class="ml-2 px-4 py-2 rounded-r-lg bg-[red] font-bold text-white hover:opacity-80"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-end w-full h-0 pb-[75%] rounded-r-lg">
            <img
              src={comm1}
              alt="/"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full pt-[6rem] pb-[2rem] px-4 bg-white">
        <h1 className="text-[#000300] text-5xl md:text-5xl lg:text-6xl font-bold text-center mt-[-2rem] mb-[8rem]">
          Check out our <span className="text-[red]">courses.</span>
        </h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              src={logo}
              alt="/"
              className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-full"
            />
            <h1 className="text-3xl font-bold text-center py-8">Standard</h1>
            <p className="text-4xl text-center font-bold">
              Rs 500 /- <span className="text-[16px]">per month</span>
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Unlock your full potential and excel in personal and
                professional growth.
              </p>
              <p className="py-2 border-b mx-8">Duration 6 months</p>
              <NavLink to="/signup">
                <button className="bg-[red] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white">
                  Enroll Now
                </button>
              </NavLink>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              src={logo}
              alt="/"
              className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-full"
            />
            <h1 className="text-3xl font-bold text-center py-8">Premium</h1>
            <p className="text-4xl text-center font-bold">
              Rs 500 /- <span className="text-[16px]">per month</span>
            </p>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Unlock your full potential and excel in personal and
                professional growth.
              </p>
              <p className="py-2 border-b mx-8">Duration 12 months</p>
              <NavLink to="/signup">
                <button className="bg-[red] w-[150px]  md:w-[180px] rounded-md my-6 mx-auto font-medium px-6 py-3 text-white">
                  Enroll Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-[2rem] pb-[2rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="w-full flex flex-col p-4 my-4 rounded-lg">
            <h1 className="text-5xl font-bold text-center py-4 md:my-[4rem] my-[2rem] leading-snug">
              Start your personal growth journey with{" "}
              <span className="text-[#f2be22] ">Learn Develop Grow today.</span>
            </h1>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-auto mx-auto rounded-lg">
            <MdAccountBox
              width={100}
              fontSize={75}
              className="mx-auto mt-[-3rem] bg-white"
            />
            <p className="text-2xl text-center font-bold  border-t p-8 mt-[3rem] italic">
              {professorReview.review}
            </p>
            <p class="py-4 mx-auto text-xl text-[#f2be22] font-bold border-b text-center">
              {" "}
              - Professor Firoz
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
