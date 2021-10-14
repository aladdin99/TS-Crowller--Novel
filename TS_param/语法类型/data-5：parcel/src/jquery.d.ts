// 定义全局变量
// declare var $:(param: () => void) => void;

// 定义全局函数
// 函数重载
interface jqueryInstance {
    html: (html: string) => jqueryInstance
}
// declare function $(readFunc: ()=>void) : void;
// declare function $(selecor: string) : jqueryInstance;


interface JQuery{
    (readFunc: ()=>void) : void;
    (selecor: string) : jqueryInstance;
}
declare var $:JQuery;