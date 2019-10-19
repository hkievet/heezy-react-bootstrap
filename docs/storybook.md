# Using Storybook as a Portfolio

I would like to get a job in London. For that, I started this project. I would like to showcase my skills to assure employers that I am a competent and developer.

Using Storybook, I'm able to show off some UI components.

When I worked at Infinite Campus, we had our own internal styleguide. I think that Storybook could have replaced it.

## Setting up storybook for react

~~The instructions recommend using awesome-typescript-loader which isn't very awesome anymore and ts-loader is the defacto (at least in my book. At my job we recently switched based on npm usage statistics.) ~~ In their experience awesome-ts-loader is better.

The storybook site recommends this for the tsconfig.json file. Whaow. Let's dig in to the meaning of some things.

```
{
"compilerOptions": {
  "outDir": "build/lib",
  "module": "commonjs",
  "target": "es5",
  "lib": ["es5", "es6", "es7", "es2017", "dom"],
  "sourceMap": true,
  "allowJs": false,
  "jsx": "react",
  "moduleResolution": "node",
  "rootDirs": ["src", "stories"],
  "baseUrl": "src",
  "forceConsistentCasingInFileNames": true,
  "noImplicitReturns": true,
  "noImplicitThis": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "suppressImplicitAnyIndexErrors": true,
  "noUnusedLocals": true,
  "declaration": true,
  "allowSyntheticDefaultImports": true,
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "build", "scripts"]
}
```

rootDirs: <todo>

## Installing storybook:

`npx -p @storybook/cli sb init`
