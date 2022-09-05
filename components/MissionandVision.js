import React from "react";

const MissionandVision = () => {
  return (
    <div className="mt-24">
      <div className="bg-cover  flex flex-col space-y-36  bg-center bg-no-repeat h-[35rem]  bg-[url('https://www.hospitalitymagazine.com.au/wp-content/uploads/rodrigo-flores-NQYhyday55A-unsplash-scaled.jpg')]">
        <div className="flex space-x-16 mt-36 justify-center items-center">
          <div className="border w-96 border-white p-10 flex justify-center items-center flex-col space-y-4">
            <span className="text-white font-bold mb-10">Mission</span>
            <span className="text-white text-xs">
              {" "}
              To reverse degradation of natural environment, and support
              societies and government to build a future in which humans live in
              harmony with nature, by conservation biodiversity, promoting
              sustainable and equitable use of renewable natural resources.
            </span>
          </div>
          <div className="border w-96 border-white mt-32 p-14 flex justify-center items-center flex-col space-y-4">
            <span className="text-white font-bold ">Vision</span>
            <span className="text-white text-xs">
              {" "}
              A healthy and prosperous society that values, conserves and
              sustainably uses nature.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionandVision;
