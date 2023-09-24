import React, { useRef, useEffect, useState } from 'react';
import { useLoaderData } from "@remix-run/react";
import { getDataFromStrapi } from "~/api/get-data-from-strapi.server";
import { Link } from "react-router-dom";

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

function ArtCard({ data, index }) {
  const path_medImage = data.attributes.ArtImage.data.attributes.formats.medium.url;

  const mediumImage = `${path_medImage}`;

  const ref = useRef();

  useEffect(() => {

  }, []);
  if (index > 30) {
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
        <span className="h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white">
          {data.attributes.Date}
        </span>
      </div>
    </a>
  );

}

export default function HomeRoute() {

  const { info } = useLoaderData();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 30;
  const sectionRef = useRef(null);

  const displayedItems = info.slice(startIndex, startIndex + itemsPerPage);

  const isFirstPage = startIndex === 0;
  const isLastPage = startIndex + itemsPerPage >= info.length;

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
        <header className="fixed top-0 z-20 w-full">
          <nav className="2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-light tracking-widest text-white -mt-10 ml-[-0.7rem]">
                <i className="fa fa-home fa-1x" aria-hidden="true"></i>
              </a>
            </div>
          </nav>
        </header>
        <section ref={sectionRef} id="work" className="relative bg-black pb-20 pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0">
            <div
              className="flex flex-wrap items-center gap-6"
            >
              <h2 className="text-7xl font-bold text-white xl:text-8xl" style={{fontFamily: 'Marcellus, serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
                Full Portfolio
              </h2>
              <span className="h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white">
                {info.length} Projects
              </span>
            </div>
            <div className="relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-32 lg:mt-40">
              {displayedItems.map((item, index) => (
                <ArtCard key={item.id} data={item} index={index} />
              ))}
            </div>
          </div>
        </section>
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
