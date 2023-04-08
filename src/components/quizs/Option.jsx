import { useContext } from "react";
import "../../utility/currectAnswer";
import { style } from "../../utility/currectAnswer";
import { TotalCorrectAnswerContext } from "./Quizs";

const Option = ({ option, correctAnswer, ind }) => {
  const [setTotalCorrect, totalCorrect, totalWrong, setTotaWrong] = useContext(
    TotalCorrectAnswerContext
  );

  const correct = (ans) => {
    ans === correctAnswer
      ? setTotalCorrect(totalCorrect + 1)
      : setTotaWrong(totalWrong + 1);
  };
  return (
    <button
      onClick={(e) => {
        correct(option);
        style(e, correctAnswer, option);
      }}
      className="flex place-content-center w-8/12 p-7 text-xl border
       border-blue-400 duration-300 ease-lineare"
    >
      {option}
    </button>
  );
};

export default Option;
