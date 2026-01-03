import React, { useEffect, useState } from 'react';
import {
  FaCalendarAlt,
  FaUserCircle,
  FaArrowRight,
  FaSearch,
  FaTag,
} from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import paw2 from '../../assets/paw2.png';
import SectionBanner from '../../Components/SectionBanner/SectionBanner';
import LoadingSpinner from '../../Components/Loading/LoadingSpinner';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://paw-mart-server-smoky.vercel.app/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        console.log('data');
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredBlogs = blogs.filter(
    blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="pb-24 bg-[#fffcf9] dark:bg-slate-950">
      <title>Insights & Stories | pawMart</title>

      <div className="conCls">
        {/* Header Section - Clean & Consistent with PetSupplies */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 md:py-12 mb-12">
          {/* Left Side: Simple & Bold Title */}
          <div className="w-full md:w-auto text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-[#fb7b53] relative inline-block">
                Pet Care Journal
                <img
                  className="w-6 h-6 absolute -top-3 -right-5 rotate-12"
                  src={paw2}
                  alt="paw"
                />
              </h3>
            </div>
            <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-5xl font-bold">
              Latest <span className="text-[#fb7b53]">Insights</span> & Stories
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm md:text-base max-w-md font-medium">
              Everything you need to know about your pet's health, happiness,
              and lifestyle.
            </p>
          </div>

          {/* Right Side: Simple Search Bar (Consistent Style) */}
          <div className="w-full md:w-80 relative group">
            <input
              type="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full border-b-2 border-dashed border-slate-200 dark:border-slate-800 focus:border-[#fb7b53] py-3 pl-10 pr-4 bg-transparent outline-none text-slate-900 dark:text-white transition-all font-semibold"
            />
            <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-[#fb7b53]" />

            {!searchTerm && (
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">
                <Typewriter
                  words={[
                    'Search topics...',
                    'Health tips...',
                    'Training guides...',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                />
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="space-y-16">
            {filteredBlogs.length > 0 ? (
              <>
                {/* 🌟 Featured Post - Full Width Style */}
                {!searchTerm && filteredBlogs[0] && (
                  <div className="relative group cursor-pointer overflow-hidden rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="lg:w-3/5 overflow-hidden">
                      <img
                        src={filteredBlogs[0].image}
                        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-1000"
                        alt="featured"
                      />
                    </div>
                    <div className="lg:w-2/5 p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-2 text-[#fb7b53] font-bold text-sm mb-4">
                        <FaTag size={12} /> {filteredBlogs[0].category}
                      </div>
                      <h3 className="titleFont text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#fb7b53] transition-colors">
                        {filteredBlogs[0].title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                        {filteredBlogs[0].excerpt}
                      </p>
                      <button className="flex items-center gap-3 font-black text-slate-900 dark:text-white group/link">
                        READ FEATURED STORY
                        <span className="w-10 h-10 rounded-full bg-[#fb7b53] text-white flex items-center justify-center group-hover/link:translate-x-2 transition-transform">
                          <FaArrowRight />
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 📰 Blog Grid - Secondary Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredBlogs.slice(searchTerm ? 0 : 1).map(blog => (
                    <div key={blog._id} className="group relative">
                      <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                        <img
                          src={blog.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                          <span className="text-white font-bold flex items-center gap-2 uppercase tracking-tighter">
                            View Article <FaArrowRight />
                          </span>
                        </div>
                      </div>

                      <div className="px-2">
                        <div className="flex items-center gap-4 text-[11px] font-bold text-[#fb7b53] mb-3 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5">
                            <FaCalendarAlt /> {blog.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaUserCircle /> {blog.author}
                          </span>
                        </div>
                        <h3 className="titleFont text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#fb7b53] transition-colors leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                          {blog.excerpt}
                        </p>
                        <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 group-hover:bg-[#fb7b53] transition-all group-hover:w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-100 dark:border-slate-800">
                <img
                  src={paw2}
                  className="w-16 h-16 mx-auto mb-4 opacity-20"
                  alt=""
                />
                <h3 className="text-2xl font-bold text-slate-400 italic">
                  No matches for "{searchTerm}"
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
