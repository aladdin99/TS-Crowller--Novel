"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var HimalayanService = /** @class */ (function () {
    function HimalayanService() {
    }
    /**
     * 获取章节目录API
     */
    HimalayanService.prototype.getChapterList = function (htmlResult) {
        if (htmlResult === '' && typeof (htmlResult) === 'string')
            return htmlResult;
        var chapterData = [];
        var $ = cheerio_1.default.load(htmlResult);
        var chapterList = $('.tabBox .chapterList');
        chapterList.map(function (index, element) {
            var titleName = $(element).find(".chapterListTitle").text();
            var itemName = $(element).find(".chapterListContent a");
            var title = new Object;
            title = {
                titleName: titleName.replace(/\n +/g, "").split('|')[0],
                total: titleName.replace(/\n +/g, "").split('|')[1]
            };
            var items = new Array();
            itemName.map(function (index1, element1) {
                items.push(Object.assign({}, {
                    name: $(element1).text(),
                    url: $(element1).attr("href")
                }));
            });
            chapterData.push({ title: title, items: items });
        });
        return JSON.stringify({
            time: new Date().getTime(),
            data: chapterData
        });
    };
    /**
     * 获取章节内容API
     */
    HimalayanService.prototype.getChapterDetail = function (htmlResult) {
        if (htmlResult === '' && typeof (htmlResult) === 'string')
            return htmlResult;
        var $ = cheerio_1.default.load(htmlResult);
        var root = $(".readNovelBoxCon .content");
        return JSON.stringify({
            time: new Date().getTime(),
            data: {
                title: root.find('h1').text(),
                detail: root.find('.contentBox p').text()
            }
        });
    };
    /**
     * 获取推荐榜
     */
    HimalayanService.prototype.getRecommendationList = function (htmlResult) {
        if (htmlResult === '' && typeof (htmlResult) === 'string')
            return htmlResult;
        var recommendationList = [];
        var $ = cheerio_1.default.load(htmlResult);
        var chapterList = $('.recommendedSingleNum .rSbox li');
        chapterList.map(function (index, element) {
            recommendationList.push({
                title: $(element).find('.newTitle a').text(),
                url: $(element).find('.newTitle a').attr('href'),
                img: $(element).find('.newContent .bookImg a img').attr('data-original'),
                describe: $(element).find('.newContent .bookCon .c').text().replace(/\n +/g, ""),
            });
        });
        return JSON.stringify({
            time: new Date().getTime(),
            data: recommendationList
        });
    };
    return HimalayanService;
}());
exports.default = HimalayanService;
