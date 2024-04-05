import React from 'react'

const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center times-roman-like px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-3xl font-bold leading-none sm:text-5xl">Frequently Asked Questions</h2>
        <h3 className="mb-12 text-base leading-none sm:text-3xl">Find answers to common questions about Pratyasha's interior design and house construction services.
</h3>
		<div className="divide-y dark:divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">How to get started?</h3>
				<p className="md:pl-0 md:col-span-7">To get started with Pratyasha, simply call our team and schedule a consultation. We will guide you through the process and provide you with the necessary information to begin your project.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is the cost?</h3>
				<p className="md:pl-0 md:col-span-7">The cost of our services varies depending upon the scope and complexity of your project. We offer competitive prices and will provide you with a detailed quote after assessing your requirements.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is the timeline?</h3>
				<p className="md:pl-0 md:col-span-7">The timeline of your project will depend on various factors such as the size of the project, the availability of materials, and any specific requirements. Our team will work closely with you to establish a realistic timeline and keep you informed throughout the process.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Do you offer customization?</h3>
				<p className="md:pl-0 md:col-span-7">Yes, we offer customization to make sure our project meets your specific needs and preferences. Our team will work closely with you to understand your vision and incorporate it into the design and construction process.</p>
			</div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is your experience?</h3>
				<p className="md:pl-0 md:col-span-7">Pratyasha has years of experience in the architectural and interior design industry. Our team of professionals has successfully completed numerous projects, ranging from residential to commercial spaces. </p>
			</div>
		</div>
        <div class="text-2xl font-bold text-black mb-8 tight-spacing">
      Still have questions?
    </div>
    <a href="#"class="text-base mb-8 break-words text-center md:text-left">
      Contact us for more information. 
    </a>
    <div className='w-1/2'>
    <button type="button" className="text-black border border-gray-500 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2">
            Contact us
          </button>
          </div>

	</div>
</section>

  
  )
}

export default Faq