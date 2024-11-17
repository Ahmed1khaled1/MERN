import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => setPostInfo(postInfo));
    });
  });
  if (!postInfo) return "";
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2 text-center">{postInfo.title}</h1>
      <div className="text-center text-gray-500 mb-2">
        <time>{postInfo.createdAt}</time>
      </div>
      <div className="text-center font-bold mb-2">
        by @{postInfo.author.username}
      </div>

      <div>
        <img
          src={`https://api-hazel-omega.vercel.app/${postInfo.cover}`}
          alt=""
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
}

export default PostPage;
