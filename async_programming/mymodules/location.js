const request = require('request');
const url = 'http://ipinfo.io'

module.exports = function(callback){
  request({
    url: url,
    json: true
  },(error, response, body)=>{
    if (error) callback(error)
    else callback(null,body)
  })
};
