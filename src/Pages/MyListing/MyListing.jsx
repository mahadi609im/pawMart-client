import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

const MyListing = () => {
  // dummy data
  const myListings = [
    {
      id: 1,
      name: 'Golden Retriever Puppy',
      category: 'Pets (Adoption)',
      price: '$250',
      date: '2025-11-08',
      image: 'https://i.ibb.co.com/h7KgcL6/golden-retriever.jpg',
    },
    {
      id: 2,
      name: 'Cat Toy Set',
      category: 'Accessories',
      price: '$15',
      date: '2025-11-05',
      image: 'https://i.ibb.co.com/N7K7mL8/cat-toy.jpg',
    },
    {
      id: 3,
      name: 'Premium Cat Food',
      category: 'Pet Food',
      price: '$30',
      date: '2025-11-02',
      image: 'https://i.ibb.co.com/smNq2Hc/pet-food.jpg',
    },
  ];

  return (
    <div className="">
      {/* Table Section */}
      <div className="conCls pt-20">
        <div className="flex flex-col mb-8 space-y-2">
          <div className="flex">
            <h3 className="text-base font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
              My Listings
              <img
                className="w-6 h-6 absolute -top-3 -right-5"
                src={paw2}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 text-3xl md:text-4xl font-bold">
            Manage all pets & products here.
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-xl border border-dashed border-[#fb7b53] bg-white">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-[#fb7a5331] text-[#fb7b53]">
              <tr>
                <th className="py-3 px-6 font-semibold">Image</th>
                <th className="py-3 px-6 font-semibold">Name</th>
                <th className="py-3 px-6 font-semibold">Category</th>
                <th className="py-3 px-6 font-semibold">Price</th>
                <th className="py-3 px-6 font-semibold">Date</th>
                <th className="py-3 px-6 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myListings.map(item => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-[#fb7a5315] hover:shadow transition-all duration-200"
                >
                  <td className="py-3 px-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-dashed border-[#fb7b53]"
                    />
                  </td>
                  <td className="py-3 px-6 font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 text-gray-600">{item.category}</td>
                  <td className="py-3 px-6 text-gray-700 font-semibold">
                    {item.price}
                  </td>
                  <td className="py-3 px-6 text-gray-500">{item.date}</td>
                  <td className="py-3 px-6 flex items-center justify-center gap-3">
                    <div className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10  rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center">
                      <FaEdit size={16} />
                    </div>

                    <div className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10 rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center">
                      <FaTrashAlt size={16} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden flex flex-col gap-4">
          {myListings.map(item => (
            <div
              key={item.id}
              className="border border-dashed border-[#fb7b53] rounded-xl p-4 shadow hover:shadow-lg transition-all bg-[#fb7a5331]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover border border-dashed border-[#fb7b53]"
                />
                <div className="flex flex-col space-y-1 text-slate-800">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p>
                    <span className="font-semibold text-[#fb7b53]">
                      Category:
                    </span>{' '}
                    {item.category}
                  </p>
                  <p>
                    <span className="font-semibold text-[#fb7b53]">Price:</span>{' '}
                    {item.price}
                  </p>
                  <p>
                    <span className="font-semibold text-[#fb7b53]">Date:</span>{' '}
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-3">
                <div className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10  rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center">
                  <FaEdit size={16} />
                </div>

                <div className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10 rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center">
                  <FaTrashAlt size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyListing;
