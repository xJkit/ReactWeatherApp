import React from 'react';

let WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    let cityName = this.refs.city.value;
    //validation input data
    if (cityName.length > 0){
      this.refs.city.value = ""; //clear input value
      this.props.onCitySearch(cityName);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Plz Enter City Name" ref="city"/>
        <button type="submit" className="success button expanded">Get Weather!</button>
      </form>
    )
  }
});

module.exports = WeatherForm;
