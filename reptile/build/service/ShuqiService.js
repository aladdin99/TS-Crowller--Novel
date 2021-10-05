"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var ShuqiService = /** @class */ (function () {
    //单例模式
    function ShuqiService() {
    }
    ShuqiService.getInstance = function () {
        if (!ShuqiService.instance) {
            ShuqiService.instance = new ShuqiService();
        }
        return ShuqiService.instance.getRecommendList;
    };
    /**
     * 获取 主编强推目录
     */
    ShuqiService.prototype.getRecommendList = function (htmlResult) {
        if (htmlResult === '' && typeof (htmlResult) === 'string')
            return htmlResult;
        var recommendationList = [];
        var $ = cheerio_1.default.load(htmlResult);
        var chapterList = $('.mainrec .cp-ranks-list li');
        chapterList.map(function (index, element) {
            recommendationList.push({
                title: $(element).find('.title').not('.no').text(),
                author: $(element).find('.info .auth').text(),
                url: $(element).find('a').attr('href'),
                img: $(element).find('.info img').attr('src'),
                desc: $(element).find('.info .desc').text().replace(/\n +/g, ""),
            });
        });
        return JSON.stringify({
            time: new Date().getTime(),
            data: recommendationList
        });
    };
    return ShuqiService;
}());
exports.default = ShuqiService;
