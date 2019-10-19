todo: this file is written post-haste and needs to be cleaned up

# Getting Sassy

TLDR: `yarn add -D file-loader style-loader css-loader sass-loader node-sass`

I really like sass. I think it makes managing styles in a project so much easier. Although, I'm slowly starting to fall in love with using pure javascript CSS libraries like @emotion. I still think it's impractical to completely stop using css.

So without further ado, I will add sass to this boilerplate project.

Straight from the docs of [sass-loader][]

```
{
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
    ],
}
```

Because I use fonts imported via scss, I need to have a loader for the font files:

```
{
    //  handle fonts in the scss loader
    test: /\.(woff2?|ttf|otf|eot|svg)$/,
    exclude: /node_modules/,
    loader: "file-loader",
    options: {
        name: "[path][name].[ext]"
    }
}
```

## Step 1: add the sass

I copied over my fonts from another project and its associated `_fonts.scss` that can be imported as a module giving access to a wide variety of font classes.

I put these fonts in `src/styles/fonts`.

Then I add a main sass file in `src/styles` with the contents:

````

@import "./fonts/fonts";

```

Lastly in the `index.tsx` file I import the sass file with the line

```

import "./styles/style.scss";

```

Now if I try to run my webpack development command aliased to `npm start`, I get the following error:

```

[./src/styles/style.scss] 269 bytes {main} [built][failed] [1 error] + 31 hidden modules

ERROR in ./src/styles/style.scss 1:0
Module parse failed: Unexpected character '@' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

> @import "./fonts/fonts";
> |
> @ ./src/index.tsx 3:0-29

```

Webpack is clearly saying that we need to add a loader!

## Step 2: Adding a Sass Loader

I will be making use of the [sass-loader][] project.

First, I need to install the dependencies: `yarn add -D node-sass sass-loader`.

Then I need to add the scss loader to `webpack.config.js`.

# Do I need css-loader?

Do I need to use [css-loader][]? Yes I do for sure.

[sass-loader]: https://github.com/webpack-contrib/sass-loader
[css-loader]: https://github.com/webpack-contrib/css-loader
[style-loader]: https://github.com/webpack-contrib/style-loader
```
````
