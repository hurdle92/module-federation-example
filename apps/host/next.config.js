const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */

const mfConfig = {
  name: "host",
  filename: "static/chunks/remoteEntry.js",
  remotes: {
    moduleAppA: `moduleAppA@http://localhost:4000/_next/static/chunks/remoteEntry.js`,
    moduleAppB: `moduleAppB@http://localhost:4001/_next/static/chunks/remoteEntry.js`,
    moduleAppC: `moduleAppC@http://localhost:4002/_next/static/chunks/remoteEntry.js`,
  },
};

module.exports = {
  transpilePackages: ["@repo/ui"],
  webpack: (config) => {
    config.plugins.push(new NextFederationPlugin(mfConfig));
    return config;
  },
};
