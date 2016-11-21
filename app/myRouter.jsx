// components
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import ChildCom from 'child/ChildCom'

// react-route
import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';

//main
const myRouter = (
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <Route path="child" component={ChildCom} />
    </Route>
  </Router>
)

export default myRouter
