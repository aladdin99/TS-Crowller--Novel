"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var ShuqiController_1 = __importDefault(require("./controller/ShuqiController"));
var util_1 = require("./utils/util");
// 解析 request 返回的参数
var Url = require('url-parse');
var router = (0, express_1.Router)();
// 登陆中间件，预先判断是否登陆。
var checkLogin = function (_req, _res, next) {
    var isLogin = _req.session ? _req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        _res.json((0, util_1.getResponseData)("null", "请先登陆！"));
    }
};
// 主页
router.get("/", function (_req, _res) {
    var isLogin = _req.session ? _req.session.login : false;
    if (isLogin) {
        _res.send("\n            <html>\n                <body>\n                    <a href=\"/getData\">\u722C\u53D6\u5185\u5BB9</a>\n                    <a href=\"/showData\">\u5C55\u793A\u5185\u5BB9</a>\n                    <a href=\"/logout\">\u9000\u51FA</a>\n                </body>\n            </html>\n        ");
    }
    else {
        _res.send("\n            <html>\n                <body>\n                    <form method=\"post\" action=\"/login\">\n                        <input type=\"password\" name=\"password\"/>\n                        <button>\u767B\u5F55</button>\n                    </form>\n                </body>\n            </html>\n        ");
    }
});
// 退出
router.get("/logout", function (_req, _res) {
    if (_req.session) {
        _req.session.login = false;
    }
    _res.json((0, util_1.getResponseData)(true));
});
// 登陆
router.post("/login", function (_req, _res) {
    var password = _req.body.password;
    var isLogin = _req.session ? _req.session.login : false;
    if (isLogin) {
        _res.json((0, util_1.getResponseData)(false, "已经登陆过"));
    }
    else {
        if (password === '123' && _req.session) {
            _req.session.login = true;
            _res.json((0, util_1.getResponseData)(true));
            // _res.redirect('/');
        }
        else {
            _res.json((0, util_1.getResponseData)(false, "登录失败"));
        }
    }
});
// 爬取数据
router.get("/getData", checkLogin, function (_req, _res) {
    (0, ShuqiController_1.default)();
    _res.json((0, util_1.getResponseData)(true));
});
// 展示数据
router.get("/showData", checkLogin, function (_req, _res) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/书旗小说网/recommendList.json');
        var result = fs_1.default.readFileSync(position, 'utf8');
        _res.json((0, util_1.getResponseData)(JSON.parse(result)));
    }
    catch (e) {
        _res.json((0, util_1.getResponseData)(false, "数据不存在！"));
    }
});
exports.default = router;
