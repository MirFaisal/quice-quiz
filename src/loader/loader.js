export const topicsLoader = async () => {
  return fetch("https://openapi.programming-hero.com/api/quiz");
};

export const topicLoader = async ({ params }) => {
  return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
};
