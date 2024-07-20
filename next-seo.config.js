// next-seo.config.js
const config = {
    title: 'Pratyasha',
    description: 'Transforming spaces through innovative design and impeccable craftsmanship',
    canonical: 'https://www.pratyashastudio.in',
    openGraph: {
      type: 'website',
      locale: 'en_IN', // Assuming the locale is India
      url: 'https://www.pratyashastudio.in',
      site_name: 'Pratyasha',
      title: 'Pratyasha',
      description: 'Transforming spaces through innovative design and impeccable craftsmanship',
    //   images: [
    //     {
    //       url: 'https://www.pratyasha.in/images/og-image.jpg', // Ensure you have an image hosted here
    //       width: 1200,
    //       height: 630,
    //       alt: 'Pratyasha Logo',
    //     },
    //   ],
    },
    twitter: {
      handle: '@pratyasha', 
      site: '@PratyashaDesign', 
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'Pratyasha, excellence, portfolio, expertise, passion, FAQs, Interior Design Services, Engineering Solutions, Bespoke Architectural Solutions',
      },
      {
        name: 'Souvik Barh',
        content: 'Pratyasha Team', 
      },
    ],
    // additionalLinkTags: [
    // //   {
    // //     rel: 'icon',
    // //     href: '/favicon.ico', // Ensure you have a favicon at this path
    // //   },
    // //   {
    // //     rel: 'apple-touch-icon',
    // //     href: '/apple-touch-icon.png', // Ensure you have an apple touch icon at this path
    // //     sizes: '180x180',
    // //   },
    // //   {
    // //     rel: 'manifest',
    // //     href: '/site.webmanifest', // Ensure you have a web manifest file at this path
    // //   },
    // ],
  };
  
  export default config;
  