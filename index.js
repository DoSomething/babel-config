const runningTests = process.env.NODE_ENV === 'test';

module.exports = {
  presets: [
    [require('babel-preset-env'), {
      // Jest needs CommonJS modules to run in Node. If building for
      // Webpack 3, don't compile modules so we can use scope hoisting.
      modules: runningTests ? 'commonjs' : false
    }],
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-lodash'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-object-rest-spread'),
    require('@babel/plugin-proposal-class-properties'),
  ],
  env: {
    production: {
      presets: [
        require('babel-preset-react-optimize'),
      ]
    },
  },
};
