const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
var AYLIENTextAPI = require('aylien_textapi');
const bodyParser = require('body-parser');
const cors = require('cors');


var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/analyze', (req, res) => {
  console.log(req.body.mysite)
  textapi.sentiment({
        url: req.body.mysite
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
});
