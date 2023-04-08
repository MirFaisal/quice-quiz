export const style = (e, correctAnswer, option) => {
  const button = e.target;
  const buttonGrupe = button.parentNode.childNodes;
  console.log(buttonGrupe);

  if (correctAnswer === option) {
    button.classList.add("bg-green-400");
    button.classList.add("text-white");
    buttonGrupe.forEach((button) => button.setAttribute("disabled", ""));
  } else {
    button.classList.add("bg-red-400");
    button.classList.add("text-white");
    buttonGrupe.forEach((button) => button.setAttribute("disabled", ""));
  }
};
