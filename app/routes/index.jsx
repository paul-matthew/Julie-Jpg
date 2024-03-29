import React, { useRef, useEffect, useState } from 'react';

import { useLoaderData } from "@remix-run/react";
import { getDataFromStrapi } from "~/api/get-data-from-strapi.server";
// import { baseUrl } from "~/api/get-data-from-strapi.server";

import { Link } from "react-router-dom";

// const baseUrl = process.env.NODE_ENV === 'production'
//   ? "https://julie-00182f9df30d.herokuapp.com"
//   : "http://127.0.0.1:1337";

let baseUrl = "https://julie-00182f9df30d.herokuapp.com";

if (process.env.NODE_ENV !== 'production') {
  baseUrl = "http://127.0.0.1:1337";
  console.log("This is a local build");
} else {
  console.log("This is a production build");
}

export async function loader() {
  const path = "art-collections/";
  const query = "populate=*";
  const response = await getDataFromStrapi(path, query);
  let data = response.data;

  if (!Array.isArray(data)) {
    data = [data]; // Wrap data in an array if it's not already an array
  }

  data.sort((a, b) => {
    const dateA = new Date(a.attributes.Date);
    const dateB = new Date(b.attributes.Date);
    return dateB - dateA; // Sort in descending order
  });
  console.log(data)
  return { info: data };

}

// const data = {
//   info: [
//     {
//       id: 1,
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
//       title: "Starry Night",
//       date: "06/06/2023",
//     },
//     {
//       id: 2,
//       image: "https://cdn.shopify.com/s/files/1/0047/4231/6066/files/The_Scream_by_Edvard_Munch_1893_800x.png",
//       title: "The Scream",
//       date: "05/03/23",
//     },
//     {
//       id: 3,
//       image: "/cover.jpg",
//       title: "title2",
//       date: "xx/yy/zz",
//     },
//   ],
// };



function ArtCard({ data, index }) {
  const path_medImage = data.attributes.ArtImage.data.attributes.formats.medium.url;

  // const mediumImage=`${baseUrl}${path_medImage}`; UNCOMMENT IF NOT USING CLOUDINARY
  const mediumImage = `${path_medImage}`;

  const ref = useRef();

  useEffect(() => {

  }, []);
  if (index > 3) {
    return null; // Skip rendering for items after the fourth index
  }
  return (
    <a
      className="group col-span-2 lg:col-span-1"
    >
      <div style={{ width: '100%', height: '100%', overflow: 'hidden' }} className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0">
        <img
          className="transition duration-500"
          src={mediumImage}
          alt={data.attributes.Title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <h3 className="text-2xl font-normal text-white">{data.attributes.Title}</h3>
        <span className="h-max rounded-full px-2 py-1 text-xs tracking-wider text-white flex justify-end" style={{fontSize:'0.1em', width:'115px'}}>
          {data.attributes.Date}
        </span>
      </div>
    </a>
  );

}

export default function HomeRoute() {

  const { info } = useLoaderData();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  const sectionRef = useRef(null);

  const handlePrevious = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
      scrollToSection();
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < info.length) {
      setStartIndex(startIndex + itemsPerPage);
      scrollToSection();
    }
  };

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const displayedItems = info.slice(startIndex, startIndex + itemsPerPage);

  const isFirstPage = startIndex === 0;
  const isLastPage = startIndex + itemsPerPage >= info.length;

const slideInStyle = {
  transform: 'translateX(0%)',
  opacity: 1,
  transition: 'transform 0.5s ease, opacity 0.5s ease',
};

const slideOutStyle = {
  transform: 'translateX(-200%)',
  opacity: 1,
  transition: 'transform 0.5s ease, opacity 0.5s ease',
};


