"use strict";
// 类型从上到下
// any 任意类型 unknown 不知道的类型
// 1. top type 顶级类型 any konwn
// 2. Object
// 3. Number String Boolean
// 4. number string boolean
// 5. 1 '汉字' false
// 6. never
// unknown 之能赋值给自身 或者是any  不能读取任何属性 方法也不可调用
const httpData1 = { id: 1, name: "111" };
const Fn = function (name) {
    return [1];
};
let arr = [{ name: "1" }, { name: "2" }];
// 二维数组
// number[][] Array<Array><number>>
let arr1 = [[1], [2]];
// 杂乱数组
// any[] [number, string, boolean, {}]  ...结构赋值
let arr2 = [1, "2", false, {}];
function Fn1(...args) {
    let a = arguments;
    //   let b: any[] = arguments; //伪数组
    let c = arguments;
}
// 函数的定义类型和返回值 | 箭头函数
// 函数默认的参数 | 函数可选参数
function fn(a = 10, b = 10) {
    return a + b;
}
const fn1 = (a = 10, b = 10) => {
    return a + b;
};
function add(user) {
    return user;
}
let Obj = {
    user: [1, 2, 3],
    add(num) {
        this.user.push(num);
    },
};
Obj.add(4);
// 函数重载
let user = [1, 2, 3];
function refn(list) {
    if (typeof list === "number") {
        return user.filter((item) => item === list);
    }
    else if (Array.isArray(list)) {
        user.push(...list);
        return user;
    }
    else {
        return user;
    }
}
console.log(refn([1, 2]));
// 联合类型
let phone = "111-1111";
function pfn(modile) {
    console.log(modile);
}
pfn({
    name: "人",
    age: 100,
});
// 断言
function pfn2(num) {
    console.log(num.length); //pfn2('1234')  4  pfn2(1) undefined
}
function pfn3(type) {
    console.log(type.name);
    console.log(type.age);
}
window.abc = 123;
function pfn4(type) {
    return type; //pfn4(1)  1
}
// 内置对象
// 1.ecma Number Date RegExp Error XMLHttpRequest
// let num:Number = new Number(1)
// let xhr:XMLHttpRequest = new XMLHttpRequest()
// dom querySelect MouseEvent
// 2.dom querySelector MouseEvent
// HTML(元素名称)Element HTMLElement Element
// let div: HTMLDivElement | null = document.querySelector("div");
// let section: HTMLElement | null = document.querySelector("section");
// let dom1 = document.querySelector("section") as Element;
// dom 集合
// let domList1: NodeList = document.querySelectorAll("footer");
// let domList2: NodeListOf<HTMLDivElement | HTMLElement> = document.querySelectorAll("div footer");
// domList1.forEach((item) => {});
// let local: Storage = localStorage;
// let lo = location;
// let promise: Promise<number> = new Promise((reslove) => reslove(1));
// promise.then((res) => {});
// let cookie:string = document.cookie
