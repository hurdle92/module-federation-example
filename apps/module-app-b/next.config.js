const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */

const mfConfig = {
  name: "moduleAppB",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./App": "./src/pages/_app.tsx",
  },
  remotes: {
    moduleAppB: `moduleAppC@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
  },
};

module.exports = {
  transpilePackages: ["@repo/ui"],
  webpack: (config) => {
    config.plugins.push(new NextFederationPlugin(mfConfig));
    return config;
  },
};
