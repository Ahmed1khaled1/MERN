import { Link } from "react-router-dom";
import React from "react";

function Post({ _id, title, summary, content, cover, createdAt, author }) {
  return (
    <div className="grid grid-cols-5 gap-5 mb-10">
      <div className="col-span-2">
        <Link to={`/post/${_id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="col-span-3">
        <h2 className="font-bold text-2xl p-0">{title}</h2>
        <p className="font-semibold text-gray-600 flex gap-3">
          <button href="">{author.username}</button>
          <time>{createdAt}</time>
        </p>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Post;
