import React from "react";
import { MdAccountBox } from "react-icons/md";

const Testimonials = () => {
  return (
    <>
      <div className="w-full py-[4rem] pb-[2rem] bg-[#000300]">
        <h1 className="text-[#f2be22] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-[3rem]">
          Testimonials
        </h1>
        <div className="bg-[#000300] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md shadow-[#f2be22]">
                <div className="flex items-center mb-4">
                  <MdAccountBox
                    width={100}
                    fontSize={75}
                    className="w-12 h-12 rounded-full mr-4 bg-white"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#f2be22]">Shuvajit Patra</h4>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-2xl ">
                  "Learn Develop Grow has helped me gain confidence and unlock
                  my potential in ways I never thought possible."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md shadow-[#f2be22]">
                <div className="flex items-center mb-4">
                  <MdAccountBox
                    width={100}
                    fontSize={75}
                    className="w-12 h-12 rounded-full mr-4 bg-white"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#f2be22]">Nasuil Gazi</h4>
                  </div>
                </div>
                <p className="text-gray-800 font-bold text-2xl">
                  "I love the personalized approach to development that Learn
                  Develop Grow offers. It's truly changed the way I see myself
                  and my goals."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
