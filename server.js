var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./FriendFinder/app/routing/apiRoutes')(app);
require('./FriendFinder/app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('Listening on PORT: ' + PORT);
})