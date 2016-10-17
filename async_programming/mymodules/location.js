const request = require('request');
const url = 'http://ipinfo.io'

module.exports = function(callback){
  return new Promise((resolve, reject)=>{
    request({
      url: url,
      json: true
    },(error, response, body)=>{
      if (error) reject(error)
      else resolve(body)
    })
  })
};
