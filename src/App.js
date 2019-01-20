import React from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Main from "./components/Main";
import News from "./components/News";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import PrivateRoute from "./containers/PrivateRoute";
import LoginContainer from "./containers/LoginContainer";
import "./index.css";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navigation routes={routes.filter(route => route.isNavBar)} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/news" component={News} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
