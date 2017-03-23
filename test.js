var express = require('express');
var path = require('path');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World! + 1')
// })

// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname + '/client/index.html'));
// });
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  console.log('sooabm');
  res.sendFile(path.join(__dirname + '/client/index.html'));
})
app.use(express.static(path.join(__dirname + '/assets/')))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
