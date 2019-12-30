import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "../pages/home";
import Details from "../pages/details";
import Ec2 from "../pages/ec2_instances";
import Lambda from "../pages/lambda";
import Policies from "../pages/policies";
import Roles from "../pages/roles";
import Login from "../pages/login";
import Register from "../pages/register";
import Securitygroups from "../pages/securityGroups";
import Step from "../pages/stepFunctions";
// import Table from "./Table.js";

const BrowserRouter = () => (
  <Router>
    <Switch>
      <Route path="/home" component={Home} exact />
      <Route path="/details" component={Details} exact />
      <Route path="/ec2_instances" component={Ec2} exact />
      <Route path="/lambda" component={Lambda} exact />
      <Route path="/policies" component={Policies} exact />
      <Route path="/roles" component={Roles} exact />
      <Route path="/securityGroups" component={Securitygroups} exact />
      <Route path="/stepFunctions" component={Step} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/register" component={Register} exact />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
);
export default BrowserRouter;
