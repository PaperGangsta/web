/**
 * instanceof可以正确的判断对象的类型
 * 是因为其内部机制是通过判断对象的原型链中
 * 是不是能找到类型的prototype
 */

function myInstanceof(left,right){
    //获得类型的原型
    let prototype = right.prototype
    //获得对象的原型
    left = left.__proto__
    //判断对象的类型是否等于类型的原型
    while(true){
        if(left === null){
            return false
        }
        if(prototype === left){
            return true
        }
        left = left.__proto__
    }
}

let arr = []

console.log(myInstanceof(arr,Array))