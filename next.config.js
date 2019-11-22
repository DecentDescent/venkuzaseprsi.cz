const path = require("path");

module.exports = {
  webpack: (config, { dev }) => {
    return config;
  },
  webpackDevMiddleware: config => {
    return config;
  }
};
