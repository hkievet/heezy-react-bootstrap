# How to import a hard coded json file into a ts file?

Add this to tsconfig.js

```
    "moduleResolution": "node",
    "resolveJsonModule": true
```

Then import a json file in a ts/tsx file using:

`import * as data from './relative/path/to/data.json'`

