import React from 'react'

const Faq = () => {
	const scrollToContact = () => {
		document.getElementById('three').scrollIntoView({ behavior: 'smooth' });
	  };
  return (
    <section className="dark:bg-gray-100 md:ml-10 dark:text-gray-800">
		<br/>
	<div className="container flex flex-col justify-center times-roman-like px-4 py-8  md:p-8">
		<h2 id="faq"className="mb-12 text-3xl font-bold leading-none sm:text-5xl ">Frequently Asked Questions</h2>
        <h3 className="mb-12 text-base leading-none sm:text-3xl"style={{ lineHeight: '1.5' }}>Find answers to common questions about Pratyasha&apos;s architectural design and construction services.
</h3>
		<div className="divide-y dark:divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">How do I get started?</h3>
				<p className="md:pl-0 md:col-span-7">To begin your journey with Pratyasha, simply reach out to our team and schedule a consultation. We&apos;ll guide you through each step and provide all the necessary details to kickstart your project.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What are the costs involved?</h3>
				<p className="md:pl-0 md:col-span-7">The cost of our services depends on the scope and complexity of your project. We offer competitive pricing and will give you a detailed quote after assessing your specific requirements.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What is the project timeline?</h3>
				<p className="md:pl-0 md:col-span-7">The duration of your project depends on various factors such as its size, material availability, and any unique requirements. Our team will work closely with you to set a realistic timeline and keep you updated throughout the process.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Do you offer customization?</h3>
				<p className="md:pl-0 md:col-span-7">Absolutely, we provide customisation services to ensure your project aligns with your unique needs and preferences. Our team will collaborate with you to understand and integrate your vision into the design and construction process.</p>
			</div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What experience does your team have?</h3>
				<p className="md:pl-0 md:col-span-7">Pratyasha boasts years of experience in the architectural and interior design industry. Our professional team has completed numerous projects, ranging from residential homes to commercial spaces.</p>
			</div>
		</div>
		
		<div className="flex flex-col items-center justify-center">
  <div class="text-2xl times-roman-like font-bold text-black mt-8 mb-8 tight-spacing">
    Still have questions?
  </div>
  <a href="#" className="text-base times-roman-like mb-8 break-words text-center md:text-left">
    Contact us for more information.
  </a>
  <div className="flex justify-center"> {/* Center the button */}
    <button onClick={scrollToContact}
      type="button"
      className="text-black times-roman-like border border-gray-500 focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 mr-2"
    >
      Contact us
    </button>
  </div>
</div>

	</div>
</section>

  
  )
}

export default Faq