import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'Pet Parent',
    image: 'https://i.pravatar.cc/150?u=sarah',
    review:
      "Adopting 'Luna' through pawMart was the best decision! The process was so smooth, and the team was incredibly supportive throughout the journey.",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Animal Lover',
    image: 'https://i.pravatar.cc/150?u=michael',
    review:
      'I love the verified profiles feature. It gave me peace of mind knowing that the pet products and adoption listings are genuine and safe.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Cat Owner',
    image: 'https://i.pravatar.cc/150?u=emily',
    review:
      "The community here is amazing. Found great advice for my rescue cat. pawMart isn't just a marketplace; it's a family for pet lovers!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#fdfaf7] dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Paws */}
      <img
        src={paw2}
        className="absolute top-10 right-10 w-16 opacity-10 rotate-45"
        alt=""
      />

      <div className="conCls relative z-10">
        {/* Header */}

        <div className="flex flex-col justify-center items-center mb-4 md:mb-8 space-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
              Testimonials
              <img
                className="w-6 h-6 absolute -top-3 -right-5"
                src={paw2}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-4xl text-center font-bold">
            What Our Happy Owners Say
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-transparent hover:border-dashed hover:border-[#fb7b53] transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-10 bg-[#fb7b53] text-white p-3 rounded-xl group-hover:scale-110 transition-transform">
                <FaQuoteLeft size={18} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-slate-300 italic mb-8 leading-relaxed">
                "{item.review}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-none mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#fb7b53] font-semibold uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Paw Print Decor */}
              <div className="absolute bottom-6 right-8 opacity-[0.05] group-hover:opacity-20 transition-opacity">
                <img src={paw2} className="w-10 h-10" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
