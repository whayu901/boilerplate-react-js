import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// screens
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NotFound from "../pages/404";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
