const weather = require('./mymodules/weather');
let apikey = "aee920b7c6584f6d90294cda5c08ec2f"

let printData = function(err, data){
  if(err) console.error(err);
  else{
    let temp = data.main.temp
    let name = data.name

    console.log("It's "+temp+" in "+name+".");
  }
}

weather(apikey, printData)
