module.exports = {
  presets: [
    [require('babel-preset-env'), {
      modules: false
    }],
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-lodash'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-object-rest-spread'),
  ],
  env: {
    production: {
      presets: [
        require('babel-preset-react-optimize'),
      ]
    }
  }
};
