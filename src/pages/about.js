import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const aboutpage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
    <div className="flex flex-grow w-full">
      <div className="flex-1 bg-white p-8 relative">
      <div className="absolute inset-0 w-full h-full">
            <Image
              src="/static/Skyscraper2.png"
              alt="Image description"
              layout="fill"
              objectFit="cover"
            />
          </div>
        
      </div>
      
      <div className="flex-1 bg-white absolute text-lg text-center">
        <div className="absolute top-0 left-0 h-full w-px bg-gray-800 mr-8"></div> {/* Left vertical line */}
        <hr className="absolute inset-0 w-full top-20" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
      </div>
      <div className="flex-[1] bg-white p-4 relative">
        <div className="text-center text-5xl text-black font-bold times-roman-like absolute left-0 right-0" style={{ bottom: 'calc(100% - 15rem)' }}>
     About Us
      </div>
      
      <p className='absolute times-roman-like ml-8' style={{ bottom: 'calc(100% - 25rem)' }}>  At Pratyasha, we believe that every space has the potential to inspire and uplift. Our mission is to create exceptional architectural designs and interior spaces that reflect our clients vision and enhance their lifestyle. </p>
      <p className='absolute times-roman-like ml-8' style={{ bottom: 'calc(100% - 30rem)'}} >With a focus on quality, attention to detail, and a collaborative approach, we bring our unique expertise and passion to every project.</p>
        <div className="absolute top-0 right-20 h-full w-px bg-gray-800"></div> {/* Left vertical line */}
        <hr className="absolute inset-0 w-full top-20" style={{borderTop: '0.5px solid '}} />{/* Horizontal line */}
        <Link href="/services">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 relative">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
  </svg>
</Link>
<p className=' absolute right-10 times-roman-like'>02</p>
      </div>
    </div>
  </div>
  )
}

export default aboutpage
