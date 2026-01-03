import React from 'react';
import { FaSmileBeam, FaDog, FaUserShield, FaAward } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

const highlights = [
  {
    icon: <FaDog size={32} />,
    count: '2,500+',
    label: 'Pets Rehomed',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: <FaSmileBeam size={32} />,
    count: '1,800+',
    label: 'Happy Families',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: <FaUserShield size={32} />,
    count: '100%',
    label: 'Safe Adoptions',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: <FaAward size={32} />,
    count: '15+',
    label: 'Rescue Awards',
    color: 'bg-purple-100 text-purple-600',
  },
];

const Highlights = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <img
          src={paw2}
          className="absolute top-10 left-10 w-20 rotate-12"
          alt=""
        />
        <img
          src={paw2}
          className="absolute bottom-10 right-10 w-24 -rotate-12"
          alt=""
        />
      </div>

      <div className="conCls relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fb7a5315] rounded-full border border-dashed border-[#fb7b53]">
              <span className="text-[#fb7b53] font-bold text-sm uppercase tracking-widest">
                Our Impact
              </span>
              <img src={paw2} className="w-4 h-4 animate-pulse" alt="" />
            </div>

            <h2 className="titleFont text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
              Making a Difference <br />
              <span className="text-[#fb7b53]">One Paw at a Time</span>
            </h2>

            <p className="text-gray-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
              We are proud to be a bridge between homeless pets and loving
              families. Our highlights reflect the love, care, and trust we've
              built within the community.
            </p>

            <button
              to="/pets"
              className="mt-6 px-6 py-3 bg-[#fb7b53] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e06b40] transition"
            >
              Read success stories
            </button>
          </div>

          {/* Right Side: Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-[2rem] border border-transparent transition-all duration-300 group
                  ${idx % 2 !== 0 ? 'mt-0 md:mt-8' : ''} 
                  bg-white dark:bg-slate-900 shadow-xl shadow-gray-100 dark:shadow-none hover:border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5305]`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 ${item.color}`}
                >
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                  {item.count}
                </h3>
                <p className="text-gray-500 dark:text-slate-500 font-medium text-sm md:text-base uppercase tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
