import React, { useContext } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import contactBg from '../../assets/listingsFormBg.webp'; // Background
import paw from '../../assets/paw.png';
import paw2 from '../../assets/paw2.png';
import { Link } from 'react-router';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  // স্ট্যাটিক ডাটা
  const stats = [
    { label: 'Active Listings', value: '08' },
    { label: 'Total Adopted', value: '12' },
    { label: 'Success Rate', value: '94%' },
  ];

  return (
    <div
      className="relative min-h-screen py-20 mt-12 bg-cover bg-fixed"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <title>My Profile | pawMart</title>

      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          {/* Top Banner Accent */}
          <div className="h-32 w-full bg-[#fb7a5321] border-b border-dashed border-[#fb7b53]"></div>

          <div className="p-8 lg:p-12">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-8 -mt-24 md:-mt-28">
              <div className="relative">
                <img
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp'
                  }
                  alt="Profile"
                  className="w-40 h-40 object-cover bg-white border-4 border-white shadow-xl rounded-2xl p-1"
                />
                <div className="absolute -bottom-2 -right-2 bg-orange-400 p-2 rounded-lg shadow-lg">
                  <img
                    src={paw2}
                    alt=""
                    className="w-5 h-5 brightness-0 invert"
                  />
                </div>
              </div>

              <div className="text-center md:text-left flex-1 md:mt-12">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h2 className="titleFont text-3xl md:text-4xl font-bold text-slate-900">
                    {user?.displayName || 'Pet Lover'}
                  </h2>
                  <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-200">
                    Verified
                  </span>
                </div>
                <p className="text-gray-500 mt-1 flex items-center justify-center md:justify-start gap-2 italic">
                  "Giving every paw a second chance at happiness."
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#fb7a5310] border border-dashed border-[#fb7b5360] rounded-2xl p-6 text-center group hover:bg-[#fb7b53] transition-all duration-300"
                >
                  <h4 className="text-3xl font-bold text-slate-800 group-hover:text-white transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-sm text-gray-500 group-hover:text-orange-100 transition-colors uppercase font-semibold mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Information Section */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Personal Information
                </h3>
                <div className="h-0.5 flex-1 bg-linear-to-r from-orange-200 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-orange-500 uppercase">
                    Full Name
                  </p>
                  <p className="text-lg font-medium text-slate-800">
                    {user?.displayName || 'N/A'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-orange-500 uppercase">
                    Email Address
                  </p>
                  <p className="text-lg font-medium text-slate-800">
                    {user?.email || 'N/A'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-orange-500 uppercase">
                    Member Since
                  </p>
                  <p className="text-lg font-medium text-slate-800">
                    January 2026
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-orange-500 uppercase">
                    Account UID
                  </p>
                  <p className="text-xs font-mono text-gray-400 break-all">
                    {user?.uid || 'guest_user_id'}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/myListing"
                className="bg-[#fb7b53] hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-orange-200"
              >
                Manage Listings
              </Link>
            </div>
          </div>

          {/* Paw Decoration */}
          <img
            src={paw}
            alt=""
            className="w-16 h-16 absolute bottom-6 right-6 opacity-10 rotate-12"
          />
          <img
            src={paw2}
            alt=""
            className="w-12 h-12 absolute top-4 right-4 opacity-10 -rotate-12"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
