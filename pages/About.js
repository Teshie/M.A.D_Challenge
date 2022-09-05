import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MissionandVision from "../components/MissionandVision";
import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";
import TotalSummary from "../components/TotalSummary";
import WhatAreWe from "../components/WhatAreWe";

const About = ({ totalCounts, data }) => {
  return (
    <div>
      <div className="relative">
        <div className="bg-cover  flex flex-col space-y-36  bg-center bg-no-repeat h-[35rem]  bg-[url('http://www.organicseed.co.za/242-641-thickbox/arabica-coffee.jpg')]">
          <NavBar />
          {/* <HeroTextHome /> */}
          <div className="m-10 top-44 text-white text-5xl font-semibold absolute">
            <span>About us / Overview</span>
          </div>
        </div>
      </div>
      <WhatAreWe />
      <TotalSummary data={totalCounts} />
      <MissionandVision />
      <Timeline data={data} />
      <Footer />
    </div>
  );
};

export default About;

export async function getStaticProps() {
  const totalCounts = await fetch(
    "https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word"
  ).then((res) => res.json());
  return {
    props: {
      totalCounts,
    },
  };
}
