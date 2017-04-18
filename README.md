# babel-config

This is our shared [Babel](http://babeljs.io) config used for writing JavaScript at DoSomething.org. It compiles the [latest ECMAScript standard](https://github.com/babel/babel-preset-env) to ES5 for widespread browser support, adds support for [JSX & Flow](https://github.com/babel/babel/tree/master/packages/babel-preset-react) (with [optimizations](https://github.com/thejameskyle/babel-react-optimize)!), and adds support for experimental [export extensions](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-export-extensions) and [object spread properties](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-object-rest-spread).

### Getting Started
Install this package via NPM: 

```
npm install @dosomething/babel-config --save-dev
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
&copy;2017 DoSomething.org. @dosomething/babel-config is free software, and may be redistributed under the
terms specified in the [LICENSE](https://github.com/DoSomething/webpack-config/blob/master/LICENSE) file. The
name and logo for DoSomething.org are trademarks of Do Something, Inc and may not be used without permission.
