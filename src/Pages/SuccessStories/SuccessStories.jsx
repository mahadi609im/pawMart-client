import React from 'react';
import { FaHeart, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      petName: 'Buddy',
      owner: 'Sarah & Mark',
      image:
        'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1000&auto=format&fit=crop',
      story:
        "Buddy was waiting for a home for 6 months. Now, he's the heart of our family. The adoption process was seamless and heart-warming.",
      category: 'Dog Adoption',
    },
    {
      id: 2,
      petName: 'Luna',
      owner: 'Emily Chen',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
      story:
        'Finding Luna through PetVerse was the best decision. She’s brought so much joy and purrs into my studio apartment.',
      category: 'Cat Adoption',
    },
    {
      id: 3,
      petName: 'Milo',
      owner: 'The Johnson Family',
      image:
        'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800',
      story:
        'We were looking for a senior dog, and Milo was the perfect match. Thank you for helping us give him a second chance at life.',
      category: 'Senior Pet',
    },
    {
      id: 4,
      petName: 'Oliver',
      owner: 'David Wilson',
      image:
        'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=1000&auto=format&fit=crop',
      story:
        'Oliver is the most energetic companion I could ask for. He loves his morning walks and afternoon naps!',
      category: 'Dog Adoption',
    },
    {
      id: 5,
      petName: 'Bella',
      owner: 'Jessica Alba',
      image:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1000&auto=format&fit=crop',
      story:
        'Bella has made our house a home. She is incredibly gentle and has bonded so well with our kids.',
      category: 'Cat Adoption',
    },
    {
      id: 6,
      petName: 'Cooper',
      owner: 'Michael Scott',
      image:
        'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop',
      story:
        'Cooper is a bundle of joy! His goofy personality keeps us laughing all day long. So glad we found him.',
      category: 'Puppy Love',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-28 pb-20 transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* 🔹 Header Section (Centered Style) */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="relative inline-block">
            <h3 className="text-lg font-bold text-[#fb7b53] tracking-tight">
              Happy Tails
            </h3>
            <img
              className="w-6 h-6 absolute -top-3 -right-5 rotate-12"
              src={paw2}
              alt="paw"
            />
          </div>
          <h1 className="titleFont text-slate-950 dark:text-slate-100 text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Stories of Love & Second Chances
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Every pet has a story. We are proud to have played a part in
            connecting these beautiful souls with their forever families.
          </p>
        </div>

        {/* 🔹 Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map(item => (
            <div
              key={item.id}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:border-[#fb7b53]/30 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.petName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#fb7b53] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-[#fb7b53]/20">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <button className="text-white flex items-center gap-2 font-bold text-sm">
                    Read Full Story <FaExternalLinkAlt className="text-xs" />
                  </button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                      {item.petName}
                    </h2>
                    <p className="text-sm font-bold text-[#fb7b53]">
                      Adopted by {item.owner}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#fb7b53]/10 flex items-center justify-center text-[#fb7b53]">
                    <FaHeart />
                  </div>
                </div>

                <div className="relative">
                  <p className="relative z-10 text-slate-600 dark:text-slate-400 italic leading-relaxed">
                    "{item.story}"
                  </p>
                </div>
              </div>

              {/* Interaction Decor */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#fb7b53] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
