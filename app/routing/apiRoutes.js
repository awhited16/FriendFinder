var friends = require("../data/friends");

// Create variable to export
module.export = function(app) {
    // A GET route with the url /api/friends.
    // This will be used to display a JSON of all possible friends.
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
};