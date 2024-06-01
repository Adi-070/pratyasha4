import React from 'react';
import Layout from '../components/Layout';
import BookCover from '../components/BookCover';

const HomePage = () => {
  return (
    
    <Layout>
      <section className="hero min-h-screen bg-cover bg-center" >
        <div className="container mx-auto px-4 py-24 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-black mb-8 text-justify">
          Transforming spaces through innovative design and impeccable craftsmanship.
          </h1>
          <p className="text-xl text-black-200 mb-12 times-roman-like text-justify ">
          At Pratyasha, we believe that every space holds the potential to inspire and elevate. Our mission is to craft exceptional architectural designs and interior spaces that reflect our client&apos;s visions and enhance their lifestyles. With an emphasis on quality, meticulous attention to detail, and a collaborative approach, we infuse our unique expertise and passion into every project.
          </p>
        </div>
      </section>
    </Layout>
    // <div  className=" min-h-screen">
    //       <BookCover/>
    // </div>  
    
  );
};

export default HomePage;
