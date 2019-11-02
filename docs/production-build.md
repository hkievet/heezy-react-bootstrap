# Splitting weback into a production build...


To separate out a development and a production build configuration, make use of the utility `webpack-merge`.

Webpack recommends the following three files:

```
webpack.common.js
webpack.prod.js
webpack.dev.js
```

In the `package.json` scripts section, the webpack (and webpack-dev-server) command can take the flag `--config` to specify the specific webpack configuration file to build with.

So the `npm build` command could look like `webpack --config webpack.prod.js`

