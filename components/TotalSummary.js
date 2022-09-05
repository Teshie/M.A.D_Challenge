import Image from "next/image";
import React from "react";
import totals1 from "../assets/totals1.png";
const TotalSummary = ({ data }) => {
  console.log(data, "data");
  return (
    <div className="flex justify-center space-x-24 mt-10 items-center">
      {data.data.map((items) => {
        return (
          <div>
            <div className="flex space-x-2">
              <div className="flex space-x-4">
                <div>
                  <Image src={totals1} />
                </div>
                <div className="flex flex-col space-y-2 mt-3">
                  <span className="uppercase font-bold">{items?.count}</span>
                  <span className="uppercase ">{items.title}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="flex space-x-2">
        <div>
          <Image src={totals1} />
        </div>
        <div className="flex flex-col space-y-2 mt-3">
          <span>Value</span>
          <span>Description</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <div>
          <Image src={totals1} />
        </div>
        <div className="flex flex-col space-y-2 mt-3">
          <span>Value</span>
          <span>Description</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <div>
          <Image src={totals1} />
        </div>
        <div className="flex flex-col space-y-2 mt-3">
          <span>Value</span>
          <span>Description</span>
        </div>
      </div> */}
    </div>
  );
};

export default TotalSummary;
