// 泛型 generic 泛指的类型

function join<T, P>(first:T, second:P){
    return `${first}${second}`;
}

let result = join<string, number>('1', 2); // 显示写法
let result2 = join('1', 2); // 隐式写法


// T[] 等价于 Array<T>
function map<T>(param:T[]){
    return param;
}

map<string>(["123"])


// 如何使用泛型作为一个具体类型的注解
function hello<T>(params: T){
    return params;
}

const func:<T>(params: T) => T = hello;



// 类中的泛型及泛型类型
class dataManage <T>{
    constructor(private data: T[]){}
    getItem(index: number):T {
        return this.data[index];
    }
}

const data = new dataManage(["123"]);

// 继承类型
interface Item{
    name: string
}
class dataManage2 <T extends Item>{
    constructor(private data: T[]){}
    getItem(index: number):string {
        return this.data[index].name;
    }
}
const data2 = new dataManage2([{
    name: "123"
}]);