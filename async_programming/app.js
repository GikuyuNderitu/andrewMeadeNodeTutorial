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

const apikey = "aee920b7c6584f6d90294cda5c08ec2f"

/*This function receives data passed by the weather promise function
 *and prints the temperature and location of that temperature
 */
let printData = function(data){
  let temp = data.main.temp

  let name = data.name

  console.log("It's "+temp+" in "+name+".");

}

/*This function receives data passed by the location promise function
 *and returns a promise to the weather promise function
 */
let locationData = function(data){
   return weather(apikey, data.city)
}



if(args.location != '' && typeof args.location === 'string'  ){
  if(args.location.length > 3)
    weather(apikey, args.location).then(printData)
  else{
    console.log('The location you supplied was not long enough')
    console.log('We will approximate your current location and use that instead');
    location()
      .then(locationData)
      .then(printData)
  }
}else{
  weather(apikey, args.location)
    .catch((msg)=>{
      console.error(msg)
      console.log('We will approximate your current location and use that instead');
      return location()
    })
    .then(locationData)
    .then(printData)
}
