import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import paw2 from '../../assets/paw2.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const heroesData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Shelter Manager',
    // Sarah with her favorite dog - a perfect bond
    image: 'https://i.ibb.co.com/zWLXVnrx/home-hero1.webp',
    quote:
      "I found my true calling when I saved 'Buddy' from the streets. PawMart connects these souls with families that care.",
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Active Volunteer',
    // Michael playing with a puppy outdoors
    image: 'https://i.ibb.co.com/kZM1hPc/home3-hero.webp',
    quote:
      'Every weekend is a new adventure. The smiles on the faces of new pet parents are the greatest reward.',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Foster Parent',
    // Emma smiling while holding her foster cat
    image: 'https://i.ibb.co.com/jk1t2c2v/follow4.webp',
    quote:
      'Foster care saves lives. By giving a temporary home, we prepare these pets for their forever families.',
  },
];
const HerosSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="conCls">
        {/* Header - Simple & Clean */}
        <div className="text-center mb-14 space-y-3">
          <div className="flex justify-center items-center gap-2 text-[#fb7b53] font-bold text-sm tracking-widest uppercase">
            <img src={paw2} className="w-5 h-5" alt="paw" />
            Our Heroes
          </div>
          <h2 className="titleFont text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
            Hearts Behind <span className="text-[#fb7b53]">The Paws</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Swiper
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4000 }}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="overflow-visible"
          >
            {heroesData.map(hero => (
              <SwiperSlide key={hero.id}>
                <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                  {/* Image with Simple Frame */}
                  <div className="relative group">
                    <img
                      src={hero.image}
                      alt={hero.name}
                      className="w-full aspect-square object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 shadow-lg"
                    />
                    <div className="absolute -top-3 -right-3 bg-[#fb7b53] text-white p-3 rounded-full shadow-lg">
                      <FaQuoteLeft size={14} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed">
                      "{hero.quote}"
                    </p>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {hero.name}
                      </h4>
                      <p className="text-[#fb7b53] font-semibold text-sm uppercase tracking-wider mt-1">
                        {hero.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation - Minimalist Floating */}
          <div className="flex items-center justify-between mt-8 px-2">
            <div className="flex gap-2">
              {heroesData.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? 'w-8 bg-[#fb7b53]'
                      : 'w-2 bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                ref={prevRef}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#fb7b53] hover:text-white transition-all"
              >
                <FaChevronLeft size={12} />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:bg-[#fb7b53] hover:text-white transition-all"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerosSection;
