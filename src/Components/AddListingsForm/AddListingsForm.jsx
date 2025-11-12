import React, { useContext, useState } from 'react';
import listingsFormBg from '../../assets/listingsFormBg.webp';
import paw from '../../assets/paw.png';
import paw2 from '../../assets/paw2.png';
import { AuthContext } from '../../context/ContextProvider';
import { toast } from 'react-toastify';

const AddListingsForm = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState('');

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
    };

    console.log(newListing);

    fetch('https://paw-mart-server-smoky.vercel.app/listings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newListing),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          e.target.reset();
          setCategory(''); // reset category state
          toast.success('New Listings Added Successfully');
        }
      });
  };

  return (
    <div
      className="relative min-h-screen py-20 mt-12"
      style={{ backgroundImage: `url(${listingsFormBg})` }}
    >
      <title>Add Listings | pawMart</title>;
      <div className="conCls flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full flex justify-center relative">
          <div className="relative">
            <img
              src={
                'https://softivuspro.com//wp//petpath/wp-content/uploads/2024/11/about-section-banner.png'
              }
              alt="Pet Banner"
              className="md:h-[500px] h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:w-1/2 w-full md:mt-0 bg-white rounded-xl shadow-lg p-8 relative">
          <div className="flex flex-col mb-8 space-y-4">
            <div className="flex">
              <h3 className="text-base font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
                Add Listings
                <img
                  className="w-6 h-6 absolute -top-3 -right-5"
                  src={paw2}
                  alt=""
                />
              </h3>
            </div>
            <h2 className="titleFont text-slate-950 text-3xl md:text-4xl font-bold">
              Add Your Pet or Product
            </h2>
          </div>

          <form onSubmit={handleAddListings}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Product / Pet Name */}
              <input
                type="text"
                name="name"
                required
                placeholder="Product / Pet Name"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              />

              {/* Category */}
              <select
                name="category"
                required
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              >
                <option disabled value="">
                  Category
                </option>
                <option>Pets</option>
                <option>Food</option>
                <option>Accessories</option>
                <option>Care Products</option>
              </select>

              {/* Price */}
              <input
                type="number"
                name="price"
                required={category !== 'Pets'}
                placeholder="Price (0 if pet)"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              />

              {/* Location */}
              <input
                type="text"
                name="location"
                required
                placeholder="Location"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              />

              {/* Image URL */}
              <input
                type="text"
                name="image"
                required
                placeholder="Image URL"
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              />

              {/* Pick Up Date */}
              <input
                type="date"
                name="date"
                required
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              />

              {/* Email (readonly) */}
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none cursor-not-allowed focus:outline-none"
                onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
                onBlur={e => (e.target.style.outline = 'none')}
              />
            </div>

            {/* Description */}
            <textarea
              name="description"
              placeholder="Description"
              required
              className="w-full mt-4 h-32 rounded-lg p-2 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
              onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
              onBlur={e => (e.target.style.outline = 'none')}
            ></textarea>

            <button className="bg-orange-400 text-white px-6 py-2 rounded-lg mt-4 hover:bg-orange-500 transition">
              Add Pet/Product
            </button>
          </form>

          {/* Paw Decoration */}
          <img
            src={paw}
            alt=""
            className="w-8 h-8 absolute bottom-4 right-4 opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default AddListingsForm;
