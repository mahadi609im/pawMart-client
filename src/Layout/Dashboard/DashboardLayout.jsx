import React, { useState, useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../../context/ContextProvider';
import {
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlineViewGrid,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineLogout,
  HiMenuAlt2,
  HiOutlineCog,
} from 'react-icons/hi';
import paw from '../../assets/paw.png';

const DashboardLayout = () => {
  const { user, signOutAuthUser } = useContext(AuthContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutAuthUser().then(() => navigate('/'));
  };

  // Sidebar Menu Items
  const menuItems = [
    {
      name: 'Overview',
      path: '/dashboard',
      icon: <HiOutlineViewGrid size={20} />,
    },
    {
      name: 'Add Listing',
      path: '/dashboard/addListing',
      icon: <HiOutlinePlusCircle size={20} />,
    },
    {
      name: 'My Listings',
      path: '/dashboard/myListing',
      icon: <HiOutlineHome size={20} />,
    },
    {
      name: 'My Orders',
      path: '/dashboard/myOrders',
      icon: <HiOutlineShoppingBag size={20} />,
    },
  ];

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* 1. Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-transform duration-300 lg:static lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <Link to="/" className="p-8 flex items-center gap-3">
            <img src={paw} alt="logo" className="w-8 h-8" />
            <span className="text-xl font-black tracking-tighter text-slate-800 dark:text-white">
              PAW<span className="text-[#fb7b53]">MART</span>
            </span>
          </Link>

          <nav className="flex-1 px-6 space-y-2 mt-4">
            {menuItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all ${
                    isActive
                      ? 'bg-[#fb7b53] text-white shadow-lg shadow-[#fb7b53]/20'
                      : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-200'
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-50 dark:border-slate-800">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3.5 w-full text-red-400 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl transition-all cursor-pointer"
            >
              <HiOutlineLogout size={20} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* --- Updated Top Navbar --- */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-4 md:px-10 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 transition-colors hover:text-[#fb7b53]"
            >
              <HiMenuAlt2 size={24} />
            </button>
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 hidden md:block border-l-2 border-[#fb7b53]/20 pl-4">
              Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {/* 🌓 Theme Toggle - Unique Swap Style */}
            <label className="swap swap-rotate group p-2.5 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-[#fb7a5315] rounded-2xl transition-all duration-300 border border-transparent hover:border-[#fb7b533d]">
              <input
                type="checkbox"
                onChange={() => {
                  const currentTheme =
                    document.documentElement.getAttribute('data-theme');
                  const newTheme =
                    currentTheme === 'night' ? 'winter' : 'night';
                  document.documentElement.setAttribute('data-theme', newTheme);
                  localStorage.setItem('theme', newTheme);
                }}
                defaultChecked={localStorage.getItem('theme') === 'night'}
              />
              {/* Sun Icon (Light Mode) */}
              <svg
                className="swap-off fill-[#fb7b53] w-6 h-6 transition-transform group-hover:rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64 17l-1.41 1.41L4.22 20l1.41-1.41L5.64 17zM1 13h3v-2H1v2zm10-9h2V1h-2v3zm7.36 4.05L19.77 4.64 18.36 3.23 16.95 4.64 18.36 6.05zM23 13v-2h-3v2h3zm-10 9h2v-3h-2v3zm4.64-2.05l1.41 1.41 1.41-1.41-1.41-1.41-1.41 1.41zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
              {/* Moon Icon (Dark Mode) */}
              <svg
                className="swap-on fill-[#fb7b53] w-6 h-6 transition-transform group-hover:-rotate-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64 13.65A9 9 0 0110.35 2.36 9.003 9.003 0 002 12a9 9 0 0012.64 8.65 9.003 9.003 0 007-7z" />
              </svg>
            </label>

            {/* 👤 Profile Image - Click to Update */}
            <Link
              to="/profile"
              title="Update Profile"
              className="relative group p-1 border-2 border-dashed border-[#fb7b53] rounded-full transition-all hover:scale-110 active:scale-90 hover:rotate-6 bg-white dark:bg-slate-800 shadow-lg shadow-[#fb7b53]/10"
            >
              <img
                referrerPolicy="no-referrer"
                className="w-11 h-11 object-cover rounded-full"
                src={
                  user?.photoURL ||
                  'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp'
                }
                alt="Profile"
              />
              {/* Profile Edit Badge */}
              <div className="absolute -bottom-1 -right-1 bg-[#fb7b53] text-white p-1 rounded-full border-2 border-white dark:border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </header>

        {/* 3. Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
