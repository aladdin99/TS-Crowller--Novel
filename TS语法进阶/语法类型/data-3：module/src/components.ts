// 支持导出接口
export interface User {
    name: string
}

// 支持导出子命名空间
export namespace SubComponents{
    class Test{
        
    }
}

export class Header{
    constructor(){
        const elem = document.createElement('div');
        elem.innerText = "This is Footer";
        document.body.appendChild(elem);
    } 
}

export class Content{
    constructor(){
        const elem = document.createElement('div');
        elem.innerText = "This is Content";
        document.body.appendChild(elem);
    } 
}

export class Footer {
    constructor(){
        const elem = document.createElement('div');
        elem.innerText = "This is Footer";
        document.body.appendChild(elem);
    } 
}