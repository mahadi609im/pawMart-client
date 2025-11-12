import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaChevronRight } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

const categories = [
  {
    name: 'Pets (Adoption)',
    image: 'https://i.ibb.co.com/bMPpw7M4/category-Icon1.webp',
  },
  {
    name: 'Pet Food',
    image: 'https://i.ibb.co.com/1fFyJWYj/category-Icon2.jpg',
  },
  {
    name: 'Accessories',
    image: 'https://i.ibb.co.com/CpZM6pQ1/category-Icon3.webp',
  },
  {
    name: 'Pet Care Products',
    image: 'https://i.ibb.co.com/QjvXkGtp/category-Icon4.webp',
  },
];

const Category = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/listings')
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center text-gray-500 font-semibold">
        Loading categories...
      </div>
    );

  // 👉 প্রতিটি category অনুযায়ী কতগুলো product আছে তা বের করো
  const categoryCounts = categories.map(cat => {
    const count = listings.filter(item => item.category === cat.name).length;
    return { ...cat, count };
  });

  return (
    <div className="py-10 bg-white">
      <div className="conCls">
        <h2 className="titleFont text-slate-950 text-3xl text-center font-bold items-start gap-2 relative inline-block mb-6">
          Categories
          <img className="w-8 h-8 absolute -top-4 -right-6" src={paw2} alt="" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCounts.map((cat, index) => (
            <Link
              to={`/category-filtered-product/${cat.name}`}
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
                  <p className="text-sm text-gray-500">
                    {cat.count} {cat.count === 1 ? 'product' : 'products'}
                  </p>
                </div>
              </div>
              <button className="category-arrow text-[#fb7b53] transform transition-transform duration-300 w-8 h-8 p-2 rounded-full bg-[#fb7a5331] border border-dashed hover:border-[#fb7b53]">
                <FaChevronRight className="arrow-icon text-slate-950" />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
