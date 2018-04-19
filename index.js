const runningTests = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    [require('babel-preset-env'), {
      // We only target the latest 2 versions of browsers & Firefox
      // ESR (schools!), excluding "dead" browsers (<0.5% global usage).
      targets: {
        browsers: ['last 2 versions', 'Firefox ESR', 'not dead'],
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
