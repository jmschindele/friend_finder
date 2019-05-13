//require dependencies

var express = require("express");
var path = require('path');

//configure express
var app = express();
var PORT = process.env.PORT || 3000;

// Expose the public directory
app.use(express.static(path.join(__dirname, '.app/public')));

app.use(express.json());

//middleware for parsing incoming request bodies

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//require routes
require('./FriendFinder/app/routing/apiRoutes')(app);
require('./FriendFinder/app/routing/htmlRoutes')(app);

//Start listening on PORT
app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
})