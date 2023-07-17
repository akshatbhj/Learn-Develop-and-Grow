import React from "react";
import { MdAccountBox } from "react-icons/md";
import profpic from "../assets/image/profpic.jpg";


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
          <h1 className="text-5xl font-bold text-center py-4 md:my-[4rem] my-[2rem] mt-[-2rem] leading-snug">
            Start your personal growth journey with{" "}
            <span className="text-[red] ">Learn Develop Grow today.</span>
          </h1>
        </div>
        <div className="w-full shadow-md shadow-[red] flex flex-col p-4 my-auto mx-auto rounded-lg">
          <img src={profpic} alt="/" className="mx-auto mt-[-3rem] bg-white w-20 h-20 rounded-full"/>
          <p className="text-2xl text-center font-bold  border-t p-8 mt-[3rem] italic">
            {professorReview.review}
          </p>
          <p class="py-4 mx-auto text-[16px] text-[red] font-bold border-b text-center">
            {" "}
            <span className="italic" >- Prof.</span> Mohammad Firoz
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorReviewSection;
