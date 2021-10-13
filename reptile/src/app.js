"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get("/", function (_req, _res) {
    _res.send(_req.body);
});
app.listen("8099", function () {
    console.log("server is running!");
});
