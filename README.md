# Versions

# Motivation

I would love to be proficient at webpack and some more nuanced stuff in the node environment.
Babel and tsconfig.json files always go over my head.  I don't understand the ecosystem
What's the difference between yarn and npm?

# Installation

```
mkdir heezy_tuts
yarn init
git init
yarn add -D typescript webpack webpack-cli ts-loader
```


# Learning about TS Config

Read more here [tsconfig.json][]
Presence indicates **typescript project root directory**.


## Properties: compilerOptions, files, include, exclude, extends, compilerOptions


### Expirement: Compile a typescript file

Running the command `tsc` will run the typescript compiler.  Try it!  I found this bit of the default output interesting for future study of the changes being made to Javascript:

```
 --lib                                              Specify library files to be included in the compilation.
                                                      'es5' 'es6' 'es2015' 'es7' 'es2016' 'es2017' 'es2018' 'es2019' 'es2020' 'esnext' 'dom' 'dom.iterable' 'webworker' 'webworker.importscripts' 'scripthost' 'es2015.core' 'es2015.collection' 'es2015.generator' 'es2015.iterable' 'es2015.promise' 'es2015.proxy' 'es2015.reflect' 'es2015.symbol' 'es2015.symbol.wellknown' 'es2016.array.include' 'es2017.object' 'es2017.sharedmemory' 'es2017.string' 'es2017.intl' 'es2017.typedarrays' 'es2018.asyncgenerator' 'es2018.asynciterable' 'es2018.intl' 'es2018.promise' 'es2018.regexp' 'es2019.array' 'es2019.object' 'es2019.string' 'es2019.symbol' 'es2020.string' 'es2020.symbol.wellknown' 'esnext.array' 'esnext.symbol' 'esnext.asynciterable' 'esnext.intl' 'esnext.bigint'
```

Moving on, write this file:
```
// test.ts

let x: number | string = 1234
x = "1234"

console.log(x)
```

No configuration file is needed for running typescript here.  Just running `tsc`.

```
// test.js (compiled)
var x = 1234;
x = "1234";
console.log(x);
```

If you add the tsconfig.json file from below and copy test.ts (`cp test.ts test1.ts`) and rerun tsc you will get this output:

```
test.ts:1:5 - error TS2451: Cannot redeclare block-scoped variable 'x'.

1 let x: number | string = 1234
      ~

  test1.ts:1:5
    1 let x: number | string = 1234
          ~
    'x' was also declared here.

test1.ts:1:5 - error TS2451: Cannot redeclare block-scoped variable 'x'.

1 let x: number | string = 1234
      ~

  test.ts:1:5
    1 let x: number | string = 1234
          ~
    'x' was also declared here.


Found 2 errors.
```

Very interesting.

### Module and Target

These two attributes under `compilerOptions` seem to go together like peanut butter and jelly; or rather like typescript and maintainable frontend applications.

module is the version of es that you are writing.  target is the version that it will be compiled to.  This is called transpiling

I would probably do the esnext for module and es6 for target.  If you are supporting ie11 then I would set the target to es5. 


### A sample tsconfig.json file

This is from the webpack tutorial.

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}
```

```
"jsx": {
  "description": "Specify JSX code generation: 'preserve', 'react', or 'react-native'.",
  "enum": [ "preserve", "react", "react-native" ]
},
```

### Sourcemaps with tsconfig.json

Using our test.ts file earlier, if we add the line `"sourceMap": true` to the `compilerOptions` object of our `tsconfig.json` file, and run `tsc`; then you can see a test.map.js file was generated:

```
// dist/test.map.js

{"version":3,"file":"test.js","sourceRoot":"","sources":["../test.ts"],"names":[],"mappings":"AAAA,IAAI,CAAC,GAAoB,IAAI,CAAA;AAC7B,CAAC,GAAG,MAAM,CAAA;AAEV,OAAO,CAAC,GAAG,CAAC,GAAG,CAAC,EAAE,CAAC,CAAA"}
```

```
// dist/test.js
let x = 1234;
x = "1234";
console.log(`${x}`);
//# sourceMappingURL=test.js.map
```

I have no idea what this means...  But it works.  It looks kind of like genetic code to me.  This is an **unsolved mystery** to me-- that I don't think I need to look into just yet in my career.


## Onto Webpack!

```
// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

Unlike tsc which will compile every typescript file in a directory, webpack can choose an entrypoint.

Its output file will be called bundle.js

ts-loader will handle any files ending in .ts or .tsx the regex can be broken down like such:

Webpack will match either .ts or .tsx because see the `?` in the regular expression.

The call to `path.resolve(__dirname, 'dist')` is a node library, imported at the top.  See documentation here [node path doc][].  The use of `__dirname` is a global object available to all modules in a node environment.  See [node global objects]

But what about `awesome-typescript-loader`?  Onceuponatime I had an intern who converted an old react project to use the `ts-loader` giving the evidence that most people are using it and that it's faster: [https://www.npmtrends.com/awesome-typescript-loader-vs-ts-loader][]

## Sourcemaps

These guys are 100% necessary for debugging.  I don't view sourcemaps as optional.

Add the line `"sourceMap": true,` to the `compilerOptions` in tsconfig.json.

Add `devtool: 'inline-source-map'` to the main exports of your webpack module.  see [webpack devtool][]


### Only use sourcemaps with development: using webpack modes!

see [webpack mode][] and [webpack single config file][]






# Learn from where I learned!

Something to inspire you to delve deeper in your coding career: [pouet][]

Cheetsheet for GFM (GitHub Flavored Markdown): [markdown cheatsheet][]

Official GFM Spec: [gfm spec][]

Early markdown with ATX (2002)?  [atx][]

One long essay on the different versions of ES: [es versions][]

While doing learning on ts-loader I noticed something about yarn plug n' play (PnP).  I found this interesting article that explains that node doesn't know about packages and that `node_modules` works, but that a lot of computations are done for figuring out how to put together packages and doing IO copying.  Read more at [yarn PnP overview]

A must read typescript do's and dont's guide: [ts dos and donts][]


[pouet]: http://www.pouet.net/index.php
[tsconfig.json]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
[webpack typescript tutorial]: https://webpack.js.org/guides/typescript/
[markdown cheatsheet]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[gfm spec]: https://github.github.com/gfm/
[atx]: http://www.aaronsw.com/2002/atx/intro
[es versions]: https://www.freecodecamp.org/news/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e/
[node path doc]: https://nodejs.org/docs/latest/api/path.html
[node global objects]: https://nodejs.org/docs/latest/api/globals.html
[ts-loader is better]: https://www.npmtrends.com/awesome-typescript-loader-vs-ts-loader
[yarn PnP overview]: yarn PnP overvie://yarnpkg.com/en/docs/pnp 
[webpack devtool]: https://webpack.js.org/configuration/devtool/
[ts dos and donts]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html
[sourcemap magic]: https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-base64vlq
[wepack mode]: https://webpack.js.org/configuration/mode/
[webpack single config file]: https://medium.com/@ryandrewjohnson/one-webpack-config-to-rule-them-all-environments-that-is-277457769779
