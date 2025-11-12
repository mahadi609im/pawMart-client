import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ListingCard from '../../Components/ListingCard/ListingCard';
import paw2 from '../../assets/paw2.png';
const CategoryFiltered = () => {
  const { categoryName } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://paw-mart-server-smoky.vercel.app/listings') // server theke all listings
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(item => item.category === categoryName);
        setListings(filtered);
        setLoading(false);
      });
  }, [categoryName]);

  if (loading)
    return (
      <div className="py-20 text-center text-gray-500 font-semibold">
        Loading...
      </div>
    );

  if (listings.length === 0)
    return (
      <div className="py-20 text-center text-[#fb7b53] font-semibold flex justify-center items-center gap-2">
        <h3 className="text-base font-bold text-[#fb7b53] relative inline-block mx-auto">
          No items available in {categoryName}
          <img
            className="w-6 h-6 absolute -top-3 -right-5"
            src={paw2}
            alt="paw"
          />
        </h3>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 conCls">
      {listings.map(item => (
        <ListingCard item={item}></ListingCard>
      ))}
    </div>
  );
};

export default CategoryFiltered;
