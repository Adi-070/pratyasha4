import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Faq from './Faq';
import Carousel from '../components/Carousel';
import ContactForm from './ContactForm';

if (typeof window !== 'undefined') {
  window.onload = function() {
    document.getElementById("autoplay").play();
  }
}
const teamMembers = [
  {
    name: 'John Doe',
    title: 'Architect',
    description: 'With over 10 years of experience, John brings a unique perspective to every project.',
  },
  {
    name: 'Jane Smith',
    title: 'Interior Designer',
    description: 'Jane\'s attention to detail and passion for aesthetics make her designs truly exceptional.',
  },
  {
    name: 'Michael Johnson',
    title: 'Construction Manager',
    description: 'Michael\'s expertise in project management ensures smooth execution from start to finish.',
  },
  {
    name: 'Emily Davis',
    title: 'Interior Decorator',
    description: 'Emily\'s creative flair and ability to transform spaces make her an invaluable asset.',
  },
  {
    name: 'David Wilson',
    title: 'Architectural Designer',
    description: 'David\'s innovative designs push boundaries and create spaces that inspire.',
  },
  {
    name: 'Full name',
    title: 'Job title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
];
const Layout = ({ children }) => {
  
  const dropdownRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const hamburgeref = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
    setIsOpen(!isOpen);
   };

  const scrollToSection = () => {
    document.getElementById('one').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToArea = () => {
    document.getElementById('two').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('three').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFAQ = () => {
		document.getElementById('faq').scrollIntoView({ behavior: 'smooth' });
	  };
    const scrollToTeam = () => {
      document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
      };
  // State to manage the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
    if (hamburgeref.current && !hamburgeref.current.contains(event.target)) {
      setMobileMenuVisible(false);
    }
  };
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -450, // Adjust this value to your desired scroll distance
      behavior: 'smooth',
    });
  };
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 450, // Adjust this value to your desired scroll distance
      behavior: 'smooth',
    });
  };
  

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    if (isDropdownVisible || isMobileMenuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownVisible, isMobileMenuVisible]);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;
  //   let scrollAmount = 0;

  //   const scrollInterval = setInterval(() => {
  //     if (scrollContainer) {
  //       scrollAmount += 1;
  //       scrollContainer.scrollLeft = scrollAmount;
  //       if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
  //         scrollAmount = 0;
  //       }
  //     }
  //   }, 50); 

  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
    <header className="flex  justify-between items-center p-4">
    
      <img src="/static/Real-logo.png" className="w-10 h-10 mb-2" alt="Interior Icon" style={{width:150,height:100}} />
  
      {/* Navigation (centered) */}
      <nav className="relative flex justify-center items-center p-4">
      <div className="md:hidden">
        <button id="hamburger"className="focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex space-x-24 justify-center">
        <a href="#" className="text-black hover:text-gray-600 font-bold underline-animation">
          About Us
        </a>
        <a href="#" onClick={scrollToSection} className="text-black hover:text-gray-600 font-bold underline-animation">
          Services
        </a>
        <a href="#" onClick={scrollToArea} className="text-black hover:text-gray-600 font-bold underline-animation">
          Portfolio
        </a>
        <div className="relative">
          <button
            id="dropdown"
            onClick={toggleDropdown}
            className="text-black hover:text-gray-600 text-center inline-flex items-center font-bold underline-animation"
          >
            More
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            ref={dropdownRef}
            id="dropdownDivider"
            className={`z-10 ${isDropdownVisible ? 'block' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600`}
          >
            <ul className="py-2 text-sm text-gray-700 times-roman-like dark:text-gray-200" aria-labelledby="dropdown">
              <li>
                <a href="#" onClick={scrollToFAQ} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" onClick={scrollToTeam} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Our Team
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#" onClick={scrollToContact}
                className="block px-4 py-2 text-sm times-roman-like text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
    id="mobileMenu"
    ref={hamburgeref}
    className={`md:hidden absolute top-full right-0 w-full ${isMobileMenuVisible ? 'block' : 'hidden'}`}
  >
    {/* <ul className="dropdown-content z-[3] menu p-2 shadow bg-base-100 w-40">
      <li><a href="#" className="times-roman-like block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 bg-white dark:hover:text-white">About Us</a></li>
      <li><a href="#" onClick={scrollToSection} className="times-roman-like text-black block px-4 py-2 bg-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Services</a></li>
      <li><a href="#" onClick={scrollToArea} className="times-roman-like block text-black px-4 py-2 bg-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Portfolio</a></li>
      <li><a href="#" onClick={scrollToFAQ} className="times-roman-like block px-4 py-2 bg-white text-black bg-opacity-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FAQs</a></li>
      <li><a href="#" onClick={scrollToContact} className="times-roman-like block px-4 py-2 bg-white text-black bg-opacity-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Contact</a></li>
      <li><a href="#" onClick={scrollToTeam} className="times-roman-like block px-4 py-2 bg-white text-black bg-opacity-100 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Our Team</a></li>
    </ul> */}
  </div>
    </nav>
    
    <div className={`fixed top-0 right-0 w-full h-full bg-gray-200 flex flex-col items-center justify-center z-50 transform ${isMobileMenuVisible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
  <button className="absolute top-4 right-4 text-gray-800 focus:outline-none" onClick={toggleMenu}>
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <div className="w-5 h-0.5 bg-gray-800 transform rotate-45"></div>
      <div className="w-5 h-0.5 bg-gray-800 transform -rotate-45 -mt-0.5"></div>
    </div>
  </button>
  <nav className="flex flex-col space-y-4 text-lg">
    <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={() => { scrollToSection(); setTimeout(toggleMenu, 300); }}>About</button>
    <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={() => { scrollToSection(); setTimeout(toggleMenu, 300); }}>Services</button>
    <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={() => { scrollToArea(); setTimeout(toggleMenu, 300); }}>Portfolio</button>
    <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={() => { scrollToFAQ(); setTimeout(toggleMenu, 300); }}>FAQ</button>
    <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={() => { scrollToTeam(); setTimeout(toggleMenu, 300); }}>Our Team</button>
    <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={() => { scrollToContact(); setTimeout(toggleMenu, 300); }}>Contact us</button>
  </nav>
</div>

      {/* Get started button */}
      <button type="button" onClick={scrollToSection} disabled className="text-white text-sm px-5 py-2.5 mr-2 mb-2">
        Get started
      </button>
      {/* <div className="md:hidden">
        <button id="hamburger"className="focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div> */}
    </header>
  
    <hr className="border-t border-black w-full mx-auto -mt-6" />
  
    <div className="flex-grow p-4">
      <div className="flex flex-col md:flex-row  space-y-8 md:space-y-0 md:space-x-40 px-4">
        <div className="w-full md:w-1/2">
          {/* Left side content */}
          {children}
        </div>
        <div className="w-full md:w-1/2">
        <br/><br/><br/>
          <Carousel
          />
        </div>
      </div>
    </div>
  
    {/* Video Section */}
    <div className="flex h-screen relative mb-20">
      <video className="absolute inset-0 w-full h-full object-cover" id="autoplay" loop muted>
        <source src="/static/craftboy.mp4" type="video/mp4"/>
        <source src="/static/craftboy.webm" type="video/webm"/> 
        <source src="/static/craftboy.ogg" type="video/ogg"/> 
        Your browser does not support the video tag.
      </video>
  
      <div className="absolute inset-0 bg-black opacity-40 "></div>
  <div className="text-white text-4xl lg:text-5xl w-full lg:w-1/2 font-bold mb-8 z-10 pr-4 ml-8 lg:mt-40">
  <h1 className="text-4xl lg:text-5xl times-roman-like font-bold text-white  mt-10 mb-8" style={{ lineHeight: '1.25' }}>
  Transforming Spaces Through Innovative Architectural Design
</h1>

    <p className="text-xl lg:text-2xl text-black-200 mb-12  times-roman-like text-justify ">
    Pratyasha is a premier architectural firm specialising in interior design and construction services. Leveraging our expertise and meticulous attention to detail, we create spaces that inspire and captivate.
    </p>
    <div className="flex flex-wrap times-roman-like justify-center lg:justify-start">
      <button onClick={scrollToSection}  type="button" className="text-white times-roman-like bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2">
        Discover
      </button>
      <button type="button" className="text-black bg-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mb-2 times-roman-like">
        Learn more
      </button>
    </div>
  </div>
    </div>
  <br/><br/><br/>
    {/* Innovative Section */}
    <div className="flex justify-center items-center h-screen relative ">
  <div className="font-bold mb-8 w-full  mx-auto px-4">
    <div className="flex flex-col items-center">
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto text-center">
        {/* <h1 id="one" className="text-base times-roman-like text-center text-black mt-20 md:mt-10">Innovative</h1> */}
        <br/><br/>
        <h2 id="one" className="text-2xl times-roman-like md:text-4xl font-bold text-black mb-4 md:mb-8"style={{ lineHeight: '1.25' }}> 
        Transforming Spaces with Creative Design Solutions
        </h2>
        <br/>
        <p className="text-lg md:text-xl text-black text-justify times-roman-like mb-12 md:mb-20">
        At Pratyasha, we offer a comprehensive range of services that include interior design, engineering solutions, and bespoke architectural solutions. Our team of experts is dedicated to transforming spaces with innovative and creative design solutions that exceed our client&apos;s expectations.
        </p>
      </div>
    </div>
  

  

    <div className="flex flex-col md:flex-row md:space-x-24 space-y-8 md:space-y-0 w-full justify-center max-w-screen-xl mx-auto px-4">
    {/* Service Cards */}
    <div className="flex flex-col items-center md:w-1/3">
        <img src="/static/interior.png" className="w-10 h-10 mb-2" alt="Interior Icon" />
        <div className="text-black times-roman-like text-xl mb-4 md:mb-8 text-center md:text-justify">Interior Design Services</div>
        <p className="text-base text-black md:text-justify times-roman-like">Our interior design services are tailored to suit your unique style and preferences, creating functional and aesthetically pleasing spaces.</p>
    </div>
    <div className="flex flex-col items-center md:w-1/3">
        <img src="/static/floorplan.png" className="w-10 h-10 mb-2" alt="Interior Icon" />
        <div className="text-black text-xl mb-4 md:mb-8 text-center md:text-justify tight-spacing times-roman-like">Engineering Solutions</div>
        <p className="text-base text-black md:text-justify times-roman-like">We provide quite comprehensive engineering solutions, ensuring quality craftsmanship and attention to detail throughout the process.</p>
    </div>
    <div className="flex flex-col items-center md:w-1/3">
        <img src="/static/construction.png" className="w-10 h-10 mb-2" alt="Construction Icon" />
        <div className="text-black times-roman-like text-xl mb-4 md:mb-8 text-center">Bespoke Architectural Solutions</div>
        <p className="text-base text-black md:text-justify times-roman-like">Our bespoke architectural solutions are tailored to meet the unique needs and vision of each client, creating spaces that inspire.</p>
    </div>
</div>

    {/* Buttons */}
    <div className="flex flex-col justify-center items-center md:mt-4 space-y-4 md:space-y-0 md:space-x-4">
  <button type="button" className="text-black times-roman-like border border-gray-500 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 md:mb-2">
    Learn more
  </button>
</div>
  </div>
</div>



<div className="flex justify-center mt-14 items-center">
  <div className="w-full mt-12 md:w-3/4 lg:w-1/2 mx-auto text-center"> {/* Adjust width for smaller screens */}
    <h1 id="two" className="text-lg md:text-base text-black mt-12 md:mb-8 times-roman-like">Projects</h1>
    <h2 className="text-3xl times-roman-like times md:text-4xl font-bold text-black mb-4 md:mb-8"><br/>
      Experience Our Expertise
    </h2>
    <p className="text-lg md:text-xl text-black times-roman-like mb-4 md:mb-10">
      Browse through our featured projects and see our expertise in action.
    </p>
  </div>
</div>


    
<div className='relative'>
  
<button
        onClick={scrollLeft}
        className="absolute left-8 top-1/2  z-10 p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
</svg>

      </button>
<div className="flex overflow-x-auto scrollbar-hide space-x-4 px-10" ref={scrollContainerRef}>
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
        <h6 className="mb-2 text-xl font-medium leading-tight text-black times-roman-like">Card title</h6>
        <p className="mb-4 text-base text-black times-roman-like">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Elegant </div>
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
        <h5 className="mb-2 text-xl text-black font-medium leading-tight times-roman-like">Card title</h5>
        <p className="mb-4 text-base text-black times-roman-like">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Elegant </div>
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
        <h5 className="mb-2 text-xl font-small text-black leading-tight times-roman-like">Card title</h5>
        <p className="mb-4 text-base text-black times-roman-like">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Elegant </div>
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
        <h5 className="mb-2 text-xl font-medium text-black leading-tight times-roman-like">Card title</h5>
        <p className="mb-4 text-base text-black times-roman-like">
          This is a longer card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div className='flex space-x-4'>
        <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Residential </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Modern </div>
  </div>
  <div class="flex items-start space-x-2">
    <div class="rounded-full py-1 px-4 font-small border bg-black text-white border-gray-300 times-roman-like"> Elegant </div>
  </div>
  </div>
      </div>
    </div>
  </div>
</div>
<button onClick={scrollRight} className="absolute right-7 top-1/2  z-10 p-2 ">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
</svg>

      </button>
</div><br/><br/><br/>

<h2 id="three"class="text-3xl text-black times-roman-like md:text-4xl font-sans mb-4 md:mb-8 text-center">
    Contact us
</h2>
<br/><br/>
<div class="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto md:ml-14 max-w-7xl bg-white text-[#333] font-[sans-serif] w-full px-4">
    <div>
      
        <h1 class="text-3xl font-extrabold times-roman-like">Let&apos;s Talk</h1><br/><br/>
        <p class="text-sm text-gray-400 mt-3 times-roman-like">Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project and provide help.</p>
        <div class="mt-12">
            <h2 class="text-lg font-extrabold times-roman-like" >Email</h2><br/><br/>
            <ul class="mt-1">
                <li class="flex items-center">
                    <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black'
                            viewBox="0 0 479.058 479.058">
                            <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000" />
                        </svg>
                    </div>
                    <a href="javascript:void(0)" class="text-black times-roman-like text-sm ml-3">
                        <small class="block ">Mail</small>
                        <strong>pratyashastudio@outlook.com</strong>
                    </a>
                </li><br/>
                     <li class="flex items-center">
                     <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black' viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.091 15.091 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.1-.22 10.27 10.27 0 0 0 3.24.52 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17.93 17.93 0 0 1 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 10.27 10.27 0 0 0 .52 3.24 1 1 0 0 1-.22 1.1l-2.2 2.2z"/>
    </svg>
</div>

                    <a href="javascript:void(0)" class="text-black times-roman-like text-sm ml-3">
                        <small class="block ">Call</small>
                        <strong>+91 9663031560</strong>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mt-12">
            <h2 class="text-lg font-extrabold times-roman-like" >Socials</h2><br/>
            <ul class="flex mt-3 space-x-4">
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black' viewBox="0 0 24 24">
                            <path
                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                data-original="#000000" />
                        </svg>
                    </a>
                </li>
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black' viewBox="0 0 511 512">
                            <path
                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                data-original="#000000" />
                        </svg>
                    </a>
                </li>
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="https://x.com/PratyashaDesign">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black' viewBox="0 0 24 24">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </a>
                </li>
                <li class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='black' viewBox="0 0 24 24">
                            <path
                                d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    {/* <form class="ml-auto space-y-4 w-full sm:w-auto">
        <input type='text' placeholder='Name'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm" />
        <input type='email' placeholder='Email'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm " />
        <input type='text' placeholder='Subject'
            class="w-full rounded-md py-3 px-4 bg-gray-100 text-sm " />
        <textarea placeholder='Message' rows="6"
            class="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 "></textarea><br/><br/><br/>
        <button type='button'
            class="text-white times-roman-like bg-black hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
    </form> */}
    <ContactForm/>
</div>


  <Faq/>
  <section className="text-center py-20">
      <h2 className="text-lg font-semibold uppercase text-gray-500 mb-2">Innovative</h2>
      <h3 id="team" className="text-4xl font-bold mb-6">Meet Our Team</h3>
      <p className="max-w-xl mx-auto mb-16 text-gray-600">
        Get to know the talented individuals behind Pratyasha.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
              {/* <img src='/static/PLAN.jpg'/> */}
            </div>
            <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
            <p className="text-gray-500 mb-4">{member.title}</p>
            <p className="text-gray-600 mb-4">{member.description}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <i className="fab fa-dribbble"></i>
               
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* Footer */}
    <div>
  <footer className="text-gray-800 w-full mx-auto inter md:pt-15">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          {/* <h2 className="font-bold text-gray-900 text-xl mb-3">
            Logo
          </h2> */}
          <div className="flex justify-center items-center">
            <img src="/static/Real-logo.png" className="mb-3 w-24 h-16" alt="Interior Icon" />
          </div>
            <br/>
         
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="font-medium text-gray-900 text-base  mb-3">
            About us
          </h2>
          <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
            <li>
              <a onClick={scrollToSection}className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a onClick={scrollToArea}className="text-gray-600 hover:text-gray-800 cursor-pointer">
                Portfolio
              </a>
            </li>
            <li>
              <a onClick={scrollToContact} className="text-gray-600 hover:text-gray-800 cursor-pointer">
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
