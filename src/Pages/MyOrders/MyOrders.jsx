import React from 'react';
import paw2 from '../../assets/paw2.png';

const MyOrders = () => {
  const myOrders = [
    {
      id: 1,
      name: 'Golden Retriever Puppy',
      buyer: 'Sarah Johnson',
      price: 250,
      quantity: 1,
      address: '123 Pet Street, Dhaka',
      date: '2025-11-08',
      phone: '+880 1789-123456',
      image: 'https://i.ibb.co.com/h7KgcL6/golden-retriever.jpg',
    },
    {
      id: 2,
      name: 'Cat Toy Set',
      buyer: 'Mahir Hasan',
      price: 15,
      quantity: 2,
      address: '45 North Road, Chattogram',
      date: '2025-11-05',
      phone: '+880 1765-987654',
      image: 'https://i.ibb.co.com/N7K7mL8/cat-toy.jpg',
    },
    {
      id: 3,
      name: 'Premium Cat Food',
      buyer: 'Nadia Rahman',
      price: 30,
      quantity: 3,
      address: '12 Green Avenue, Sylhet',
      date: '2025-11-02',
      phone: '+880 1999-654321',
      image: 'https://i.ibb.co.com/smNq2Hc/pet-food.jpg',
    },
  ];

  return (
    <div className="bg-[#fff8f6] min-h-screen py-20 relative">
      <div className="conCls relative z-10">
        {/* Header */}
        <div className="flex flex-col mb-10 space-y-2 text-center">
          <h3 className="text-base font-bold text-[#fb7b53] relative inline-block mx-auto">
            My Orders
            <img
              className="w-6 h-6 absolute -top-3 -right-5"
              src={paw2}
              alt="paw"
            />
          </h3>
          <h2 className="titleFont text-slate-950 text-3xl md:text-4xl font-bold">
            Your adoption & supply orders at a glance
          </h2>
          <p className="text-gray-600 text-base md:w-2/3 mx-auto">
            Track all your recent pet and product orders in one colorful view.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-dashed border-[#fb7b53] bg-white relative">
          <table className="min-w-full border-collapse text-left">
            {/* Table Header */}
            <thead className="bg-linear-to-r from-[#fb7b53] to-[#ffa06b] text-white">
              <tr>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Image
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Product Name
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Buyer
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Price
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Quantity
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Address
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Phone
                </th>
                <th className="py-4 px-6 font-semibold text-sm uppercase">
                  Date
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {myOrders.map((item, i) => (
                <tr
                  key={item.id}
                  className={`transition-all duration-300 ${
                    i % 2 === 0 ? 'bg-[#fb7a5323]' : 'bg-[#ffffff]'
                  } hover:shadow-md `}
                >
                  <td className="py-3 px-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-dashed border-[#fb7b53]"
                    />
                  </td>
                  <td className="py-3 px-6 font-semibold text-gray-800">
                    {item.name}
                  </td>
                  <td className="py-3 px-6 text-gray-700">{item.buyer}</td>
                  <td className="py-3 px-6 text-[#fb7b53] font-bold">
                    ${item.price}
                  </td>
                  <td className="py-3 px-6 text-gray-700">{item.quantity}</td>
                  <td className="py-3 px-6 text-gray-600">{item.address}</td>
                  <td className="py-3 px-6 text-gray-700">{item.phone}</td>
                  <td className="py-3 px-6 text-gray-500">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Decorative Paw Background */}
      <img
        src={paw2}
        alt="paw-bg"
        className="w-16 h-16 absolute bottom-2 right-5 opacity-10 rotate-12"
      />
      <img
        src={paw2}
        alt="paw-bg"
        className="w-20 h-20 absolute top-10 left-10 opacity-10 rotate-12"
      />
    </div>
  );
};

export default MyOrders;
