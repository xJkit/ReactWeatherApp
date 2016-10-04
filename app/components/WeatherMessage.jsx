import React from 'react';

const WeatherMessage = (props) => {
  let {cityName: city, cityTemp: temp, cityLon: lon, cityLat: lat} = props;
  return(
    <h3>{city} is {temp} deg located at {lon}, {lat}</h3>
  )
}
module.exports = WeatherMessage;
