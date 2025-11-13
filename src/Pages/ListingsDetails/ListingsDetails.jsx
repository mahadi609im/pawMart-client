import React, { useState, useContext } from 'react';
import paw from '../../assets/paw.png';
import { useLoaderData, Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../../context/ContextProvider';
import paw2 from '../../assets/paw2.png';
import { toast } from 'react-toastify';

const ListingsDetails = () => {
  const { user } = useContext(AuthContext);
  const listingsData = useLoaderData();
  const { _id, name, category, email, description, price, location, image } =
    listingsData || {};

  const [modalOpen, setModalOpen] = useState(false);

  const handleOrderSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const orderData = {
      buyerName: user?.displayName || 'Anonymous',
      email: user?.email,
      listingId: _id,
      listingName: name,
      category,
      quantity: category === 'Pets' ? 1 : form.quantity.value,
      price,
      address: form.address.value,
      date: form.date.value,
      phone: form.phone.value,
      notes: form.notes.value,
    };

    try {
      const res = await fetch(
        'https://paw-mart-server-smoky.vercel.app/orders',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        }
      );
      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        toast.success('Order placed successfully!');
        setModalOpen(false);
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order.');
    }
  };

  return (
    <div className="bg-[#fff8f6] min-h-screen flex flex-col justify-center items-center py-16 px-6">
      {/* Go Back Button */}
      <div className="w-full max-w-5xl mb-6">
        <Link
          to={-1}
          className="inline-flex items-center gap-2 text-[#fb7b53] font-semibold hover:text-orange-600 transition-all"
        >
          <FaArrowLeft /> Go Back
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full flex flex-col lg:flex-row overflow-hidden border border-dashed border-[#fb7b53]">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center items-center bg-[#fb7a5331] p-6">
          <img
            src={image}
            alt={name}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Details Section */}
        <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center relative">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-[#fb7b53] font-bold text-sm relative inline-block ml-6">
              <img
                src={paw}
                alt=""
                className="w-5 h-5 absolute -left-6 top-0"
              />
              Pet Details
            </h3>
            <h2 className="text-3xl font-bold text-slate-950 mt-2">{name}</h2>
          </div>

          {/* Info Grid */}
          <div className="flex flex-col md:flex-row gap-8 text-slate-800 text-base">
            <div>
              <p>
                <span className="font-semibold text-[#fb7b53]">Category:</span>{' '}
                {category}
              </p>
              <p>
                <span className="font-semibold text-[#fb7b53]">
                  Owner Email:
                </span>{' '}
                {email}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold text-[#fb7b53]">Price:</span>{' '}
                {price === 0 ? 'Free Adoption' : `৳${price}`}
              </p>
              <p>
                <span className="font-semibold text-[#fb7b53]">Location:</span>{' '}
                {location}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 text-base">
            <h4 className="font-semibold text-[#fb7b53] mb-2">Description</h4>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Order Now Button */}
          <button
            className="mt-8 bg-[#fb7b53] hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-lg transition-all w-fit"
            onClick={() => setModalOpen(true)}
          >
            Order Now
          </button>

          {/* Paw Decoration */}
          <img
            src={paw}
            alt=""
            className="w-8 h-8 absolute bottom-4 right-4 opacity-40"
          />
        </div>
      </div>

      {/* Order Modal */}
      {modalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="flex flex-col mb-8 space-y-4">
              <div className="flex">
                <h3 className="text-base font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
                  Order Now
                  <img
                    className="w-6 h-6 absolute -top-3 -right-5"
                    src={paw2}
                    alt=""
                  />
                </h3>
              </div>
              <h2 className="titleFont text-slate-950 text-2xl md:text-3xl font-bold">
                Place Your Order
              </h2>
            </div>
            <form
              onSubmit={handleOrderSubmit}
              className="grid grid-cols-1 gap-4"
            >
              <input
                type="text"
                name="buyerName"
                defaultValue={user?.displayName}
                readOnly
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none cursor-not-allowed"
              />
              <input
                type="text"
                name="listingName"
                defaultValue={name}
                readOnly
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none cursor-not-allowed"
              />
              {category !== 'Pets' && (
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                  required
                />
              )}
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                required
              />
              <input
                type="date"
                name="date"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                required
              />
              <textarea
                name="notes"
                placeholder="Additional Notes"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              ></textarea>
              <div className="modal-action mt-2 flex justify-end items-center gap-2">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
                <button className="bg-orange-400 text-white btn rounded-lg hover:bg-orange-500 transition">
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ListingsDetails;
