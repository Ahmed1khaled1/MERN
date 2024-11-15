import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/userContext";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={login} className="max-w-[400px] mx-auto">
      <h1 className="font-bold text-3xl pb-6 text-center">Login</h1>
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button className="block w-[100%] px-2 py-1 text-slate-300 bg-slate-950 font-semibold rounded-lg">
        login
      </button>
    </form>
  );
}

export default LoginPage;
