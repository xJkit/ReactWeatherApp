import React from 'react';
import {Link, IndexLink} from 'react-router';
// 
// let Nav = React.createClass({
//   render: function(){
//     return(
//       <ul>
//         <h1>React Weather</h1>
//         <IndexLink to="/" activeClassName="active" activeStyle={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>Examples</Link>
//       </ul>
//     );
//   }
// });
//

const Nav = (props) => {
  return (
    <ul>
      <h1>React Weather</h1>
      <IndexLink to="/" activeClassName="active" activeStyle={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={{backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}>Examples</Link>
    </ul>
  )
}


module.exports = Nav;
