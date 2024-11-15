import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex justify-between mb-5">
      <button href="" className="font-bold">
        MyBlog
      </button>
      <nav className="flex gap-4">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </div>
  );
}

export default Header