import Image from "next/image";
import React from "react";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
const Timeline = () => {
  return (
    <div>
      <div className="mt-10 pb-4 flex flex-col space-y-3 justify-center items-center">
        <span className=" font-bold ">HOW IT ALL BEGAN</span>
        <span className="text-red-900 font-bold text-5xl">Our Story</span>
        <div className="w-[40rem] text-center">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            purus pharetra magna tempor egestas non id massa. Donec tristique
            dui vel mauris ullamcorper finibus. Curabitur maximus, sapien nec
            congue pellentesque, purus est iaculis mauris, vel sagittis enim
            magna at erat.
          </span>
        </div>
      </div>
      <div className="container  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-400 h-full border"
            style={{ left: "50%" }}
          ></div>
          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-red-900 shadow-xl w-4 h-4 rounded-full">
              <span className="-mx-14 bg-yellow-100 px-2 rounded-lg text-gray-400">
                2001
              </span>{" "}
            </div>
            <div className="order-1   rounded-lg w-5/12 px-6 py-4">
              <div>
                <Image src={t1} className="" />
              </div>
              <h3 className="mb-3  text-gray-800 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at purus pharetra magna
              </h3>{" "}
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-red-900 shadow-xl w-4 h-4 rounded-full">
              <span className="mx-14 bg-yellow-100 px-2 rounded-lg text-gray-400">
                2005
              </span>{" "}
            </div>
            <div className="order-1   rounded-lg w-5/12 px-6 py-4">
              <div>
                <Image src={t2} className="" />
              </div>
              <h3 className="mb-3  text-gray-800 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at purus pharetra magna
              </h3>{" "}
            </div>
          </div>

          {/* <!-- right timeline --> */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-red-900 shadow-xl w-4 h-4 rounded-full">
              <span className="-mx-14 bg-yellow-100 px-2 rounded-lg text-gray-400">
                2012
              </span>{" "}
            </div>
            <div className="order-1   rounded-lg w-5/12 px-6 py-4">
              <div>
                <Image src={t3} className="" />
              </div>
              <h3 className="mb-3  text-gray-800 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at purus pharetra magna
              </h3>{" "}
            </div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-red-900 shadow-xl w-4 h-4 rounded-full">
              <span className="mx-14 bg-yellow-100 px-2 rounded-lg text-gray-400">
                2014
              </span>{" "}
            </div>
            <div className="order-1   rounded-lg w-5/12  py-4">
              <div>
                <Image src={t4} className="" />
              </div>
              <h3 className="mb-3  text-gray-800 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at purus pharetra magna
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
