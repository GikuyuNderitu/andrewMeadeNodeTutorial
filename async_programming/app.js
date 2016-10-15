const weather = require('./mymodules/weather');
const location = require('./mymodules/location');
const args = require('yargs')
  .option('location',{
    alias: 'l',
    demand: false,
    description: 'Location for which to search the weather',
    type: 'string'
  })
  .help('help')
  .argv

let apikey = "aee920b7c6584f6d90294cda5c08ec2f"

let printData = function(err, data){
  if(err) console.error(err);
  else{
    let temp = data.main.temp

    let name = data.name

    console.log("It's "+temp+" in "+name+".");
  }
}

let locationData = function(err,data){
  if(err) console.error(err);

  else{
    weather(apikey,printData, data.city)
  }
}

if(args.location != '' && typeof args.location === 'string'  ){
  if(args.location.length > 3)
    weather(apikey, printData, args.location)
  else
    console.log('The location you supplied was not long enough')
}else{
  location(locationData)
}
