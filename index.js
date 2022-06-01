const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
console.log(port);
const app = express();
app.use(express.static(__dirname + '/dist'))

app.get('', (req, res)=> {
  res.sendFile(__dirname + "dist/index.html ");
})

app.listen(process.env.PORT || 8000 , '0.0.0.0', ()=> {
  console.log("Application is running on port: 4200");
})