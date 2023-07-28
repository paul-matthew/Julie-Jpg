import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getEnv } from "../env.server";
import styles from "./styles/app.css"

// export const meta = () => ({
//   charset: "utf-8",
//   title: "JULIE-JPG",
//   viewport: "width=device-width,initial-scale=1",
//   meta: [
//     {
//       name: "description",
//       content: "Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches.",
//     },
//     {
//       property: "og:title",
//       content: "Professional portfolio of JULIE-JPG Artwork",
//     },
//     {
//       property: "og:description",
//       content: "Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches.",
//     },
//     {
//       property: "og:image",
//       content: `https:///res-console.cloudinary.com/dc5ohptw5/thumbnails/transform/v1/image/upload/v1690582523/https:///res-console.cloudinary.com/dc5ohptw5/thumbnails/transform/v1/image/upload/Y19zY2FsZSxoXzMyOCx3XzMyOA==/v1690582523/Y292ZXJpbnRyby1tb2JpbGVfcmdkeHI0/template_primary`,
//     },
//   ],
// });

module.exports = {
  siteMetadata: {
    siteTitle: `Professional portfolio of JULIE-JPG Artwork`,
    siteTitleAlt: `Professional portfolio of JULIE-JPG Artwork`,
    siteHeadline: `JULIE JPG`,
    siteUrl: `https://julie-jpg.netlify.app/`,
    siteDescription: `Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches.`,
    siteImage: `/cover-og.jpg`,
    siteLanguage: `en`,
    author: `JULIE JPG`,
  },
}

export function loader() {
  return json({
    ENV: getEnv()
  })
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

/* 
  cupcake 
  dracula
  halloween
*/

export default function App() {
  const data = useLoaderData()
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>

      <body className="h-full">
        <Outlet />
        <ScrollRestoration />

        <Scripts />
        <script dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(data.ENV)}`
        }} />

        <LiveReload />
      </body>
    </html>
  );
}