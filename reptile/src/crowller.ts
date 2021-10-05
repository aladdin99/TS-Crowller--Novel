import CrowllerBase from "./crowllerBase";

interface AnalyzerFuc {
    analyzer: (rsult:string) => string
}

// 公共爬虫API.
export default class ChapterList extends CrowllerBase{ 

    public async initNovelData(){

        // 拉取网页上的源代码。
        let result:string = await this.getHtmlDom(this.url);

        // 解析 DOM 树上节点。
        let chapterListResult:string = await this.analyzerFuc(result);

        // 数据解析完写入 JSON 文件。
        this.saveJsonContent(this.filePath, chapterListResult);
    }
    public constructor(private url: string, private filePath: string, private analyzerFuc:AnalyzerFuc['analyzer']){
        super(); // 继承父类构造函数.
        this.initNovelData();
    }
}
