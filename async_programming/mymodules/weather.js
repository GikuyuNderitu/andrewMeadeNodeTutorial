const request = require('request');
let baseurl = 'http://api.openweathermap.org/data/2.5/weather?q='

module.exports = function (apikey,callback,city) {
  let url = createURL(city, apikey)
  request({
    url: url,
    json: true
  },(error, response, body)=>{
    if (error) callback(error)
    else callback(null,body)
  })
};

let createURL = function (city, key) {
  return baseurl + city + '&appid=' + key +'&units=imperial'
}
