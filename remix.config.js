/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "./app",
  assetsBuildDirectory: "./public/build/",
  sharedBuildDirectory: "./public/build/",
  routesBuildDirectory: "./public/build/",
  htmlTemplates: [
    {
      path: "./resources/index.html",
      output: "./public/index.html",
    },
  ],
  serverBuildPath: "./netlify/functions-internal/server.js",
  publicPath: "./public/build/",
  src: "./app/routes/index.jsx",
};

