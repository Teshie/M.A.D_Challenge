import Image from "next/image";
import React from "react";
import fb from "../assets/fb.png";
import tw from "../assets/tw.png";
import lk from "../assets/lk.png";
import yt from "../assets/yt.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className=" h-64 text-white ">
        <div style={{ background: "#590000" }} className="bg-red-800 h-56">
          <div className="p-7 flex justify-around">
            <div className="flex flex-col space-y-2 w-64">
              <span>
                <Image src={logo} className="" alt="logo" />
              </span>
              <span className="text-xs ">
                Etiam at augue sit amet erat fringilla aliquet sed quis felis.
                Nunc sodales sapien vitae felis fringilla, quis auctor lectus
                vestibulum.{" "}
              </span>
              <div className="flex  items-center space-x-3">
                <span>
                  <Image
                    src={fb}
                    className=""
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </span>
                <span>
                  <Image
                    src={tw}
                    className=""
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </span>
                <span>
                  <Image
                    src={lk}
                    className=""
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </span>
                <span>
                  <Image
                    src={yt}
                    className=""
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-xl">Quick links</span>
              <div className="flex flex-col space-y-2  text-xs">
                <span>Home</span>
                <span>About us</span>
                <span>Projects</span>
                <span>Resources</span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-xl">About Us</span>
              <div className="flex flex-col space-y-2  text-xs">
                <span>History</span>
                <span>Mission / Vision</span>
                <span>Our team</span>
                <span>Partners</span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-xl">Projects</span>
              <div className="flex flex-col space-y-2  text-xs">
                <span>Project -1</span>
                <span>Project -2</span>
                <span>Project -3</span>
                <span>Project -4</span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-xl">Contact Info</span>
              <div className="flex flex-col space-y-2  text-xs">
                <span>Environment and Coffee Forest Forum</span>
                <span>P.O.Box: 28513, Addis Ababa Ethiopia </span>
                <span>+251-116-733-707</span>
                <span>info@ecff.org.et</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: "#440000" }} className=" h-16 p-7">
          <div className="flex justify-between">
            <span>© ECFF 2022.</span>
            <span>Powered by M.A.D Technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
