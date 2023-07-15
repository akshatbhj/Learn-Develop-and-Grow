import React from "react";
import comm1 from "../assets/image/comm1.jpeg";
import comm2 from "../assets/image/comm2.jpeg";
import comm3 from "../assets/image/comm3.jpeg";
import comm4 from "../assets/image/comm4.jpeg";
import { NavLink } from "react-router-dom";

const Community = () => {
  return (
    <>
      <div className="w-full pt-[2rem] pb-[2rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-auto mx-auto rounded-3xl relative h-0 pb-[75%]">
            <img
              src={comm2}
              alt="/"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl  p-12"
            />
          </div>
          <div className="w-full flex flex-col p-4 my-2 rounded-lg">
            <h1 className="text-5xl font-bold text-left py-4 md:my-[3rem]">
              Personalized development plans.
            </h1>
            <p className="font-bold text-gray-500 mt-4 md:mt-0 md:text-2xl">
              Learn Develop Grow helps you build a personalized development plan
              based on your unique personality and goals. We'll guide you
              through exercises and activities based on your needs.
            </p>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-auto mx-auto rounded-3xl relative h-0 pb-[75%]">
            <img
              src={comm3}
              alt="/"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="w-full flex flex-col p-4 my-2 rounded-lg">
            <h1 className="text-5xl font-bold text-left py-4 md:my-[3rem]">
              Motivating content.
            </h1>
            <p className="font-bold text-gray-500 mt-4 md:mt-0 md:text-2xl">
              Our website features articles, videos, and podcasts from industry
              experts and successful individuals aimed at motivating and
              inspiring you to take action and achieve new levels of growth and
              development.
            </p>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-auto mx-auto rounded-3xl relative h-0 pb-[75%]">
            <img
              src={comm4}
              alt="/"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="w-full flex flex-col p-4 my-2 rounded-lg">
            <h1 className="text-5xl font-bold text-left py-4 md:my-[3rem]">
              Community support.
            </h1>
            <p className="font-bold text-gray-500 mt-4 md:mt-0 md:text-2xl">
              Join our community to interact with other like-minded individuals
              and receive support from our team of experts. Share your
              experiences, challenges, and successes on your journey to personal
              growth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
