import React from 'react';

const WeatherMessage = (props) => {
  let {cityName: city, cityTemp: temp, cityLon: lon, cityLat: lat} = props;
  return(
    <div>
      <ul className="menu vertical">
        <li>城市：{city}</li>
        <li>溫度：{temp}</li>
        <li>經度：{lon}</li>
        <li>緯度：{lat}</li>
      </ul>
    </div>
  )
}
module.exports = WeatherMessage;
