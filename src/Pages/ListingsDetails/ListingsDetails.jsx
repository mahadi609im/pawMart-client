import React, { useState, useContext } from 'react';
import paw from '../../assets/paw.png';
import { useLoaderData, Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../../context/ContextProvider';
import paw2 from '../../assets/paw2.png';
import { toast } from 'react-toastify';
import { HiBookmark, HiLocationMarker, HiMail } from 'react-icons/hi';

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
    <div className="bg-[#fff8f6] dark:bg-transparent min-h-screen flex flex-col justify-center items-center py-16 px-6">
      {/* Go Back Button */}
      <div className="w-full max-w-5xl mb-6">
        <Link
          to={-1}
          className="inline-flex items-center gap-2 text-[#fb7b53] font-semibold hover:text-orange-600 transition-all"
        >
          <FaArrowLeft /> Go Back
        </Link>
      </div>

      <div className="bg-white dark:bg-transparent rounded-2xl shadow-lg max-w-5xl w-full flex flex-col lg:flex-row overflow-hidden border border-dashed border-[#fb7b53]">
        {/* Left Image Section - Modern UI Update */}
        <div className="lg:w-1/2 w-full p-4 md:p-8 bg-[#fb7a5320]">
          <div className="relative h-full overflow-hidden rounded-[2rem] shadow-2xl group">
            {/* Product Image */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Gradient Overlay for Depth */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-60"></div>

            {/* Floating Category Tag */}
            <div className="absolute top-5 left-5">
              <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-[10px] font-black px-4 py-2 rounded-2xl uppercase tracking-[0.2em] shadow-lg">
                {category}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Details Section */}
        <div className="lg:w-1/2 p-8 md:p-14 flex flex-col justify-center relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src={paw} alt="paw" className="w-5 h-5 opacity-80" />
                <span className="text-[#fb7b53] text-[10px] font-black uppercase tracking-[0.3em]">
                  Details
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter">
                {name}
              </h1>
            </div>

            {/* Info Grid (Professional Cards) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-[1.5rem] border border-slate-100 dark:border-slate-800">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Price
                </p>
                <p
                  className={`text-lg font-black ${
                    price === 0 ? 'text-emerald-500' : 'text-[#fb7b53]'
                  }`}
                >
                  {price === 0 ? 'Free Adoption' : `৳${price}`}
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-[1.5rem] border border-slate-100 dark:border-slate-800">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Location
                </p>
                <div className="flex items-center gap-1 text-slate-800 dark:text-slate-200">
                  <HiLocationMarker className="text-[#fb7b53]" />
                  <p className="text-sm font-bold">{location}</p>
                </div>
              </div>
            </div>

            {/* Owner Details */}
            <div className="flex items-center gap-3 py-4 border-y border-slate-50 dark:border-slate-800">
              <div className="w-10 h-10 rounded-full bg-[#fb7b53]/10 flex items-center justify-center text-[#fb7b53]">
                <HiMail size={20} />
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Contact Owner
                </p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {email}
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <HiBookmark /> Story & Description
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {description}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                disabled={!user}
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto bg-[#fb7b53] hover:bg-[#e06a44] disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white font-black uppercase tracking-widest text-[11px] px-10 py-5 rounded-2xl shadow-xl shadow-[#fb7b53]/20 transition-all active:scale-95"
              >
                {user ? 'Adopt / Order Now' : 'Login to Order'}
              </button>

              {!user && (
                <p className="text-[10px] font-bold text-red-400 uppercase tracking-tighter italic">
                  * Authentication required
                </p>
              )}
            </div>
          </div>

          {/* 🐾 Paw Decoration - Bottom Right Corner */}
          <img
            src={paw}
            alt=""
            className="w-12 h-12 absolute bottom-6 right-6 opacity-30 pointer-events-none rotate-12"
          />
        </div>
      </div>

      {/* Order Modal */}
      {modalOpen && (
        <dialog
          open
          className="modal modal-bottom sm:modal-middle backdrop-blur-sm"
        >
          <div className="modal-box bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[2rem] p-8">
            {/* Header Section */}
            <div className="flex flex-col mb-6 space-y-2">
              <div className="flex">
                <div className="relative inline-block group">
                  <h3 className="relative z-10 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#fb7b53]/10 text-[#fb7b53] border border-[#fb7b53]/20">
                    Order Now
                    <img
                      className="w-5 h-5 absolute -top-3 -right-4 animate-bounce"
                      src={paw2}
                      alt="paw"
                    />
                  </h3>
                </div>
              </div>
              <h2 className="titleFont text-slate-900 dark:text-white text-2xl md:text-3xl font-black">
                Place Your <span className="text-[#fb7b53]">Order</span>
              </h2>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleOrderSubmit}
              className="grid grid-cols-1 gap-4"
            >
              {/* Readonly Inputs - Subtle Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="buyerName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="rounded-xl p-3 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-transparent text-sm font-bold cursor-not-allowed outline-none"
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="rounded-xl p-3 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-transparent text-sm font-bold cursor-not-allowed outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="listingName"
                  defaultValue={`${name}`}
                  readOnly
                  className="rounded-xl p-3 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-transparent text-sm font-black outline-none cursor-not-allowed"
                />

                <input
                  type="text"
                  name="listingName"
                  defaultValue={`$ ${price} `}
                  readOnly
                  className="rounded-xl p-3 bg-slate-100 dark:bg-slate-800/50 text-[#fb7b53] border border-transparent text-sm font-black outline-none cursor-not-allowed"
                />
              </div>

              {/* Interactive Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category !== 'Pets' && (
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    className="rounded-xl p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#fb7b53] focus:ring-1 focus:ring-[#fb7b53] outline-none transition-all"
                    required
                  />
                )}
                <input
                  type="date"
                  name="date"
                  className="rounded-xl p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#fb7b53] outline-none transition-all"
                  required
                />
              </div>

              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                className="rounded-xl p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#fb7b53] outline-none transition-all"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="rounded-xl p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#fb7b53] outline-none transition-all"
                required
              />

              <textarea
                name="notes"
                rows="3"
                placeholder="Additional Notes (Optional)"
                className="rounded-xl p-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-[#fb7b53] outline-none transition-all resize-none"
              ></textarea>

              {/* Actions */}
              <div className="modal-action mt-4 flex justify-end items-center gap-3">
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#fb7b53] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#e06a44] shadow-lg shadow-[#fb7b53]/20 active:scale-95 transition-all"
                >
                  Confirm Order
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
