import Image from "next/image";
import React from "react";
import pub1 from "../assets/pub2.png";
import pub2 from "../assets/pub1.png";
import pub3 from "../assets/pub3.png";
const Publications = () => {
  return (
    <div>
      <div className="mt-32 grid place-items-center">
        <span className="text-3xl pb-4 font-semibold text-red-900">
          Publications
        </span>
        <div className="flex space-x-4 justify-center items-center">
          <div className=" relative">
            <div className="">
              <Image
                src={pub1}
                className="brightness-50 "
                height={370}
                width={400}
              />
            </div>
            <div className="absolute bottom-16 w-44 left-44 space-y-36 text-white flex flex-col justify-center items-center">
              <div className=" flex flex-col space-y-4">
                <span className="font-bold text-xs">
                  2021 Production Reports
                </span>
                <span className="text-xs text-justify">
                  Description Lorem ipsum dolor sit amet, consectetur.{" "}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="  cursor-pointer p-1 text-sm">4.1 MB PDF</span>
                <span className="border  cursor-pointer border-white p-1 text-sm">
                  Download
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <div className=" relative">
              <div className="">
                <Image
                  src={pub2}
                  className="brightness-50 "
                  height={170}
                  width={350}
                />
              </div>
              <div className="absolute bottom-7 w-44 left-36 space-y-6 text-white flex flex-col justify-center items-center">
                <span className="font-bold text-xs ">
                  2021 Production Reports
                </span>
                <span className="text-xs text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.
                </span>
                <span className="border  cursor-pointer border-white p-1 text-sm">
                  Read More
                </span>
              </div>
            </div>
            <div className=" relative">
              <div className="">
                <Image
                  src={pub3}
                  className="brightness-50 "
                  height={170}
                  width={350}
                />
              </div>
              <div className="absolute bottom-7 w-44 left-36 space-y-3 text-white flex flex-col justify-center items-center">
                <span className="font-bold text-xs ">
                  2021 Production Reports
                </span>
                <span className="text-xs text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.
                </span>
                <span className="text-xs text-gray-300">32 mins</span>
                <span className="border  cursor-pointer border-white p-1 text-sm">
                  View
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
