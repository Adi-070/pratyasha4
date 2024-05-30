import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BookCover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-200">
      <div className="flex flex-grow w-full">
        <div className="flex-1 bg-blue-200 p-8 relative">
          <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <div className="w-6 h-6 relative">
              <div className={`w-full h-0.5 bg-gray-800 mb-1 transition-transform duration-500 ease-in-out ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-800 mb-1 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-800 transition-transform duration-500 ease-in-out ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
          <div className="flex justify-center items-center h-screen">
            <div className="transform -rotate-90" style={{ fontSize: '54px', fontWeight: '500', fontFamily: 'Arial, sans-serif' }}>Pratyasha</div>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className={`fixed top-0 right-0 w-full h-full bg-blue-200 flex flex-col items-center justify-center z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
          <button className="absolute top-4 right-4 text-gray-800 focus:outline-none" onClick={toggleMenu}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className="w-5 h-0.5 bg-gray-800 transform rotate-45"></div>
              <div className="w-5 h-0.5 bg-gray-800 transform -rotate-45 -mt-0.5"></div>
            </div>
          </button>
          <nav className="flex flex-col space-y-4 text-lg">
            <Link href="/">
              <button className="text-gray-800 hover:text-blue-800 times-roman-like" onClick={toggleMenu}>Home</button>
            </Link>
            <Link href="/about">
              <button className="text-gray-800  hover:text-blue-800 times-roman-like" onClick={toggleMenu}>About</button>
            </Link>
            <Link href="/services">
              <button className="text-gray-800  hover:text-blue-800 times-roman-like" onClick={toggleMenu}>Services</button>
            </Link>
          </nav>
        </div>

        <div className="flex-1 bg-blue-200 p-4 relative text-lg text-center">
          Architecture Presentation
          <div className="absolute top-0 left-0 h-full w-px bg-gray-800"></div> {/* Left vertical line */}
          <hr className="absolute inset-0 w-full top-2/3" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
          <div className="flex justify-center items-center mt-40"> {/* Add margin-top to lower the button */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <Link href="/about">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 relative -top-16">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-[1] bg-blue-200 relative">
          <div className="bg-blue absolute inset-0">
            <Image
              src="/static/Skyscraper.png"
              alt="Image description"
              width={472}
              height={500}
            />
          </div>
          <div className="bg-blue text-center text-lg absolute left-0 right-0" style={{ bottom: 'calc(100% - 42rem)' }}>
            Building dreams since 1995
          </div>
          <div className="absolute top-0 left-0 h-full w-px bg-gray-800"></div> {/* Left vertical line */}
          <hr className="absolute inset-0 w-full top-2/3" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
        </div>
      </div>
    </div>
  );
};

export default BookCover;
