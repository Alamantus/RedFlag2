// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mode: 'development',
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    knownEntrypoints: [
      './about.html',
    ],
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
