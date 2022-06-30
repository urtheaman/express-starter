"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.get("/user", function (req, res) {
    res.json({ data: { name: "The Aman", age: 21 } });
});
app.post("/user", function (req, res) {
    // sending request to a db with req.body
    console.log(req.body);
    res.send("user created successfully");
});
app.get("/:user", function (req, res) {
    res.json({
        data: "it's a request which isn't getting managed",
        param: req.params.user
    });
});
app.get("/", function (_, res) {
    res.json({
        data: {
            users: [
                {
                    name: "Aman",
                    age: 21
                },
                {
                    name: "Khushi",
                    age: 21
                },
            ]
        }
    });
    app.get("*", function (_, res) { return res.send("file does't exist"); });
});
app.listen(process.env.port || 443, function () { return console.log("Listening on default http port"); });
