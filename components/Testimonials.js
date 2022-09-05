import Image from "next/image";
import React from "react";
import avatar from "../assets/avatar.png";
import qoute from "../assets/qoute.png";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-yellow-100 h-[30rem] mt-16 grid place-items-center">
        <div className="flex justify-center items-center flex-col space-y-10">
          <div className="">
            <Image src={qoute} className="" />
          </div>
          <div>
            <span className="text-gray-500">
              Thousands of satisfied users around the globe
            </span>
          </div>
          <div className="">
            <span className="text-2xl ">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at purus pharetra magna tempor egestas non id massa. ”
            </span>
          </div>
          <div className="flex flex-col justify-center items-center mt-24">
            <div className="flex justify-center items-center space-x-4">
              <div className="flex space-x-1 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span> Prev</span>
              </div>
              <div className="">
                <Image src={avatar} className="" />
              </div>
              <div className="flex space-x-1 text-gray-500">
                <span>Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl font-semibold">Abebech Derara</span>
              <span className="text-xl text-gray-500">Customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
