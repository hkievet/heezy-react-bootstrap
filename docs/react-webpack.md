# Day 2 of Studying

Today I will be doing the tutorial located at [react typescript webpack][].

The guide recommends that I use [soure map loader][] in addition to the build in webpack inline-source-map devtools option. This library allows for source maps of 3rd party libraries to be compiled in with the bundle.

This makes use of the [webpack rule enforce][].

The documentation for source map loader reads to add a rule:

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  }
};
```

**Conclusion of tutorial on ts site** : really barebones useless.

## React needs an index.html!!

The tutorial on the typescript website only gives a production-level build for react and typescript. As you have probably experienced, it can be nice to have hot-reloading, sourcemaps, bundle analyzers, etc.,

### Introducing HTML Webpack Plugin

This plugin is BAE (see [html webpack plugin][]) for more information.

Install: yarn add -D html-webpack-plugin

```
plugins: [
  new HtmlWebpackPlugin({
    title: 'Custom template',
    // Load a custom template (lodash by default)
    template: 'index.html'
  })
]
```

[source map loader][https://github.com/webpack-contrib/source-map-loader]
[react typescript webpack][https://www.typescriptlang.org/docs/handbook/react-&-webpack.html]

[webpack rule enforce][https://webpack.js.org/configuration/module/#ruleenforce]
[html webpack plugin][https://github.com/jantimon/html-webpack-plugin]
