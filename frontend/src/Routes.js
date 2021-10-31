import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Ropa from "./containers/Ropa";
import Maquillaje from "./containers/Maquillaje";
import NotFound from "./components/Routing/NotFound";

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={Home} props={childProps} />
    <Route path="/" exact component={Ropa} props={childProps} />
    <Route path="/" exact component={Maquillaje} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
