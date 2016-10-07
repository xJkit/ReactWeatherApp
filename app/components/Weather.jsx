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
    errorMessage: undefined,
    temp: undefined,
    city: undefined,
    lon: undefined,
    lat: undefined
    }
  },

  componentWillReceiveProps: function(nextProps){
    let location =  nextProps.location.query.location
    // let encodedLocation = encodeURIComponent(location)
    if (location && location.length > 0){
      this.handleCitySearch(location)
      window.location.hash = '#/'
    }
  },

  handleCitySearch: function(loc) {

    this.setState({
      isLoading: true,
      errorMessage: undefined
    })

    let updateData = {}

    openWeatherMap.getTemp(loc)
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
  },

  componentDidMount: function(){
    let location = this.props.location.query.location
    if (location && location.length > 0){
      this.handleCitySearch(location)
      window.location.hash = '#/'
    }
  }
});

module.exports = Weather;
