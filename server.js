var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`You are now connected on port:${PORT}` )});

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
      });