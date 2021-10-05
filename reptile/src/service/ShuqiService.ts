import cheerio from "cheerio";
import {RecommendationListShuqi} from "./common/BaseService";

export default class ShuqiService{
    // 单例模式
    private static instance: ShuqiService;
    static getInstance() {
        if(!ShuqiService.instance){
            ShuqiService.instance = new ShuqiService();
        }
        return ShuqiService.instance.getRecommendList;
    }


    /**
     * 获取 主编强推目录
     */
     public getRecommendList(htmlResult: string){
        if(htmlResult === '' && typeof(htmlResult)==='string') return htmlResult;

        let recommendationList: RecommendationListShuqi[] = [];
        let $ = cheerio.load(htmlResult);
        let chapterList = $('.mainrec .cp-ranks-list li');

        chapterList.map((index, element) => {
            recommendationList.push({ 
                title: $(element).find('.title').not('.no').text(),
                author: $(element).find('.info .auth').text(),
                url: $(element).find('a').attr('href'),
                img: $(element).find('.info img').attr('src'),
                desc: $(element).find('.info .desc').text().replace(/\n +/g,""),
            });
        });

        return JSON.stringify({
            time: new Date().getTime(),
            data: recommendationList
        })
     }


     //单例模式
     private constructor(){

     }
}