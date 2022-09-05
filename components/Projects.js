import Image from "next/image";
import React from "react";
import logo from "../assets/img1.png";
import logo2 from "../assets/img2.png";
import logo3 from "../assets/img3.png";
import pub1 from "../assets/pub2.png";
import pub2 from "../assets/pub1.png";
import pub3 from "../assets/pub3.png";
import hero from "../assets/hero.png";
import qoute from "../assets/qoute.png";
import avatar from "../assets/avatar.png";
import partners from "../assets/partners.png";
const Projects = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="absolute flex justify-center items-center space-x-10">
          <div className="  relative">
            <div className="border-4">
              <Image
                src={logo}
                className="brightness-50"
                height={300}
                width={250}
              />
            </div>
            <div className="absolute bottom-7 w-44 left-10 space-y-3 text-white flex flex-col justify-center items-center">
              <span className="font-bold">Project 1</span>
              <span className="text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.
              </span>
              <span className="border   cursor-pointer border-white p-1 text-sm">
                Learn More
              </span>
            </div>
          </div>
          <div className=" relative">
            <div className="border-4">
              <Image
                src={logo2}
                className="brightness-50 border-4"
                height={300}
                width={250}
              />
            </div>
            <div className="absolute bottom-7 w-44 left-10 space-y-3 text-white flex flex-col justify-center items-center">
              <span className="font-bold">Project 1</span>
              <span className="text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.
              </span>
              <span className="border  cursor-pointer border-white p-1 text-sm">
                Learn More
              </span>
            </div>
          </div>

          <div className=" relative ">
            <div className="border-4 border-b-none">
              <Image
                src={logo3}
                className="brightness-50 border-solid border-2 border-indigo-600"
                height={300}
                width={250}
              />
            </div>
            <div className="absolute bottom-7 w-44 left-10 space-y-3 text-white flex flex-col justify-center items-center">
              <span className="font-bold">Project 1</span>
              <span className="text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc.
              </span>
              <span className="border cursor-pointer border-white p-1 text-sm">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
