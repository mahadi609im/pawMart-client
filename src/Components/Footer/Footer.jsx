import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaUserTie,
  FaArrowRight,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

// Assets
import pawWhite from '../../assets/pawWhite.png';
import paw2 from '../../assets/paw2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // সোশাল লিঙ্ক ডাটা
  const socials = [
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/mahadi609im',
      name: 'Facebook',
    },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/mahadi609im/',
      name: 'LinkedIn',
    },
    { icon: <FaGithub />, link: 'https://github.com/your-id', name: 'Github' },
    {
      icon: <FaUserTie />,
      link: 'https://mahaportfolio-609im.netlify.app/',
      name: 'Portfolio',
    },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-300 transition-colors duration-500 overflow-hidden">
      {/* 1. Newsletter Section */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#fb7b53] to-[#ff9d7d] rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-orange-200 dark:shadow-none">
            {/* Animated BG Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -ml-10 -mb-10 animate-pulse transition-all"></div>

            <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10">
              <div className="text-white space-y-4">
                {/* Stay Connected Label */}
                <div className="relative inline-block group">
                  <h3 className="relative z-10 px-6 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-500 bg-white/50 text-[#fb7b53] dark:bg-slate-900/80 backdrop-blur-xl group-hover:bg-[#fb7b53] group-hover:text-white">
                    Stay Connected
                    <div className="absolute -top-2 -right-2 bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-md transition-transform duration-500 group-hover:rotate-[360deg]">
                      <img
                        className="w-4 h-4 object-contain"
                        src={paw2}
                        alt="paw"
                      />
                    </div>
                  </h3>
                </div>

                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                  Join Our Pet <br />{' '}
                  <span className="text-slate-900">Revolution</span>
                </h2>
                <p className="text-white/80 font-medium max-w-sm text-sm">
                  Subscribe to get exclusive adoption alerts, pet care tips, and
                  premium shop discounts.
                </p>
              </div>

              {/* Modern Input Form */}
              <div className="relative group w-full max-w-md">
                <form
                  className="relative"
                  onSubmit={e => {
                    e.preventDefault();
                    alert('Subscribed!');
                  }}
                >
                  <div className="relative flex items-center">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      className="w-full bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white placeholder:text-white/40 px-7 py-5 rounded-full outline-none focus:bg-white/20 transition-all pr-16 font-medium"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 w-12 h-12 bg-white text-[#fb7b53] rounded-full shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-500 flex items-center justify-center overflow-hidden group/btn"
                    >
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <FaArrowRight className="absolute transition-all duration-500 transform group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
                        <FaArrowRight className="absolute transition-all duration-500 transform -translate-x-10 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                      </div>
                    </button>
                  </div>
                </form>
                <div className="mt-4 flex justify-between px-4">
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    Press Enter to join
                  </p>
                  <p className="text-[10px] text-white/60 font-medium italic">
                    No spam, only love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative">
        {/* Background Paw Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paws.png')]"></div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="p-2 bg-[#fb7a53a6] rounded-xl group-hover:rotate-12 transition-transform duration-500">
                <img
                  src={pawWhite}
                  alt="logo"
                  className="w-8 h-8"
                  style={{
                    filter:
                      'invert(58%) sepia(51%) saturate(2891%) rotate(328deg) brightness(101%) contrast(97%)',
                  }}
                />
              </div>
              <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                pawMart
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Connecting compassionate hearts with furry souls. Experience the
              best pet adoption service since 2024.
            </p>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-[#fb7b53] hover:text-white hover:-translate-y-1 transition-all shadow-sm"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-black text-slate-900 dark:text-white mb-8 relative inline-block">
              Navigation{' '}
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#fb7b53] rounded-full"></span>
            </h4>
            <ul className="space-y-4 font-bold text-sm">
              {['Home', 'Pets', 'Blogs', 'Contact'].map(item => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-slate-500 dark:text-slate-400 hover:text-[#fb7b53] flex items-center gap-2 group transition-all"
                  >
                    <span className="w-0 h-[2px] bg-[#fb7b53] group-hover:w-4 transition-all"></span>{' '}
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-black text-slate-900 dark:text-white mb-8 relative inline-block">
              Get In Touch{' '}
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#fb7b53] rounded-full"></span>
            </h4>
            <div className="space-y-5 text-sm font-bold">
              <div className="flex items-start gap-4 italic text-slate-500 dark:text-slate-400">
                <MdLocationOn className="text-[#fb7b53] text-2xl shrink-0" />
                <span>
                  Tongi Gazipur, Dhaka <br /> Bangladesh, Asia
                </span>
              </div>
              <a
                href="tel:+8801609216725"
                className="flex items-center gap-4 hover:text-[#fb7b53] transition-colors uppercase tracking-wider"
              >
                <MdPhone className="text-[#fb7b53] text-xl" /> +880 1609 216 725
              </a>
              <a
                href="mailto:maha609im@gmail.com"
                className="flex items-center gap-4 hover:text-[#fb7b53] transition-colors"
              >
                <MdEmail className="text-[#fb7b53] text-xl" />{' '}
                maha609im@gmail.com
              </a>
            </div>
          </div>

          {/* Status Card */}
          <div className="relative group bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-sm">
            <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-[10px]">
              Availability
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-bold uppercase">
                  Weekday
                </span>
                <span className="font-black text-[#fb7b53]">09am - 06pm</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 font-bold uppercase">
                  Weekend
                </span>
                <span className="font-black text-[#fb7b53]">10am - 04pm</span>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                <span className="text-[10px] font-black uppercase text-green-500">
                  Open Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-slate-100 dark:border-slate-900 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>
            © {currentYear} <span className="text-[#fb7b53]">pawMart</span> —
            Crafted with Love
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#fb7b53] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#fb7b53] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
