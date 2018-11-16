// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var path = require('path');
var friendData = require('../data/friends.js');
var scoreDiff = 0;


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {

        var friendFinder = {
            name: "",
            image: ""
        };
        var userInfo = req.body;
        var userName = userInfo.name;
        var userImage = userInfo.image;
        var userScore = userInfo.scores;

        var scoreDiff = 0;


        // get the scores from the friends in the friends.js file
        for (var i = 0; i < [friends].length - 1; i++) {
            console.log(friends[i].name);
            scoreDiff = 0;

            // go over each friend's scores and get the difference between the user's score and the friend's 

            for (var j = 0; j < 10; j++) {
                // the difference between the two scores and add them into the scoreDiff
                scoreDiff += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));
                // check if the sum of scoreDiff is less then the difference of the current best friend
                if (scoreDiff <= friendFinder.friendDifference) {

                    // Reset the friendFinder to be the new friend. 
                    friendFinder.name = friends[i].name;
                    friendFinder.photo = friends[i].photo;
                    friendFinder.friendDifference = scoreDiff;
                }
            }
        }

        friends.push(userInfo);

        res.json(friendFinder);
    });
};