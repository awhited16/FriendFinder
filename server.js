// Dependencies
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");
var app = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname+"/public"));

// user1 = [];
// user2 = [];
// difference = [];

// for (var i = 0; i < users.length; i++) {

//     for (var j = 0; j < scores.length; j++) {
//         parseInt(user1[j]);
//         parseInt(user[i].scores[j]);
//         var subtract = user.score[j] - user[i].score[j];
//         difference.push(Math.abs(subtract));
//         console.log(difference);
//     }

//     var userDifference = difference[0] + difference[1] + difference[2] + difference[3] + 
//     difference[4] + difference[5] + difference[6] + difference[7] + difference[8] + difference[9];
    
//     console.log(user.name + " and " + user[i].name + " match difference is " + userDifference);
// }


// console.log(difference)

app.get("/api/friends", function(req,res) {
    return res.json(friends);
});


// A POST routes /api/friends.
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

app.post("/api/tables", function(req,res) {
    var newFriends = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "/app/public/home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });