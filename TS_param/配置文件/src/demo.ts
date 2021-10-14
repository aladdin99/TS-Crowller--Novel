/**
 * 联合类型与类型保护
*/

interface Bird {
    fly: boolean,
    sing: ()=>{}
}

interface Dog {
    fly: boolean,
    bark: ()=>{}
}

// as 类型断言的方式
function trainAnial(animal: Bird | Dog){
    if(animal.fly){
        (animal as Bird).sing();
    }else{
        (animal as Dog).bark();
    }
}

// in 语法做类型保护
function trainAnial2(animal: Bird | Dog){
    if('sing' in animal){
        animal.sing();
    }else{
        animal.bark();
    }
}

// typeof 语法做类型保护
function add(first: number|string, second:number|string){
    if(typeof first === 'string' || typeof second === 'string'){
        return `${first}${second}`;
    }
    return first + second;
}


// instanceof 做类型保护
class NumberObj {
    count!: number;
}
function add2(first: object|NumberObj, second: object|NumberObj){
    if(first instanceof NumberObj && second instanceof NumberObj){
        return first.count + second.count;
    }
    return 0;
}