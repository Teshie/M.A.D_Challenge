import Image from "next/image";
import React from "react";
import coffee from "../assets/coffee1.png";
import peoples from "../assets/peoples.png";

const WhatAreWe = () => {
  return (
    <div className="flex justify-around items-center p-10 relative ">
      <div className="w-[42rem] flex flex-col space-y-3">
        <div className="flex justify-center items-center">
          <span className="text-6xl text-red-900 font-semibold">
            We are ECFF
          </span>
        </div>
        <div>
          The Environment and Coffee Forest Forum (ECFF), is a local Civil
          Society Organization registered and licenced in Ethiopia (registration
          No. 0378), and focuses on developing strategies for sustainable use
          and conservation of the environment in general, and the coffee forests
          in particular, through thematic research on conservation planning,
          education and pilot implmentation of research findings.
        </div>
        <div>
          ECFF provides services including conservation planning, practical
          implmentation of scientifically proven concepts, environmental
          education and capacity building and climate change mitigation.
        </div>
      </div>
      <div>
        <Image src={coffee} height={280} width={420} />
        <div className="absolute top-44 right-7">
          <Image src={peoples} height={180} width={220} />
        </div>
      </div>
    </div>
  );
};

export default WhatAreWe;
