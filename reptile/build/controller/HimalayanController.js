"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var crowller_1 = __importDefault(require("../crowller"));
var HimalayanService_1 = __importDefault(require("../service/HimalayanService"));
/**
 * <p>标题: "奇迹小说网" 网页爬取 </p>
 * <p>描述: </p>
 * <p>版权: Copyright (c) 2021</p>
 *
 * @version: 1.0
 * @author: chenhuang
 * @date 2021/10/15
 */
// 内部节点逻辑操作（后续爬取其它网站在这里面补充）
var dealAnalyzer = new HimalayanService_1.default();
// 爬取 "奇迹小说网" 公共参数定义
var URL_HEAD = "https://www.qijizuopin.com"; // "奇迹小说网" 公共地址.
var JSON_PATH = path_1.default.join(__dirname, '../../data/奇迹小说网/'); // "奇迹小说网" JOSN 文件根路径
/**
 * 1、爬取 小说章节目录
 * chapterListUrl：章节路径
 * chapterListFilePath：存放本地地址
 */
var chapterListUrl = URL_HEAD + '/book/1355'; // 后面追加动态 url 参数，在主页获取 href 的值。
var chapterListFilePath = JSON_PATH + "chapterList.json";
new crowller_1.default(chapterListUrl, chapterListFilePath, dealAnalyzer.getChapterList);
/**
 * 2、爬取 小说章节内容
 * chapterDetailUrl：章节路径
 * chapterDetailFilePath：存放本地地址
 */
// 爬取 "奇迹小说网" 小说内容页
var chapterDetailUrl = URL_HEAD + '/book/read/1355/566492'; // 后面追加动态 url 参数，在主页获取 href 的值。
var chapterDetailFilePath = JSON_PATH + "chapterDetail.json";
new crowller_1.default(chapterDetailUrl, chapterDetailFilePath, dealAnalyzer.getChapterDetail);
/**
 * 3、爬取 小说首页的推荐榜单
 * RecommendationListUrl：首页路径
 * RecommendationListPath：存放本地地址
 */
// 爬取 "奇迹小说网" 小说内容页
var RecommendationListUrl = URL_HEAD; // 后面追加动态 url 参数，在主页获取 href 的值。
var RecommendationListPath = JSON_PATH + "recommendationList.json";
new crowller_1.default(RecommendationListUrl, RecommendationListPath, dealAnalyzer.getRecommendationList);
