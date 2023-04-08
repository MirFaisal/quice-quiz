import React from "react";
import { Link } from "react-router-dom";

const TopicItems = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <>
      <div className="card p-5 w-8/12 border rounded-lg border-blue-100">
        <div className="image  bg-blue-200 rounded-lg mb-5">
          <img src={logo} alt="" />
        </div>
        <div className="info flex justify-between mb-3">
          <p>{name}</p>
          <p>Quiz's : {total}</p>
        </div>
        <Link to={`/topic/${id}`}>
          <button className="bg-blue-500 p-4 w-full text-white font-bold rounded-xl">
            go
          </button>
        </Link>
      </div>
    </>
  );
};

export default TopicItems;
