import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import paw from '../../assets/paw.png';
import { AuthContext } from '../../context/ContextProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, signOutAuthUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold '
              : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/pets"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold'
              : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
          }
        >
          Pets & Supplies
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/addListing"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold'
                  : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
              }
            >
              Add Listing
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/myListing"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold'
                  : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
              }
            >
              My Listing
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/myOrders"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-dashed border-[#fb7b53] bg-[#fb7a5323] text-slate-950 px-3 py-2 rounded-md font-semibold'
                  : 'hover:border-b-2 border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5323] hover:text-slate-950 px-3 py-2 rounded-md'
              }
            >
              My Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutAuthUser();
    toast.success('Logout Successfully');
  };

  return (
    <div className="navbar conCls py-4">
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
            className="menu menu-sm dropdown-content bg-[#fb7a53a4] rounded-box z-10 mt-3 w-36 p-2 shadow font-medium"
          >
            {links}
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
          {links}
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
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#fb7a5331] border border-dashed border-[#fb7b53]"
            >
              Login
            </Link>
            <Link to="/register" className="btn bg-[#fb7b53] text-white">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
