import React from 'react';
import paw from '../../assets/paw.png';
import { useLoaderData } from 'react-router';

const ListingsDetails = () => {
  const listingsData = useLoaderData();
  const { name, category, email, description, price, location, image } =
    listingsData || {};
  console.log(listingsData);

  return (
    <div className="bg-[#fff8f6] min-h-screen flex justify-center items-center py-16 px-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full flex flex-col lg:flex-row overflow-hidden border border-dashed border-[#fb7b53]">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center bg-[#fb7a5331] p-6">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Details Section */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center relative">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-[#fb7b53] font-bold text-sm relative inline-block ml-6">
              <img
                src={paw}
                alt=""
                className="w-5 h-5 absolute -left-6 top-0"
              />
              Pet Details
            </h3>
            <h2 className="text-3xl font-bold text-slate-950 mt-2">{name}</h2>
          </div>

          {/* Info Grid */}
          <div className="flex flex-col md:flex-row gap-8 text-slate-800 text-base">
            <div>
              <p>
                <span className="font-semibold text-[#fb7b53]">Category:</span>{' '}
                {category}
              </p>
              <p>
                <span className="font-semibold text-[#fb7b53]">
                  Owner Email:
                </span>{' '}
                {email}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-[#fb7b53]">Price:</span> $
                {price}
              </p>
              <p>
                <span className="font-semibold text-[#fb7b53]">Location:</span>{' '}
                {location}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-base">
            <h4 className="font-semibold text-[#fb7b53] mb-2">Description</h4>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#fb7b53] hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-lg transition-all w-fit">
            Order Now
          </button>

          {/* Paw Decoration */}
          <img
            src={paw}
            alt=""
            className="w-8 h-8 absolute bottom-4 right-4 opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default ListingsDetails;
