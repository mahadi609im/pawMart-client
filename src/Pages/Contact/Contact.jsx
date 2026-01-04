import React from 'react';
import {
  FaSearch,
  FaEnvelope,
  FaDiscord,
  FaWhatsapp,
  FaQuestionCircle,
  FaArrowRight,
  FaChevronDown,
} from 'react-icons/fa';
import { useState } from 'react';
import paw2 from '../../assets/paw2.png';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: 'How does the adoption process work?',
      a: 'The process involves selecting a pet, filling out an application, and a brief interview. Once approved, you can complete the adoption and take your new friend home!',
    },
    {
      q: 'Are all pets vaccinated?',
      a: 'Yes, every pet on our platform undergoes a thorough health check and is up-to-date with essential vaccinations before being listed for adoption.',
    },
    {
      q: 'Can I list my pet for adoption?',
      a: 'Absolutely. You can create a profile for your pet, provide their medical history, and our team will verify the details before making the listing live.',
    },
    {
      q: 'What are the adoption fees for?',
      a: 'Adoption fees cover the costs of medical checkups, vaccinations, food, and temporary shelter maintenance while the pet waits for their forever home.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* 🔹 Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-10">
          <div className="flex flex-col items-center">
            {/* 🔹 Subtitle with Paw Icon */}
            <div className="relative inline-block mb-3">
              <h3 className="text-lg font-bold text-[#fb7b53] tracking-tight">
                Support Center
              </h3>
              <img
                className="w-6 h-6 absolute -top-3 -right-5 rotate-12 opacity-90"
                src={paw2}
                alt="paw"
              />
            </div>

            {/* 🔹 Main Heading */}
            <h1 className="titleFont text-slate-950 dark:text-slate-100 text-4xl md:text-6xl font-black leading-tight tracking-tight max-w-3xl">
              How can we help you?
            </h1>

            {/* 🔹 Description */}
            <p className="text-slate-500 dark:text-slate-400 mt-6 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
              Search our knowledge base or reach out to our dedicated support
              team for expert guidance on your pet's needs.
            </p>
          </div>

          {/* 🔹 Search Bar (Centered) */}
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#fb7b53] transition-colors">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search for articles (e.g. adoption process...)"
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-6 pl-14 pr-8 rounded-[2.5rem] outline-none focus:ring-4 focus:ring-[#fb7b53]/10 focus:border-[#fb7b53]/20 transition-all text-slate-900 dark:text-white shadow-sm"
            />
          </div>
        </div>

        {/* 🔹 Support Channels Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: <FaEnvelope />,
              title: 'Email Support',
              desc: 'Get a response within 24h',
              link: 'support@petverse.com',
              color: 'bg-blue-500',
            },
            {
              icon: <FaDiscord />,
              title: 'Discord Community',
              desc: 'Real-time chat with members',
              link: 'Join Discord',
              color: 'bg-indigo-600',
            },
            {
              icon: <FaWhatsapp />,
              title: 'WhatsApp Live',
              desc: 'Available 10am - 8pm',
              link: '+1 234 567 89',
              color: 'bg-green-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-transparent hover:border-[#fb7b53]/30 transition-all duration-500"
            >
              <div
                className={`w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center text-xl mb-6 shadow-lg shadow-black/5`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                {item.desc}
              </p>
              <button className="text-[#fb7b53] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                {item.link} <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* 🔹 FAQ Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked <br />
              <span className="text-[#fb7b53]">Questions</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeIndex === i
                      ? 'bg-white dark:bg-slate-800 border-[#fb7b53]/30 shadow-lg'
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-[#fb7b53]/20'
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className="w-full p-6 flex justify-between items-center text-left transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <FaQuestionCircle
                        className={`transition-colors ${
                          activeIndex === i
                            ? 'text-[#fb7b53]'
                            : 'text-slate-300 dark:text-slate-700'
                        }`}
                      />
                      <span
                        className={`font-bold transition-colors ${
                          activeIndex === i
                            ? 'text-[#fb7b53]'
                            : 'text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-500 ${
                        activeIndex === i
                          ? 'rotate-180 text-[#fb7b53]'
                          : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* 🔹 Answer Section with Smooth Transition */}
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      activeIndex === i
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-16 pb-6 text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 Contact Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-transparent rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500">
            {/* Glow Decor */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#fb7b53]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Send us a message
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#fb7b53] transition-all placeholder:text-slate-400 dark:placeholder:text-white/30"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#fb7b53] transition-all placeholder:text-slate-400 dark:placeholder:text-white/30"
                />
                <textarea
                  rows="4"
                  placeholder="Describe your issue..."
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-[#fb7b53] transition-all placeholder:text-slate-400 dark:placeholder:text-white/30"
                ></textarea>
                <button className="w-full bg-[#fb7b53] text-white font-black py-4 rounded-xl hover:bg-slate-900 dark:hover:bg-white dark:hover:text-[#fb7b53] transition-all duration-300 uppercase tracking-widest text-sm shadow-lg shadow-[#fb7b53]/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
