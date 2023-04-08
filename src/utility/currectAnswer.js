export const corruct = (e, corructAnswer, option) => {
  const button = e.target;
  if (corructAnswer === option) {
    button.classList.add("bg-green-400");
    button.classList.add("text-white");
  } else {
    button.classList.add("bg-red-400");
    button.classList.add("text-white");
  }
};
