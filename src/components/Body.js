import React from "react";
import arrow1 from "../assests/arrow_man.png";
import arrow2 from "../assests/arrow_lady 2.png";
import woman from "../assests/employer (1).png";
import man from "../assests/job seekers.png";
import EmployersSection from "./EmployersSection";
import JobseekersSection from "./JobseekersSection";
import faceIcon from "../assests/faceIcon.png";
import whatsAppIcon from "../assests/wahtsIcon.png";
import LinkedInIcon from "../assests/inIcon.png";
import instaIcon from "../assests/instaIcon.png";
import Icons from "./Icons";
function Body() {
  const icons = [whatsAppIcon, faceIcon, instaIcon, LinkedInIcon];
  return (
    <div className="flex flex-col  md:mt-24 mt-12 mb-16">
      {/* Text Section */}
      <div className="leading-relaxed md:w-auto w-72 md:ml-0 ml-16">
        <h1 className="text-[#393285] text-center font-bold md:text-4xl text-2xl  ">
          Find, Apply, and Secure{" "}
        </h1>
        <h1 className="text-[#393285] text-center font-bold md:text-4xl text-2xl md:py-2 py-0 ">
          Your Dream Job with Hirers in Just 2 Days!
        </h1>
        <p className="text-center text-xl md:block hidden  ">
          Experience the accelerated journey to your dream career with us.
        </p>
      </div>

      <div className="flex md:flex-row md:ml-10 ml-0 md:gap-16 gap-4 flex-col-reverse mt-5 items-center justify-center md:items-start ">
        {/* Employers Section */}
        <EmployersSection
          text1={"For Employers"}
          text2={"Hire from a large pool of filtered candidates!!"}
          arrow={arrow2}
          img={woman}
        />

        {/* Job Seekers Section */}
        <JobseekersSection
          text1={"For JobSeekers"}
          text2={"Get 100% verified Jobs at no cost!!"}
          arrow={arrow1}
          img={man}
        />

        {/* Icons Section */}
        <div className="flex md:flex-col gap-4 w-20  items-center justify-center flex-row">
          {icons.map((icon) => (
            <Icons src={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
