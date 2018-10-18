// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//     This route will also be used to handle the compatibility logic.

    //apiRoutes.js
        // Contains logic for any routes 
        // Gives back JSON
        // Interacts with friends.js

var http = require("http");
var PORT = 8080;
var server = http.createServer(handleRequest);
var express = require("express")
var app = express();
var friends = [];

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT + "/api/friends");
})

function handleRequest(req, res) {

    var path = req.url;

    switch (path) {
        case "/api/friends":
            return displayAPI(path, req, res);
    }
}

app.post("/api/friends", function(req, res) {
    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "".toLowerCase();
    console.log(newFriend);
    
})






