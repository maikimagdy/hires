import React from "react";

function JobseekersSection({ text1, text2, arrow, img }) {
  return (
    <div className="flex flex-col font-semibold mx-14">
      <div className="bg-[#E2E0F0] ml-4 py-2 px-3 mt-16 rounded-xl leading-relaxed flex w-80 md:shadow-none shadow-lg h-auto">
        <div className="-mr-12 mt-4">
          <h1 className="text-[#393285] font-bold text-nowrap text-2xl text-center">
            {text1}
          </h1>
          <p className="leading-normal mt-3">{text2}</p>
          <img src={arrow} className="w-24 mt-4 -ml-2 " alt="imgarrow" />
        </div>
        <img alt="imgMan" src={img} className=" w-60 -mr-14 md:-mt-20 -mt-2" />
      </div>

      {/* Button */}
      <button className="bg-[#393285] py-2 w-36 focus:ring-2 hover:bg-[#4941a6] rounded-2xl mt-4 self-center text-white">
        Search Job
      </button>
    </div>
  );
}

export default JobseekersSection;
