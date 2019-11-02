import * as React from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
// import Resume from "./components/resume/Resume";
import { createBrowserHistory } from "history";

const LandingPage = React.lazy(() => import("./components/home/LandingPage"));

export interface IAppProps {}

export const App: React.FC<IAppProps> = props => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Router history={createBrowserHistory()}>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
        <footer>
          <></>
        </footer>
      </Router>
    </React.Suspense>
  );
};

export default App;
