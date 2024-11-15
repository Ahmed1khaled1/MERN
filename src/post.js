import img from "./assits/img.jpg";
import React from "react";

function Post() {
  return (
    <div className="grid grid-cols-5 gap-5 mb-10">
      <div className="col-span-2">
        <img src={img} alt="" />
      </div>
      <div className="col-span-3">
        <h2 className="font-bold text-2xl p-0">
          Make new friends and boost hiring: How China's chip industry plans to
          deal with Trump
        </h2>
        <p className="font-semibold text-gray-600 flex gap-3">
          <button href="">Ahmed Khaled</button>
          <time>2024-11-7 17:10</time>
        </p>
        <p>
          China's semiconductor industry is readying itself for four more
          combative years under Donald Trump as U.S. president by ramping up
          purchases of foreign equipment.
        </p>
      </div>
    </div>
  );
}

export default Post;
