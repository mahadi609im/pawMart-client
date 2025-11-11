import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';
const categories = [
  {
    name: 'Pets (Adoption)',
    products: '3 products',
    image: 'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp', // replace with your image path
  },
  {
    name: 'Pet Food',
    products: '5 products',
    image: 'https://i.ibb.co.com/1fFyJWYj/category-Icon2.jpg',
  },
  {
    name: 'Accessories',
    products: '4 products',
    image: 'https://i.ibb.co.com/CpZM6pQ1/category-Icon3.webp',
  },
  {
    name: 'Pet Care Products',
    products: '5 products',
    image: 'https://i.ibb.co.com/QjvXkGtp/category-Icon4.webp',
  },
];

const Category = () => {
  return (
    <div className="py-10 bg-white">
      <div className="conCls">
        {/* Header */}
        <h2 className="titleFont text-slate-950 text-3xl text-center font-bold items-start gap-2 relative inline-block mb-6">
          Categories
          <img className="w-8 h-8 absolute -top-4 -right-6" src={paw2} alt="" />
        </h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card bg-white shadow-md rounded-xl flex items-center justify-between px-5 py-4 hover:bg-[#fb7a5331] border border-dashed hover:border-[#fb7b53] cursor-pointer transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-16 h-16 object-cover bg-[#fb7a5331] border border-dashed border-[#fb7b53] rounded-full p-2"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-500">{cat.products}</p>
                </div>
              </div>
              <button className="category-arrow text-[#fb7b53] transform transition-transform duration-300 w-8 h-8 p-2 rounded-full bg-[#fb7a5331] border border-dashed hover:border-[#fb7b53]">
                <FaChevronRight className="arrow-icon text-slate-950" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
