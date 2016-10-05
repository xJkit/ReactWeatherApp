// components
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// react-route
import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';

//main
const myRouter = (
  <Router history={hashHistory}>
    <Route component={Main}>
      <Route path="/" component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>
)

export default myRouter
