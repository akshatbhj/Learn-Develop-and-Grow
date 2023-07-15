import React from "react";
import { MdAccountBox } from "react-icons/md";

const ProfessorReviewSection = () => {
  const professorReview = {
    name: "Professor Firoz",
    course: "",
    review:
      '"Great leaders are not born they are made through challenges, obstacles and hardships."',
  };

  return (
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
  );
};

export default ProfessorReviewSection;
