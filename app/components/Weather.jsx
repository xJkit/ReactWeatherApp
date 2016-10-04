import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

let Weather = React.createClass({
  getInitialState: function() {
    return {
    //   city: 'Taiwan',
    //   temp: 25,
    //   lon: "",
    //   lat: ""
    isLoading: false,
    error: false
    }
  },
  handleCitySearch: function(updateData) {
    this.setState({isLoading: true, error: false });
    openWeatherMap.getTemp(updateData.city)
    .then(function(newData){
      updateData.temp = newData.temp;
      updateData.city = newData.city;
      updateData.lon = newData.lon;
      updateData.lat = newData.lat;
      updateData.isLoading = false;
      updateData.error = false;

      this.setState(updateData);
      //updateData is an object: {city: xxx}
    }.bind(this))
    .catch(function(err){
      console.log('發生錯誤： ',err);
      this.setState({
        isLoading: false,
        error: true
      });
    }.bind(this))
  },
  render: function(){
    let {city, temp, lon, lat, isLoading, error} = this.state;

    function renderMessage(){
      if (isLoading && !error){
        return (<h1>loading....</h1>);
      } else if (city && temp && lon && lat && !error &&!isLoading){
        return (
          <WeatherMessage
          cityName={city}
          cityTemp={temp}
          cityLon={lon}
          cityLat={lat}
          />
        )
      } else if (error){
        return (
          <h1>找不到資料！</h1>
        );
      } else{
        return;
      }
    }

    return(
        <div>
          <h3>Get Weather</h3>
          <WeatherForm onCitySearch={this.handleCitySearch} />
          {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
