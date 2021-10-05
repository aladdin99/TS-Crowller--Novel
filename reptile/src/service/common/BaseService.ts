/**
 * 定义一些公共的接口
 * 
*/

export interface RecommendationList { 
    title: string|undefined; 
    url: string|undefined; 
    img: string|undefined; 
    describe: string|undefined
}

export interface ChapterData { 
    title: Object; 
    items: any[]; 
}

export interface RecommendationListShuqi { 
    title: string|undefined; 
    author: string|undefined; 
    url: string|undefined; 
    img: string|undefined; 
    desc: string|undefined
}
