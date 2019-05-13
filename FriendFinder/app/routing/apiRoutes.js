// require dependencies

var path = require('path');

//import the list of friend entries
var friends = require('../data/friends.js')

//export API routes

module.exports = function(app) {

    //list of friend entries

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
    
    //Add a new friend
    app.post('/api/friends', function(req, res) {
        var newUser = req.body;
        var surveyRes = newUser.answers;
        //Check match

        var matchName = '';
        var matchImage = '';
        var scoreDelta = 100; //set high, each delta will dock points and seperate the candidates further

        //check through all existing friends in the list
        for (var i = 0; i < friends.length; i++) {
            var delta = 0;

            for ( var j = 0; j < surveyRes.length; j++) {

                delta += parseInt(friends[i].answers[j] - surveyRes[j][0]);

            }
            console.log(friends[i].name + " delta " + delta);

            if (delta < scoreDelta) {
                scoreDelta = delta;
                matchName = friends[i].name;
                matchImage = friends[i].image;
                console.log(scoreDelta, matchName, matchImage);
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