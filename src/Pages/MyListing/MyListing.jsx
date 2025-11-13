import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';
import { AuthContext } from '../../context/ContextProvider';
import Swal from 'sweetalert2';

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState('');

  // fetch user listings
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://paw-mart-server-smoky.vercel.app/listings?email=${user.email}`
      )
        .then(res => res.json())
        .then(data => setMyListings(data));
    }
  }, [user]);

  // Delete listing
  const handleDeleteListings = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://paw-mart-server-smoky.vercel.app/listings/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire(
                'Deleted!',
                'Your listings has been deleted.',
                'success'
              );
              setMyListings(prev => prev.filter(el => el._id !== id));
            }
          });
      }
    });
  };

  // Open modal with selected item
  const openModal = item => {
    setSelectedItem(item);
    setCategory(item.category);
    setModalOpen(true);
  };

  // Update listing
  const handleUpdateListings = e => {
    e.preventDefault();
    const form = e.target;
    const updatedListing = {
      name: form.name.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: form.email.value,
    };

    fetch(
      `https://paw-mart-server-smoky.vercel.app/listings/${selectedItem._id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedListing),
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire('Updated!', 'Listing updated successfully.', 'success');
          setModalOpen(false);
          // update state
          setMyListings(prev =>
            prev.map(item =>
              item._id === selectedItem._id
                ? { ...item, ...updatedListing }
                : item
            )
          );
        }
      });
  };

  return (
    <div className="">
      <title>My Listings | pawMart</title>;{/* Table Section */}
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
          <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-4xl font-bold">
            Manage all pets & products here.
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto shadow-lg rounded-xl border border-dashed border-[#fb7b53] bg-white dark:bg-transparent">
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
              {myListings.length < 1 ? (
                <tr>
                  <td colSpan={7} className="py-20 text-center">
                    <h3 className="text-lg font-semibold text-[#fb7b53] relative inline-block mx-auto">
                      No listings available
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
                  {myListings?.map(item => (
                    <tr
                      key={item._id}
                      className="shadow-sm hover:bg-[#fb7a5315] hover:shadow transition-all duration-200"
                    >
                      <td className="py-3 px-6">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover border border-dashed border-[#fb7b53]"
                          />
                        )}
                      </td>
                      <td className="py-3 px-6 font-medium text-gray-800 dark:text-slate-200">
                        {item.name}
                      </td>
                      <td className="py-3 px-6 text-gray-800 dark:text-slate-100 badge badge-ghost">
                        {item.category}
                      </td>
                      <td className="py-3 px-6 text-gray-700 dark:text-slate-400 font-semibold ">
                        {item.price === 0 || item.price === ''
                          ? 'Free Adoption'
                          : `৳${item.price}`}
                      </td>
                      <td className="py-3 px-6 text-gray-500 dark:text-slate-400">
                        {item.date}
                      </td>
                      <td className="py-3 px-6 flex items-center justify-center gap-3">
                        <div
                          onClick={() => openModal(item)}
                          className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10 rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center"
                        >
                          <FaEdit size={16} />
                        </div>

                        <div
                          onClick={() => handleDeleteListings(item._id)}
                          className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10 rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center"
                        >
                          <FaTrashAlt size={16} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden flex flex-col gap-4">
          {myListings?.map(item => (
            <div
              key={item._id}
              className="border border-dashed border-[#fb7b53] rounded-xl p-4 shadow hover:shadow-lg transition-all bg-[#fb7a5331]"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover border border-dashed border-[#fb7b53]"
                  />
                )}
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
                    {item.price === 0 || item.price === ''
                      ? 'Free Adoption'
                      : `৳${item.price}`}
                  </p>
                  <p>
                    <span className="font-semibold text-[#fb7b53]">Date:</span>{' '}
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-3">
                <div
                  onClick={() => openModal(item)}
                  className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10 rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center"
                >
                  <FaEdit size={16} />
                </div>
                <div
                  onClick={() => handleDeleteListings(item._id)}
                  className="text-[#fb7b53] transform transition-transform duration-300 w-10 h-10 rounded-full bg-[#fb7a5331] border border-dashed hover:bg-[#fb7b53] hover:text-white hover:border-2 flex justify-center items-center"
                >
                  <FaTrashAlt size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {modalOpen && selectedItem && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box ">
            <div className="flex flex-col mb-8 space-y-4">
              <div className="flex">
                <h3 className="text-base font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
                  Update Now
                  <img
                    className="w-6 h-6 absolute -top-3 -right-5"
                    src={paw2}
                    alt=""
                  />
                </h3>
              </div>
              <h2 className="titleFont text-slate-950 dark:text-slate-100 text-2xl md:text-3xl font-bold">
                Update Your Listing
              </h2>
            </div>

            <form onSubmit={handleUpdateListings}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Product / Pet Name"
                  defaultValue={selectedItem.name}
                  required
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
                />
                <select
                  name="category"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  required
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
                >
                  <option disabled value="">
                    Category
                  </option>
                  <option>Pets</option>
                  <option>Food</option>
                  <option>Accessories</option>
                  <option>Care Products</option>
                </select>
                <input
                  type="number"
                  name="price"
                  placeholder="Price (0 if pet)"
                  defaultValue={selectedItem.price}
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  defaultValue={selectedItem.location}
                  required
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  defaultValue={selectedItem.image}
                  required
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
                />
                <input
                  type="date"
                  name="date"
                  defaultValue={selectedItem.date}
                  required
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none cursor-not-allowed focus:outline-none"
                />
              </div>

              <textarea
                name="description"
                placeholder="Description"
                required
                defaultValue={selectedItem.description}
                className="w-full mt-4 h-32 rounded-lg p-2 bg-[#fb7a5331] text-slate-950 dark:text-slate-100 border-none focus:outline-none"
              ></textarea>

              <div className="modal-action mt-4">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
                <button className="bg-orange-400 text-white btn rounded-lg hover:bg-orange-500 transition">
                  Update
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MyListing;
