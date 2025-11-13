import React, { useEffect, useState } from 'react';
import paw2 from '../../assets/paw2.png';
import ListingCard from '../../Components/ListingCard/ListingCard';
import SectionBanner from '../../Components/SectionBanner/SectionBanner';
import LoadingSpinner from '../../Components/Loading/LoadingSpinner';
import { Typewriter } from 'react-simple-typewriter';

const PetSupplies = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  // 🔹 filter pets based on search term
  const filteredPets = pets.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10">
      <title>Pets & Supplies | pawMart</title>
      <header className="mb-10">
        <SectionBanner />
      </header>
      <div className="conCls">
        <div className="flex flex-col justify-center items-center mb-8 space-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
              Pet & Supplies
              <img
                className="w-6 h-6 absolute -top-3 -right-5"
                src={paw2}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-4xl text-center font-bold">
            Explore All Pets & Supplies
          </h2>

          <div className="relative w-full md:w-1/3 mb-4">
            <input
              type="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="border border-dashed border-[#fb7b53] rounded-lg px-4 py-2 w-full focus:outline-none text-slate-950 dark:text-slate-100 bg-transparent relative z-20"
            />
            {!searchTerm && (
              <span className="absolute left-4 top-2 text-slate-600 pointer-events-none z-10">
                <Typewriter
                  words={[
                    'Search by name...',
                    'Try “Golden Retriever”...',
                    'Find your pet!',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            )}
          </div>
        </div>

        {/* 🔹 Loading Spinner */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPets.length > 0 ? (
              filteredPets.map(item => (
                <ListingCard key={item._id} item={item} />
              ))
            ) : (
              <div className="text-center text-[#fb7b53] font-semibold col-span-full">
                <h3 className="text-lg font-semibold text-[#fb7b53] relative inline-block mx-auto">
                  No pets found for "{searchTerm}"
                  <img
                    className="w-6 h-6 absolute -top-3 -right-5"
                    src={paw2}
                    alt="paw"
                  />
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PetSupplies;
