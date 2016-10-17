const request = require('request');
const baseurl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apikey = "aee920b7c6584f6d90294cda5c08ec2f"

let printData = function(data){

  let temp = data.main.temp

  let name = data.name

  console.log("It's "+temp+" in "+name+".");

}

let getWeather = function (city) {
  return new Promise((resolve, reject)=>{
    if(!city)
      reject('No city Provided')

    let url = createURL(city, apikey)

    request({
      url: url,
      json: true
    },(error, response, body)=>{
      if (error) reject(error)
      else resolve(body)
    })

  })
};

let createURL = function (city, key) {
  return baseurl + city + '&appid=' + key +'&units=imperial'
}

getWeather('Annapolis')
  .then(printData)
  .catch((error)=>{
    console.error(error+' Using Annapolis instead.');
    getWeather('Annapolis')
    .catch((error)=>{
      console.error(error);
    })
})
