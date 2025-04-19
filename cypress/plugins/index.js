const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.typescript = require.resolve("typescript"); // 🔥 CRITICAL FIX

  on("file:preprocessor", cucumber(options));
};
