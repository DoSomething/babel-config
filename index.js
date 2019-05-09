const runningTests = process.env.NODE_ENV === 'test';

module.exports = () => ({
  presets: [
    [require('@babel/preset-env'), {
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
    require('@babel/preset-react'),
  ],
  plugins: [
    require('@babel/plugin-transform-runtime'),
    require('@babel/plugin-proposal-object-rest-spread'),
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-syntax-dynamic-import'),
    require('@babel/plugin-proposal-export-default-from'),
    require('@babel/plugin-proposal-export-namespace-from'),
    require('babel-plugin-graphql-tag'),
    require('babel-plugin-lodash'),
  ],
  env: {
    production: {
      plugins: [
        require('@babel/plugin-transform-react-constant-elements'),
        require('babel-plugin-transform-react-remove-prop-types'),
      ],
    },
    test: {
      plugins: [
        require('babel-plugin-dynamic-import-node'),
      ],
    },
  },
});
