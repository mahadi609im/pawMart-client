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
    {
      icon: <FaGithub />,
      link: 'https://github.com/mahadi609im',
      name: 'Github',
    },
    {
      icon: <FaUserTie />,
      link: 'https://mahaportfolio-609im.netlify.app/',
      name: 'Portfolio',
    },
  ];

  return (
    <footer className="relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-300 transition-colors duration-500 overflow-hidden">
      {/* 1. Newsletter Section */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-[#fb7a53] dark:bg-slate-900 rounded-[3rem] p-10 md:p-20 transition-all duration-500 shadow-xl shadow-[#fb7b53]/10">
            {/* 🔹 Background Minimalist Decor */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 dark:bg-[#fb7b53]/5 rounded-full -mr-24 -mt-24 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black/5 dark:bg-white/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid lg:grid-cols-5 items-center gap-12">
              {/* 📝 Text Side (Span 3 Columns) */}
              <div className="lg:col-span-3 space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/10 dark:bg-white/5 border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90 dark:text-[#fb7b53]">
                    Community Network
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-4">
                    {/* 🔹 Main Heading */}
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
                      Master the Art of <br />
                      <span className="text-slate-900 dark:text-white/50">
                        Pet Parenting.
                      </span>
                    </h2>
                  </div>
                  <p className="text-white/80 dark:text-slate-400 font-medium max-w-lg text-base md:text-lg leading-relaxed">
                    Join 5,000+ owners receiving weekly insights on pet health,
                    behavior, and exclusive adoption opportunities.
                  </p>
                </div>
              </div>

              {/* ✉️ Form Side (Span 2 Columns) */}
              <div className="lg:col-span-2 w-full">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    alert('Welcome to the inner circle! 🐾');
                  }}
                  className="relative space-y-4"
                >
                  {/* 🔹 Modern Hybrid Input Group */}
                  <div className="relative p-2 rounded-[2rem] bg-white dark:bg-slate-800 shadow-2xl shadow-black/10 dark:shadow-none border border-transparent focus-within:border-white/40 dark:focus-within:border-[#fb7b53]/40 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                      <div className="flex-1 w-full px-4">
                        <input
                          type="email"
                          required
                          placeholder="Enter your email"
                          className="w-full bg-transparent py-4 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none font-bold text-base"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto whitespace-nowrap bg-[#fb7b53] dark:bg-[#fb7b53] text-white px-8 py-4 rounded-[1.5rem] font-black uppercase tracking-wider text-xs hover:bg-slate-900 dark:hover:bg-white dark:hover:text-[#fb7b53] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Join Now</span>
                        <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* 🔹 Trust Indicators */}
                  <div className="flex flex-col sm:flex-row items-center justify-between px-6 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-[#fb7b53] dark:border-slate-900 bg-slate-200 overflow-hidden"
                          >
                            <img
                              src={`https://i.pravatar.cc/100?img=${i + 20}`}
                              alt="user"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] font-black text-white dark:text-slate-400 uppercase tracking-widest">
                        +2.4k Members
                      </p>
                    </div>

                    <p className="text-[10px] font-bold text-white/70 dark:text-slate-500 uppercase flex items-center gap-1">
                      <span className="w-1 h-1 bg-white/50 dark:bg-slate-700 rounded-full"></span>
                      Zero Spam Policy
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* 🐾 Subtle Watermark */}
            <div className="absolute bottom-6 right-10 flex items-center gap-2 opacity-10 dark:opacity-5 select-none pointer-events-none">
              <img
                src={paw2}
                className="w-12 h-12 invert dark:invert-0"
                alt=""
              />
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
