import "../../utility/currectAnswer";
import { corruct } from "../../utility/currectAnswer";

const Option = ({ option, correctAnswer }) => {
  return (
    <p
      onClick={(e) => {
        corruct(e, correctAnswer, option);
      }}
      className="flex place-content-center w-8/12 p-7 text-xl border border-blue-400 duration-300 ease-lineare"
    >
      {option}
    </p>
  );
};

export default Option;
