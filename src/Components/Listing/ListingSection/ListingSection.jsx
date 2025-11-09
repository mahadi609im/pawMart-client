import React from 'react';
import { FaMapMarkerAlt, FaChevronRight, FaPaw } from 'react-icons/fa';
import ListingCard from '../ListingCard/ListingCard';
import paw from '../../../assets/paw.png';

const ListingSection = () => {
  const listings = [
    {
      _id: '691017836ce7737232652d4b',
      name: 'Beagle Puppy',
      category: 'Pets',
      price: 0,
      location: 'Dhaka',
      image: 'https://i.ibb.co.com/cPYrW9K/blog2.webp',
    },
    {
      _id: '691017836ce7737232652d3c',
      name: 'Parrot Baby',
      category: 'Pets',
      price: 0,
      location: 'Sylhet',
      image: 'https://i.ibb.co.com/cPYrW9K/blog2.webp',
    },
    {
      _id: '691017836ce7737232652d47',
      name: 'Ragdoll Cat Kitten',
      category: 'Pets',
      price: 0,
      location: 'Chattogram',
      image: 'https://i.ibb.co.com/cPYrW9K/blog2.webp',
    },
    {
      _id: '691017836ce7737232652d49',
      name: 'Cat Toy Ball',
      category: 'Accessories',
      price: 150,
      location: 'Chattogram',
      image: 'https://i.ibb.co.com/cPYrW9K/blog2.webp',
    },
    {
      _id: '691017836ce7737232652d41',
      name: 'Cat Collar with Bell',
      category: 'Accessories',
      price: 200,
      location: 'Chattogram',
      image: 'https://i.ibb.co.com/cPYrW9K/blog2.webp',
    },
    {
      _id: '691017836ce7737232652d44',
      name: 'Cat Nail Clipper',
      category: 'Pet Care Products',
      price: 250,
      location: 'Chattogram',
      image: 'https://i.ibb.co.com/cPYrW9K/blog2.webp',
    },
  ];

  return (
    <section className="py-10">
      <div className="conCls">
        <div className="flex flex-col justify-center items-center mb-8 space-y-4">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block mx-auto">
              <img
                className="w-8 h-8 absolute top-0 -left-8"
                src={paw}
                alt=""
              />
              Latest Listings
              <img
                className="w-8 h-8 absolute top-0 -right-8"
                src={paw}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 text-4xl text-center font-bold">
            Recently Added Pets & Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map(item => (
            <ListingCard key={item._id} item={item}></ListingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
