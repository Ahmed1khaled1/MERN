
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

function Header() {
  const {setUserInfo,userInfo} = useContext(UserContext)
  useEffect(() => {
    fetch("https://api-beta-amber.vercel.app/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);
function logout(){
  fetch("https://api-beta-amber.vercel.app/logout", {
    credentials: "include",
    method: "POST",
  });
  setUserInfo(null);
}
const username = userInfo?.username
  return (
    <div className="flex justify-between mb-5">
      <Link to="/" className="font-bold">
        MyBlog
      </Link>

      <nav className="flex gap-4">
        {username && (
          <>
            <Link to="/create">create new post</Link>
            <a onClick={logout}>logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
