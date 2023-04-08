import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicItems from "./topicItems";

const Topics = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <>
      <section className="topics">
        <div className="container">
          <div className="topic-wrapper h-[90vh] mx-auto w-7/12 grid grid-cols-2 content-center justify-items-center gap-y-7">
            {topics.map((topic) => (
              <TopicItems key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Topics;
