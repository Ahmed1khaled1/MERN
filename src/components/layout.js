import React from 'react'
import Header from "./header";
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <main className="max-w-[700px] mx-auto mt-3">
      <Header />
      <Outlet/>
    </main>
  );
}

export default Layout