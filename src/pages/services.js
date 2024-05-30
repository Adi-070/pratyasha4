import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-200">
    <div className="flex w-full">
       
      <div className="flex-1 bg-blue-200 p-8 relative">
     
        <div className="flex justify-center items-center h-screen">
            
          <div className="transform -rotate-90" style={{ fontSize: '54px', fontWeight: '500', fontFamily: 'Arial, sans-serif' }}>Services</div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
         
            <Link href="/about">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 relative -top-16">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-blue-200 p-4 relative text-lg">
      
        <div className="absolute top-0 left-0 h-full w-px bg-gray-800"></div> {/* Left vertical line */}
       
        <hr className="absolute inset-0 w-full top-3/4" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
       
        <hr className="absolute inset-0 w-full top-20" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
      </div>

       
      <div className="flex-[2.5] bg-blue-200 relative">
      <p className='absolute font-bold text-2xl' style={{ bottom: 'calc(100% - 10rem)' }}>  ARCHITECTURAL AND ENGINEERING DESIGN</p>
      <p className='absolute times-roman-like' style={{ bottom: 'calc(100% - 15rem)'}} >With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.</p>

      <p className='absolute font-bold text-2xl' style={{ bottom: 'calc(100% - 20rem)' }}>CONSTRUCTION PROJECT MANAGEMENT</p>
      <p className='absolute times-roman-like' style={{ bottom: 'calc(100% - 25rem)'}} >With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.</p>
       
      <p className='absolute font-bold text-2xl' style={{ bottom: 'calc(100% - 30rem)' }}>CONSULTATION</p>
      <p className='absolute times-roman-like' style={{ bottom: 'calc(100% - 35rem)'}} >With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.</p>
        {/* <div className="bg-blue text-center text-lg absolute left-0 right-0" style={{ bottom: 'calc(100% - 42rem)' }}>
          Building dreams since 1995
        </div> */}
        {/* <div className="absolute top-0 left-0 h-full w-px bg-gray-800"></div> Left vertical line */}
        <hr className="absolute inset-0 w-full top-3/4" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
        <hr className="absolute inset-0 w-full top-20" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
      </div>
    </div>
  </div>
  )
}

export default services