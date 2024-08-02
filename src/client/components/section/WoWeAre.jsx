import React from "react";
import woweareimg from "../../../assets/home-about-us.jpg";
import '../../../assets/css/Main.css';
import { Check } from "@mui/icons-material";

function WoWeAre() {
  return (
    <>
      <div className="woweare bg-white text-black mt-[7rem] mb-[8rem]">
        <div className="inner mx-[9rem]">
          <div className="section1 grid grid-cols-2 gap-8">
            <div className="imagewoweare">
              <img src={woweareimg} alt="WoWeAre" className="object-cover"/>
            </div>
            <div className="description flex flex-col gap-5 justify-start items-start">
              <h2 className="text-gray-500 text-lg font-bold">WHO WE ARE?</h2>
              <p className="text-start text-2xl">
                We are a digital & branding company that believes in the power
                of creative ideas and great design.
              </p>
              <span className="text-start text-[#606060] text-sm">
                3ni Infotech is global software solutions and IT service
                provider, established by young and talented IT enthusiastics in
                the year of 2016. We have a highly skilled team of developers
                who are always very keen to help our clients. Our vision and
                Values include delivering robust and quality services to our
                clients to make them a step ahead in the world of digitization,
                taking their business to next level.
              </span>
              <div className="projectcontainer flex gap-8">
                <div className="complateproject flex flex-col leading-[2rem] items-start">
                  <span className="text-4xl">350</span>
                  <span className="text-[#606060]">Completed Projects</span>
                </div>
                <div className="customer flex flex-col leading-[2rem] items-start">
                  <span className="text-4xl">215</span>
                  <span className="text-[#606060]">Satisfied Customers</span>
                </div>
                <div className="awardwon flex flex-col leading-[2rem] items-start">
                  <span className="text-4xl">10</span>
                  <span className="text-[#606060]">Awards Won</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default WoWeAre;
