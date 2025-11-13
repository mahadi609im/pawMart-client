// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import homeHero1 from '../../assets/home-hero1.webp';
import heroImg2 from '../../assets/hero-banner2.webp';
import heroImg3 from '../../assets/home3-hero.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

function HerosSlider() {
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
          <div className="w-full mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-[#fb7a5331] border-2  border-dashed border-[#fb7b53] mx-auto flex justify-center items-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={homeHero1}
                alt=""
              />
            </div>
            <div className="text-center rounded-2xl">
              <h2 className="text-4xl titleFont font-bold text-amber-600">
                Sarah Johnson
              </h2>
              <h4 className="text-xl font-semibold text-gray-400 dark:text-slate-200 mt-1">
                Pet Adopter
              </h4>
              <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed mt-3">
                “Sarah adopted two rescued kittens and gave them a warm, caring
                home. Her love for animals encourages many others to choose
                adoption and change a pet’s life forever.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-[#fb7a5331] border-2  border-dashed border-[#fb7b53] mx-auto flex justify-center items-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={heroImg2}
                alt=""
              />
            </div>
            <div className="text-center rounded-2xl">
              <h2 className="text-4xl titleFont font-bold text-amber-600">
                Michael Chen
              </h2>
              <h4 className="text-xl font-semibold text-gray-400 dark:text-slate-200 mt-1">
                Pet Caregiver
              </h4>
              <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed mt-3">
                “Michael has spent years caring for stray dogs and helping them
                find safe shelters. His kindness and consistency inspire
                everyone around him.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-[#fb7a5331] border-2  border-dashed border-[#fb7b53] mx-auto flex justify-center items-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={heroImg3}
                alt=""
              />
            </div>
            <div className="text-center rounded-2xl">
              <h2 className="text-4xl titleFont font-bold text-amber-600">
                Emma Williams
              </h2>
              <h4 className="text-xl font-semibold text-gray-400 dark:text-slate-200 mt-1">
                Animal Volunteer
              </h4>
              <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed mt-3">
                “Emma works with local shelters to organize pet care programs
                and adoption events. Her dedication makes a huge impact on
                rescued animals’ lives.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="w-full mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-[#fb7a5331] border-2  border-dashed border-[#fb7b53] mx-auto flex justify-center items-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={
                  'https://softivuspro.com//wp//petpath/wp-content/uploads/2024/12/team-2.png'
                }
                alt=""
              />
            </div>
            <div className="text-center rounded-2xl">
              <h2 className="text-4xl titleFont font-bold text-amber-600">
                David Rodriguez
              </h2>
              <h4 className="text-xl font-semibold text-gray-400 dark:text-slate-200 mt-1">
                Shelter Manager
              </h4>
              <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed mt-3">
                “David manages a busy animal shelter where dozens of pets are
                cared for every week. His compassion ensures every animal feels
                safe and loved.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="w-full mx-auto space-y-6">
            <div className="w-24 h-24 rounded-full bg-[#fb7a5331] border-2  border-dashed border-[#fb7b53] mx-auto flex justify-center items-center">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={
                  'https://softivuspro.com//wp//petpath/wp-content/uploads/2024/12/testimonial-owner-2-1.png'
                }
                alt=""
              />
            </div>
            <div className="text-center rounded-2xl">
              <h2 className="text-4xl titleFont font-bold text-amber-600">
                Lily Anderson
              </h2>
              <h4 className="text-xl font-semibold text-gray-400 dark:text-slate-200 mt-1">
                Animal Rescuer
              </h4>
              <p className="text-gray-500 dark:text-slate-400 text-lg leading-relaxed mt-3">
                “Lily dedicates her weekends to rescuing injured street animals
                and helping them recover. Her actions speak louder than words,
                saving countless lives.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HerosSlider;
