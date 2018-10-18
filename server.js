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
    require("/routes/apiroutes")(app)
    require("routes/htmlroutes")(app)
    
    // The below code effectively "starts" our server
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT)
    })