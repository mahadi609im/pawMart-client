import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const RegisterLayout = () => {
  return (
    <div className="flex flex-col bg-[#ffeeea] min-h-screen h-full">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer className="mt-12 md:mt-20 lg:mt-32">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RegisterLayout;
