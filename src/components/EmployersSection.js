import React from "react";

function EmployersSection({ text1, text2, arrow, img, button }) {
  return (
    <div className="flex font-semibold flex-col">
      <div className="bg-[#E2E0F0]  ml-4 py-2 mt-16 rounded-xl leading-relaxed flex w-80 md:shadow-none shadow-lg h-auto">
        <img
          src={img}
          className="md:w-64 w-52 md:-ml-32 -ml-16  md:-mt-16  "
          alt="womanImg"
        />
        <div className="md:pr-4 mt-4 -ml-12 ">
          <h1 className="text-[#393285] font-bold text-2xl text-center text-nowrap -ml-14">
            {text1}
          </h1>
          <p className="leading-relaxed mt-3">{text2}</p>
          <img src={arrow} className="w-24 ml-28 mt-4" alt="Arrow" />
        </div>
      </div>

      {/* Button */}
      <button className="bg-[#393285] py-2 w-36 focus:ring-2  hover:bg-[#4941a6] rounded-2xl mt-4 self-center text-white">
        Post Job
      </button>
    </div>
  );
}

export default EmployersSection;
