import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Load Container Pages
import App from 'containers/App';
import MRT from 'containers/MRT';
import About from 'containers/About';
import NotFound from 'containers/NotFound';

// Root Path
const ROOT = '/';

// routes
const routes = (
  <Route path={ROOT} component={App}>
    <IndexRoute component={MRT} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
