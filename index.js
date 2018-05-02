const runningTests = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    [require('babel-preset-env'), {
      // Set our supported browsers. <goo.gl/w43BMg>
      targets: {
        browsers: ['>0.5%', 'ie 11', 'not op_mini all'],
      },
      // Jest needs CommonJS modules to run in Node. If building for
      // Webpack 3, don't compile modules so we can use scope hoisting.
      modules: runningTests ? 'commonjs' : false,
      // Replace 'babel-polyfill' with only polyfills for target browsers.
      useBuiltIns: true,
    }],
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-lodash'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties'),
  ],
  env: {
    production: {
      presets: [
        require('babel-preset-react-optimize'),
      ]
    },
  },
};
