var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// empty-module:./routes/index.client.jsx
var require_index_client = __commonJS({
  "empty-module:./routes/index.client.jsx"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");

// env.server.ts
init_react();
function getEnv() {
  return {
    BASE_URL: process.env.BASE_URL
  };
}

// app/entry.server.jsx
global.ENV = getEnv();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_node = require("@remix-run/node"), import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-WJBJSYIG.css";

// app/root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "JULIE-JPG",
  viewport: "width=device-width,initial-scale=1",
  meta: [
    {
      name: "description",
      content: "Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches."
    },
    {
      property: "og:title",
      content: "Professional portfolio of JULIE-JPG Artwork"
    },
    {
      property: "og:description",
      content: "Professional portfolio for Julie-Jpg related to her artwork.  Services include art comission, live painting events and hand drawn sketches."
    },
    {
      property: "og:image",
      content: "https://res.cloudinary.com/dc5ohptw5/image/upload/c_scale,w_303/v1690584219/coverintro-mobile_rgdxr4.jpg"
    }
  ]
});
function loader() {
  return (0, import_node.json)({
    ENV: getEnv()
  });
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.ENV = ${JSON.stringify(data.ENV)}`
    }
  }), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// app/routes/fullportfolio.jsx
var fullportfolio_exports = {};
__export(fullportfolio_exports, {
  default: () => HomeRoute,
  loader: () => loader2
});
init_react();
var import_react3 = __toESM(require("react")), import_react4 = require("@remix-run/react");

// app/api/get-data-from-strapi.server.js
init_react();
async function getDataFromStrapi(path, query) {
  try {
    let baseUrl4, apiToken;
    baseUrl4 = "http://127.0.0.1:1337", apiToken = "ef17f73a62fa3256dcabba3f5dc9215c2d6dab18986b49c841286aa1186e183a45c8743af6f8f203acafcb290731d8d8aa70d753f22c40b727faf1cafa5be35c94c78884919175ed4e234b82057db9392d471d8cd72fbcdaa6266e8fa2a6dd3c7727cead41e656f063bd86dd25cab091b0db486924b94c3f455c32651fb07f14", console.log("This is a local build yo");
    let url = `${baseUrl4}/api/${path}?${query}`, response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiToken}`
      }
    });
    if (!response.ok)
      throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    throw console.error(error), new Error("Error fetching data from Strapi");
  }
}

// app/routes/fullportfolio.jsx
var import_react_router_dom = require("react-router-dom"), baseUrl = "https://julie-00182f9df30d.herokuapp.com";
baseUrl = "http://127.0.0.1:1337", console.log("This is a local build");
async function loader2() {
  let data = (await getDataFromStrapi("art-collections/", "populate=*")).data;
  return Array.isArray(data) || (data = [data]), data.sort((a, b) => {
    let dateA = new Date(a.attributes.Date);
    return new Date(b.attributes.Date) - dateA;
  }), console.log(data), { info: data };
}
function ArtCard({ data, index }) {
  let mediumImage = `${data.attributes.ArtImage.data.attributes.formats.medium.url}`, ref = (0, import_react3.useRef)();
  return (0, import_react3.useEffect)(() => {
  }, []), index > 30 ? null : /* @__PURE__ */ import_react3.default.createElement("a", {
    className: "group col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    style: { width: "100%", height: "100%", overflow: "hidden" },
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "transition duration-500",
    src: mediumImage,
    alt: data.attributes.Title,
    style: { width: "100%", height: "100%", objectFit: "cover" }
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex items-center justify-between p-4"
  }, /* @__PURE__ */ import_react3.default.createElement("h3", {
    className: "text-2xl font-normal text-white"
  }, data.attributes.Title), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white"
  }, data.attributes.Date)));
}
function HomeRoute() {
  let { info } = (0, import_react4.useLoaderData)(), [startIndex, setStartIndex] = (0, import_react3.useState)(0), itemsPerPage = 30, sectionRef = (0, import_react3.useRef)(null), displayedItems = info.slice(startIndex, startIndex + itemsPerPage), isFirstPage = startIndex === 0, isLastPage = startIndex + itemsPerPage >= info.length;
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-black"
  }, /* @__PURE__ */ import_react3.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react3.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react3.default.createElement("main", {
    className: "background relative"
  }, /* @__PURE__ */ import_react3.default.createElement("header", {
    className: "fixed top-0 z-20 w-full"
  }, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white -mt-10 ml-[-0.7rem]"
  }, /* @__PURE__ */ import_react3.default.createElement("i", {
    className: "fa fa-home fa-1x",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ import_react3.default.createElement("section", {
    ref: sectionRef,
    id: "work",
    className: "relative bg-black pb-20 pt-12"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "Full Portfolio"), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, info.length, " Projects")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-32 lg:mt-40"
  }, displayedItems.map((item, index) => /* @__PURE__ */ import_react3.default.createElement(ArtCard, {
    key: item.id,
    data: item,
    index
  })))))), /* @__PURE__ */ import_react3.default.createElement("footer", {
    className: "relative bg-black pt-32 backdrop-opacity-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-3xl text-white xl:text-6xl"
  }, "Instagram"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://www.instagram.com/juulie.jpg/",
    target: "_blank",
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "@juulie.jpg")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-12 grid grid-cols-3 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://www.instagram.com/p/CUc-KEklghs/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig1.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1333"
  })), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://www.instagram.com/p/CNst7BmBp63/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig2.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1334"
  })), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://www.instagram.com/p/CdbkYJdJ4BJ/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig3.jpg",
    alt: "insta feed cover",
    width: "1800",
    height: "1200"
  })))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-12 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "space-y-8 md:space-y-12"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    className: "h-8 w-auto brightness-200",
    src: "/empresspaint.png",
    alt: "logo mark",
    width: "100",
    height: "100"
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-wrap justify-between gap-3"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "text-sm text-white/50"
  }, "\xA9 Julie JPEG 2023.  All rights reserved."), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "text-sm text-white/50"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://www.pmdaybreak.com",
    className: "text-white"
  }, "PM Daybreak Designs"), " via Tailus in Lubumbashi ")))))), /* @__PURE__ */ import_react3.default.createElement("script", {
    src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
    crossOrigin: "anonymous"
  }));
}

