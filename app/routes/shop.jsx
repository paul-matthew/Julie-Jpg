
import React, { useRef, useEffect, useState } from 'react';

import { useLoaderData } from "@remix-run/react";
import { getDataFromStrapi } from "~/api/get-data-from-strapi.server";
// import { baseUrl } from "~/api/get-data-from-strapi.server";

import Rellax from 'rellax';

console.log("test test test")

// const baseUrl = process.env.NODE_ENV === 'production'
//   ? "https://jules-frontend-dev.herokuapp.com"
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
  
  const mediumImage=`${baseUrl}${path_medImage}`;
  
 
 


  const ref = useRef();

  useEffect(() => {
    new Rellax(ref.current, {
      speed: -2,
      xsSpeed: 0,
      mobileSpeed: 0,
      tabletSpeed: 0,
    });
  }, []);
  if (index > 3) {
    return null; // Skip rendering for items after the fourth index
  }
  return (
<p>test</p>
  );
  
}

export default function ShopRoute() {
let { info } = useLoaderData();
const [products, setProducts] = useState([]);

useEffect(() => {
    const access_token = 'fhTjKPnEXGZMQP7v4oR0IRv7bFT2WD-Yz6WuqFLnqh8';

    fetch(`https://api.gumroad.com/v2/products?access_token=${access_token}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error('Error retrieving Gumroad products:', data.error);
        }
      })
      .catch(error => {
        console.error('Error fetching Gumroad products:', error);
      });
  }, []);

  return (
    <div className="bg-black">
      <link href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap" rel="stylesheet"/>
    <main className="background relative">
      <header className="fixed top-0 z-20 w-full">
        <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-light tracking-widest text-white -mt-10 ml-[-0.7rem]">
              <i className="fa fa-home fa-1x" aria-hidden="true"></i>
            </a>
            <div className="flex justify-end flex-1">
              <a href="/#work" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                <span className="relative">Portfolio</span>
              </a>
              <a href="/#services" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                <span className="relative">Services</span>
              </a>
              <a href="/#about" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                <span className="relative">About</span>
              </a>
              <a href="/#contact" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                <span className="relative">Contact</span>
              </a>
              <a href="#" className="mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10">
                <span className="relative">Shop</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section id="home" className="relative flex min-h-screen items-center">
          <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"></div>
          <picture>
            <source srcSet="/cover5-mobile.jpg" media="(max-width: 600px)"/>
            <source srcSet="/cover5desktop.jpg" media="(min-width: 601px)"/>
            <img src="/cover5desktop.jpg" alt="Julie Jpg main pic" className="fixed inset-0 h-full w-full object-cover"/>
          </picture>           
          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-0 lg:px-12 xl:px-6 2xl:px-0">
              <div className="pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12">
                  <h1 data-rellax-speed="-3" data-rellax-xs-speed="0" data-rellax-mobile-speed="0" className="rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight sm:mt-40 md:mt-66 lg:mt-54 xl:mt-0 2xl:mt-0"style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Art For Purchase<p style={{fontSize:'0.4em'}}>Coming Soon...</p></h1>
              </div>
          </div>
      </section>
      {/* <section id="work" className="relative bg-black pb-20 pt-32 md:pb-0 lg:pb-32 xl:pt-96 flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black px-2">
          {products.map(product => (
            <div key={product.id} className="p-4 border border-gray-300 rounded shadow-md bg-white">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{product.name}</h2>
              <div className="min-h-[8.25rem] overflow-hidden">
                <p className="mb-4 text-gray-600 line-clamp-3">{product.custom_summary}</p>
              </div>
              <img src={product.preview_url} alt={product.name} className="w-full h-[200px] object-cover rounded"/>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold text-gray-900">Price: {product.formatted_price}</p>
                <a href={product.short_url} className="text-blue-500 hover:underline">Purchase</a>
              </div>
            </div>
          ))}
        </div> 
      </section> */}
          {/* <div>
            <h2 className="text-3xl text-white xl:text-6xl" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>Conditions</h2>
          </div> */}
    </main>

    <footer className="relative bg-black pt-32 backdrop-opacity-0">
        <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0">
            <div>
                <div className="flex flex-wrap items-center gap-6">
                    <h2 className="text-3xl text-white xl:text-6xl">Instagram</h2>
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
                        <span className="text-sm text-white/50">&copy; Radiant 2021 - Present</span>
                        <span className="text-sm text-white/50"><a href="pmdaybreak.com" className="text-white">PM Daybreak Designs</a> via Tailus in Lubumbashi </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous"></script>
    </div>
  );
}



