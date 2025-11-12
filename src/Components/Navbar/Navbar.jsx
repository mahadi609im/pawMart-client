import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import paw from '../../assets/paw.png';
import { AuthContext } from '../../context/ContextProvider';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Navbar = () => {
  const { user, signOutAuthUser } = useContext(AuthContext);

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
            path: '/addListing',
            tooltip: 'Add a new listing',
          },
          {
            name: 'My Listing',
            path: '/myListing',
            tooltip: 'View your listings',
          },
          { name: 'My Orders', path: '/myOrders', tooltip: 'View your orders' },
        ]
      : []),
  ];

  const handleSignOut = () => {
    signOutAuthUser();
    toast.success('Logout Successfully');
  };

  return (
    <div className="navbar conCls py-4 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
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
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-[#fb7a53a4] rounded-box mt-3 w-36 p-2 shadow font-medium"
          >
            {links.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold '
                      : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
                  }
                  data-tooltip-id={`tooltip-${idx}`}
                  data-tooltip-content={link.tooltip}
                >
                  {link.name}
                </NavLink>
                <Tooltip
                  id={`tooltip-${idx}`}
                  place="right"
                  effect="solid"
                  globalEventOff="click"
                  style={{ zIndex: 9999 }}
                  anchorSelect={`[data-tooltip-id="tooltip-${idx}"]`}
                />
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="text-xl flex items-center justify-center">
          <img className="hidden w-12 h-auto  md:block" src={paw} alt="paw" />
          <h2 className=" md:text-2xl lg:text-3xl font-bold text-slate-950">
            paw<span className="text-[#fb7b53] md:text-slate-950">Mart</span>
          </h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-slate-600 space-x-3">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold'
                    : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
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

      <div className="navbar-end flex gap-3">
        {user ? (
          <>
            {/* Profile Link */}
            <img
              referrerPolicy="no-referrer"
              className="w-14 h-14 object-cover bg-[#fb7a5331] border border-dashed border-[#fb7b53] rounded-full p-1"
              src={
                user?.photoURL ||
                'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp'
              }
              alt="Profile"
              onError={e => {
                e.currentTarget.src =
                  'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp';
              }}
            />

            {/* Logout Button */}
            <button
              onClick={handleSignOut}
              className="btn bg-[#fb7b53] text-white hover:bg-orange-500 transition-all"
              data-tooltip-id="tooltip-logout"
              data-tooltip-content="Logout from your account"
            >
              Logout
            </button>
            <Tooltip id="tooltip-logout" place="bottom" effect="solid" />
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#fb7a5331] border border-dashed border-[#fb7b53]"
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
