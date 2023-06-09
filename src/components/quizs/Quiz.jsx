import React from "react";
import Option from "./Option";

const Quiz = ({ questions }) => {
  const { question, options, correctAnswer } = questions;
  // console.log(questions.id);
  return (
    <>
      <div className="card w-10/12 mx-auto relative mb-20 py-20 border border-blue-300 rounded-2xl">
        <div className="qustion absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-blue-500 py-7 w-6/12">
          <code className="font-bold text-white">{question}</code>
        </div>
        <div
          id={questions.id}
          className="options mx-auto grid grid-cols-2 justify-items-center gap-y-8"
        >
          {options.map((option, ind) => (
            <Option key={ind} option={option} correctAnswer={correctAnswer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Quiz;
