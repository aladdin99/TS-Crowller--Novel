// 命名空间引用的方式，三个反斜杠开头。
///<reference path="./components.ts"/>

namespace Home {
    export class Page {
        user: Components.User = {
            name: '123'
        }
        constructor(){
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}