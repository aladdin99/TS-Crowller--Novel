import PATH from "path";
import ChapterList from "../crowller";
import ShuqiService from "../service/ShuqiService";

/**
 * <p>标题: "书旗小说网" 网页爬取 </p> 
 * <p>描述: </p>
 * <p>版权: Copyright (c) 2021</p>
 *
 * @version: 1.0
 * @author: chenhuang
 * @date 2021/10/15
 */

// 内部节点逻辑操作（后续爬取其它网站在这里面补充）
// 1、普通模式
// let dealAnalyzer = new ShuqiService();

// 2、单例模式
let dealAnalyzer = ShuqiService.getInstance();

// 爬取 "书旗小说网" 公共参数定义
let URL_HEAD = "https://www.shuqi.com/"; // "书旗小说网" 公共地址.
let JSON_PATH = PATH.join(__dirname,'../../data/书旗小说网/'); // "书旗小说网" JOSN 文件根路径



/**
 * 1、爬取 "主编强推"目录
 * chapterListUrl：章节路径
 * chapterListFilePath：存放本地地址
 */
let recommendUrl = URL_HEAD; // 后面追加动态 url 参数，在主页获取 href 的值。
let recommendFilePath = JSON_PATH + "recommendList.json"; 


// 1、普通模式
// new ChapterList(recommendUrl, recommendFilePath, dealAnalyzer.getRecommendList);

// 2、单例模式
new ChapterList(recommendUrl, recommendFilePath, dealAnalyzer);
