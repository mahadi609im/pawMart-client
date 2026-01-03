import React from 'react';
import {
  FaShieldAlt,
  FaHandHoldingHeart,
  FaStethoscope,
  FaTruck,
} from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

const features = [
  {
    icon: <FaHandHoldingHeart size={30} />,
    title: 'Lifetime Support',
    desc: 'We provide continuous guidance and support for you and your pet even after adoption.',
  },
  {
    icon: <FaStethoscope size={30} />,
    title: 'Medical Care',
    desc: 'Every pet is vaccinated, neutered, and thoroughly checked by professional vets.',
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: 'Verified Profiles',
    desc: 'All listings go through a strict verification process to ensure safety and trust.',
  },
  {
    icon: <FaTruck size={30} />,
    title: 'Safe Transport',
    desc: 'We arrange secure and comfortable transportation for pets to reach their new homes.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="conCls">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
            Our Services
            <img
              className="w-6 h-6 absolute -top-3 -right-5"
              src={paw2}
              alt=""
            />
          </h3>
          <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-4xl text-center font-bold">
            Why We Are Special?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-transparent hover:border-dashed hover:border-[#fb7b53] hover:bg-[#fb7a5308] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-[#fb7a5320] text-[#fb7b53] rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:bg-[#fb7b53] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="titleFont text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* Bottom Decoration */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                <img src={paw2} alt="" className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
