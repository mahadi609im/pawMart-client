import React, { useContext } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../context/ContextProvider';
import listingsFormBg from '../assets/listingsFormBg.webp';
import LoadingSpinner from '../Components/Loading/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <div
          className="flex flex-col min-h-screen h-full"
          style={{ backgroundImage: `url(${listingsFormBg})` }}
        >
          <LoadingSpinner></LoadingSpinner>
        </div>
        <footer className="mt-20">
          <Footer></Footer>
        </footer>
      </div>
    );
  }

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

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayout;
