import $ from "jquery";

const Hello: String = "你好呀！!"
console.log(Hello);

$;
$(function init(){
    console.log("吃午餐咯！");
});

$('body').html('你好哦！');


interface Person {
    age: number;
    name: string;
    gender: string;
}
class Teacher {
    constructor( private info: Person){}
    // getInfo(key:string){
    //     this.info[key]
    // }
    getInfo<T extends keyof Person>(key: T): Person[T] {
        return this.info[key];
    }
}
const teacher = new Teacher({
    age: 21,
    name: "张三",
    gender: "male"
})
console.log(teacher.getInfo("name"));