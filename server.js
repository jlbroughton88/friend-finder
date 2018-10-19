    var express = require("express");
    var path = require("path");

    // Sets up Express
    // Tells node that we are creating an "express" server
    var app = express();
    var PORT = process.env.PORT || 8080

    // MIDDLEWEAR
    // Sets up the Express app to handle data parsing
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // The below points our server to a series of "route" files.
    // These routes give our server a "map" of how to respond when users visit or request data from various URLs.
    var apiRoutes =require("./app/routing/apiRoutes")(app)
    var htmlRoutes = require("./app/routing/htmlRoutes")(app)
    
    // The below code effectively "starts" our server
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT)
        console.log("Server listening at http://localhost:" + PORT)
    })