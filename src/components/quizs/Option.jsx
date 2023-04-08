import React from "react";

const Option = ({ option }) => {
  return (
    <p
      onClick={() => console.log(option)}
      className="flex place-content-center w-8/12 p-7 text-xl text-white bg-blue-400 border border-transparent duration-300 ease-linear hover:bg-blue-500"
    >
      {option}
    </p>
  );
};

export default Option;
