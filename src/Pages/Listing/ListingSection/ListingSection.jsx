import { useEffect, useState } from 'react';
import ListingCard from '../../../Components/ListingCard/ListingCard';
import paw2 from '../../../assets/paw2.png';
import LoadingSpinner from '../../../Components/Loading/LoadingSpinner';

const ListingSection = () => {
  const [latestListings, setLatestListings] = useState(null);
  const [loading, setLoading] = useState(true); // 🔹 loading state যোগ করা হলো

  useEffect(() => {
    setLoading(true);
    fetch('https://paw-mart-server-smoky.vercel.app/latest_listings')
      .then(res => res.json())
      .then(data => {
        setLatestListings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false)); // error হলেও বন্ধ
  }, []);

  return (
    <section className="py-4 md:py-6 lg:py-10">
      <div className="conCls">
        <div className="flex flex-col justify-center items-center mb-4 md:mb-8 space-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
              Latest Listings
              <img
                className="w-6 h-6 absolute -top-3 -right-5"
                src={paw2}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 text-3xl md:text-4xl text-center font-bold">
            Recently Added Pets & Products
          </h2>
        </div>

        {/* 🔹 Loading Spinner */}
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestListings?.map(item => (
              <ListingCard key={item._id} item={item}></ListingCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListingSection;
