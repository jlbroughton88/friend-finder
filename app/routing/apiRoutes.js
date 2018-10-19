// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//     This route will also be used to handle the compatibility logic.

//apiRoutes.js
// Contains logic for any routes 
// Gives back JSON
// Interacts with friends.js

var friendsData = require("../data/friendsData");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/survey", function (req, res) {
        friendsData.push(req.body);
        res.json(true)
    })

}





