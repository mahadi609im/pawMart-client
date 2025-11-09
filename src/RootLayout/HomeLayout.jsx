import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div className="flex flex-col bg-[#ffeeea] min-h-screen h-full">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
