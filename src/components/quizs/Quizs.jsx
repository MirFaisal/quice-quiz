import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz";

const Quizs = () => {
  const quizs = useLoaderData().data;
  const { questions } = quizs;
  return (
    <>
      <section className="quizs">
        <div className="container">
          <div className="quiz-wrapper my-60 grid gap-y-9">
            {questions.map((question) => (
              <Quiz key={question.id} questions={question} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quizs;
