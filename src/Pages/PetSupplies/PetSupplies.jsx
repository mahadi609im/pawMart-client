import React, { useEffect, useState } from 'react';
import paw2 from '../../assets/paw2.png';
import ListingCard from '../../Components/ListingCard/ListingCard';
import SectionBanner from '../../Components/SectionBanner/SectionBanner';
import LoadingSpinner from '../../Components/Loading/LoadingSpinner'; // 🔹 spinner import

const PetSupplies = () => {
  const [pets, setPets] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 loading state যোগ

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/listings')
      .then(res => res.json())
      .then(data => {
        setPets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-10">
      <title>Pets & Supplies | pawMart</title>;
      <header className="mb-10">
        <SectionBanner></SectionBanner>
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
          <h2 className="titleFont text-slate-950 text-3xl md:text-4xl text-center font-bold">
            Explore All Pets & Supplies
          </h2>
        </div>

        {/* 🔹 Loading Spinner */}
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets?.map(item => (
              <ListingCard key={item._id} item={item}></ListingCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PetSupplies;
