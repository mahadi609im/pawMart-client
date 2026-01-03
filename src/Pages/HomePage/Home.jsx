import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Category from '../../Components/Category/Category';
import QnaSection from '../../Components/QnaSection/QnaSection';
import ListingSection from '../Listing/ListingSection/ListingSection';
import FeaturesSection from '../../Components/Features/Features';
import Highlights from '../../Components/Highlights/Highlights';
import Testimonials from '../../Components/Testimonials/Testimonials';
import BlogsSection from '../../Components/BlogSection/BlogSection';
import HerosSection from '../../Components/HerosSection/HerosSection';

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

      <section className="mt-20">
        <HerosSection></HerosSection>
      </section>
    </div>
  );
};

export default Home;
