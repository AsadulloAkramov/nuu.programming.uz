const express = require('express');

const app = express();
app.use(express.static(__dirname + '/dist'))

app.get('', (req, res)=> {
  res.sendFile(__dirname + "dist/index.html ");
})

app.listen(4200, '0.0.0.0', ()=> {
  console.log("Application is running on port: 4200");
})