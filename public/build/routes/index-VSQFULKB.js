import {
  __commonJS,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-5SBWG67R.js";

// empty-module:~/api/get-data-from-strapi.server
var require_get_data_from_strapi = __commonJS({
  "empty-module:~/api/get-data-from-strapi.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// node_modules/rellax/rellax.js
var require_rellax = __commonJS({
  "node_modules/rellax/rellax.js"(exports, module) {
    init_react();
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
      } else {
        root.Rellax = factory();
      }
    })(typeof window !== "undefined" ? window : globalThis, function() {
      var Rellax2 = function(el, options) {
        "use strict";
        var self = Object.create(Rellax2.prototype);
        var posY = 0;
        var screenY = 0;
        var posX = 0;
        var screenX = 0;
        var blocks = [];
        var pause = true;
        var loop = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
          return setTimeout(callback, 1e3 / 60);
        };
        var loopId = null;
        var supportsPassive = false;
        try {
          var opts = Object.defineProperty({}, "passive", {
            get: function() {
              supportsPassive = true;
            }
          });
          window.addEventListener("testPassive", null, opts);
          window.removeEventListener("testPassive", null, opts);
        } catch (e) {
        }
        var clearLoop = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout;
        var transformProp = window.transformProp || function() {
          var testEl = document.createElement("div");
          if (testEl.style.transform === null) {
            var vendors = ["Webkit", "Moz", "ms"];
            for (var vendor in vendors) {
              if (testEl.style[vendors[vendor] + "Transform"] !== void 0) {
                return vendors[vendor] + "Transform";
              }
            }
          }
          return "transform";
        }();
        self.options = {
          speed: -2,
          verticalSpeed: null,
          horizontalSpeed: null,
          breakpoints: [576, 768, 1201],
          center: false,
          wrapper: null,
          relativeToWrapper: false,
          round: true,
          vertical: true,
          horizontal: false,
          verticalScrollAxis: "y",
          horizontalScrollAxis: "x",
          callback: function() {
          }
        };
        if (options) {
          Object.keys(options).forEach(function(key) {
            self.options[key] = options[key];
          });
        }
        function validateCustomBreakpoints() {
          if (self.options.breakpoints.length === 3 && Array.isArray(self.options.breakpoints)) {
            var isAscending = true;
            var isNumerical = true;
            var lastVal;
            self.options.breakpoints.forEach(function(i) {
              if (typeof i !== "number")
                isNumerical = false;
              if (lastVal !== null) {
                if (i < lastVal)
                  isAscending = false;
              }
              lastVal = i;
            });
            if (isAscending && isNumerical)
              return;
          }
          self.options.breakpoints = [576, 768, 1201];
          console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted");
        }
        if (options && options.breakpoints) {
          validateCustomBreakpoints();
        }
        if (!el) {
          el = ".rellax";
        }
        var elements = typeof el === "string" ? document.querySelectorAll(el) : [el];
        if (elements.length > 0) {
          self.elems = elements;
        } else {
          console.warn("Rellax: The elements you're trying to select don't exist.");
          return;
        }
        if (self.options.wrapper) {
          if (!self.options.wrapper.nodeType) {
            var wrapper = document.querySelector(self.options.wrapper);
            if (wrapper) {
              self.options.wrapper = wrapper;
            } else {
              console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
              return;
            }
          }
        }
        var currentBreakpoint;
        var getCurrentBreakpoint = function(w) {
          var bp = self.options.breakpoints;
          if (w < bp[0])
            return "xs";
          if (w >= bp[0] && w < bp[1])
            return "sm";
          if (w >= bp[1] && w < bp[2])
            return "md";
          return "lg";
        };
        var cacheBlocks = function() {
          for (var i = 0; i < self.elems.length; i++) {
            var block = createBlock(self.elems[i]);
            blocks.push(block);
          }
        };
        var init = function() {
          for (var i = 0; i < blocks.length; i++) {
            self.elems[i].style.cssText = blocks[i].style;
          }
          blocks = [];
          screenY = window.innerHeight;
          screenX = window.innerWidth;
          currentBreakpoint = getCurrentBreakpoint(screenX);
          setPosition();
          cacheBlocks();
          animate();
          if (pause) {
            window.addEventListener("resize", init);
            pause = false;
            update();
          }
        };
        var createBlock = function(el2) {
          var dataPercentage = el2.getAttribute("data-rellax-percentage");
          var dataSpeed = el2.getAttribute("data-rellax-speed");
          var dataXsSpeed = el2.getAttribute("data-rellax-xs-speed");
          var dataMobileSpeed = el2.getAttribute("data-rellax-mobile-speed");
          var dataTabletSpeed = el2.getAttribute("data-rellax-tablet-speed");
          var dataDesktopSpeed = el2.getAttribute("data-rellax-desktop-speed");
          var dataVerticalSpeed = el2.getAttribute("data-rellax-vertical-speed");
          var dataHorizontalSpeed = el2.getAttribute("data-rellax-horizontal-speed");
          var dataVericalScrollAxis = el2.getAttribute("data-rellax-vertical-scroll-axis");
          var dataHorizontalScrollAxis = el2.getAttribute("data-rellax-horizontal-scroll-axis");
          var dataZindex = el2.getAttribute("data-rellax-zindex") || 0;
          var dataMin = el2.getAttribute("data-rellax-min");
          var dataMax = el2.getAttribute("data-rellax-max");
          var dataMinX = el2.getAttribute("data-rellax-min-x");
          var dataMaxX = el2.getAttribute("data-rellax-max-x");
          var dataMinY = el2.getAttribute("data-rellax-min-y");
          var dataMaxY = el2.getAttribute("data-rellax-max-y");
          var mapBreakpoints;
          var breakpoints = true;
          if (!dataXsSpeed && !dataMobileSpeed && !dataTabletSpeed && !dataDesktopSpeed) {
            breakpoints = false;
          } else {
            mapBreakpoints = {
              "xs": dataXsSpeed,
              "sm": dataMobileSpeed,
              "md": dataTabletSpeed,
              "lg": dataDesktopSpeed
            };
          }
          var wrapperPosY = self.options.wrapper ? self.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (self.options.relativeToWrapper) {
            var scrollPosY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
          }
          var posY2 = self.options.vertical ? dataPercentage || self.options.center ? wrapperPosY : 0 : 0;
          var posX2 = self.options.horizontal ? dataPercentage || self.options.center ? self.options.wrapper ? self.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
          var blockTop = posY2 + el2.getBoundingClientRect().top;
          var blockHeight = el2.clientHeight || el2.offsetHeight || el2.scrollHeight;
          var blockLeft = posX2 + el2.getBoundingClientRect().left;
          var blockWidth = el2.clientWidth || el2.offsetWidth || el2.scrollWidth;
          var percentageY = dataPercentage ? dataPercentage : (posY2 - blockTop + screenY) / (blockHeight + screenY);
          var percentageX = dataPercentage ? dataPercentage : (posX2 - blockLeft + screenX) / (blockWidth + screenX);
          if (self.options.center) {
            percentageX = 0.5;
            percentageY = 0.5;
          }
          var speed = breakpoints && mapBreakpoints[currentBreakpoint] !== null ? Number(mapBreakpoints[currentBreakpoint]) : dataSpeed ? dataSpeed : self.options.speed;
          var verticalSpeed = dataVerticalSpeed ? dataVerticalSpeed : self.options.verticalSpeed;
          var horizontalSpeed = dataHorizontalSpeed ? dataHorizontalSpeed : self.options.horizontalSpeed;
          var verticalScrollAxis = dataVericalScrollAxis ? dataVericalScrollAxis : self.options.verticalScrollAxis;
          var horizontalScrollAxis = dataHorizontalScrollAxis ? dataHorizontalScrollAxis : self.options.horizontalScrollAxis;
          var bases = updatePosition(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed);
          var style = el2.style.cssText;
          var transform = "";
          var searchResult = /transform\s*:/i.exec(style);
          if (searchResult) {
            var index = searchResult.index;
            var trimmedStyle = style.slice(index);
            var delimiter = trimmedStyle.indexOf(";");
            if (delimiter) {
              transform = " " + trimmedStyle.slice(11, delimiter).replace(/\s/g, "");
            } else {
              transform = " " + trimmedStyle.slice(11).replace(/\s/g, "");
            }
          }
          return {
            baseX: bases.x,
            baseY: bases.y,
            top: blockTop,
            left: blockLeft,
            height: blockHeight,
            width: blockWidth,
            speed,
            verticalSpeed,
            horizontalSpeed,
            verticalScrollAxis,
            horizontalScrollAxis,
            style,
            transform,
            zindex: dataZindex,
            min: dataMin,
            max: dataMax,
            minX: dataMinX,
            maxX: dataMaxX,
            minY: dataMinY,
            maxY: dataMaxY
          };
        };
        var setPosition = function() {
          var oldY = posY;
          var oldX = posX;
          posY = self.options.wrapper ? self.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
          posX = self.options.wrapper ? self.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
          if (self.options.relativeToWrapper) {
            var scrollPosY = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
            posY = scrollPosY - self.options.wrapper.offsetTop;
          }
          if (oldY != posY && self.options.vertical) {
            return true;
          }
          if (oldX != posX && self.options.horizontal) {
            return true;
          }
          return false;
        };
        var updatePosition = function(percentageX, percentageY, speed, verticalSpeed, horizontalSpeed) {
          var result = {};
          var valueX = (horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
          var valueY = (verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));
          result.x = self.options.round ? Math.round(valueX) : Math.round(valueX * 100) / 100;
          result.y = self.options.round ? Math.round(valueY) : Math.round(valueY * 100) / 100;
          return result;
        };
        var deferredUpdate = function() {
          window.removeEventListener("resize", deferredUpdate);
          window.removeEventListener("orientationchange", deferredUpdate);
          (self.options.wrapper ? self.options.wrapper : window).removeEventListener("scroll", deferredUpdate);
          (self.options.wrapper ? self.options.wrapper : document).removeEventListener("touchmove", deferredUpdate);
          loopId = loop(update);
        };
        var update = function() {
          if (setPosition() && pause === false) {
            animate();
            loopId = loop(update);
          } else {
            loopId = null;
            window.addEventListener("resize", deferredUpdate);
            window.addEventListener("orientationchange", deferredUpdate);
            (self.options.wrapper ? self.options.wrapper : window).addEventListener("scroll", deferredUpdate, supportsPassive ? { passive: true } : false);
            (self.options.wrapper ? self.options.wrapper : document).addEventListener("touchmove", deferredUpdate, supportsPassive ? { passive: true } : false);
          }
        };
        var animate = function() {
          var positions;
          for (var i = 0; i < self.elems.length; i++) {
            var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
            var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
            var verticalScrollX = verticalScrollAxis.indexOf("x") != -1 ? posY : 0;
            var verticalScrollY = verticalScrollAxis.indexOf("y") != -1 ? posY : 0;
            var horizontalScrollX = horizontalScrollAxis.indexOf("x") != -1 ? posX : 0;
            var horizontalScrollY = horizontalScrollAxis.indexOf("y") != -1 ? posX : 0;
            var percentageY = (verticalScrollY + horizontalScrollY - blocks[i].top + screenY) / (blocks[i].height + screenY);
            var percentageX = (verticalScrollX + horizontalScrollX - blocks[i].left + screenX) / (blocks[i].width + screenX);
            positions = updatePosition(percentageX, percentageY, blocks[i].speed, blocks[i].verticalSpeed, blocks[i].horizontalSpeed);
            var positionY = positions.y - blocks[i].baseY;
            var positionX = positions.x - blocks[i].baseX;
            if (blocks[i].min !== null) {
              if (self.options.vertical && !self.options.horizontal) {
                positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
              }
              if (self.options.horizontal && !self.options.vertical) {
                positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
              }
            }
            if (blocks[i].minY != null) {
              positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
            }
            if (blocks[i].minX != null) {
              positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
            }
            if (blocks[i].max !== null) {
              if (self.options.vertical && !self.options.horizontal) {
                positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
              }
              if (self.options.horizontal && !self.options.vertical) {
                positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
              }
            }
            if (blocks[i].maxY != null) {
              positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
            }
            if (blocks[i].maxX != null) {
              positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
            }
            var zindex = blocks[i].zindex;
            var translate = "translate3d(" + (self.options.horizontal ? positionX : "0") + "px," + (self.options.vertical ? positionY : "0") + "px," + zindex + "px) " + blocks[i].transform;
            self.elems[i].style[transformProp] = translate;
          }
          self.options.callback(positions);
        };
        self.destroy = function() {
          for (var i = 0; i < self.elems.length; i++) {
            self.elems[i].style.cssText = blocks[i].style;
          }
          if (!pause) {
            window.removeEventListener("resize", init);
            pause = true;
          }
          clearLoop(loopId);
          loopId = null;
        };
        init();
        self.refresh = init;
        return self;
      };
      return Rellax2;
    });
  }
});

