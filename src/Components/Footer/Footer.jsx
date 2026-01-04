import React from 'react';
import { Link } from 'react-router';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaPaperPlane,
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import pawWhite from '../../assets/pawWhite.png';
import paw2 from '../../assets/paw2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-300 transition-colors duration-500 overflow-hidden">
      {/* Newsletter Section - Animated & Modern */}
      <div className="relative z-10 pt-20">
        <div className="conCls">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#fb7b53] to-[#ff9d7d] rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-orange-200 dark:shadow-none">
            {/* Animated Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -ml-10 -mb-10 animate-pulse transition-all duration-[3000ms]"></div>

            <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10">
              <div className="text-white space-y-4">
                <div className="relative inline-block group">
                  {/* Glassmorphism Backdrop Label */}
                  <h3
                    className="relative z-10 px-6 py-2 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all duration-500
                  bg-white/50 text-[#fb7b53] border border-slate-100 shadow-sm
                  dark:bg-slate-900/80 dark:text-[#fb7b53] dark:border-slate-800
                  backdrop-blur-xl
                  group-hover:bg-[#fb7b53] group-hover:text-white group-hover:border-[#fb7b53] group-hover:shadow-lg group-hover:shadow-[#fb7b53]/30"
                  >
                    Stay Connected
                    {/* Floating Paw Icon */}
                    <div className="absolute -top-2 -right-2 bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                      <img
                        className="w-4 h-4 object-contain"
                        src={paw2}
                        alt="paw"
                      />
                    </div>
                  </h3>

                  {/* Subtle Glow behind white/dark badge */}
                  <div className="absolute inset-0 bg-[#fb7b53] blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                <h2 className="text-4xl md:text-5xl font-black titleFont leading-tight">
                  Join Our Pet <br />{' '}
                  <span className="text-slate-900">Revolution</span>
                </h2>
                <p className="text-white/80 font-medium max-w-sm">
                  Subscribe to get exclusive adoption alerts, pet care tips, and
                  premium shop discounts.
                </p>
              </div>

              <div className="relative group w-full max-w-md">
                <form
                  className="relative"
                  onSubmit={e => {
                    e.preventDefault();
                    alert('Subscribed successfully!');
                  }}
                >
                  {/* Input Wrapper */}
                  <div className="relative flex items-center group">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      className="w-full bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white placeholder:text-white/40 px-7 py-5 rounded-full outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-500 pr-16 font-medium shadow-inner"
                    />

                    {/* Unique Circular Submit Button */}
                    <button
                      type="submit"
                      className="absolute right-2 w-12 h-12 bg-white text-[#fb7b53] rounded-full shadow-lg hover:bg-slate-900 hover:text-white transition-all duration-500 flex items-center justify-center overflow-hidden group/btn active:scale-90"
                    >
                      {/* Sliding Icon Wrapper - Fully Centered */}
                      <div className="relative w-5 h-5 flex items-center justify-center">
                        <FaArrowRight className="absolute transition-all duration-500 transform group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
                        <FaArrowRight className="absolute transition-all duration-500 transform -translate-x-10 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                      </div>
                    </button>
                  </div>

                  {/* Subtle Animated Bottom Line */}
                  <div className="absolute -bottom-1 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700"></div>
                </form>

                {/* Helper Texts with better spacing */}
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center px-4 gap-2">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                    Press <span className="text-white">Enter</span> to join
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

      {/* Main Footer Links */}
      <div className="conCls pt-24 pb-16 relative">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/paws.png')",
          }}
        ></div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="p-2 bg-[#fb7b531a] rounded-xl group-hover:rotate-12 transition-transform duration-500">
                <img
                  src={pawWhite}
                  alt="PawMart"
                  className="w-8 h-8 filter-orange"
                  style={{
                    filter:
                      'invert(58%) sepia(51%) saturate(2891%) rotate(328deg) brightness(101%) contrast(97%)',
                  }}
                />
              </div>
              <span className="text-3xl font-black text-slate-900 dark:text-white titleFont tracking-tighter">
                pawMart
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
              Connecting compassionate hearts with furry souls. Experience the
              best pet adoption and shop service since 2024.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#fb7b53] hover:text-white transition-all duration-300 group shadow-sm"
                  >
                    <Icon className="group-hover:scale-110" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-black text-slate-900 dark:text-white mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#fb7b53] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Adoption Space', 'Shop', 'Contact'].map(
                item => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-slate-500 dark:text-slate-400 hover:text-[#fb7b53] dark:hover:text-[#fb7b53] font-bold text-sm transition-all flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[2px] bg-[#fb7b53] group-hover:w-4 transition-all duration-300"></span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-black text-slate-900 dark:text-white mb-8 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#fb7b53] rounded-full"></span>
            </h4>
            <div className="space-y-6 font-bold text-sm">
              <div className="flex items-start gap-4">
                <MdLocationOn className="text-[#fb7b53] text-2xl shrink-0" />
                <span className="dark:text-slate-400">
                  123 Pet Avenue, Suite 45 <br /> San Francisco, CA 94103
                </span>
              </div>
              <a
                href="tel:+880123456789"
                className="flex items-center gap-4 hover:text-[#fb7b53] transition-colors"
              >
                <MdPhone className="text-[#fb7b53] text-xl shrink-0" />
                <span>+880 1234 567 890</span>
              </a>
              <a
                href="mailto:hello@pawmart.com"
                className="flex items-center gap-4 hover:text-[#fb7b53] transition-colors"
              >
                <MdEmail className="text-[#fb7b53] text-xl shrink-0" />
                <span>hello@pawmart.com</span>
              </a>
            </div>
          </div>

          {/* Status/Hours Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#fb7b53] blur-2xl opacity-5 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem]">
              <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
                Availability
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                    Weekday
                  </span>
                  <span className="text-sm font-black text-[#fb7b53]">
                    09am - 06pm
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
                    Weekend
                  </span>
                  <span className="text-sm font-black text-[#fb7b53]">
                    10am - 04pm
                  </span>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  <span className="text-[10px] font-black uppercase text-green-500 tracking-widest">
                    Store is open now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-100 dark:border-slate-900">
        <div className="conCls py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em]">
            © {currentYear} <span className="text-[#fb7b53]">pawMart</span> —
            Crafted with Love
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-xs font-black text-slate-400 dark:text-slate-600 hover:text-[#fb7b53] transition-colors uppercase"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs font-black text-slate-400 dark:text-slate-600 hover:text-[#fb7b53] transition-colors uppercase"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
