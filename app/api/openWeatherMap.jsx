import axios from 'axios';
const API_Key = "8912ab908b92a40e657fe54d5af8fed9";
const OPEN_MAP_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather`;

module.exports = {
  getTemp: function(location){
    let encodedLocation = encodeURIComponent(location);
    // 必須將整個 axios (Promise 物件)都 return 才能在檔案之外做 Promise chaining
    return axios.get(OPEN_MAP_WEATHER_URL, {
      params: {
        appid: API_Key,
        q: encodedLocation
      }
    })
    .then(function(res){
      //若傳輸成功但是 server 仍然回應錯誤訊息的判斷
      /*
        {
          cod: 401,
          message: "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
        }
        找不到城市：
        {
          cod: "502",
          message: "Error: Not found city"
        }
      */
      if (res.data.cod && res.data.message){
        debugger;
        throw new Error(res.data.message);
      } else {
        let {coord: {lon, lat}, main: {temp, humidity}, name} = res.data;
        let newData = {
          lon: lon,
          lat: lat,
          temp: temp,
          hum: humidity,
          city: name
        }
        return newData;
      }
    })
    .catch(function(err){
      throw new Error(err.response.data.message);
    })
  }
}
