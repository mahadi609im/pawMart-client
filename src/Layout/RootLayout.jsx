import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { AuthContext } from '../context/ContextProvider';
import LoadingSpinner from '../Components/Loading/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  const { isLoading } = useContext(AuthContext);

  // 🌗 Track current theme dynamically
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'winter');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setTheme(currentTheme);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  // 🎨 Dynamic background styles for both themes
  const backgroundStyle =
    theme === 'night'
      ? {
          backgroundColor: '#0F172A',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#f1f1f1',
          transition: 'all 0.5s ease',
        }
      : {
          backgroundColor: '#ffeeea',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#1e1e1e',
          transition: 'all 0.5s ease',
        };

  if (isLoading) {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <div
          className="flex flex-col min-h-screen h-full"
          style={backgroundStyle}
        >
          <LoadingSpinner />
        </div>
        <footer className="mt-20">
          <Footer />
        </footer>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col min-h-screen h-full transition-all duration-500"
      style={backgroundStyle}
    >
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-12 md:mt-20 lg:mt-32">
        <Footer />
      </footer>

      <ToastContainer />
    </div>
  );
};

export default RootLayout;
