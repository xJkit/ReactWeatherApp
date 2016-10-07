import React from 'react';
import NavLink from 'NavLink';

const Nav = React.createClass({
  onSearch: function(e){
        e.preventDefault()
        let city = this.refs.searchCity.value
        let encodedCity = encodeURIComponent(city)
        this.refs.searchCity.value = ''
        window.location.hash ='#/?location=' + encodedCity
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather</li>
            <li>
              <NavLink to="/">Get Weather</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/examples">Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="text" placeholder="Search weather" ref="searchCity"/>
              </li>
              <li>
                <input type="submit" className="button hollow" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