// browser-route-module:routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_react = __toESM(require_react());
var import_get_data_from_strapi = __toESM(require_get_data_from_strapi());
var import_get_data_from_strapi2 = __toESM(require_get_data_from_strapi());
var import_rellax = __toESM(require_rellax());
function ArtCard({ data }) {
  const path_medImage = data.attributes.ArtImage.data.attributes.formats.medium.url;
  const mediumImage = `${import_get_data_from_strapi2.baseUrl}${path_medImage}`;
  console.log(mediumImage);
  const ref = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    new import_rellax.default(ref.current, {
      speed: -2,
      xsSpeed: 0,
      mobileSpeed: 0,
      tabletSpeed: 0
    });
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("a", {
    href: "/pages/project.html",
    "data-rellax-speed": "-2",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    "data-rellax-tablet-speed": "0",
    className: "rellax group col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    style: { width: "100%", height: "100%", overflow: "hidden" },
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 group-hover:before:origin-bottom group-hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    className: "transition duration-500",
    src: mediumImage,
    alt: data.attributes.Title,
    style: { width: "100%", height: "100%", objectFit: "cover" }
  })), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex items-center justify-between p-4"
  }, /* @__PURE__ */ import_react.default.createElement("h3", {
    className: "text-2xl font-normal text-white"
  }, data.attributes.Title), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "h-max rounded-full border border-white/30 px-2 py-1 text-xs tracking-wider text-white"
  }, data.attributes.Date)));
}
function HomeRoute() {
  const { info } = useLoaderData();
  console.log("fet");
  console.log(info);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bg-black"
  }, /* @__PURE__ */ import_react.default.createElement("main", {
    className: "background relative"
  }, /* @__PURE__ */ import_react.default.createElement("header", {
    className: "fixed top-0 z-20 w-full"
  }, /* @__PURE__ */ import_react.default.createElement("nav", {
    className: "2lg:px-12 mx-auto max-w-7xl px-6 py-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white"
  }, "JULIE JPG"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#contact",
    className: "relative py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "relative"
  }, "Get in touch"))))), /* @__PURE__ */ import_react.default.createElement("section", {
    id: "home",
    className: "relative flex min-h-screen items-center"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-0 z-[1] bg-gradient-to-b from-black/10 via-black/20 to-black"
  }), /* @__PURE__ */ import_react.default.createElement("img", {
    src: "/cover2.jpg",
    className: "fixed inset-0 h-full w-full object-cover",
    alt: "woman in dark",
    width: "4160",
    height: "6240"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative z-10 mx-auto max-w-7xl px-6 pb-40 pt-60 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "pb-12 media-h:md:pb-32 media-h:lg:pb-12 xl:pb-12"
  }, /* @__PURE__ */ import_react.default.createElement("h1", {
    "data-rellax-speed": "-3",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax text-6xl font-bold text-white sm:text-8xl md:text-9xl xl:leading-tight"
  }, "Julie Jpg")), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "ml-auto md:w-2/3 md:pt-12 lg:w-1/2"
  }, /* @__PURE__ */ import_react.default.createElement("p", {
    className: "mb-20 text-lg font-light text-white sm:text-2xl xl:leading-normal"
  }, "On an endless journey to create experiences that inspire others. Always motived by design that's honest, aesthetic and natural. Probably the only designer you\u2019ll ever need."), /* @__PURE__ */ import_react.default.createElement("a", {
    "data-rellax-speed": "1",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    href: "#work",
    className: "rellax relative inline-block py-1.5 text-white before:absolute before:inset-0 before:origin-bottom before:scale-y-[.03] before:bg-white/60 before:transition before:duration-300 hover:before:scale-y-100 hover:before:scale-x-125 hover:before:bg-white/10"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "relative"
  }, "See my work")))), /* @__PURE__ */ import_react.default.createElement("div", {
    "data-rellax-speed": "-5",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax relative mt-16 ml-auto w-max md:mt-32 md:ml-0 xl:-mt-16"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "text-xs font-light uppercase tracking-widest text-white"
  }, "Follow me"), /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "relative z-20 mt-4 space-y-2 text-sm font-light text-white"
  }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/juulie.jpg/",
    "aria-label": "Instagram"
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "fa-brands fa-instagram"
  }))))))), /* @__PURE__ */ import_react.default.createElement("section", {
    id: "work",
    className: "relative z-10 bg-black pb-20 lg:pt-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 xl:pb-96 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    "data-rellax-speed": "-3",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "My work"), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, info.length, " Projects")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative mt-20 gap-20 gap-x-6 space-y-20 sm:grid sm:grid-cols-2 sm:space-y-0 md:mt-72 lg:mt-60"
  }, info.map((item) => /* @__PURE__ */ import_react.default.createElement(ArtCard, {
    key: item.id,
    data: item
  }))))), /* @__PURE__ */ import_react.default.createElement("section", {
    id: "services",
    className: "relative bg-black pb-20 pt-32 md:pb-0 lg:pb-0 xl:pt-96"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "My services"), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "03 services")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-24"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: ""
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid gap-12 sm:grid-cols-2 xl:grid-cols-3"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "inline-block text-white/60"
  }, "001"), /* @__PURE__ */ import_react.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Artwork")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
  }, "Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.")))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "inline-block text-white/60"
  }, "002"), /* @__PURE__ */ import_react.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Artwork")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
  }, "Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui.")))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "group border-b border-white/30 pb-8"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-col gap-4 divide-y divide-white/30"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "inline-block text-white/60"
  }, "003"), /* @__PURE__ */ import_react.default.createElement("h3", {
    className: "bg-black pt-6 text-3xl text-white"
  }, "Artwork")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-0 overflow-hidden transition-all duration-500 group-hover:mt-8"
  }, /* @__PURE__ */ import_react.default.createElement("p", {
    className: "max-h-0 font-light text-white/70 transition-all duration-500 group-hover:max-h-24 md:text-xl"
  }, "Sapiente, rem debitis obcaecati facilis earum repudiandae enim ratione nihil iusto ea. Officia sint perspiciatis ad ducimus qui."))))))))), /* @__PURE__ */ import_react.default.createElement("section", {
    id: "about",
    className: "relative z-10 bg-black pb-20 pt-32 md:pb-0 md:pt-0 lg:pb-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    "data-rellax-speed": "-0.4",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    className: "rellax flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "About me"), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "01 Duo")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-24 md:mt-72"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid gap-6"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid md:grid-cols-3"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "overflow-hidden md:col-span-2"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: "/cover3.jpg",
    alt: "unnamed duo photo",
    width: "1500",
    height: "1000"
  }))), /* @__PURE__ */ import_react.default.createElement("div", {
    "data-rellax-speed": "1",
    "data-rellax-xs-speed": "0",
    "data-rellax-mobile-speed": "0",
    "data-rellax-tablet-speed": "0.5",
    className: "rellax ml-auto md:w-1/5 lg:w-1/5"
  }, /* @__PURE__ */ import_react.default.createElement("p", {
    className: "mt-12 text-2xl font-light text-white"
  }, "Minima iure saepe necessitatibus ipsa voluptatibus, minus voluptatem in facere maxime quae repellendus nisi inventore libero impedit eligendi, accusantium consequuntur consectetur quidem?")))))), /* @__PURE__ */ import_react.default.createElement("section", {
    id: "contact",
    className: "relative z-10 bg-gradient-to-b from-black via-black/80 to-black pt-32 backdrop-blur-3xl lg:pb-32 lg:pt-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: "text-7xl font-bold text-white xl:text-8xl"
  }, "Let's work together"), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "__")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-24"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid gap-6 border-t border-white/30 pt-24 lg:grid-cols-3 lg:gap-24"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "lg:col-span-2"
  }, /* @__PURE__ */ import_react.default.createElement("form", {
    action: "",
    className: "mx-auto space-y-8 md:w-3/4"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "grid gap-8 sm:grid-cols-2 sm:gap-4"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    for: "firstname",
    className: "tracking-wide text-white"
  }, "Fistname"), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    id: "fistname",
    name: "fistname",
    autocomplete: "name",
    placeholder: "Your fistname",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    for: "lastname",
    className: "tracking-wide text-white"
  }, "Last name"), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    id: "lastname",
    name: "lastname",
    autocomplete: "family-name",
    placeholder: "Your last name",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  }))), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    for: "email",
    className: "tracking-wide text-white"
  }, "Mail address"), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Your mail address",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", {
    for: "message",
    className: "tracking-wide text-white"
  }, "Your message"), /* @__PURE__ */ import_react.default.createElement("textarea", {
    name: "message",
    id: "message",
    cols: "30",
    rows: "6",
    placeholder: "Your message",
    className: "mt-3 w-full border border-white/20 bg-transparent px-4 py-3 text-white/70 outline-none focus:ring-1 focus:ring-primary"
  })), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "submit",
    className: "group ml-auto flex h-12 w-auto items-center overflow-hidden bg-white px-5 transition-all duration-300 hover:bg-primary"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "relative uppercase tracking-wide text-black group-hover:text-white"
  }, " Send message "))))))))), /* @__PURE__ */ import_react.default.createElement("footer", {
    className: "relative bg-black pt-32 backdrop-opacity-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mx-auto max-w-7xl px-6 pb-12 lg:px-12 xl:px-6 2xl:px-0"
  }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-wrap items-center gap-6"
  }, /* @__PURE__ */ import_react.default.createElement("h2", {
    className: "text-3xl text-white xl:text-6xl"
  }, "Instagram"), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/juulie.jpg/",
    target: "_blank",
    className: "h-max rounded-full border border-white/40 px-2 py-1 text-xs tracking-wider text-white"
  }, "@juulie.jpg")), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-12 grid grid-cols-3 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/p/CUc-KEklghs/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig1.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1333"
  })), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/p/CNst7BmBp63/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig2.jpg",
    alt: "insta feed cover",
    width: "2000",
    height: "1334"
  })), /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/p/CdbkYJdJ4BJ/",
    target: "_blank",
    className: "relative before:absolute before:inset-0 before:origin-top before:bg-gradient-to-t before:from-black/5 before:opacity-50 before:backdrop-grayscale before:transition before:duration-500 hover:before:origin-bottom hover:before:scale-y-0"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "sr-only"
  }, "Instagram feed"), /* @__PURE__ */ import_react.default.createElement("img", {
    className: "transition duration-500",
    src: "/ig3.jpg",
    alt: "insta feed cover",
    width: "1800",
    height: "1200"
  })))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "mt-12 md:mt-16 lg:mt-24"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "space-y-8 md:space-y-12"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "/",
    className: "text-2xl font-light tracking-widest text-white"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    className: "h-8 w-auto brightness-200",
    src: "/empresspaint.jpg",
    alt: "logo mark",
    width: "100",
    height: "100"
  })), /* @__PURE__ */ import_react.default.createElement("nav", null, /* @__PURE__ */ import_react.default.createElement("ul", {
    className: "flex flex-wrap gap-6 text-sm uppercase tracking-wider text-white"
  }, /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#home"
  }, "Home")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#work"
  }, "Work")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#services"
  }, "Services")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    className: "block w-max",
    href: "#about"
  }, "About us")), /* @__PURE__ */ import_react.default.createElement("li", null, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "#contact"
  }, "Contact")))), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex flex-wrap justify-between gap-3"
  }, /* @__PURE__ */ import_react.default.createElement("span", {
    className: "text-sm text-white/50"
  }, "\xA9 Radiant 2021 - Present"), /* @__PURE__ */ import_react.default.createElement("span", {
    className: "text-sm text-white/50"
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: "pmdaybreak.com",
    className: "text-white"
  }, "PM Daybreak Designs"), " via Tailus in Lubumbashi ")))))), /* @__PURE__ */ import_react.default.createElement("script", {
    src: "https://use.fontawesome.com/releases/v6.1.0/js/all.js",
    crossorigin: "anonymous"
  }));
}
export {
  HomeRoute as default
};
//# sourceMappingURL=/build/routes/index-VSQFULKB.js.map
