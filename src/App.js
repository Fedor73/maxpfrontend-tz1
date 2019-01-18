import React from "react";
import { routes } from "./routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navigation routes={routes.filter(route => route.isNavBar)} />
        <h1>роуты</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={NewsContainer} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
