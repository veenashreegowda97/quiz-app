import React from "react";
import "./App.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import BarGraph from "../src/components/BarGraph";

import Main from "./modules/main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/graph" exact component={BarGraph}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
