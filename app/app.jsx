import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import {
  Route,
  Router,
  IndexRoute,
  hashHistory
} from 'react-router';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Main}>
      <Route path="/" component={Weather} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('root')
);
