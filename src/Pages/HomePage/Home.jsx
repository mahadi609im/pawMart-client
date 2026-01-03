import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Category from '../../Components/Category/Category';
import QnaSection from '../../Components/QnaSection/QnaSection';
import HerosSlider from '../../Components/HerosSlider/HerosSlider';
import herosSectionBg from '../../assets/herosSectionBg.webp';
import ListingSection from '../Listing/ListingSection/ListingSection';
import paw2 from '../../assets/paw2.png';
import FeaturesSection from '../../Components/Features/Features';
import Highlights from '../../Components/Highlights/Highlights';
import Testimonials from '../../Components/Testimonials/Testimonials';
import BlogsSection from '../../Components/BlogSection/BlogSection';

const Home = () => {
  return (
    <div>
      <title>Home | pawMart</title>
      <div className="mb-20">
        <Banner></Banner>
      </div>
      <section className="my-20">
        <Category></Category>
      </section>
      <section className="my-20">
        <ListingSection></ListingSection>
      </section>
      <section>
        <FeaturesSection></FeaturesSection>
      </section>
      <section>
        <BlogsSection></BlogsSection>
      </section>
      <section>
        <Highlights></Highlights>
      </section>
      <section className="mt-20">
        <QnaSection></QnaSection>
      </section>
      <section className="mt-20">
        <Testimonials></Testimonials>
      </section>
      <section className="w-full h-full bg-cover bg-no-repeat bg-center mb-20">
        <div className="flex flex-col justify-center items-center mb-8 space-y-4 my-10">
          <div className="flex justify-center items-center">
            <h3 className="text-lg font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
              Meet Heroes
              <img
                className="w-6 h-6 absolute -top-3 -right-5"
                src={paw2}
                alt=""
              />
            </h3>
          </div>
          <h2 className="titleFont text-slate-950 dark:text-slate-100 text-3xl md:text-4xl text-center font-bold">
            Meet the Stars of Our Pet Family
          </h2>
        </div>
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center py-6 mt-12"
          style={{ backgroundImage: `url(${herosSectionBg})` }}
        >
          <div className="w-full md:max-w-1/2 mx-auto">
            <HerosSlider></HerosSlider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
