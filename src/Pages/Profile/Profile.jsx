import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import {
  FaEdit,
  FaSave,
  FaTimes,
  FaCamera,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaPaw,
} from 'react-icons/fa';
import { Link } from 'react-router';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(
    user?.photoURL || 'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp'
  );
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || 'Pet Lover',
    phone: '+880 1609-123456',
    bio: 'Giving every paw a second chance at happiness.',
    location: 'Dhaka, Bangladesh',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add your update logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 py-12 transition-colors duration-500">
      <title>My Profile | pawMart</title>

      <div className="max-w-5xl mx-auto px-4">
        {/* 🔹 Profile Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="h-32 bg-[#fb7b53]/10 dark:bg-[#fb7b53]/5 border-b border-gray-100 dark:border-slate-800"></div>

          <div className="px-8 pb-8">
            <div className="relative flex flex-col md:flex-row items-center md:items-end gap-6 -mt-16">
              {/* Profile Image */}
              <div className="relative group">
                <img
                  src={profileImage}
                  className="w-40 h-40 rounded-3xl object-cover border-4 border-white dark:border-slate-900 shadow-lg"
                  alt="profile"
                />
                {isEditing && (
                  <label className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                    <FaCamera className="text-white text-2xl" />
                    <input
                      type="file"
                      className="hidden"
                      onChange={e =>
                        setProfileImage(URL.createObjectURL(e.target.files[0]))
                      }
                    />
                  </label>
                )}
              </div>

              {/* Name & Title */}
              <div className="flex-1 text-center md:text-left mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {formData.displayName}
                </h1>
                <p className="text-[#fb7b53] font-medium flex items-center justify-center md:justify-start gap-2 mt-1">
                  <FaPaw size={14} /> Premium Member
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-[#fb7b53] text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#e06a46] transition-all"
                    >
                      <FaSave /> Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 px-5 py-2.5 rounded-xl font-bold hover:bg-gray-200 transition-all"
                    >
                      <FaTimes />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="border-2 border-[#fb7b53] text-[#fb7b53] px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-[#fb7b53] hover:text-white transition-all"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Stats & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Side: Stats */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <StatRow label="Active Ads" value="08" />
                <StatRow label="Adopted" value="12" />
                <StatRow label="Rating" value="4.9/5" />
              </div>
            </div>

            <Link
              to="/myListing"
              className="block p-6 bg-[#fb7b53] text-white rounded-3xl text-center font-bold hover:opacity-90 transition-opacity"
            >
              Manage All Listings
            </Link>
          </div>

          {/* Right Side: Information */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Account Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProfileInfoItem
                icon={<FaUser />}
                label="Display Name"
                name="displayName"
                value={formData.displayName}
                isEditing={isEditing}
                onChange={handleInputChange}
              />
              <ProfileInfoItem
                icon={<FaEnvelope />}
                label="Email Address"
                value={user?.email || 'N/A'}
                isEditing={false}
              />
              <ProfileInfoItem
                icon={<FaPhone />}
                label="Phone"
                name="phone"
                value={formData.phone}
                isEditing={isEditing}
                onChange={handleInputChange}
              />
              <ProfileInfoItem
                icon={<FaMapMarkerAlt />}
                label="Location"
                name="location"
                value={formData.location}
                isEditing={isEditing}
                onChange={handleInputChange}
              />
              <ProfileInfoItem
                icon={<FaCalendarCheck />}
                label="Member Since"
                value="Jan 2026"
                isEditing={false}
              />

              <div className="md:col-span-2">
                <label className="text-xs font-bold text-gray-400 uppercase block mb-2">
                  Bio / Description
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-3 outline-none focus:border-[#fb7b53] text-gray-700 dark:text-gray-200"
                  />
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "{formData.bio}"
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Components for Cleanliness ---

const StatRow = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-gray-50 dark:border-slate-800 pb-3 last:border-0 last:pb-0">
    <span className="text-gray-500 dark:text-gray-400 text-sm">{label}</span>
    <span className="font-bold text-gray-900 dark:text-white">{value}</span>
  </div>
);

const ProfileInfoItem = ({ icon, label, value, isEditing, name, onChange }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2 text-gray-400 mb-1">
      <span className="text-[#fb7b53] text-sm">{icon}</span>
      <span className="text-[11px] font-bold uppercase tracking-wider">
        {label}
      </span>
    </div>
    {isEditing ? (
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#fb7b53]"
      />
    ) : (
      <p className="text-gray-700 dark:text-gray-200 font-semibold">{value}</p>
    )}
  </div>
);

export default ProfilePage;