const testimonials = [
  {
    imageSrc: './empress-icon.png',
    content:
      "Thank you to Julie for the beautiful piece created for my Friend. I asked for Julie to sketch a piece of my Friends dog who passed away, upon gifting her the completed piece she was in tears. The detail represented Jaspar so well, and is now placed on the wall for the Family to see, and remember the moments they had. Truly a masterpiece.",
    author: "Anonymous",
    date: "Sept 17, 2023",
    stars: 5,
  },
  {
    imageSrc: './empress-icon.png',
    content:
      "Words can’t describe how beautifully Jules captured the beauty and essence of my late mother in the portrait she drew for me. The amount of detail Jules added brought me to tears when I first saw it. My mother is fondly remembered for her eyes and bright smile and these physical features really shined through in Jules’ work. It’s truly an amazing reminder of my mother’s elegance and grace. Losing my mother has not been easy but I’m thankful I have something timeless to remember her by. Thank you Jules ❤️",
    author: "Vanessa O.",
    date: "Sept 19, 2023",
    stars: 5,
  },
  {
    imageSrc: './empress-icon.png',
    content:
      "Julienne’s eye for flare and creativity is the reason I chose her to create a unique piece of art for me. I provided her some inspiration pieces to work with and she created a portrait that I enjoy til this day. She’s well versed with various styles of painting & drawing, and I can’t wait to have her help me create more pieces in the future for my space.",
    author: "Laura O.",
    date: "Sept 20, 2023",
    stars: 5,
  },
  {
    imageSrc: './empress-icon.png',
    content:
      "Had the pleasure of working with Julienne for a logo I wanted to create for my streaming page. I gave her the blueprint and she was able to bring it to life exactly how I pictured it in my head. Not only is she talented but also humble and professional with her craft. It was an extreme pleasure having work with her and continue to be impressed with how she grows as a creative.",
    author: "Kasean",
    date: "Sept 20, 2023",
    stars: 5,
  },
  // Add more testimonials here...
];
  

