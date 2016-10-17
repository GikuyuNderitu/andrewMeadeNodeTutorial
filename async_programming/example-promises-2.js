const request = require('request');
const baseurl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apikey = "aee920b7c6584f6d90294cda5c08ec2f"

let printData = function(data){

  let temp = data.main.temp

  let name = data.name

  console.log("It's "+temp+" in "+name+".");

}

let createURL = function (city, key) {
  return baseurl + city + '&appid=' + key +'&units=imperial'
}
/*let doWork=function(shouldFail){
  return new Promise((resolve, reject)=>{
    setTimeout(function () {
      console.log('Done');
      if(typeof shouldFail === 'boolean') reject('Failed')
      resolve()
    }, 1000)
  })
}


doWork().then(()=>{
  return doWork(true)
}).then(()=>{
  console.log('complete');
}).catch((msg)=>{
  console.error(msg);
})*/
let getLocation = function (){
  return new Promise((resolve, reject)=>{
    resolve('Philadelphia')
    reject('No weather')
  })
}

let getWeather = function (city){
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
}

getLocation()
  .then((loc)=>{
    return getWeather(loc)
  })
  .then(printData)
  .catch((msg)=>{
    console.error(msg);
  })
  .catch((msg)=>{
    console.error(msg);
  })
