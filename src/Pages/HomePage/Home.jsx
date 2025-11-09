import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Category from '../../Components/Category/Category';

const Home = () => {
  return (
    <div>
      <div className="mb-20">
        <Banner></Banner>
      </div>
      <section className="my-20">
        <Category></Category>
      </section>
    </div>
  );
};

export default Home;
