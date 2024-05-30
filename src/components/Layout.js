import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Faq from './Faq';
import Carousel from '../components/Carousel';


if (typeof window !== 'undefined') {
  window.onload = function() {
    document.getElementById("autoplay").play();
  }
}
const Layout = ({ children }) => {
  
  const scrollToSection = () => {
    document.getElementById('one').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="flex flex-col min-h-screen bg-white">
    <header className="flex justify-between items-center p-4">
      {/* Logo */}
      <a className="text-xl font-bold text-black pl-4" href="#">
        Logo
      </a>
  
      {/* Navigation (centered) */}
      <nav className="hidden md:flex space-x-9 justify-center"> 
        <a href="#" className="text-black-800 hover:text-gray-400">
          About Us
        </a>
        <a href="#" className="text-black-800 hover:text-gray-400">
          Services
        </a>
        <a href="#" className="text-black-800 hover:text-gray-400">
          Portfolio
        </a>
        <a href="#" className="text-black-800 hover:text-gray-400">
          More
        </a>
      </nav>
  
      {/* Get started button */}
      <button type="button" className="text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2">
        Get started
      </button>
    </header>
  
    <hr className="border-t border-black w-full mx-auto mb-6" />
  
    <div className="flex-grow p-4">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-40 max-w-screen-xl mx-auto px-4">
        <div className="w-full md:w-1/2">
          {/* Left side content */}
          {children}
        </div>
        <div className="w-full md:w-1/2">
          {/* Right side image */}
          <Carousel
          />
        </div>
      </div>
    </div>
  
    {/* Video Section */}
    <div className="flex h-screen relative mb-8">
      <video className="absolute inset-0 w-full h-full object-cover" id="autoplay" loop muted>
        <source src="/static/craftboy.mp4" type="video/mp4"/>
        <source src="/static/craftboy.webm" type="video/webm"/> 
        <source src="/static/craftboy.ogg" type="video/ogg"/> 
        Your browser does not support the video tag.
      </video>
  
      <div className="absolute inset-0 bg-black opacity-40 "></div>
      <div className="text-white text-4xl w-1/2 font-bold mb-8 z-10 pr-4 ml-8 mt-40">
        <h1 className="text-4xl font-bold text-white mb-8 ">
          Transforming spaces with innovative design and impeccable craftsmanship.
        </h1>
        <p className="text-xl text-black-200 mb-12 times-roman-like text-justify ">
          At Pratyasha, we believe that every space has the potential to inspire and uplift. Our mission is to create exceptional architectural designs and interior spaces that reflect our clients vision and enhance their lifestyle. With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.
        </p>
        <div>
          <button type="button" className="text-white bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={scrollToSection}>
            Discover
          </button>
          &nbsp;
          <button type="button" className="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2">
            Learn more
          </button>
        </div>
      </div>
    </div>
  
    {/* Innovative Section */}
    <div className="flex justify-center items-center h-screen relative ">
      <div className="font-bold mb-8">
        <div className="flex justify-center items-center">
          <div className="w-1/2 mx-auto">
            <h1 id="one"className="text-base text-center text-black mb-8 tight-spacing">Innovative</h1>
            <h2 className="text-4xl font-bold text-black mb-8 ">
              Transforming spaces with innovative design and impeccable craftsmanship.
            </h2>
            <p className="text-xl text-black times-roman-like mb-20">
              At Pratyasha, we believe that every space has the potential to inspire and uplift. Our mission is to create exceptional architectural designs and interior spaces that reflect our clients vision and enhance their lifestyle. With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.
            </p>
          </div>
        </div>
        
        <div className="flex space-x-40 w-full justify-center max-w-screen-xl mx-auto px-4">
          {/* Service Cards */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-4">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
            <div className="text-black text-xl mb-8 text-justify">Interior Design Services</div>
            <p className="times-roman-like text-base break-words">Our bespoke architectural solutions are tailored to meet the unique needs and vision of each client, creating spaces that inspire.</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-4">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
            <div className="text-black text-xl mb-8 break-words text-justify tight-spacing">House Construction Solutions</div>
            <p className="times-roman-like text-base break-words">We provide comprehensive house construction solutions, ensuring quality craftsmanship and attention to detail throughout the process.</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mb-4">
              <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
              <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
            </svg>
            <div className="text-black text-xl mb-8 text-justify">Bespoke Architectural Solutions</div>
            <p className="times-roman-like text-base break-words">Our bespoke architectural solutions are tailored to meet the unique needs and vision of each client, creating spaces that inspire.</p>
          </div>
        </div>
  
        {/* Buttons */}
        <div className='flex justify-center items-center mt-8'>
          <button type="button" className="text-black border border-gray-500 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2">
            Learn more
          </button>
          <button type="button" className="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2">
            Sign up
          </button>
        </div>
      </div>
    </div>
    <h1 id="one" className="text-base text-center text-black mb-8 tight-spacing">Projects</h1>
<div className="flex overflow-x-auto space-x-4 px-10">
  <div className="flex space-x-20">
    <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white min-w-[300px]">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          alt="Hollywood Sign on The Hill"
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
        <p className="mb-4 text-base">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Elegant </div>
  </div>
  </div>
      </div>
    </div>

    <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white min-w-[300px]">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
          alt="Palm Springs Road"
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
        <p className="mb-4 text-base">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Elegant </div>
  </div>
  </div>
      </div>
    </div>

    <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white min-w-[300px]">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
          alt="Palm Springs Road"
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-small leading-tight">Card title</h5>
        <p className="mb-4 text-base">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Elegant </div>
  </div>
  </div>
      </div>
    </div>

    

    <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white min-w-[300px]">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
          alt="Los Angeles Skyscrapers"
        />
      </a>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
        <p className="mb-4 text-base">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300"> Elegant </div>
  </div>
  </div>
      </div>
    </div>
  </div>
</div>



  <Faq/>
    {/* Footer */}
    <div>
  <footer className="text-gray-800 w-full mx-auto inter md:pt-24">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-bold text-gray-900 text-xl mb-3">
            Logo
          </h2>
         
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            About us
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Contact us
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Blogs
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                FAQs
              </a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            Contact
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Get in Touch
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Feedback
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Feature Requests
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Roadmap
              </a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base mb-3">
            Developers
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Documentation
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                GitHub
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Press Releases
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Roadmap
              </a>
            </li>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  <div className="w-4/5 mx-auto py-2 md:mt-12 text-sm">
    <hr className="h-px bg-gray-800 opacity-30 border-0 mb-4" />
    <div className="grid justify-center pt-6 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©2024 All rights reserved</span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
						<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a>
			</div>
		</div>
</div>
</div>

  </div>
  
  );
};

export default Layout;
