var express = require('express');
var path = require('path');

var app = express();
const PORT = process.env.PORT || 3000; // use environment constant to suit server condition

// set middleware to hook the https trafic directed to http
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url)

  } else {
    next()
  }
})

app.use(express.static('public'));
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(PORT, function(){
  console.log('express fires up at PORT ' + PORT);
});
