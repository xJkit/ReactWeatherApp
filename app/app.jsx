import React from 'react';
import ReactDOM from 'react-dom';
import myRouter from 'myRouter' //routing module

// Load foundation
import 'style!css!foundation-sites/dist/foundation.min.css'
$(document).foundation()

// Custom css
import 'style!css!sass!applicationStyles'

ReactDOM.render(
  myRouter,
  document.getElementById('root')
);
