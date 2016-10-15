const request = require('request');
let baseurl = 'http://api.openweathermap.org/data/2.5/weather?q=Annapolis&units=imperial'

module.exports = function (apikey,callback) {
  let url = baseurl + '&appid='+apikey
  request({
    url: url,
    json: true
  },(error, response, body)=>{
    if (error) callback(error)
    else callback(null,body)
  })
};
