const request = require('request');
let baseurl = 'http://api.openweathermap.org/data/2.5/weather?q='

module.exports = function (apikey,city) {
  return new Promise((resolve, reject)=>{
    if(typeof city === 'undefined') reject('No city provided')
    else {
      let url = createURL(city, apikey)
      request({
        url: url,
        json: true
      },(error, response, body)=>{
        if (error) reject('No city provided')
        else resolve(body)
      })
    }
  })
};

let createURL = function (city, key) {
  return baseurl + city + '&appid=' + key +'&units=imperial'
}
