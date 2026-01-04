import React, { useEffect, useState } from 'react';
import paw2 from '../../assets/paw2.png';
import ListingCard from '../../Components/ListingCard/ListingCard';
import SectionBanner from '../../Components/SectionBanner/SectionBanner';
import LoadingSpinner from '../../Components/Loading/LoadingSpinner';
import { Typewriter } from 'react-simple-typewriter';
import { FiFilter, FiSearch, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const PetSupplies = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for Search, Filter, Sort, and Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('newest');
  const [priceRange, setPriceRange] = useState(5000); // Default max price
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setLoading(true);
    fetch('https://paw-mart-server-smoky.vercel.app/listings')
      .then(res => res.json())
      .then(data => {
        setPets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // 🔹 Advanced Filtering Logic
  const filteredPets = pets
    .filter(item => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      // যদি প্রাইস 'Free' থাকে তবে ০ ধরবে, নাহলে নাম্বার এ কনভার্ট করবে
      const itemPrice = item.price === 'Free' ? 0 : parseFloat(item.price);
      const matchesPrice = itemPrice <= priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOption === 'lowToHigh')
        return (
          (a.price === 'Free' ? 0 : a.price) -
          (b.price === 'Free' ? 0 : b.price)
        );
      if (sortOption === 'highToLow')
        return (
          (b.price === 'Free' ? 0 : b.price) -
          (a.price === 'Free' ? 0 : a.price)
        );
      if (sortOption === 'newest')
        return new Date(b.date || b._id) - new Date(a.date || a._id);
      return 0;
    });

  // 🔹 Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-500">
      <title>Explore Pets | pawMart</title>
      <header className="mb-10">
        <SectionBanner />
      </header>

      <div className="conCls">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center mb-12 space-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] flex items-center gap-2 relative">
              Pet & Supplies
              <img
                className="w-6 h-6 absolute -top-3 -right-5 animate-bounce"
                src={paw2}
                alt="paw"
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-900 dark:text-white text-3xl md:text-5xl text-center font-black">
            Explore All Pets & Supplies
          </h2>
        </div>

        {/* 🛠 Filters & Search Bar Section */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-xl shadow-orange-100/50 dark:shadow-none mb-10 border border-slate-100 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* 1. Search Bar */}
            <div className="relative space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">
                Search Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-3.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#fb7b53] outline-none transition-all pl-12"
                />
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                {!searchTerm && (
                  <span className="absolute left-12 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-sm">
                    <Typewriter
                      words={[
                        'Golden Retriever...',
                        'Cat Food...',
                        'Blue Macaw...',
                      ]}
                      loop={0}
                      cursor
                    />
                  </span>
                )}
              </div>
            </div>

            {/* 2. Category Filter */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">
                Category
              </label>
              <select
                onChange={e => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-3.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#fb7b53] outline-none"
              >
                <option value="All">All Categories</option>
                <option value="Pets (Adoption)">Pets (Adoption)</option>
                <option value="Pet Food">Pet Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Pet Care Products">Pet Care Products</option>
              </select>
            </div>

            {/* 3. Price Range Filter */}
            <div className="bg-slate-50/50 dark:bg-slate-800/50 rounded-[1.8rem] px-8 py-3 flex flex-col justify-center border border-transparent focus-within:border-[#fb7b5320] transition-all">
              <div className="flex justify-between items-center mb-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Budget Range
                </label>

                {/* 🔹 Price Display Logic */}
                <div className="flex items-center gap-1">
                  {priceRange == 0 ? (
                    <span className="text-xs font-black text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-md animate-pulse">
                      💝 Free Adoption
                    </span>
                  ) : (
                    <span className="text-sm font-black text-slate-900 dark:text-white">
                      Up to{' '}
                      <span className="text-[#fb7b53]">${priceRange}</span>
                    </span>
                  )}
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange}
                onChange={e => setPriceRange(e.target.value)}
                className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#fb7b53] transition-all"
              />

              {/* 🔹 Subtitle for clarity */}
              <div className="flex justify-between mt-1">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                  Free
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                  $10k+
                </span>
              </div>
            </div>

            {/* 4. Sorting */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">
                Sort By
              </label>
              <select
                onChange={e => setSortOption(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-5 py-3.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#fb7b53] outline-none"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* 🔹 Listings Display */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentItems.length > 0 ? (
                currentItems.map(item => (
                  <ListingCard key={item._id} item={item} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="relative inline-block">
                    <h3 className="text-2xl font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">
                      No Results Found
                    </h3>
                    <img
                      className="w-10 h-10 absolute -top-8 -right-8 opacity-20"
                      src={paw2}
                      alt="paw"
                    />
                  </div>
                  <p className="text-slate-400 mt-2">
                    Try adjusting your filters or search term.
                  </p>
                </div>
              )}
            </div>

            {/* 🔹 Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16 gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => p - 1)}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-30 hover:bg-[#fb7b53] hover:text-white transition-all font-bold"
                >
                  Prev
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all ${
                      currentPage === idx + 1
                        ? 'bg-[#fb7b53] text-white'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#fb7b53]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 disabled:opacity-30 hover:bg-[#fb7b53] hover:text-white transition-all font-bold"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PetSupplies;
