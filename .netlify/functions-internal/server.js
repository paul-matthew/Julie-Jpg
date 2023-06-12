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
var app_default = "/build/_assets/app-22V7QOO6.css";

// app/root.jsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
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

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_index_client());

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => HomeRoute,
  loader: () => loader2
});
init_react();
var import_react3 = __toESM(require("react")), import_react4 = require("@remix-run/react");

// app/api/get-data-from-strapi.server.js
init_react();
async function getDataFromStrapi(path, query) {
  let baseUrl2 = process.env.BASE_URL, url = `${process.env.BASE_URL}/api/${path}?${query}`;
  console.log(url), console.log("po");
  try {
    let response = await fetch(url, {
      headers: {
        Authorization: "Bearer 8d6bc6426e15cd3f2258c808296c55de0a56f144520131471d3821ba329a6a0aecfeb1c25280c7c51812c5f9a11cfbbefe804434e22f186266aee12f990d45467e8f9f139f700760e0bc0d9512eaa30d3c7a7f26296d9cf9ef9db9b571d6f307c3a05a2080c13ac74b44cbab9a02d5169ee68ccfd3547a711a5953c5c2f81c8e"
      }
    });
    if (!response.ok)
      throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    throw console.error(error), new Error("Error fetching data from Strapi");
  }
}
var baseUrl = process.env.BASE_URL;

