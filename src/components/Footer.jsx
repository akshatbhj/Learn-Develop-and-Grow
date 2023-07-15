import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#f2be22]">
          Learn Develop and Grow
        </h1>
        <p className="py-4">
          Empower yourself through personal growth. Enhance communication,
          leadership, and self-confidence. Discover your true potential. Start
          your journey now!
        </p>
        <div className="flex justify-between lg:w-[100%] md:w-[50%]  my-6">
          <FaFacebook
            size={30}
            className="hover:scale-110 duration-200 hover:cursor-pointer"
          />
          <FaInstagram
            size={30}
            className="hover:scale-110 duration-200 hover:cursor-pointer"
          />
          <FaTwitter
            size={30}
            className="hover:scale-110 duration-200 hover:cursor-pointer"
          />
          <FaWhatsapp
            size={30}
            className="hover:scale-110 duration-200 hover:cursor-pointer"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-4">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Coaching
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Communication
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Development
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Building
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Assistance
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              FAQ?
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Contact
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Feedback
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              About
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Blog
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Press
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Careers
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Jobs
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Claim
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Policy
            </li>
            <li className="py-2 text-sm hover:text-gray-600 hover:cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
