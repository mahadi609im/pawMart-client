import React, { useContext, useEffect, useState } from 'react';
import paw2 from '../../assets/paw2.png';
import { AuthContext } from '../../context/ContextProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  console.log(myOrders);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/myOrders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <div className="bg-[#fff8f6] min-h-screen py-20 relative">
      <title>My orders | pawMart</title>;
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
              {myOrders.length < 1 ? (
                <tr>
                  <td colSpan={8} className="py-20 text-center">
                    <h3 className="text-lg font-semibold text-[#fb7b53] relative inline-block mx-auto">
                      No orders available
                      <img
                        className="w-6 h-6 absolute -top-3 -right-5"
                        src={paw2}
                        alt="paw"
                      />
                    </h3>
                  </td>
                </tr>
              ) : (
                <>
                  {myOrders.map((item, i) => (
                    <tr
                      key={item._id || i}
                      className={`transition-all duration-300 ${
                        i % 2 === 0 ? 'bg-[#fb7a5323]' : 'bg-[#ffffff]'
                      } hover:shadow-md `}
                    >
                      <td className="py-3 px-6 font-semibold text-gray-800">
                        {item.listingName}
                      </td>
                      <td className="py-3 px-6 text-gray-700">
                        {item.buyerName}
                      </td>
                      <td className="py-3 px-6 text-[#fb7b53] font-bold">
                        {item.price === 0 ? 'Free Adoption' : `৳${item.price}`}
                      </td>
                      <td className="py-3 px-6 text-gray-700">
                        {item.quantity}
                      </td>
                      <td className="py-3 px-6 text-gray-600">
                        {item.address}
                      </td>
                      <td className="py-3 px-6 text-gray-700">{item.phone}</td>
                      <td className="py-3 px-6 text-gray-500">{item.date}</td>
                    </tr>
                  ))}
                </>
              )}
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
