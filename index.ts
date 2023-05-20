// 类型从上到下
// any 任意类型 unknown 不知道的类型
// 1. top type 顶级类型 any konwn
// 2. Object
// 3. Number String Boolean
// 4. number string boolean
// 5. 1 '汉字' false
// 6. never
// unknown 之能赋值给自身 或者是any  不能读取任何属性 方法也不可调用

// Object {} 包含所有类型 object 常用于泛型约束，支持引用类型 {} 无法添加修改内部属性

// interface 不能多属性 也不能少属性
// 重名 重合
// 任意key ? readonly
interface httpData {
  readonly id: number;
  name: string;
  age?: number; //可选值
  [propName: string]: any; //索引签名，拿取任意的属性
}
// 接口继承
interface httpData1 extends httpData {}
const httpData1: httpData1 = { id: 1, name: "111" };
// 定义函数类型
interface Fn {
  (name: string): number[];
}
const Fn: Fn = function (name: string) {
  return [1];
};

// number[]
// Array<boolean>
// interface 定义对象数组
interface x {
  name: string;
}
let arr: x[] = [{ name: "1" }, { name: "2" }];
// 二维数组
// number[][] Array<Array><number>>
let arr1: number[][] = [[1], [2]];
// 杂乱数组
// any[] [number, string, boolean, {}]  ...结构赋值
let arr2: [number, string, boolean, {}] = [1, "2", false, {}];
function Fn1(...args: string[]) {
  let a: IArguments = arguments;
  //   let b: any[] = arguments; //伪数组
  let c: A = arguments;
}

interface A {
  callee: Function;
  length: number;
  [index: number]: any;
}

// 函数的定义类型和返回值 | 箭头函数
// 函数默认的参数 | 函数可选参数
function fn(a: number = 10, b: number = 10): number {
  return a + b;
}
const fn1 = (a: number = 10, b: number = 10): number => {
  return a + b;
};
// 函数是一个对象如何定义
interface User {
  name: string;
  age: number;
}
function add(user: User): User {
  return user;
}
// 函数this类型 ts 可以定义this类型，必须在第一个参数定义this类型
interface Obj {
  user: number[];
  add: (this: Obj, num: number) => void;
}
let Obj: Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num);
  },
};
Obj.add(4);
// 函数重载
let user: number[] = [1, 2, 3];
function refn(arr: number[]): number[]; //合并数组
function refn(id: number): number[]; //返回当前
function refn(): number[]; //返回默认数组
function refn(list?: number | number[]): number[] {
  if (typeof list === "number") {
    return user.filter((item) => item === list);
  } else if (Array.isArray(list)) {
    user.push(...list);
    return user;
  } else {
    return user;
  }
}
console.log(refn([1, 2]));

// 联合类型
let phone: number | string = "111-1111";
// 交叉类型
interface p1 {
  name: string;
}
interface p2 {
  age: number;
}
function pfn(modile: p1 & p2): void {
  console.log(modile);
}
pfn({
  name: "人",
  age: 100,
});
// 断言
function pfn2(num: string | number): void {
  console.log((num as string).length); //pfn2('1234')  4  pfn2(1) undefined
}
function pfn3(type: p1 | p2): void {
  console.log((<p1>type).name);
  console.log((type as p2).age);
}
(window as any).abc = 123;
function pfn4(type: any): boolean {
  return type as boolean; //pfn4(1)  1
}

// 内置对象
// 1. ecma Number Date RegExp Error XMLHttpRequest
let num: Number = new Number(1);
let xhr: XMLHttpRequest = new XMLHttpRequest();
// dom querySelect MouseEvent
// 2. dom querySelector MouseEvent
// HTML(元素名称)Element HTMLElement Element
let div: HTMLDivElement | null = document.querySelector("div");
let section: HTMLElement | null = document.querySelector("section");
let dom1 = document.querySelector("section") as Element;
let domList1: NodeList = document.querySelectorAll("footer");
let domList2: NodeListOf<HTMLDivElement | HTMLElement> =
  document.querySelectorAll("div footer");
domList1.forEach((item) => {});
// 3. bom promise localstotage location cookie
let local: Storage = localStorage;
let lo: Location = location;
let promise: Promise<number> = new Promise((reslove) => reslove(1));
promise.then((res) => {});
let cookie: string = document.cookie;

// 1. class 的基本用法 继承 extends 和 类型约束 implement
// 2. class 的修饰符 readonly private protected public
// 3. super 原理 父类的prototype.constructor.call
// 4. 静态方法 使用实例本身调用 static 方法内this只能调用别的静态方法
// 5. get set
// readonly 只读 用于属性
// private  私有 属性和方法
// protected 子类和内部使用
// public 公共 默认就是public
interface Options {
  el: string | HTMLElement;
}
interface VueCls {
  options: Options;
  init(): void;
}
class Dom {
  clg(val:string) {
    console.log(val);
  }
}
class Vue extends Dom implements VueCls {
  options: Options;
  constructor(options: Options) {
    super();
    this.options = options;
  }
  init(): void {
    this.clg('hahaha')
  }
}
new Vue({
  el: "#app",
});

// 基类 抽象类
// abstract 所定义的抽象类
// abstract 所定义的方法 都只能描述不能进行一个实现 不可实例化


// 枚举 enum
enum Color{
  red,
  green,
  blue
}
console.log(Color.red); //0
enum Color1{
  red = 1,
  green,
  blue
}
console.log(Color1.red); //1