// app/routes/index.jsx
var import_rellax = __toESM(require("rellax"));
async function loader2() {
  let data = (await getDataFromStrapi("art-collections/", "populate=*")).data;
  return Array.isArray(data) ? { info: data } : { info: [data] };
}
function ArtCard({ data }) {
  let path_medImage = data.attributes.ArtImage.data.attributes.formats.medium.url, mediumImage = `${baseUrl}${path_medImage}`;
  console.log(mediumImage);
  let ref = (0, import_react3.useRef)();
  return (0, import_react3.useEffect)(() => {
    new import_rellax.default(ref.current, {
      speed: -2,
      xsSpeed: 0,
      mobileSpeed: 0,
      tabletSpeed: 0
    });
  }, []), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/pages/project.html",
    "data-rellax-speed": "-2",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    "data-rellax-tablet-speed": "0",
    className: "rellax group col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    style: { width: "100%", height: "100%", overflow: "hidden" },
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex items-center justify-between p-4"
  }, /* @__PURE__ */ import_react3.default.createElement("h3", {
    className: "text-2xl font-normal text-white"
  }, data.attributes.Title), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white"
  }, data.attributes.Date)));
}
function HomeRoute() {
  let { info } = (0, import_react4.useLoaderData)();
  return console.log("fet"), console.log(info), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-black"
  }, /* @__PURE__ */ import_react3.default.createElement("main", {
    className: "background relative"
  }, /* @__PURE__ */ import_react3.default.createElement("header", {
    className: "fixed top-0 z-20 w-full"
  }, /* @__PURE__ */ import_react3.default.createElement("nav", {
    className: "2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white"
  }, "JULIE JPG"), /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#contact",
    className: "relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "relative"
  }, "Get in touch"))))), /* @__PURE__ */ import_react3.default.createElement("section", {
    id: "home",
    className: "relative flex min-h-screen items-center"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"
  }), /* @__PURE__ */ import_react3.default.createElement("img", {
    src: "/cover2.jpg",
    className: "fixed inset-0 h-full w-full object-cover",
    alt: "woman in dark",
    width: "4160",
    height: "6240"
  }), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12"
  }, /* @__PURE__ */ import_react3.default.createElement("h1", {
    "data-rellax-speed": "-3",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight"
  }, "Julie Jpg")), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "ml-auto md:w-2/3 md:pt-12 lg:w-1/2"
  }, /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal"
  }, "On an endless journey to create experiences that inspire others. Always motived by design that's honest, aesthetic and natural. Probably the only designer you\u2019ll ever need."), /* @__PURE__ */ import_react3.default.createElement("a", {
    "data-rellax-speed": "1",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    href: "#work",
    className: "rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "relative"
  }, "See my work")))), /* @__PURE__ */ import_react3.default.createElement("div", {
    "data-rellax-speed": "-5",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "text-xs font-light uppercase tracking-widest text-white"
  }, "Follow me"), /* @__PURE__ */ import_react3.default.createElement("ul", {
    className: "relative z-20 mt-4 space-y-2 text-sm font-light text-white"
  }, /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "https://www.instagram.com/juulie.jpg/",
    "aria-label": "Instagram"
  }, /* @__PURE__ */ import_react3.default.createElement("i", {
    className: "fa-brands fa-instagram"
  }))))))), /* @__PURE__ */ import_react3.default.createElement("section", {
    id: "work",
    className: "relative z-10 bg-black pb-20 lg:pt-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    "data-rellax-speed": "-3",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "My work"), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, info.length, " Projects")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60"
  }, info.map((item) => /* @__PURE__ */ import_react3.default.createElement(ArtCard, {
    key: item.id,
    data: item
  }))))), /* @__PURE__ */ import_react3.default.createElement("section", {
    id: "services",
    className: "relative bg-black pb-20 pt-32 md:pb-0 lg:pb-0 xl:pt-96"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "My services"), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "03 services")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-24"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid gap-12 sm:grid-cols-2 xl:grid-cols-3"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "inline-block text-white/60"
  }, "001"), /* @__PURE__ */ import_react3.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Artwork")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
  }, "Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.")))), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "inline-block text-white/60"
  }, "002"), /* @__PURE__ */ import_react3.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Artwork")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
  }, "Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.")))), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "inline-block text-white/60"
  }, "003"), /* @__PURE__ */ import_react3.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Artwork")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
  }, "Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui."))))))))), /* @__PURE__ */ import_react3.default.createElement("section", {
    id: "about",
    className: "relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    "data-rellax-speed": "-0.4",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "About me"), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "01 Duo")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-24 md:mt-72"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid md:grid-cols-3"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "overflow-hidden md:col-span-2"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    src: "/cover3.jpg",
    alt: "unnamed duo photo",
    width: "1500",
    height: "1000"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", {
    "data-rellax-speed": "1",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    "data-rellax-tablet-speed": "0.5",
    className: "rellax ml-auto md:w-1/5 lg:w-1/5"
  }, /* @__PURE__ */ import_react3.default.createElement("p", {
    className: "mt-12 text-2xl font-light text-white"
  }, "Minima iure saepe necessitatibus ipsa voluptatibus, minus voluptatem in facere maxime quae repellendus nisi inventore libero impedit eligendi, accusantium consequuntur consectetur quidem?")))))), /* @__PURE__ */ import_react3.default.createElement("section", {
    id: "contact",
    className: "relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "Let's work together"), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "__")), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "mt-24"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "lg:col-span-2"
  }, /* @__PURE__ */ import_react3.default.createElement("form", {
    action: "",
    className: "mx-auto space-y-8 md:w-3/4"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grid gap-8 sm:grid-cols-2 sm:gap-4"
  }, /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", {
    for: "firstname",
    className: "tracking-wide text-white"
  }, "Fistname"), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    id: "fistname",
    name: "fistname",
    autocomplete: "name",
    placeholder: "Your fistname",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", {
    for: "lastname",
    className: "tracking-wide text-white"
  }, "Last name"), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "text",
    id: "lastname",
    name: "lastname",
    autocomplete: "family-name",
    placeholder: "Your last name",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  }))), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", {
    for: "email",
    className: "tracking-wide text-white"
  }, "Mail address"), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Your mail address",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react3.default.createElement("div", null, /* @__PURE__ */ import_react3.default.createElement("label", {
    for: "message",
    className: "tracking-wide text-white"
  }, "Your message"), /* @__PURE__ */ import_react3.default.createElement("textarea", {
    name: "message",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Your message",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react3.default.createElement("button", {
    type: "submit",
    className: "group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "relative uppercase tracking-wide text-black group-hover:text-white"
  }, " Send message "))))))))), /* @__PURE__ */ import_react3.default.createElement("footer", {
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
    src: "/empresspaint.jpg",
    alt: "logo mark",
    width: "100",
    height: "100"
  })), /* @__PURE__ */ import_react3.default.createElement("nav", null, /* @__PURE__ */ import_react3.default.createElement("ul", {
    className: "flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white"
  }, /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#home"
  }, "Home")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#work"
  }, "My Work")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#services"
  }, "Services")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    className: "block w-max",
    href: "#about"
  }, "About us")), /* @__PURE__ */ import_react3.default.createElement("li", null, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "#contact"
  }, "Contact")))), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "flex flex-wrap justify-between gap-3"
  }, /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "text-sm text-white/50"
  }, "\xA9 Radiant 2021 - Present"), /* @__PURE__ */ import_react3.default.createElement("span", {
    className: "text-sm text-white/50"
  }, /* @__PURE__ */ import_react3.default.createElement("a", {
    href: "pmdaybreak.com",
    className: "text-white"
  }, "PM Daybreak Designs"), " via Tailus in Lubumbashi ")))))), /* @__PURE__ */ import_react3.default.createElement("script", {
    src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
    crossorigin: "anonymous"
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "f500c660", entry: { module: "/build/entry.client-G7U3QPAL.js", imports: ["/build/_shared/chunk-VR75DVUX.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-FTIZ5XYI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-7L4JPPLH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index.client": { id: "routes/index.client", parentId: "root", path: "client", index: void 0, caseSensitive: void 0, module: "/build/routes/index.client-U24MRD5E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-F500C660.js" };

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
  "routes/index.client": {
    id: "routes/index.client",
    parentId: "root",
    path: "client",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
