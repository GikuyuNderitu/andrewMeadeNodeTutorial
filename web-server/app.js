const express = require('express');
const middleware = require('./middleware');
const app = express()
const port = 3000

app.use(middleware.logger)

//app.use(middleware.requireAuthentication)

app.get('/about', (req, resp)=>{
  resp.send('About Us')
})

app.use(express.static(__dirname+'/public'))

app.listen(port, ()=>{
  console.log('Server Initialized on port '+ port +'.');
})
