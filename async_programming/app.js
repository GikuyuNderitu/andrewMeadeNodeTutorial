const request = require('request');
let baseurl = 'http://api.openweathermap.org/data/2.5/weather?q=Annapolis&units=imperial'
let apikey = "aee920b7c6584f6d90294cda5c08ec2f"

let url = baseurl+'&appid='+apikey

request({
  url: url,
  json: true
},(error, response, body)=>{
  if (error) {
    console.log('Unable to fetch weather.');
  }else {
    //console.log(JSON.stringify(body, null, 2));
    let temp = body.main.temp
    let name = body.name

    console.log("It's "+temp+" in "+name+".");
  }
})
