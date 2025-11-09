import heroImgBg1 from '../../assets/home-hero1.webp';
import heroImg2 from '../../assets/hero-banner2.webp';

import heroImg3 from '../../assets/home3-hero.webp';
import heroBg3 from '../../assets/home3-heroBg.webp';

export default Banner;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

function Banner() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fb7b53',
          '--swiper-pagination-color': '#fb7b53',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center min-h-screen conCls py-6">
            <div className=" text-center md:text-left w-full md:w-1/2">
              {/* Small Title */}
              <p className="text-orange-600 font-semibold tracking-wide uppercase mb-3">
                Welcome to PetPath
              </p>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                The Best Care for Your Best Friend
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-8">
                At PetPath, we provide exceptional care and services for your
                pets, including grooming, boarding, and walking. Trust us to
                ensure your furry friends are happy.
              </p>

              {/* Button */}
              <button className="btn bg-orange-400 hover:bg-orange-500 text-white border-none rounded-full px-8 py-3 font-semibold shadow-md transition">
                Our Services
              </button>
            </div>
            <div className="w-3/4 md:w-2/5 h-auto flex items-center">
              <img className=" object-cover" src={heroImg2} alt="" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row min-h-screen">
            <div className="w-full md:w-1/2 h-auto bg-[#fef0d7]">
              <img
                className="w-full h-full object-cover"
                src={heroImg3}
                alt=""
              />
            </div>
            <div
              className="w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center flex flex-col justify-center items-center text-center"
              style={{ backgroundImage: `url(${heroBg3})` }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Because Every Pet Deserves Love
              </h1>
              <p className="text-xl md:text-xl lg:text-2xl text-white drop-shadow-md">
                Join our happy owners and give a pet a loving home!
              </p>
              <button className="mt-6 px-6 py-3 bg-[#fb7b53] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e06b40] transition">
                Adopt Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="flex flex-col md:flex-row gap-6 justify-between items-start min-h-screen py-6 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImgBg1})` }}
          >
            <h2 className="p-10 text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text bg-linear-to-r from-[#fb7b53] via-[#fb7b53] to-[#fcd34d] drop-shadow-lg">
              Find Your Furry
              <br /> Friend Today!
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
