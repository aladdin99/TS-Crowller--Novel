"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShuqiController_1 = __importDefault(require("./controller/ShuqiController"));
var router = (0, express_1.Router)();
router.get("/", function (_req, _res) {
    _res.send("<div style=\"color:red;font-size:100px;\">\u515A</div>");
});
router.get("/getData", function (_req, _res) {
    (0, ShuqiController_1.default)();
    _res.send("<div>\u83B7\u53D6\u6570\u636E</div>");
});
exports.default = router;
