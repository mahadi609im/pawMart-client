import React, { useContext, useState } from 'react';
import contactBg from '../../assets/listingsFormBg.webp'; // background
import paw from '../../assets/paw.png';
import paw2 from '../../assets/paw2.png';
import { AuthContext } from '../../context/ContextProvider';
import { toast } from 'react-toastify';

const Contact = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: user?.displayName || '',
    email: user?.email || '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://paw-mart-server-smoky.vercel.app/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast.success('Message sent successfully!');
          setFormData({ ...formData, subject: '', message: '' });
        }
      })
      .catch(() => {
        toast.error('Failed to send message.');
      });
  };

  return (
    <section
      className="relative min-h-screen py-20 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <title>Contact | pawMart</title>

      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0  bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          {/* Left Side: Modern Image Section */}
          <div className="lg:w-1/2 w-full relative min-h-[400px] overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop"
              alt="Happy Dog"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/60 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white text-3xl font-bold">
                We’d love to hear from you!
              </h2>
              <p className="text-white/90 mt-2">
                Our team is here to help you and your furry friends.
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 relative">
            <div className="flex flex-col mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
                  Get in Touch
                </span>
                <img className="w-5 h-5 animate-bounce" src={paw2} alt="paw" />
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Send Us a <span className="text-orange-500">Message</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl p-3 bg-gray-50 border border-gray-200 text-slate-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl p-3 bg-gray-50 border border-gray-200 text-slate-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl p-3 bg-gray-50 border border-gray-200 text-slate-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 rounded-xl p-3 bg-gray-50 border border-gray-200 text-slate-900 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1 active:scale-95">
                Send Message
              </button>
            </form>

            {/* Subtle Paw Decoration */}
            <img
              src={paw}
              alt=""
              className="w-12 h-12 absolute bottom-6 right-6 opacity-10 pointer-events-none rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
