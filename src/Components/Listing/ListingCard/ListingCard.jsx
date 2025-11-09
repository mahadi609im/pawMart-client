import React from 'react';
import { FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const ListingCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#fb7a5324] border border-dashed hover:border-[#fb7b53]">
      {/* Image Section */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-auto object-cover"
        />

        {/* Category Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#fb7a53] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {item.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <FaMapMarkerAlt className="text-[#fb7b53]" />
          <span>{item.location}</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between mt-auto">
          <p className="text-[#fb7b53] font-semibold text-base">
            {item.price === 0 ? 'Free Adoption' : `৳${item.price}`}
          </p>

          <button className="inline-flex items-center justify-center gap-2 text-[#fb7b53] font-medium hover:gap-3 transition-all">
            Details <FaChevronRight className="text-[#fb7b53]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
