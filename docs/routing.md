# Routing with React and Netlify

## Install

~~`yarn add react-router`~~
~~`yarn add -D @types/react-router`~~

`yarn add react-router-dom`

## Why does Router need history in typescript?

I guess you need to run `yarn add history`


## Fixing webpack dev server

https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
```
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist"
  }
```


## Putting it together:

```
import * as React from "react";
import { Router, Route, Link } from "react-router-dom";
import Resume from "./components/resume/Resume";
import { createBrowserHistory } from "history";

export interface IAppProps {}

export const App: React.FC<IAppProps> = props => {
  return (
    <Router history={createBrowserHistory()}>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <div className="mauve-card">App</div>
      <Route path="/resume" component={Resume} />
    </Router>
  );
};

export default App;
```


## Which router for react?

There seems to be two different routers that are commonly used for react: Reach Router and React Router.

I read [which router][] to figure out which router I wanted to use for my project.

... just kidding.  React router is by far the more popular router (38k likes vs 5.9k likes on github).

## How to setup routing for a etlify deploy

This is a big todoooo

[which router]: https://alligator.io/react/reach-router-vs-react-router/
