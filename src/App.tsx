import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SmokeType from "./pages/SmokeType";
import SmokeGoods from "./pages/SmokeGoods";
import GettingStarted from "./pages/GettingStarted";
import NotFound from "./pages/NotFound";
import Top from "./pages/Top";
import Header from "./organisms/Header";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route path="/smokeType">
            <SmokeType />
          </Route>
          <Route path="/smokeGoods">
            <SmokeGoods />
          </Route>
          <Route path="/gettingStarted">
            <GettingStarted />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
