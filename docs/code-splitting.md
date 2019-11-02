# A hunt for a faster page load

If you are to make a whole website with react with a bunch of articles, it doesn't make sense to load the whole entire website at once.

If there was a way to bundle all the JS and assets needed on a route-by-route basis that would make it much faster.

So if you had a page that had the following pages:
/home
/about
/contact

Then when you first load the website, only the assets necessary for /home to load would show up first.  Perhaps after that, additional assets could be loaded for the other pages, but this wouldn't delay the initial page load.


## Code splitting with React

React provides a collection of utilities that makes code splitting possible.

```
const LazyComponent = React.lazy(() => import('LazyComponent.txs'))

...
  return (
    <Suspense fallback={(<div>loading</div>)}>
      <LazyComponent/>
    </Suspense>
  )
```

If for some reason there is a network error you can use Error Boundary components.


## Getting this to work with webpack

By default create-react-app has things working right out of  the box.




# Drafted Writing:

## ~~Investigating the concept of Code-Splitting~~

"Bundling is great, but as your app grows, your bundle will grow too."

This seems to be the solution based on the description on the official react [code splitting][] docs.

From WebPack:

> Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.


`import()`

```
module.exports = {
  entry: {
    main: './src/app.js',
  },
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: '[name].bundle.js',
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: '[name].bundle.js',
    // `path` is the folder where Webpack will place your bundles
    path: './dist',
    // `publicPath` is where Webpack will load your bundles from (optional)
    publicPath: 'dist/'
  }
};
```

[webpack code-splittying]: https://webpack.js.org/guides/code-splitting/
[webpack config for code splitting]: https://gist.github.com/gaearon/ca6e803f5c604d37468b0091d9959269












[code splitting]: https://reactjs.org/docs/code-splitting.html
