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

export const meta = () => ({
  charset: "utf-8",
  title: "JULIE-JPG",
  viewport: "width=device-width,initial-scale=1",
  meta: [
    {
      name: "description",
      content: "Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches.",
    },
    {
      property: "og:title",
      content: "Professional portfolio of JULIE-JPG Artwork",
    },
    {
      property: "og:description",
      content: "Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches.",
    },
    {
      property: "og:image",
      content: `https://res.cloudinary.com/dc5ohptw5/image/upload/c_scale,w_303/v1690584219/coverintro-mobile_rgdxr4.jpg`,
    },
  ],
});


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