import heroImg1 from '../../assets/home-hero1.webp';
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
          <div className="flex flex-col md:flex-row">
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
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center conCls py-6">
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
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 conCls px-6 md:px-12 py-12">
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={heroImg1}
                alt="Happy pet and owner"
                className="max-w-4/5 w-full rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Side (Text) */}
            <div className="text-center md:text-left w-full md:w-1/2">
              {/* Tagline */}
              <p className="text-orange-500 font-semibold tracking-wider uppercase mb-4">
                Caring With Love 🐾
              </p>

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-5">
                Your Pet’s Happiness <br className="hidden md:block" /> Is Our
                Priority
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto md:mx-0 mb-8">
                We’re passionate about creating a world where every pet receives
                the love. From vet visits to daily walks — we’ve got you
                covered.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
                  Explore Now
                </button>
                <button className="border border-orange-400 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
