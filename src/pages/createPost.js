import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";


const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],
    [{ list: "bullet" }],
    [{ indent: "+1" }], // outdent/indent
    [{ header: [1, 2, 3, 4, false] }],
    ["clean"], // remove formatting button
  ],
};

function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState();

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("https://api-beta-amber.vercel.app/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="title"
        placeholder="title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="summary"
        placeholder="summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="file"
        onChange={(ev) => setFiles(ev.target.files)}
      />
      <ReactQuill
        modules={modules}
        value={content}
        onChange={(newValue) => setContent(newValue)}
      />
      <button className="mt-3 block w-[100%] px-2 py-1 text-slate-300 bg-slate-950 font-semibold rounded-lg">
        create post
      </button>
    </form>
  );
}

export default CreatePost;
