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

  return (
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
                <p className="mb-0 text-lg font-light text-white sm:text-2xl xl:leading-normal">Original & custom artwork</p>
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
                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l">Offering personalized and captivating artwork commissions, my service brings your creative vision to life, ensuring a unique and meaningful piece tailored exclusively for you.</p>
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
                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l"> I offer a captivating and interactive experience where art comes to life before your eyes, adding a touch of creativity and excitement to any occasion.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="group border-b border-white/30 pb-8">
                      <div className="flex flex-col gap-4 divide-y divide-white/30">
                        <h3 className="bg-black pt-6 text-3xl text-white">Exhibits</h3>
                      </div>
                      <div className="mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8">
                        <p className="max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l">Discover a captivating showcase of my artistic creations in the 'Exhibit' section, where my work takes center stage, inviting you to immerse yourself in a world of visual storytelling and creative expression.</p>
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
                        Hey! I’m Julie Jpeg, a Toronto-based Visual Artist. My journey began at the young age of 4 when I brought a pencil and piece of paper together at school. The creativity hasn’t stopped since. Inspired by pop culture, black culture, and landscape views, I bring my ideas to life one canvas at a time. Please join me as I invite you to experience the power of art through my lens.
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
                <form action="https://formsubmit.co/julestheartist@juliejpeg.com" method="POST" className="mx-auto space-y-8 md:w-3/4">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-4">
                    <div>
                      <label htmlFor="firstname" className="tracking-wide text-white">First name</label>
                      <input type="text" id="firstname" name="firstname" autoComplete="given-name" placeholder="Your first name" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="tracking-wide text-white">Last name</label>
                      <input type="text" id="lastname" name="lastname" autoComplete="family-name" placeholder="Your last name" className="mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary" />
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
                  <button type="submit" className="group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary">
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
              <h2 className="text-7xl font-bold text-white xl:text-8xl sm:mt-8 md:mt-16 lg:mt-24 xl:mt-0 2xl:mt-0" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Reviews</h2>
            </div>
            <div className="grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24"></div>
          <ul className="bg-white">
            <li className="py-8 text-left border px-4 m-0">
              <div className="flex items-start">
                <img className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle" src="./dog.jpg" alt="" />
                <div className="ml-6">
                  <div className="flex items-center">
                    <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-6 w-6 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                  </div>
                  <p className="mt-5 text-base text-gray-900">Thank you to Julie for the beautiful piece created for my Friend. I asked for Julie to sketch a piece of my Friends dog who passed away, upon gifting her the completed piece she was in tears. The detail represented Jaspar so well, and is now placed on the wall for the Family to see, and remember the moments they had. Truly a masterpiece.</p>
                  <p className="mt-5 text-sm font-bold text-gray-900">Anonymous</p>
                  <p className="mt-1 text-sm text-gray-600">Sept 17, 2023</p>
                </div>
              </div>
            </li>
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
              <a href="https://www.instagram.com/p/CNst7BmBp63/" target="_blank" className="relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0">
                <span className="sr-only">Instagram feed</span>
                <img className="transition duration-500" src="/ig2.jpg" alt="insta feed cover" width="2000" height="1334" />
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
  );
}
