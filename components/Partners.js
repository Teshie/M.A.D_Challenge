import Image from "next/image";
import React from "react";
import usaid from "../assets/usaid.png";
import euras from "../assets/euras.png";

const Partners = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-10 space-y-4">
        <div className="flex flex-col justify-center items-center">
          <span className="text-5xl text-red-900 font-extrabold">Partners</span>
        </div>
        <div className="flex space-x-9 p-4">
          <div className="border p-10">
            <span>
              <Image src={usaid} />
            </span>
          </div>
          <div className="border p-10">
            <span className="mt-36 ">
              <span>
                <Image src={euras} />
              </span>
            </span>
          </div>
          <div className="border p-10">
            <span>
              <span>
                <Image src={usaid} />
              </span>
            </span>
          </div>
          <div className="border p-10">
            <span className="mt-36 ">
              <span>
                <Image src={euras} />
              </span>
            </span>
          </div>
          <div className="border p-10">
            <span>
              <span>
                <Image src={usaid} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
