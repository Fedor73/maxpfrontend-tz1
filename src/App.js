import React from 'react'
import { routes } from './routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import  Navigation  from './components/Navigation'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navigation routes={routes.filter(route => route.isNavBar)}/>
        <h1>роуты</h1>
      </React.Fragment>
    </Router>
  );
};

export default App;