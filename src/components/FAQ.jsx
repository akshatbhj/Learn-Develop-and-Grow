import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is the fees structure?",
      answer: "Rs. 500 per month, it is negotiable.",
    },
    {
      question: "What is the duration of this course?",
      answer: "1 year, Personality Development is a never ending process.",
    },
    {
      question: "When is the class provided?",
      answer: "Every Sunday.",
    },
    {
      question: "What is the timing for the class?",
      answer: "8am to 11am.",
    },
    {
      question: "Where it is located?",
      answer:
        "Panch Masjid Road,Thakurpukur bazar, Kolkata, West Bengal - 700063.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-[#f2be22] text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-[3rem]">
        FAQ's
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`bg-[#202020] text-[#f2be22] rounded-lg shadow-md p-6 ${
              activeIndex === index ? "bg-white-100" : ""
            }`}
          >
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-4">
                <p className="text-white font-bold">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
