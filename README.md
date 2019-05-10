# babel-preset

This is our shared [Babel](http://babeljs.io) preset, used when compiling JavaScript for the web at [DoSomething.org](https://www.dosomething.org/).

It adds support for the [latest language features](https://babeljs.io/docs/en/babel-preset-env) in older browsers, [React's JSX syntax](https://babeljs.io/docs/en/babel-preset-react) (with optimizations for [faster re-renders](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements) and [smaller production builds](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)!), [pre-compiled GraphQL queries](https://www.apollographql.com/docs/react/recipes/babel#using-babel-plugin-graphql-tag), and dynamic imports (for [Webpack](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import) and [Node](https://github.com/airbnb/babel-plugin-dynamic-import-node)).

We've also enabled support for the [export extensions](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-export-extensions) and [object spread properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spread) proposals.

### Getting Started
Install this package via NPM: 

```
npm install @babel/core @dosomething/babel-preset --save-dev
npm install @babel/runtime core-js --save
```

Specify as a preset in your `package.json`:

```js
{
  // ...
  "babel": {
    "presets": [
      "@dosomething"
    ]
  }
}
```

### Configuration
By default, [polyfills](https://remysharp.com/2010/10/08/what-is-a-polyfill) for any newer platform features used in your application will be included in your compiled bundle. If this project doesn't support older browsers or is using a [polyfill service](https://polyfill.io/v3/), you can opt out like so:

```js
{
  // ...
  "babel": {
    "presets": [
      ["@dosomething", { "withPolyfills": false }]
    ]
  }
}
```

### License
&copy; DoSomething.org. Our Babel preset is free software, and may be redistributed under the
terms specified in the [LICENSE](https://github.com/DoSomething/babel-preset/blob/master/LICENSE) file. The
name and logo for DoSomething.org are trademarks of Do Something, Inc and may not be used without permission.