// server-entry-module:@remix-run/dev/server-build
var route2 = __toESM(require_index_client());

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => HomeRoute2,
  loader: () => loader3
});
init_react();
var import_react5 = __toESM(require("react")), import_react6 = require("@remix-run/react");
var import_react_router_dom2 = require("react-router-dom"), baseUrl2 = "https://julie-00182f9df30d.herokuapp.com";
baseUrl2 = "http://127.0.0.1:1337", console.log("This is a local build");
async function loader3() {
  let data = (await getDataFromStrapi("art-collections/", "populate=*")).data;
  return Array.isArray(data) || (data = [data]), data.sort((a, b) => {
    let dateA = new Date(a.attributes.Date);
    return new Date(b.attributes.Date) - dateA;
  }), console.log(data), { info: data };
}
function ArtCard2({ data, index }) {
  let mediumImage = `${data.attributes.ArtImage.data.attributes.formats.medium.url}`, ref = (0, import_react5.useRef)();
  return (0, import_react5.useEffect)(() => {
  }, []), index > 3 ? null : /* @__PURE__ */ import_react5.default.createElement("a", {
    className: "group col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    style: { width: "100%", height: "100%", overflow: "hidden" },
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "transition duration-500",
    src: mediumImage,
    alt: data.attributes.Title,
    style: { width: "100%", height: "100%", objectFit: "cover" }
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex items-center justify-between p-4"
  }, /* @__PURE__ */ import_react5.default.createElement("h3", {
    className: "text-2xl font-normal text-white"
  }, data.attributes.Title), /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "h-max rounded-full px-2 py-1 text-xs tracking-wider text-white flex justify-end",
    style: { fontSize: "0.1em", width: "115px" }
  }, data.attributes.Date)));
}
function HomeRoute2() {
  let { info } = (0, import_react6.useLoaderData)(), [startIndex, setStartIndex] = (0, import_react5.useState)(0), itemsPerPage = 4, sectionRef = (0, import_react5.useRef)(null), handlePrevious = () => {
    startIndex - itemsPerPage >= 0 && (setStartIndex(startIndex - itemsPerPage), scrollToSection());
  }, handleNext = () => {
    startIndex + itemsPerPage < info.length && (setStartIndex(startIndex + itemsPerPage), scrollToSection());
  }, scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, displayedItems = info.slice(startIndex, startIndex + itemsPerPage), isFirstPage = startIndex === 0, isLastPage = startIndex + itemsPerPage >= info.length;
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "bg-black"
  }, /* @__PURE__ */ import_react5.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react5.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react5.default.createElement("main", {
    className: "background relative"
  }, /* @__PURE__ */ import_react5.default.createElement("header", {
    className: "fixed top-0 z-20 w-full mt-0"
  }, /* @__PURE__ */ import_react5.default.createElement("nav", {
    className: "2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white -mt-10 ml-[-0.7rem]"
  }, /* @__PURE__ */ import_react5.default.createElement("i", {
    className: "fa fa-home fa-1x",
    "aria-hidden": "true"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex justify-end flex-1"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "#work",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative"
  }, "Portfolio")), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "#services",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative"
  }, "Services")), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "#about",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative"
  }, "About")), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "#contact",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative"
  }, "Contact")), /* @__PURE__ */ import_react5.default.createElement(import_react_router_dom2.Link, {
    to: "/shop",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative"
  }, "Shop")))))), /* @__PURE__ */ import_react5.default.createElement("section", {
    id: "home",
    className: "relative flex min-h-screen items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"
  }), /* @__PURE__ */ import_react5.default.createElement("picture", null, /* @__PURE__ */ import_react5.default.createElement("source", {
    srcSet: "/coverintro-mobile.jpg",
    media: "(max-width: 600px)"
  }), /* @__PURE__ */ import_react5.default.createElement("source", {
    srcSet: "/coverintro-desktop.jpg",
    media: "(min-width: 601px)"
  }), /* @__PURE__ */ import_react5.default.createElement("img", {
    src: "/cover2desktop.jpg",
    alt: "Julie Jpeg main pic",
    className: "fixed inset-0 h-full w-full object-cover"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "relative z-10 mx-auto max-w-7xl px-6 pt-1 lg:pt-7 xl:px-10 xl:mb-0 2xl:px-0 mt-[-36rem] lg:mt-[-33rem]",
    style: { border: "hidden", marginLeft: "0rem" }
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "pb-2 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-0"
  }, /* @__PURE__ */ import_react5.default.createElement("h1", {
    className: "text-6xl font-bold text-white sm:text-6xl md:text-8xl xl:leading-tight mt-40 md:mt-80 lg:mt-60 xl:mt-20 2xl:mt-20",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "JULIE JPEG", /* @__PURE__ */ import_react5.default.createElement("span", {
    style: { fontSize: "0.5em", verticalAlign: "super" }
  }, String.fromCharCode(8482)))), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "md:w-1/3 md:pt-2 lg:w-1/2"
  }, /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "mb-0 text-lg font-light text-white sm:text-2xl xl:leading-normal"
  }, "Original & custom artwork"), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "#work",
    className: "relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative"
  }, "See my work")))))), /* @__PURE__ */ import_react5.default.createElement("section", {
    ref: sectionRef,
    id: "work",
    className: "relative bg-black pb-20 pt-12"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-36 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "My Work"), /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, info.length, " Projects")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-32 lg:mt-30"
  }, displayedItems.map((item, index) => /* @__PURE__ */ import_react5.default.createElement(ArtCard2, {
    key: item.id,
    data: item,
    index
  })))), info.length > itemsPerPage && /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex justify-center mt-0 space-x-4"
  }, !isFirstPage && /* @__PURE__ */ import_react5.default.createElement("button", {
    className: "text-white text-3xl underline",
    onClick: handlePrevious
  }, "Previous"), !isLastPage && /* @__PURE__ */ import_react5.default.createElement("a", {
    className: "text-white text-3xl underline hover:text-blue-500 mt-20",
    href: "/fullportfolio"
  }, "Browse Portfolio"))), /* @__PURE__ */ import_react5.default.createElement("section", {
    id: "services",
    className: "relative bg-black pb-60 pt-12"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "My Services")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-24"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid gap-12 sm:grid-cols-2 xl:grid-cols-3"
  }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react5.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Commissions")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l"
  }, "Offering personalized and captivating artwork commissions, my service brings your creative vision to life, ensuring a unique and meaningful piece tailored exclusively for you.")))), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react5.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Live Painting")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l"
  }, " I offer a captivating and interactive experience where art comes to life before your eyes, adding a touch of creativity and excitement to any occasion.")))), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react5.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Exhibits")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-l"
  }, "Discover a captivating showcase of my artistic creations in the 'Exhibit' section, where my work takes center stage, inviting you to immerse yourself in a world of visual storytelling and creative expression.")))))))), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "text-center mt-8"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "#contact",
    className: "inline-block"
  }, /* @__PURE__ */ import_react5.default.createElement("button", {
    className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105"
  }, "Request a Quote")))), /* @__PURE__ */ import_react5.default.createElement("section", {
    id: "about",
    className: "relative bg-black pb-20 pt-12"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: " flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "About Me")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-24 md:mt-42"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid md:grid-cols-3"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "overflow-hidden md:col-span-2 flex items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    src: "/cover3.jpg",
    alt: "unnamed duo photo",
    width: "1500",
    height: "1000"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "ml-auto flex items-center bg-white p-4 lg:p-8"
  }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "text-4xl lg:text-6xl font-light text-black"
  }, "Illustrator & Acrylic Painter"), /* @__PURE__ */ import_react5.default.createElement("hr", {
    className: "border-black my-4"
  }), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "text-base lg:text-xl font-light text-black"
  }, "Hey! I\u2019m Julie Jpeg, a Toronto-based Visual Artist. My journey began at the young age of 4 when I brought a pencil and piece of paper together at school. The creativity hasn\u2019t stopped since. Inspired by pop culture, black culture, and landscape views, I bring my ideas to life one canvas at a time. Please join me as I invite you to experience the power of art through my lens.")))))))), /* @__PURE__ */ import_react5.default.createElement("section", {
    id: "contact",
    className: "relative bg-black pb-20 pt-12"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl sm:mt-8 md:mt-16 lg:mt-24 xl:mt-0 2xl:mt-0",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "Let's Work Together")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "lg:col-span-2"
  }, /* @__PURE__ */ import_react5.default.createElement("form", {
    action: "https://formsubmit.co/julestheartist@juliejpeg.com",
    method: "POST",
    className: "mx-auto space-y-8 md:w-3/4"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid gap-8 sm:grid-cols-2 sm:gap-4"
  }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "firstname",
    className: "tracking-wide text-white"
  }, "First name"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    id: "firstname",
    name: "firstname",
    autoComplete: "given-name",
    placeholder: "Your first name",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "lastname",
    className: "tracking-wide text-white"
  }, "Last name"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "text",
    id: "lastname",
    name: "lastname",
    autoComplete: "family-name",
    placeholder: "Your last name",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  }))), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "email",
    className: "tracking-wide text-white"
  }, "Email address"), /* @__PURE__ */ import_react5.default.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    autoComplete: "email",
    placeholder: "Your email address",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("label", {
    htmlFor: "message",
    className: "tracking-wide text-white"
  }, "Your message"), /* @__PURE__ */ import_react5.default.createElement("textarea", {
    name: "message",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Your message",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react5.default.createElement("button", {
    type: "submit",
    className: "group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "relative uppercase tracking-wide text-black group-hover:text-white"
  }, "Send message")))))))), /* @__PURE__ */ import_react5.default.createElement("section", {
    className: "relative z-10 bg-black pb-0 pt-12 md:pb-0 md:pt-0 lg:pb-0 xl:pt-96"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl sm:mt-8 md:mt-16 lg:mt-24 xl:mt-0 2xl:mt-0",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "Reviews")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24"
  }), /* @__PURE__ */ import_react5.default.createElement("ul", {
    className: "bg-white"
  }, /* @__PURE__ */ import_react5.default.createElement("li", {
    className: "py-8 text-left border px-4 m-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex items-start"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "block h-10 w-10 max-w-full flex-shrink-0 rounded-full align-middle",
    src: "./dog.jpg",
    alt: ""
  }), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "ml-6"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react5.default.createElement("svg", {
    className: "block h-6 w-6 align-middle text-yellow-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    className: ""
  })), /* @__PURE__ */ import_react5.default.createElement("svg", {
    className: "block h-6 w-6 align-middle text-yellow-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    className: ""
  })), /* @__PURE__ */ import_react5.default.createElement("svg", {
    className: "block h-6 w-6 align-middle text-yellow-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    className: ""
  })), /* @__PURE__ */ import_react5.default.createElement("svg", {
    className: "block h-6 w-6 align-middle text-yellow-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    className: ""
  })), /* @__PURE__ */ import_react5.default.createElement("svg", {
    className: "block h-6 w-6 align-middle text-yellow-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ import_react5.default.createElement("path", {
    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
    className: ""
  }))), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "mt-5 text-base text-gray-900"
  }, "Thank you to Julie for the beautiful piece created for my Friend. I asked for Julie to sketch a piece of my Friends dog who passed away, upon gifting her the completed piece she was in tears. The detail represented Jaspar so well, and is now placed on the wall for the Family to see, and remember the moments they had. Truly a masterpiece."), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "mt-5 text-sm font-bold text-gray-900"
  }, "Anonymous"), /* @__PURE__ */ import_react5.default.createElement("p", {
    className: "mt-1 text-sm text-gray-600"
  }, "Sept 17, 2023")))))))), /* @__PURE__ */ import_react5.default.createElement("footer", {
    className: "relative bg-black pt-32 backdrop-opacity-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react5.default.createElement("div", null, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react5.default.createElement("h2", {
    className: "text-3xl text-white xl:text-6xl",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "Instagram"), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://www.instagram.com/juulie.jpg/",
    target: "_blank",
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "@juulie.jpg")), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-12 grid grid-cols-3 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://www.instagram.com/p/CUc-KEklghs/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig1.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1333"
  })), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://www.instagram.com/p/CNst7BmBp63/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig2.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1334"
  })), /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://www.instagram.com/p/CdbkYJdJ4BJ/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig3.jpg",
    alt: "insta feed cover",
    width: "1800",
    height: "1200"
  })))), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "mt-12 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "space-y-8 md:space-y-12"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white"
  }, /* @__PURE__ */ import_react5.default.createElement("img", {
    className: "h-8 w-auto brightness-200",
    src: "/empresspaint.png",
    alt: "logo mark",
    width: "100",
    height: "100"
  })), /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "flex flex-wrap justify-between gap-3"
  }, /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "text-sm text-white/50"
  }, "\xA9 Julie JPEG 2023.  All rights reserved."), /* @__PURE__ */ import_react5.default.createElement("span", {
    className: "text-sm text-white/50"
  }, /* @__PURE__ */ import_react5.default.createElement("a", {
    href: "https://www.pmdaybreak.com",
    className: "text-white"
  }, "PM Daybreak Designs"), " via Tailus in Lubumbashi ")))))), /* @__PURE__ */ import_react5.default.createElement("script", {
    src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
    crossOrigin: "anonymous"
  }));
}

