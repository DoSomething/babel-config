# babel-config

This is our shared [Babel](http://babeljs.io) config, used when compiling JavaScript for the web at [DoSomething.org](https://www.dosomething.org/). It transforms the [latest ECMAScript language features](https://babeljs.io/docs/en/babel-preset-env) to ES5 for widespread browser support & adds [support for React](https://babeljs.io/docs/en/babel-preset-react) (with optimizations for [constant elements](https://babeljs.io/docs/en/babel-plugin-transform-react-constant-elements) and [smaller production builds](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)!).

We've also enabled support for the [export extensions](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-export-extensions) and [object spread properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spread) proposals.

### Getting Started
Install this package via NPM: 

```
npm install @babel/core @dosomething/babel-config --save-dev
```

Specify as a preset in your `package.json`:

```js
{
  // ...
  "babel": {
    "preset": "@dosomething/babel-config",
  }
}
```

### License
&copy; DoSomething.org. Our Babel config is free software, and may be redistributed under the
terms specified in the [LICENSE](https://github.com/DoSomething/babel-config/blob/master/LICENSE) file. The
name and logo for DoSomething.org are trademarks of Do Something, Inc and may not be used without permission.
