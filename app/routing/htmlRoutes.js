// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 

// htmlRoutes.js
    // Contains any logic for routes that i want to display html
        // aka get/post
        // aka sendfile

var http = require("http");
var PORT = 8080;
var path = require("path");
var express = require("express");
var app = express();

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/servey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/servey.html"))
})

