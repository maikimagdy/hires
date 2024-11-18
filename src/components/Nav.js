import React from "react";
import logo from "../assests/Hirers.co.in - Copy.png";

function Nav() {
  return (
    <div className="flex justify-between  md:px-8 px-0 items-center bg-[#393285] text-white ">
      <div className="flex-1">
        <img
          className="w-[73px] h-[74px] rounded-2xl shadow-2xl"
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Links */}
      <div className="flex items-center h-[74px] gap-6 justify-center flex-1">
        <ul className=" gap-6 h-full justify-center items-center md:flex hidden ">
          <li className="h-full flex hover:border-b-4 border-[#D1C6F0] transition-all duration-200 ease-in-out">
            <button>Post Job</button>
          </li>
          <li className="h-full flex hover:border-b-4 border-[#D1C6F0] transition-all duration-200 ease-in-out">
            <button>Need Job</button>
          </li>
          <li className="h-full flex hover:border-b-4 border-[#D1C6F0] transition-all duration-200 ease-in-out">
            <button>Contact Us</button>
          </li>
        </ul>

        {/* button */}
        <button className="bg-white text-[#393285] focus:ring-2 px-4 py-1 rounded-md hover:bg-blue-100 transition-all duration-200 ease-in-out">
          SignUp/Login
        </button>
      </div>
    </div>
  );
}

export default Nav;
