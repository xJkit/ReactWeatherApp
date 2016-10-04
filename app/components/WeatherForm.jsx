import React from 'react';

let WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    let updateData = {};
    let cityName = this.refs.city.value;
    //validation input data
    if (cityName.length > 0){
      this.refs.city.value = ""; //clear input value
      updateData.city = cityName;
      this.props.onCitySearch(updateData);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Plz Enter City Name" ref="city"/>
        <button >Get Weather!</button>
      </form>
    )
  }
});

module.exports = WeatherForm;
