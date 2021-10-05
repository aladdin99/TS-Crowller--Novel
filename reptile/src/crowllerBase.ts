import FS from "fs";
import superagent from "superagent";


/**
 * 基础类
 */
export default class CrowllerBase{
    
    /**
     * 获取本地已存储的 JSON 内容
     */
     protected getJsonContent(filtePath: string){
        let fileContent = {};
        if(FS.existsSync(filtePath)){
            fileContent = JSON.parse(FS.readFileSync(filtePath, 'utf-8'));
        }
        return fileContent;
    }

    /**
     * 存储到到本地 JSON 文件中
     * 路径下的文件夹命名不使用英文点号 .
     */
     protected saveJsonContent(filePath: string, contentJson: string){
        // 截取路径中的目录
        let cataloguePath = "";
        let rootPath = filePath.split("\\");
        if(rootPath[rootPath.length-1].includes('.')){
            rootPath.splice(rootPath.length-1, 1);
            cataloguePath = rootPath.join('\\');
        }

        // 查看路径是否存在
        if(!FS.existsSync(filePath)){
            // 查看目录是否存在
            FS.readdir(cataloguePath, (error)=>{
                if(error === null && typeof(error) == "object"){
                    FS.writeFileSync(filePath, contentJson);
                }else{
                    FS.mkdir(cataloguePath, (err)=>{
                        console.log(typeof(err));
                        console.log(cataloguePath);
                        console.log(err);
                        if(err === null && typeof(err) == "object"){
                            console.log("目录创建成功咯");
                            FS.writeFileSync(filePath, contentJson);
                            return;
                        }
                        console.log("目录创建失败啦");
                    })
                }
            });
            
        }else{
            FS.writeFileSync(filePath, contentJson);
        }
    }

    /**
     * 获取HTML文档API
     */
    protected async getHtmlDom(url: string){
        return await (await superagent.get(url)).text;
    }
}