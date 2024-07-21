import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import BookCover from '../components/BookCover';

const HomePage = () => {
  const scrollToSection = () => {
    document.getElementById('one').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <Head>
        <title>Pratyasha</title>
        <meta name="description" content="Transforming spaces through innovative design and impeccable craftsmanship." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Layout>
      <section className="hero min-h-screen bg-cover bg-center" >
        <div className="container mx-auto  md:ml-4 py-24 flex flex-col justify-center items-center text-center">
          <br/><br/>
          <h1 className="text-4xl times-roman-like font-bold text-black mb-8 text-left" style={{ lineHeight: '1.25' }}>
          Transforming spaces through innovative design and  impeccable craftsmanship
          </h1>
          <p className="text-xl text-black mb-12 times-roman-like text-justify custom-spacing ">
          At Pratyasha, we believe that every space holds the potential to inspire and elevate. Our mission is to craft exceptional architectural designs and interior spaces that reflect our client&apos;s visions and enhance their lifestyles. With an emphasis on quality, meticulous attention to detail, and a collaborative approach, we infuse our unique expertise and passion into every project.
          </p>
          <button type="button" onClick={scrollToSection} className="text-white rounded-md times-roman-like bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2">
        Get started
      </button>
        </div>
      </section>
      
    </Layout>
    </>
    // <div  className=" min-h-screen">
    //       <BookCover/>
    // </div>  
    
  );
};

export default HomePage;
