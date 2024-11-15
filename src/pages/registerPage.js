import React, { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status===200){
      alert('registeration successful')
    }else{
      alert("registeration faild");
    }
  }
  return (
    <form className="max-w-[400px] mx-auto" onSubmit={register}>
      <h1 className="font-bold text-3xl pb-6 text-center">Register</h1>
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="text"
        
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      ></input>
      <input
        className="block mb-2 w-[100%] px-2 py-1 border-gray-300 border-2 rounded-lg"
        type="password"
        placeholder="password"
        value={password}
        
        onChange={(ev) => setPassword(ev.target.value)}
      ></input>
      <button className="block w-[100%] px-2 py-1 text-slate-300 bg-slate-950 font-semibold rounded-lg">
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
