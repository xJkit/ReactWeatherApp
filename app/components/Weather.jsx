import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
import openWeatherMap from 'openWeatherMap';

let Weather = React.createClass({
  getInitialState: function() {
    return {
    //   city: 'Taiwan',
    //   temp: 25,
    //   lon: "",
    //   lat: ""
    isLoading: false,
    }
  },
  handleCitySearch: function(updateData) {

    this.setState({
      isLoading: true,
      errorMessage: undefined
    })

    openWeatherMap.getTemp(updateData.city)
    .then(function(newData){
      updateData.temp = newData.temp;
      updateData.city = newData.city;
      updateData.lon = newData.lon;
      updateData.lat = newData.lat;
      updateData.isLoading = false;
      this.setState(updateData);
      //updateData is an object: {city: xxx}
    }.bind(this))
    .catch(function(err){
      debugger;
      console.log('發生錯誤： ' + err);
      this.setState({
        isLoading: false,
        errorMessage: err.message
      })
    }.bind(this))
  },

  render: function(){
    let {city, temp, lon, lat, isLoading, errorMessage} = this.state;

    function renderMessage(){
      if (isLoading){
        return (<h1 className="text-center">loading....</h1>);
      } else if (city && temp && lon && lat){
        return (
          <WeatherMessage
          cityName={city}
          cityTemp={temp}
          cityLon={lon}
          cityLat={lat}
          />
        )
      }
    }

    function renderError(){
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal
            message={errorMessage}
          />
        )
      }
    }

    return(
        <div>
          <h3 className="text-center page-title">Get Weather</h3>
          <WeatherForm onCitySearch={this.handleCitySearch} />
          {renderMessage()}
          {renderError()}
        </div>
    );
  }
});

module.exports = Weather;
