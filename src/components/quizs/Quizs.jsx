import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

export const TotalCorrectAnswerContext = createContext(0);
const Quizs = () => {
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotaWrong] = useState(0);
  const quizs = useLoaderData().data;
  const { questions } = quizs;
  return (
    <>
      <section className="quizs relative">
        <div className="quiz-wrapper w-10/12 my-60 grid gap-y-9">
          <TotalCorrectAnswerContext.Provider
            value={[setTotalCorrect, totalCorrect, totalWrong, setTotaWrong]}
          >
            {questions.map((question) => (
              <Quiz key={question.id} questions={question} />
            ))}
          </TotalCorrectAnswerContext.Provider>
        </div>
        <div className=" fixed top-[300px] right-20 bg-blue-400 text-white p-8 rounded-lg">
          <p className="font-bold mb-5">total correct {totalCorrect} </p>
          <div className="font-bold">
            <p className="font-bold mb-5">total wrong {totalWrong} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quizs;
