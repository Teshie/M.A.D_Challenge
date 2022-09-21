import React from "react";
import AboutCard from "./AboutCard";
import Footer from "./Footer";
import Header from "./Header";
import NewsAndBlogs from "./NewsAndBlogs";
import Partners from "./Partners";
import Projects from "./Projects";
import Publications from "./Publications";
import Testimonials from "./Testimonials";

const HomePage = ({ data }) => {
  return (
    <div>
      {/* <Header />
      <Projects /> */}
      {/* <AboutCard /> */}
      {/* <Publications />
      <NewsAndBlogs data={data} />
      <Partners />
    <Footer /> */}
      <Testimonials />
    </div>
  );
};

export default HomePage;
