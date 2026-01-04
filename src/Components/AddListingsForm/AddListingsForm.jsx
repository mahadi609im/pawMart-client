import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/ContextProvider';
import {
  HiOutlineCloudUpload,
  HiOutlineClipboardList,
  HiOutlineLocationMarker,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import paw2 from '../../assets/paw2.png';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddListingsForm = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleAddListings = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const location = form.location.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;
    const description = form.description.value;

    const newListing = {
      name,
      category,
      price,
      location,
      image,
      date,
      email,
      description,
      addedBy: user?.displayName,
      userPhoto: user?.photoURL,
    };

    fetch('https://paw-mart-server-smoky.vercel.app/listings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newListing),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          // SweetAlert 2 Popup
          Swal.fire({
            title: 'Success!',
            text: 'Your new listing has been published.',
            icon: 'success',
            confirmButtonColor: '#fb7b53', // থিমের সাথে মিল রেখে
            confirmButtonText: 'Great!',
            background:
              document.documentElement.getAttribute('data-theme') === 'night'
                ? '#1e293b'
                : '#fff',
            color:
              document.documentElement.getAttribute('data-theme') === 'night'
                ? '#fff'
                : '#000',
          }).then(result => {
            if (result.isConfirmed) {
              form.reset();
              setCategory('');
              // সাকসেস হওয়ার পর রিডাইরেক্ট (আপনার পাথ অনুযায়ী পরিবর্তন করুন)
              navigate('/dashboard/myListing');
            }
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#fb7b53',
        });
      });
  };

  const inputStyle =
    'w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-[#fb7b53] focus:ring-2 focus:ring-[#fb7b53]/20 outline-none transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder:text-slate-400';

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <title>Add Listings | pawMart</title>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Visual Info */}
          <div className="lg:w-2/5 bg-[#fb7a530a] dark:bg-slate-800/30 p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800">
            <div className="relative inline-block w-fit">
              <span className="text-[#fb7b53] font-black uppercase tracking-[0.3em] text-[10px] bg-[#fb7a5315] px-3 py-1 rounded-full">
                Inventory
              </span>
              <img
                src={paw2}
                alt=""
                className="w-6 h-6 absolute -top-4 -right-6 animate-bounce"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-800 dark:text-white mt-4 leading-tight">
              List Your <span className="text-[#fb7b53]">Pet</span> or Products
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-4 text-sm leading-relaxed">
              Fill in the details to showcase your pets or products to thousands
              of potential owners and customers.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-[#fb7b53]">
                  <HiOutlineCloudUpload />
                </div>
                <span className="text-xs font-bold">Fast Upload to Server</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-[#fb7b53]">
                  <HiOutlineLocationMarker />
                </div>
                <span className="text-xs font-bold">
                  Location-based reaching
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-3/5 p-8 lg:p-12 bg-white dark:bg-slate-900">
            <form onSubmit={handleAddListings} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Item Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ex: Golden Retriever"
                    className={inputStyle}
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Category
                  </label>
                  <select
                    name="category"
                    required
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className={inputStyle}
                  >
                    <option disabled value="">
                      Select Category
                    </option>
                    <option>Pets</option>
                    <option>Food</option>
                    <option>Accessories</option>
                    <option>Care Products</option>
                  </select>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Price (0 if pet)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="price"
                      required={category !== 'Pets'}
                      placeholder="0.00"
                      className={inputStyle}
                    />
                    <HiOutlineCurrencyDollar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="City, Country"
                    className={inputStyle}
                  />
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image"
                    required
                    placeholder="https://image.path"
                    className={inputStyle}
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                    Listing Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* Email (Read Only) */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Owner Email
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className={`${inputStyle} bg-slate-100 dark:bg-slate-800 cursor-not-allowed opacity-70`}
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">
                  Detailed Description
                </label>
                <textarea
                  name="description"
                  required
                  placeholder="Write details about the pet/product..."
                  className={`${inputStyle} h-32 resize-none`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#fb7b53] hover:bg-[#e06a46] text-white font-black py-4 rounded-2xl shadow-lg shadow-[#fb7b53]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                <HiOutlineClipboardList className="text-xl group-hover:rotate-12 transition-transform" />
                Add to Listings
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddListingsForm;
