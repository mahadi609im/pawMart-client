import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
// import contactBg from '../../assets/listingsFormBg.webp';
// import paw from '../../assets/paw.png';
import paw2 from '../../assets/paw2.png';
import { Link } from 'react-router';
import { FaEdit, FaSave, FaTimes, FaCamera } from 'react-icons/fa';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  const [profileImage, setProfileImage] = useState(
    user?.photoURL || 'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp'
  );

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Editable State Management
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || 'Pet Lover',
    phone: '+880 1XXX XXXXXX', // Static for now
    bio: 'Giving every paw a second chance at happiness.',
    location: 'Dhaka, Bangladesh',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // এখানে আপনার API call বা Firebase Update লজিক বসবে
    console.log('Updated Data:', formData);
    setIsEditing(false);
  };

  const stats = [
    { label: 'Active Listings', value: '08' },
    { label: 'Total Adopted', value: '12' },
    { label: 'Success Rate', value: '94%' },
  ];

  return (
    <div className="relative min-h-screen py-20 mt-12 bg-cover bg-fixed transition-all duration-500">
      <title>My Profile | pawMart</title>

      {/* Full Width Container */}
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-10">
        <div className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden relative border border-white/20 dark:border-slate-800">
          {/* Dashboard Header Banner */}
          <div className="h-48 w-full bg-gradient-to-r from-[#fb7b5321] via-[#fb7b5305] to-[#fb7b5321] border-b border-dashed border-[#fb7b53]/30 relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paws.png')]"></div>
          </div>

          <div className="p-6 lg:p-16">
            {/* Profile Header Section */}
            <div className="flex flex-col md:flex-row items-end gap-8 -mt-32 md:-mt-40 relative z-10">
              <div className="relative group mx-auto md:mx-0">
                {/* ৩. src-তে স্টেট (profileImage) ব্যবহার করুন */}
                <img
                  referrerPolicy="no-referrer"
                  src={profileImage}
                  alt="Profile"
                  className="w-48 h-48 object-cover bg-white dark:bg-slate-800 border-8 border-white dark:border-slate-900 shadow-2xl rounded-[2.5rem] p-1 transition-transform duration-500 group-hover:scale-105"
                />

                {isEditing && (
                  <label className="absolute bottom-4 right-4 bg-[#fb7b53] p-3 rounded-2xl shadow-lg cursor-pointer hover:scale-110 transition-all text-white">
                    <FaCamera size={20} />
                    {/* ৪. onChange হ্যান্ডলার যোগ করুন */}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>

              <div className="text-center md:text-left flex-1 pb-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  {isEditing ? (
                    <input
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="text-3xl font-black bg-white/50 dark:bg-slate-800 border-b-2 border-[#fb7b53] outline-none text-slate-900 dark:text-white px-2"
                    />
                  ) : (
                    <h2 className="titleFont text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                      {formData.displayName}
                    </h2>
                  )}
                  <span className="bg-green-500/10 text-green-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-green-500/20">
                    Verified Member
                  </span>
                </div>

                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="mt-3 w-full max-w-md bg-transparent border-b border-[#fb7b53]/30 text-slate-500 outline-none italic"
                  />
                ) : (
                  <p className="text-gray-500 dark:text-slate-400 mt-2 italic font-medium">
                    "{formData.bio}"
                  </p>
                )}
              </div>

              {/* Edit/Save Toggle Button */}
              <div className="flex gap-3">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-green-200 dark:shadow-none hover:bg-green-600 transition-all"
                    >
                      <FaSave /> Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex items-center gap-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-6 py-3 rounded-2xl font-bold hover:bg-slate-300 transition-all"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 bg-slate-900 dark:bg-[#fb7b53] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
              {/* Left Column: Stats & Badges */}
              <div className="lg:col-span-4 space-y-8">
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 flex items-center justify-between group hover:border-[#fb7b53] transition-all"
                    >
                      <div>
                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          {stat.label}
                        </p>
                        <h4 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                          {stat.value}
                        </h4>
                      </div>
                      <div className="w-12 h-12 bg-[#fb7b53]/10 rounded-2xl flex items-center justify-center text-[#fb7b53] group-hover:bg-[#fb7a5348] group-hover:text-white transition-all">
                        <img
                          src={paw2}
                          className="w-6 h-6 object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Detailed Info */}
              <div className="lg:col-span-8">
                <div className="bg-gray-50/50 dark:bg-slate-800/30 rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 dark:border-slate-800">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-4">
                    Information Details
                    <span className="h-[2px] w-20 bg-[#fb7b53]"></span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <InfoItem
                      label="Full Name"
                      value={formData.displayName}
                      isEditing={isEditing}
                      name="displayName"
                      onChange={handleInputChange}
                    />
                    <InfoItem
                      label="Email Address"
                      value={user?.email || 'N/A'}
                      isEditing={false}
                    />
                    <InfoItem
                      label="Phone Number"
                      value={formData.phone}
                      isEditing={isEditing}
                      name="phone"
                      onChange={handleInputChange}
                    />
                    <InfoItem
                      label="Location"
                      value={formData.location}
                      isEditing={isEditing}
                      name="location"
                      onChange={handleInputChange}
                    />
                    <InfoItem
                      label="Member Since"
                      value="January 2026"
                      isEditing={false}
                    />
                    <div className="space-y-2">
                      <p className="text-xs font-black text-[#fb7b53] uppercase tracking-widest">
                        Account UID
                      </p>
                      <p className="text-xs font-mono text-slate-400 break-all">
                        {user?.uid}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-dashed border-gray-200 dark:border-slate-700">
                    <Link
                      to="/myListing"
                      className="inline-flex items-center gap-3 text-[#fb7b53] font-black uppercase text-xs tracking-[0.2em] hover:gap-5 transition-all"
                    >
                      View My Listings <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src={paw2}
            alt=""
            className="w-20 h-20 absolute top-10 right-10 opacity-5 -rotate-12 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Info Item Component
const InfoItem = ({ label, value, isEditing, name, onChange }) => (
  <div className="space-y-2">
    <p className="text-xs font-black text-[#fb7b53] uppercase tracking-widest">
      {label}
    </p>
    {isEditing ? (
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-slate-900 dark:text-white outline-none focus:border-[#fb7b53]"
      />
    ) : (
      <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
        {value}
      </p>
    )}
  </div>
);

const FaArrowRight = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 448 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
  </svg>
);

export default ProfilePage;
