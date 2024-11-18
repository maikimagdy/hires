import React from "react";

function Icons({ src }) {
  return (
    <img
      alt="Icon"
      src={src}
      className="md:w-12 w-8 rounded-2xl cursor-pointer md:hover:mr-4 md:shadow-none shadow-2xl  transition-all duration-200 ease-in-out "
    />
  );
}

export default Icons;
