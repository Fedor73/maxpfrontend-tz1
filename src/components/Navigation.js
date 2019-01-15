import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => (
  <header>
    {props.routes.map(route =>
      <NavLink exact={route.isExact} activeClassName='active' key={route.path} to={route.path}>{route.name}</NavLink>
    )}
  </header>
);

export default Navigation

