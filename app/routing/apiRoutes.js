// Import Dependencies
var friends = require("../data/friends");

// Create variable to export
module.exports = function(app) {
    // A GET route with the url /api/friends.
    app.get("/api/friends", function(req,res) {
        return res.json(friends);
    });


    // A POST routes /api/friends.
    app.post("/api/friends", function(req,res) {
        var newFriend = req.body;
        console.log(newFriend);
        // res.json(newFriend);
        var differences = [];
        calculateDifference();
        console.log(differences);
        calculateMatch();
       
        // Calculates the difference between new users score and each friend already in list, then adds each of the differences to an array
        function calculateDifference() {
            // Loops through each friend to find their total difference from the newFriend, and logs difference
            for (var i = 0; i < friends.length; i++) {
  
            var difference1 =  (parseInt(newFriend.scores[0])) - parseInt(friends[i].scores[0]);
            var difference2 =  (parseInt(newFriend.scores[1])) - parseInt(friends[i].scores[1]);
            var difference3 =  (parseInt(newFriend.scores[2])) - parseInt(friends[i].scores[2]);
            var difference4 =  (parseInt(newFriend.scores[3])) - parseInt(friends[i].scores[3]);
            var difference5 =  (parseInt(newFriend.scores[4])) - parseInt(friends[i].scores[4]);
            var difference6 =  (parseInt(newFriend.scores[5])) - parseInt(friends[i].scores[5]);
            var difference7 =  (parseInt(newFriend.scores[6])) - parseInt(friends[i].scores[6]);
            var difference8 =  (parseInt(newFriend.scores[7])) - parseInt(friends[i].scores[7]);
            var difference9 =  (parseInt(newFriend.scores[8])) - parseInt(friends[i].scores[8]);
            var difference10 = (parseInt(newFriend.scores[9])) - parseInt(friends[i].scores[9]);
  
            var totalDifference = Math.abs(difference1) + Math.abs(difference2) + Math.abs(difference3) + Math.abs(difference4) + 
            Math.abs(difference5) + Math.abs(difference6) + Math.abs(difference7) + Math.abs(difference8) + Math.abs(difference9) + Math.abs(difference10);
  
            console.log(friends[i].name + " total difference: " + totalDifference);

            differences.push(totalDifference);
             
            }
        }

        // Calculates the minimum difference that exists in the array of differences. Then uses the index of the min as the index of the match to identify match
        function calculateMatch() {
            var min = Math.min.apply(Math, differences);
            console.log(min);
            for (var k = 0; k < differences.length; k++) {
                if (differences[k] === min) {
                    var matchIndex = k;
                    console.log(matchIndex);
                    var match = friends[k]
                    console.log(match);
                    res.json(match);
                }
            }
            
        }
          
        friends.push(newFriend);
    
    });
};