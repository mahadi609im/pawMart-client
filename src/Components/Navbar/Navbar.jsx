import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import paw from '../../assets/paw.png';
import { AuthContext } from '../../context/ContextProvider';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { FiLogOut, FiUser } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaRegUser } from 'react-icons/fa';

const Navbar = () => {
  const { user, signOutAuthUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔆 Load previously selected theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'winter';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleSignOut = () => {
    signOutAuthUser();

    Swal.fire({
      title: 'Signed Out successfully',
      icon: 'success',
      draggable: true,
    });
  };

  const links = [
    { name: 'Home', path: '/', tooltip: 'Go to Home Page' },
    {
      name: 'Pets & Supplies',
      path: '/pets',
      tooltip: 'Browse pets and products',
    },
    ...(user
      ? [
          {
            name: 'Add Listing',
            path: '/dashboard/addListing',
            tooltip: 'Add a new listing',
          },
          {
            name: 'My Listing',
            path: '/dashboard/myListing',
            tooltip: 'View your listings',
          },
          {
            name: 'My Orders',
            path: '/dashboard/myOrders',
            tooltip: 'View your orders',
          },
        ]
      : []),
    {
      name: 'Blogs',
      path: '/blogs',
      tooltip: 'Read our All blogs',
    },
    {
      name: 'Contact Us',
      path: '/contact',
      tooltip: 'Send us a message',
    },
  ];

  return (
    <div
      className={`navbar  w-full transition-all duration-300 z-100 px-4 md:px-10 
    ${
      isScrolled
        ? 'py-2 fixed top-0 left-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-orange-100 dark:border-slate-800'
        : 'py-5 bg-transparent'
    }`}
    >
      {/* ---------------- Navbar Start ---------------- */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-900 dark:text-slate-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#fb7a53a4] dark:bg-[#fb7a53c9] rounded-box mt-3 w-36 p-2 shadow font-medium"
          >
            {links.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-900 dark:text-slate-100 px-3 py-2 rounded-md font-semibold'
                      : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-900 dark:text-slate-100 dark:hover:text-white px-3 py-2 rounded-md'
                  }
                  data-tooltip-id={`tooltip-${idx}`}
                  data-tooltip-content={link.tooltip}
                >
                  {link.name}
                </NavLink>
                <Tooltip id={`tooltip-${idx}`} place="right" effect="solid" />
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="text-xl flex items-center justify-center">
          <img className="hidden w-12 h-auto md:block" src={paw} alt="paw" />
          <h2 className="md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-100">
            paw<span className="text-[#fb7b53] dark:text-slate-100">Mart</span>
          </h2>
        </Link>
      </div>

      {/* ---------------- Navbar Center ---------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-3">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-900 dark:text-slate-100 px-3 py-2 rounded-md font-semibold'
                    : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-900 dark:text-slate-100 dark:hover:text-white px-3 py-2 rounded-md'
                }
                data-tooltip-id={`tooltip-center-${idx}`}
                data-tooltip-content={link.tooltip}
              >
                {link.name}
              </NavLink>
              <Tooltip
                id={`tooltip-center-${idx}`}
                place="bottom"
                effect="solid"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* ---------------- Navbar End ---------------- */}
      <div className="navbar-end flex gap-3 items-center">
        {/* 🌗 Theme Toggle Button */}
        <div className="flex items-center justify-center">
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              onChange={() => {
                const currentTheme =
                  document.documentElement.getAttribute('data-theme');
                if (currentTheme === 'night') {
                  document.documentElement.setAttribute('data-theme', 'winter');
                  localStorage.setItem('theme', 'winter');
                } else {
                  document.documentElement.setAttribute('data-theme', 'night');
                  localStorage.setItem('theme', 'night');
                }
              }}
              defaultChecked={localStorage.getItem('theme') === 'night'}
            />

            {/* Sun icon */}
            <svg
              className="swap-off fill-current w-7 h-7 text-[#fb7b53] transition-all"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64 17l-1.41 1.41L4.22 20l1.41-1.41L5.64 17zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.36 4.05L19.77 4.64 18.36 3.23 16.95 4.64 18.36 6.05zM23 13v-2h-3v2h3zm-10 9h2v-3h-2v3zm4.64-2.05l1.41 1.41 1.41-1.41-1.41-1.41-1.41 1.41zM12 7a5 5 0 100 10 5 5 0 000-10z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-on fill-current w-7 h-7 text-[#fb7b53] transition-all"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13.65A9 9 0 0110.35 2.36 9.003 9.003 0 002 12a9 9 0 0012.64 8.65 9.003 9.003 0 007-7z" />
            </svg>
          </label>
        </div>

        {/* 👤 Auth Section */}
        {user ? (
          <div className="relative">
            <img
              referrerPolicy="no-referrer"
              className="w-14 h-14 object-cover bg-[#fb7a5331] border border-dashed border-[#fb7b53] rounded-full p-1 cursor-pointer"
              src={
                user?.photoURL ||
                'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp'
              }
              alt="Profile"
              onClick={() => setOpen(!open)} // dropdown toggle
              onError={e => {
                e.currentTarget.src =
                  'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp';
              }}
            />
            {open && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setOpen(false)}
                ></div>

                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200 origin-top-right">
                  {/* User Info Header */}
                  <div className="px-4 py-3 bg-[#fb7a530d] border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {user?.displayName || 'User'}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email}
                    </p>
                  </div>

                  <ul className="py-2">
                    <li>
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#fb7a5315] hover:text-[#fb7b53] dark:hover:bg-[#fb7b5310] dark:hover:text-[#fb7b53] transition-all duration-300 group"
                        onClick={() => setOpen(false)}
                      >
                        {/* Dashboard Icon with hover animation */}
                        <FaRegUser className="text-lg transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-medium">My Profile</span>

                        {/* Subtle Indicator (Optional) */}
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#fb7b53] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </Link>
                    </li>

                    <div className="my-1 border-t border-gray-100"></div>

                    <li>
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-[#fb7a5315] hover:text-[#fb7b53] dark:hover:bg-[#fb7b5310] dark:hover:text-[#fb7b53] transition-all duration-300 group"
                        onClick={() => setOpen(false)}
                      >
                        {/* Dashboard Icon with hover animation */}
                        <LuLayoutDashboard className="text-lg transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-medium">Dashboard</span>

                        {/* Subtle Indicator (Optional) */}
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#fb7b53] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </Link>
                    </li>

                    <div className="my-1 border-t border-gray-100"></div>

                    <li>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-medium"
                      >
                        <FiLogOut className="text-lg" />
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}

            <Tooltip id="tooltip-logout" place="bottom" effect="solid" />
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#fb7a5331] border border-dashed border-[#fb7b53] text-slate-900 dark:text-slate-100"
              data-tooltip-id="tooltip-login"
              data-tooltip-content="Login to your account"
            >
              Login
            </Link>
            <Tooltip id="tooltip-login" place="bottom" effect="solid" />

            <Link
              to="/register"
              className="btn bg-[#fb7b53] text-white"
              data-tooltip-id="tooltip-register"
              data-tooltip-content="Create a new account"
            >
              Register
            </Link>
            <Tooltip id="tooltip-register" place="bottom" effect="solid" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