// app/routes/shop.jsx
var shop_exports = {};
__export(shop_exports, {
  default: () => ShopRoute,
  loader: () => loader4
});
init_react();
var import_react7 = __toESM(require("react")), import_react8 = require("@remix-run/react");
var import_rellax = __toESM(require("rellax"));
console.log("test test test");
var baseUrl3 = "https://julie-00182f9df30d.herokuapp.com";
baseUrl3 = "http://127.0.0.1:1337", console.log("This is a local build");
async function loader4() {
  let data = (await getDataFromStrapi("art-collections/", "populate=*")).data;
  return Array.isArray(data) || (data = [data]), data.sort((a, b) => {
    let dateA = new Date(a.attributes.Date);
    return new Date(b.attributes.Date) - dateA;
  }), console.log(data), { info: data };
}
function ShopRoute() {
  let { info } = (0, import_react8.useLoaderData)(), [products, setProducts] = (0, import_react7.useState)([]);
  return (0, import_react7.useEffect)(() => {
    fetch("https://api.gumroad.com/v2/products?access_token=fhTjKPnEXGZMQP7v4oR0IRv7bFT2WD-Yz6WuqFLnqh8").then((response) => response.json()).then((data) => {
      data.success ? setProducts(data.products) : console.error("Error retrieving Gumroad products:", data.error);
    }).catch((error) => {
      console.error("Error fetching Gumroad products:", error);
    });
  }, []), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "bg-black"
  }, /* @__PURE__ */ import_react7.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react7.default.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Marcellus&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ import_react7.default.createElement("main", {
    className: "background relative"
  }, /* @__PURE__ */ import_react7.default.createElement("header", {
    className: "fixed top-0 z-20 w-full"
  }, /* @__PURE__ */ import_react7.default.createElement("nav", {
    className: "2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white -mt-10 ml-[-0.7rem]"
  }, /* @__PURE__ */ import_react7.default.createElement("i", {
    className: "fa fa-home fa-1x",
    "aria-hidden": "true"
  })), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex justify-end flex-1"
  }, /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "/#work",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "relative"
  }, "Portfolio")), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "/#services",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "relative"
  }, "Services")), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "/#about",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "relative"
  }, "About")), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "/#contact",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "relative"
  }, "Contact")), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "#",
    className: "mr-[0.5rem] relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10 -mt-10"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "relative"
  }, "Shop")))))), /* @__PURE__ */ import_react7.default.createElement("section", {
    id: "home",
    className: "relative flex min-h-screen items-center"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"
  }), /* @__PURE__ */ import_react7.default.createElement("picture", null, /* @__PURE__ */ import_react7.default.createElement("source", {
    srcSet: "/cover5-mobile.jpg",
    media: "(max-width: 600px)"
  }), /* @__PURE__ */ import_react7.default.createElement("source", {
    srcSet: "/cover5desktop.jpg",
    media: "(min-width: 601px)"
  }), /* @__PURE__ */ import_react7.default.createElement("img", {
    src: "/cover5desktop.jpg",
    alt: "Julie Jpg main pic",
    className: "fixed inset-0 h-full w-full object-cover"
  })), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "relative z-10 mx-auto max-w-7xl px-6 pt-0 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12"
  }, /* @__PURE__ */ import_react7.default.createElement("h1", {
    "data-rellax-speed": "-3",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax text-6xl text-white sm:text-8xl md:text-9xl xl:leading-tight sm:mt-40 md:mt-66 lg:mt-54 xl:mt-0 2xl:mt-0",
    style: { fontFamily: "Marcellus, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }
  }, "Art For Purchase", /* @__PURE__ */ import_react7.default.createElement("p", {
    style: { fontSize: "0.4em" }
  }, "Coming Soon...")))))), /* @__PURE__ */ import_react7.default.createElement("footer", {
    className: "relative bg-black pt-32 backdrop-opacity-0"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react7.default.createElement("h2", {
    className: "text-3xl text-white xl:text-6xl"
  }, "Instagram"), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "https://www.instagram.com/juulie.jpg/",
    target: "_blank",
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "@juulie.jpg")), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "mt-12 grid grid-cols-3 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "https://www.instagram.com/p/CUc-KEklghs/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react7.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig1.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1333"
  })), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "https://www.instagram.com/p/CNst7BmBp63/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react7.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig2.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1334"
  })), /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "https://www.instagram.com/p/CdbkYJdJ4BJ/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react7.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig3.jpg",
    alt: "insta feed cover",
    width: "1800",
    height: "1200"
  })))), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "mt-12 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "space-y-8 md:space-y-12"
  }, /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white"
  }, /* @__PURE__ */ import_react7.default.createElement("img", {
    className: "h-8 w-auto brightness-200",
    src: "/empresspaint.png",
    alt: "logo mark",
    width: "100",
    height: "100"
  })), /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "flex flex-wrap justify-between gap-3"
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "text-sm text-white/50"
  }, "\xA9 Julie JPEG 2023.  All rights reserved."), /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "text-sm text-white/50"
  }, /* @__PURE__ */ import_react7.default.createElement("a", {
    href: "pmdaybreak.com",
    className: "text-white"
  }, "PM Daybreak Designs"), " via Tailus in Lubumbashi ")))))), /* @__PURE__ */ import_react7.default.createElement("script", {
    src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
    crossOrigin: "anonymous"
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "f2be8eb0", entry: { module: "/build/entry.client-HR2D2GYH.js", imports: ["/build/_shared/chunk-VLWZG3OR.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-26AUFPPZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/fullportfolio": { id: "routes/fullportfolio", parentId: "root", path: "fullportfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/fullportfolio-VVQPLDUX.js", imports: ["/build/_shared/chunk-WGKF5EQU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WVZLLZNW.js", imports: ["/build/_shared/chunk-WGKF5EQU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index.client": { id: "routes/index.client", parentId: "root", path: "client", index: void 0, caseSensitive: void 0, module: "/build/routes/index.client-U24MRD5E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/shop": { id: "routes/shop", parentId: "root", path: "shop", index: void 0, caseSensitive: void 0, module: "/build/routes/shop-4D2QOY7M.js", imports: ["/build/_shared/chunk-WGKF5EQU.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F2BE8EB0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/fullportfolio": {
    id: "routes/fullportfolio",
    parentId: "root",
    path: "fullportfolio",
    index: void 0,
    caseSensitive: void 0,
    module: fullportfolio_exports
  },
  "routes/index.client": {
    id: "routes/index.client",
    parentId: "root",
    path: "client",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/shop": {
    id: "routes/shop",
    parentId: "root",
    path: "shop",
    index: void 0,
    caseSensitive: void 0,
    module: shop_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
