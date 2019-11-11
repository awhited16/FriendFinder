// Dependencies
var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
// var friends = require("../FriendFinder/app/data/friends");
// var apiRoutes = require("./app/routing/apiRoutes");
// var htmlRoutes = require("./app/routing/htmlRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname+"./app/public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("/api/friends", function(req,res) {
//     return res.json(friends);
// });


// A POST routes /api/friends.
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

// app.post("/api/friends", function(req,res) {
//     var newFriend = req.body;
//     console.log(newFriend);
//     friends.push(newFriend);
//     res.json(newFriend);
// });

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });

// app.get("default", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });

// console.log(apiRoutes);
// console.log(friends);
// console.log(htmlRoutes);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });