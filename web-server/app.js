const express = require('express');
const app = express()
const port = 3000

let middleware = {
  requireAuthentication: (req, res, next)=>{
    console.log('Private route hit');
    next()
  },
  logger: (req, res, next) =>{

    console.log(new Date().toString()+'Request: '+req.method + ' ' + req.originalUrl);
    next()
  }
}

app.use(middleware.logger)

//app.use(middleware.requireAuthentication)

app.get('/about', (req, resp)=>{
  resp.send('About Us')
})

app.use(express.static(__dirname+'/public'))

app.listen(port, ()=>{
  console.log('Server Initialized on port '+ port +'.');
})
