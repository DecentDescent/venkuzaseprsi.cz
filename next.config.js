const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const nextConfig = {
  webpack: config => {
    config.node = {
      fs: "empty",
      modules: false
    };

    return config;
  },
  target: "serverless"
};

module.exports = withPlugins(
  [withCSS, withSass({ cssModules: true })],
  nextConfig
);
