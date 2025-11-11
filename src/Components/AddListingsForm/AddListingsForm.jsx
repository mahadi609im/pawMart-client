import React from 'react';
import listingsFormBg from '../../assets/listingsFormBg.webp';
import paw from '../../assets/paw.png';
import paw2 from '../../assets/paw2.png';

const AddListingsForm = () => {
  const currentUserEmail = 'maha609im@gmail.com';
  return (
    <div
      className="relative min-h-screen py-20 mt-12"
      style={{ backgroundImage: `url(${listingsFormBg})` }}
    >
      <div className="conCls flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full flex justify-center relative">
          <div className="relative">
            <img
              src={
                'https://softivuspro.com//wp//petpath/wp-content/uploads/2024/11/about-section-banner.png'
              }
              alt="Pet Banner"
              className="md:h-[500px] h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 w-full md:mt-0 bg-white rounded-xl shadow-lg p-8 relative">
          <div className="flex flex-col mb-8 space-y-4">
            <div className="flex">
              <h3 className="text-base font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
                Add Listings
                <img
                  className="w-6 h-6 absolute -top-3 -right-5"
                  src={paw2}
                  alt=""
                />
              </h3>
            </div>
            <h2 className="titleFont text-slate-950 text-3xl md:text-4xl font-bold">
              Add Your Pet or Product
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product / Pet Name */}
            <input
              type="text"
              name="name"
              placeholder="Product / Pet Name"
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            />

            {/* Category */}
            <select
              name="category"
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            >
              <option disabled selected>
                Category
              </option>
              <option>Pets</option>
              <option>Food</option>
              <option>Accessories</option>
              <option>Care Products</option>
            </select>

            {/* Price */}
            <input
              type="number"
              name="price"
              placeholder="Price (0 if pet)"
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            />

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            />

            {/* Image URL */}
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            />

            {/* Pick Up Date */}
            <input
              type="date"
              name="date"
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            />

            {/* Email (readonly) */}
            <input
              type="email"
              name="email"
              defaultValue={currentUserEmail}
              readOnly
              className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none cursor-not-allowed focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Description"
            className="w-full mt-4 h-32 rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
            onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
            onBlur={e => (e.target.style.outline = 'none')}
          ></textarea>

          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg mt-4 hover:bg-orange-500 transition">
            Add Pet/Product
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

export default AddListingsForm;
