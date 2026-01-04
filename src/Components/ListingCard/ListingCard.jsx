import React from 'react';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router';

const ListingCard = ({ item }) => {
  const isFree = item.price === 0 || item.price === '' || item.price === 'Free';

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#fb7b53]/40 ">
      {/* 1. Image Section - Clean & Fixed Height */}
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge - Subtle Overlay */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-xl uppercase tracking-wider">
            {item.category}
          </span>
        </div>
      </div>

      {/* 2. Content Section - Spacing Perfection */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#fb7b53] transition-colors line-clamp-1">
            {item.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 mt-2">
          <FaMapMarkerAlt size={12} />
          <span className="text-xs font-medium">{item.location}</span>
        </div>

        {/* 3. Footer - Simple Price & Action */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50 dark:border-slate-800/50">
          <div>
            <p
              className={`text-lg font-extrabold ${
                isFree ? 'text-green-500' : 'text-[#fb7b53]'
              }`}
            >
              {isFree ? 'Free Adoption' : `৳${item.price}`}
            </p>
          </div>

          {/* Minimalist Circular Button */}
          <Link
            to={`/listingsDetails/${item._id}`}
            className="relative w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 transition-all duration-500 group-hover:bg-[#fb7b53] group-hover:text-white group-hover:rotate-45 cursor-pointer"
          >
            <FiArrowUpRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
