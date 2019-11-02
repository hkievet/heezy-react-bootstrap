const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.tsx"
  },
  output: {
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    filename: "[name].bundle.js",
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    chunkFilename: "[name].bundle.js"
    // `path` is the folder where Webpack will place your bundles
    //path: "./dist",
    // `publicPath` is where Webpack will load your bundles from (optional)
    //publicPath: "dist/"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: "Custom template",
      // Load a custom template (lodash by default)
      template: "index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "_redirects"),
        to: "."
      },
      {
        from: path.join(__dirname, "favicon.ico"),
        to: "."
      }
    ])
  ],
  module: {
    // compile the source maps
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        // gives source maps
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        //  handle fonts in the scss loader
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  // everything gets compiled into bundle.js
  /*
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  */
  // serve out of ./dist
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist"
  }
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
};

// how does webpack know that src/index.tsx is the entrypoint
