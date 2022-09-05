import Image from "next/image";
import React from "react";
import hero from "../assets/hero.png";
const AboutCard = () => {
  return (
    <div>
      <div className="bg-yellow-100 relative h-96 mt-44 flex justify-center items-center">
        {" "}
        <div className="flex absolute top-20  justify-around space-x-10 items-center">
          <div className="" style={{ boxShadow: "7px 7px maroon" }}>
            <Image
              src={hero}
              className="object-cover object-center"
              height={350}
              width={280}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <span className="text-red-900 font-bold text-2xl">About Us</span>
            </div>
            <div className="w-96">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                aperiam nisi adipisci consequuntur sint tempore incidunt.
                Assumenda ratione vel aliquam, odio dolore minus temporibus
                voluptate, sed illum consequatur nisi animi.
              </span>
            </div>
            <div>
              <span className="text-red-900  font-bold uppercase underline decoration-gray-500">
                Learn More
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
