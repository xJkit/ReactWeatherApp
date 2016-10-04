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
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('root')
);
