import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaCalendarAlt, FaUserCircle } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';
import { Link } from 'react-router';

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://paw-mart-server-smoky.vercel.app/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="conCls">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-12 space-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
              Knowledge Base
              <img
                className="w-6 h-6 absolute -top-3 -right-5"
                src={paw2}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-5xl text-center font-bold">
            Latest From Our Blog
          </h2>
          <p className="text-gray-500 dark:text-slate-400 text-center max-w-lg mx-auto">
            Expert advice, pet care tips, and heartwarming stories to help you
            become the best pet parent.
          </p>
        </div>

        {/* Blog Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Loading Skeleton UI (Optional) */}
            {[1, 2, 3].map(n => (
              <div
                key={n}
                className="h-96 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-[2.5rem]"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* হোম পেজে আমরা সাধারণত ৩টি লেটেস্ট ব্লগ দেখাই */}
            {blogs.slice(0, 3).map(blog => (
              <div
                key={blog._id}
                className="group flex flex-col bg-[#fdfaf7] dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-transparent hover:border-dashed hover:border-[#fb7b53] transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-orange-100 dark:hover:shadow-none"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden p-3">
                  <img
                    src={blog.image}
                    className="w-full h-full object-cover rounded-[2rem] transform group-hover:scale-110 transition-transform duration-700"
                    alt={blog.title}
                  />
                  <div className="absolute top-6 left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#fb7b53] shadow-sm">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-400 mb-4 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[#fb7b53]" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaUserCircle className="text-[#fb7b53]" />
                      {blog.author}
                    </div>
                  </div>

                  <h3 className="titleFont text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#fb7b53] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global View All Button */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/blogs"
            className="flex items-center gap-3 bg-white dark:bg-slate-900 border-2 border-[#fb7b53] text-[#fb7b53] px-10 py-4 rounded-2xl font-bold hover:bg-[#fb7b53] hover:text-white transition-all duration-300 shadow-lg shadow-orange-100 dark:shadow-none"
          >
            Explore All Blogs
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
