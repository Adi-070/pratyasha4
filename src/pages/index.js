import React from 'react';
import Layout from '../components/Layout';
import BookCover from '../components/BookCover';

const HomePage = () => {
  return (
    
    <Layout>
      <section className="hero min-h-screen bg-cover bg-center" >
        <div className="container mx-auto px-4 py-24 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-black mb-8 text-justify">
          Transforming spaces with innovative design and impeccable craftsmanship.
          </h1>
          <p className="text-xl text-black-200 mb-12 times-roman-like text-justify ">
            At Pratyasha, we believe that every space has the potential to inspire and uplift. Our mission is to create exceptional architectural designs and interior spaces that reflect our clients vision and enhance their lifestyle. With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.
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