const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    // Increment the index to show the next testimonial
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, 10000); // Change testimonial every 5 seconds (adjust as needed)

  return () => {
    clearInterval(interval); // Clear the interval on component unmount
  };
}, []);
  

  return (
    <div>
    <head>
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-BD49HNJ1SZ"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BD49HNJ1SZ');
        `}
      </script> */}
    </head>
    <div className="bg-black">
      <link href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
      <main className="background relative">
        <header className="fixed top-0 z-20 w-full mt-0">
          <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-light tracking-widest text-white -mt-10 ml-[-0.7rem]">
                <i className="fa fa-home fa-1x" aria-hidden="true"></i>
              </a>
              <div className="flex justify-end flex-1">
                <a href="#work" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                  <span className="relative">Portfolio</span>
                </a>
                <a href="#services" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                  <span className="relative">Services</span>
                </a>
                <a href="#about" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                  <span className="relative">About</span>
                </a>
                <a href="#contact" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                  <span className="relative">Contact</span>
                </a>
                <Link to="/shop" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                  <span className="relative">Shop</span>
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <section id="home" className="relative flex min-h-screen items-center">
          <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
          <picture>
            <source srcSet="/coverintro-mobile.jpg" media="(max-width: 600px)" />
            <source srcSet="/coverintro-desktop.jpg" media="(min-width: 601px)" />
            <img src="/cover2desktop.jpg" alt="Julie Jpeg main pic" className="fixed inset-0 h-full w-full object-cover" />
          </picture>
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-1 lg:pt-7 xl:px-10 xl:mb-0 2xl:px-0 mt-[-36rem] lg:mt-[-33rem]" style={{ border: "hidden", marginLeft: "0rem" }}>
            <div className="pb-2 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-0">
            <h1 className="text-6xl font-bold text-white sm:text-6xl md:text-8xl xl:leading-tight mt-40 md:mt-80 lg:mt-60 xl:mt-20 2xl:mt-20" style={{ fontFamily: 'Marcellus, serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              JULIE JPEG<span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>{String.fromCharCode(8482)}</span>
            </h1>
            </div>
            <div>
              <div className="md:w-1/3 md:pt-2 lg:w-1/2">
                <p className="mb-0 text-lg font-light text-white sm:text-2xl xl:leading-normal">Original & Custom Artwork</p>
                <a href="#work" className="relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10">
                  <span className="relative">See my work</span>
                </a>
              </div>
            </div>
            {/* <div className="relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16">
                <span className="text-xs font-light uppercase tracking-widest text-white">Follow me</span>
                <ul className="relative z-20 mt-4 space-y-2 text-sm font-light text-white">
                    <li>
                    <a href="https://www.instagram.com/juulie.jpg/" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div> */}
          </div>
        </section>
        <section ref={sectionRef} id="work" className="relative bg-black pb-20 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-36 2xl:px-0">
            <div
              className="flex flex-wrap items-center gap-6"
            >
              <h2 className="text-7xl font-bold text-white xl:text-8xl" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
                My Work
              </h2>
              <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
                {info.length} Projects
              </span>
            </div>
            <div className="relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-32 lg:mt-30">
              {displayedItems.map((item, index) => (
                <ArtCard key={item.id} data={item} index={index} />
              ))}
            </div>
          </div>
          {info.length > itemsPerPage && (
            <div className="flex justify-center mt-0 space-x-4">
              {!isFirstPage && (
                <button className="text-white text-3xl underline" onClick={handlePrevious}>
                  Previous
                </button>)}
              {!isLastPage && (
                <a className="text-white text-3xl underline hover:text-blue-500 mt-20" href="/fullportfolio">
                  Browse Portfolio
                </a>)}
            </div>
          )}
        </section>
        <section id="services" className="relative bg-black pb-60 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex flex-wrap items-center gap-6">
              <h2 className="text-7xl font-bold text-white xl:text-8xl" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>My Services</h2>
              {/* <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">03 services</span> */}
            </div>
            <div className="mt-24">
              <div className="">
                <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
                  <div>
                    <div className="group border-b border-white/30 pb-8">
                      <div className="flex flex-col gap-4 divide-y divide-white/30">
                        {/* <span className="inline-block text-white/60">001</span> */}
                        <h3 className="bg-black pt-6 text-3xl text-white">Commissions</h3>
                      </div>
                      <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l">Creating personalized and captivating artwork commissions, my service brings your vision to life, ensuring a unique and meaningful piece tailored exclusively for you.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="group border-b border-white/30 pb-8">
                      <div className="flex flex-col gap-4 divide-y divide-white/30">
                        {/* <span className="inline-block text-white/60">002</span> */}
                        <h3 className="bg-black pt-6 text-3xl text-white">Live Painting</h3>
                      </div>
                      <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l">I offer a fun and interactive experience where art comes to life right before your eyes, adding joy and excitement to any occasion.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="group border-b border-white/30 pb-8">
                      <div className="flex flex-col gap-4 divide-y divide-white/30">
                        <h3 className="bg-black pt-6 text-3xl text-white">Exhibits</h3>
                      </div>
                      <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l">In-person events where my work takes centre stage.  Inviting you to immerse yourself in a world of visual storytelling, with artwork for purchase available on-site.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="#contact" className="inline-block">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
                Request a Quote
              </button>
            </a>
          </div>
        </section>
        <section id="about" className="relative bg-black pb-20 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className=" flex flex-wrap items-center gap-6">
              <h2 className="text-7xl font-bold text-white xl:text-8xl" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>About Me</h2>
            </div>
            <div className="mt-24 md:mt-42">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-3">
                  <div className="overflow-hidden md:col-span-2 flex items-center">
                    <img src="/cover3.jpg" alt="unnamed duo photo" width="1500" height="1000" />
                  </div>
                  <div className="ml-auto flex items-center bg-white p-4 lg:p-8">
                    <div>
                      <p className="text-4xl lg:text-6xl font-light text-black">Illustrator & Acrylic Painter</p>
                      <hr className="border-black my-4" />
                      <p className="text-base lg:text-xl font-light text-black">
                        Hey! I’m Julie Jpeg, a Toronto-based Visual Artist. My journey began at the young age of 4 when I brought a pencil and piece of paper together at school. The creativity hasn’t stopped since. Inspired by pop culture, African culture, and landscape views, I bring my ideas to life one canvas at a time. Please join me as I invite you to experience the power of art through my lens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="relative bg-black pb-20 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex flex-wrap items-center gap-6">
              <h2 className="text-7xl font-bold text-white xl:text-8xl sm:mt-8 md:mt-16 lg:mt-24 xl:mt-0 2xl:mt-0" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Let's Work Together</h2>
            </div>
            <div className="mt-4">
              <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24">
                <div className="lg:col-span-2">
                <form action="https://formkeep.com/f/2abb9bf03da8" method="POST" className="mx-auto space-y-8 md:w-3/4">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                    <div>
                      <label htmlFor="firstname" className="tracking-wide text-white">Name</label>
                      <input type="text" id="firstname" name="firstname" autoComplete="given-name" placeholder="Your Name" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                    </div>

                  </div>
                  <div>
                    <label htmlFor="email" className="tracking-wide text-white">Email address</label>
                    <input type="email" id="email" name="email" autoComplete="email" placeholder="Your email address" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="message" className="tracking-wide text-white">Your message</label>
                    <textarea name="message" id="message" cols="30" rows="6" placeholder="Your message" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"></textarea>
                  </div>
                  <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-black">
                    <span className="relative uppercase tracking-wide text-black group-hover:text-white">Send message</span>
                  </button>
                </form>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative z-10 bg-black pb-0 pt-12 md:pb-0 md:pt-0 lg:pb-0 xl:pt-96">
  <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0">
    <div className="flex flex-wrap items-center gap-6">
      <h2 className="text-7xl font-bold text-white xl:text-8xl sm:mt-8 md:mt-16 lg:mt-24 xl:mt-0 2xl:mt-0" style={{ fontFamily: 'Marcellus, serif', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Reviews</h2>
    </div>
    <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24"></div>
    <ul className="bg-white relative overflow-hidden" id="testimonial-slideshow">
      {testimonials.map((testimonial, index) => {
        // Calculate the next index in the cycle
        const nextIndex = (currentTestimonialIndex + 1) % testimonials.length;

        // Determine the opacity based on whether it's the current or next testimonial
        const opacityClass =
          index === currentTestimonialIndex || index === nextIndex
            ? 'opacity-100'
            : 'opacity-0 hidden';

        // Calculate the height based on whether it's the current testimonial
        const heightStyle = index === currentTestimonialIndex ? { height: 'auto' } : { height: '0', overflow: 'hidden' };

        const renderStars = (count) => {
          const stars = [];
          for (let i = 0; i < count; i++) {
            stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
          }
          return stars;
        };

        return (
          <li
            key={index}
            style={{
              ...index === currentTestimonialIndex ? slideInStyle : slideOutStyle,
              ...heightStyle
            }}
            className={`py-8 text-left px-4 m-0 ${opacityClass}`}
          >
            {/* Testimonial content */}
            <div className="flex items-start">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle"
                src={testimonial.imageSrc}
                alt={testimonial.author}
              />
              <div className="ml-6">
              <div className="mt-2">{renderStars(testimonial.stars)}</div>
                <p className="mt-5 text-base text-gray-900">{testimonial.content}</p>
                <p className="mt-5 text-sm font-bold text-gray-900">{testimonial.author}</p>
                <p className="mt-1 text-sm text-gray-600">{testimonial.date}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  </div>
</section>


      </main>
      <footer className="relative bg-black pt-32 backdrop-opacity-0">
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
          <div>
            <div className="flex flex-wrap items-center gap-6">
              <h2 className="text-3xl text-white xl:text-6xl" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Instagram</h2>
              <a href="https://www.instagram.com/juulie.jpg/" target="_blank" className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">@juulie.jpg</a>
            </div>
            <div className="mt-12 grid grid-cols-3 md:mt-16 lg:mt-24">
              <a href="https://www.instagram.com/p/CUc-KEklghs/" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                <span className="sr-only">Instagram feed</span>
                <img className="transition duration-500" src="/ig1.jpg" alt="insta feed cover" width="2000" height="1333" />
              </a>
              <a href="https://www.instagram.com/p/CU8LaXAlNOr/?img_index=1" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                <span className="sr-only">Instagram feed</span>
                <img className="transition duration-500" src="/ig4.jpg" alt="insta feed cover" width="2000" height="1334" />
              </a>
              <a href="https://www.instagram.com/p/CdbkYJdJ4BJ/" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                <span className="sr-only">Instagram feed</span>
                <img className="transition duration-500" src="/ig3.jpg" alt="insta feed cover" width="1800" height="1200" />
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-16 lg:mt-24">
            <div className="space-y-8 md:space-y-12">
              <a href="/" className="text-2xl font-light tracking-widest text-white">
                <img className="h-8 w-auto brightness-200" src="/empresspaint.png" alt="logo mark" width="100" height="100" />
              </a>
              <div className="flex flex-wrap justify-between gap-3">
                <span className="text-sm text-white/50">&copy; Julie JPEG 2023.  All rights reserved.</span>
                <span className="text-sm text-white/50"><a href="https://www.pmdaybreak.com" className="text-white">PM Daybreak Designs</a> via Tailus in Lubumbashi </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></script>
    </div>
    </div>
  );
}
