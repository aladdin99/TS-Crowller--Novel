import cheerio from "cheerio";
import {RecommendationList, ChapterData} from "./common/BaseService";

export default class HimalayanService{
    /**
     * 获取章节目录API
     */
    public getChapterList(htmlResult: string){
        if(htmlResult === '' && typeof(htmlResult)==='string') return htmlResult;

        let chapterData: ChapterData[] = [];
        let $ = cheerio.load(htmlResult);
        let chapterList = $('.tabBox .chapterList');

        chapterList.map((index, element) => {
            let titleName = $(element).find(".chapterListTitle").text();
            let itemName = $(element).find(".chapterListContent a");

            let title = new Object;
            title = {
                titleName: titleName.replace(/\n +/g,"").split('|')[0],
                total: titleName.replace(/\n +/g,"").split('|')[1]
            }
            
            let items = new Array();
            itemName.map((index1, element1)=>{
                items.push(Object.assign({},{
                    name: $(element1).text(),
                    url: $(element1).attr("href")
                }));
            });

            chapterData.push({ title, items });
        });
        return JSON.stringify({
            time: new Date().getTime(),
            data: chapterData
        })
    }


    /**
     * 获取章节内容API
     */
    public getChapterDetail(htmlResult: string){
        if(htmlResult === '' && typeof(htmlResult)==='string') return htmlResult;

        let $ = cheerio.load(htmlResult); 
        let root = $(".readNovelBoxCon .content");

        return JSON.stringify({
            time: new Date().getTime(),
            data: {
                title: root.find('h1').text(),
                detail: root.find('.contentBox p').text()
            }
        })
    }

    /**
     * 获取推荐榜
     */
    public getRecommendationList(htmlResult: string){
        if(htmlResult === '' && typeof(htmlResult)==='string') return htmlResult;

        let recommendationList: RecommendationList[] = [];
        let $ = cheerio.load(htmlResult);
        let chapterList = $('.recommendedSingleNum .rSbox li');

        chapterList.map((index, element) => {
            recommendationList.push({ 
                title: $(element).find('.newTitle a').text(),
                url: $(element).find('.newTitle a').attr('href'),
                img: $(element).find('.newContent .bookImg a img').attr('data-original'),
                describe: $(element).find('.newContent .bookCon .c').text().replace(/\n +/g,""),
            });
        });


        return JSON.stringify({
            time: new Date().getTime(),
            data: recommendationList
        })
    }
}