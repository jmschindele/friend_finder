//require dependencies

var path = require('path');

//export paths
module.exports = function(app) {

    //set home directory
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));

    });
    

    //set survey directory
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    //make anything else go to home page
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })
    
}