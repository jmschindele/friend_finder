// require dependencies

var path = require('path');

//import the list of friend entries
var friends = require('../data/friends.js')

//export API routes

module.exports = function(app) {

    //list of friend entries

    app.get('/api/friends', function(req, res) {
        res.send(friends);
    });
    
    //Add a new friend

    app.post('/api/friends', function(req, res) {
        var newUser = req.body;
        
        var surveyRes = newUser.answers;

        //Check match

        var matchName = '';
        var matchImage = '';
        var scoreDelta = 0;

        //check through all existing friends in the list
        for (var i = 0; i < friends.length; i++) {

            var delta = 0;

            for ( var j = 0; j < surveyRes.length; j++) {
                delta += friends[i].scores[j] = surveyRes[j];
            }
            console.log("delta = " + delta);

            if (delta < scoreDelta) {
                scoreDelta = delta;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(newUser);
        res.json({
            status: 'OK',
            matchName,
            matchImage
        });
    });

 };