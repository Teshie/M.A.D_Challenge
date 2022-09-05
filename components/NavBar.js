import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="flex p-5 text-white font-bold  justify-between items-center">
        <div className="ml-10">
          {" "}
          <span>
            <Image src={logo} className="" alt="logo" />
          </span>
        </div>
        <div className="flex space-x-5 mr-16">
          <div>
            {" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>
            {" "}
            <Link href="/About">
              <a>About</a>
            </Link>
          </div>

          <div>Projects</div>
          <div>Publications</div>
          <div>Partners</div>
          <div>Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
