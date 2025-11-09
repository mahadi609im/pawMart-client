import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Category from '../../Components/Category/Category';
import ListingSection from '../../Components/Listing/ListingSection/ListingSection';

const Home = () => {
  return (
    <div>
      <div className="mb-20">
        <Banner></Banner>
      </div>
      <section className="my-20">
        <Category></Category>
      </section>
      <section className="my-20">
        <ListingSection></ListingSection>
      </section>
    </div>
  );
};

export default Home;
