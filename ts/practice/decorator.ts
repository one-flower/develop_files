// ! 作用: 不去破坏这个类的自身的结构，给添加新的类型和结构，相当于一个修饰的作用
/* tsconfig.json 需要打开
 *"experimentalDecorators": true, // 装饰器语法
 *"emitDecoratorMetadata": true, // 装饰器语法
 */
// 1. 类装饰器 ClassDecorator target 构造函数
// const Base: ClassDecorator = (target) => {
//   console.log(target)
//   target.prototype._newName = 'name'
//   target.prototype.fn = () => {
//     console.log('新加的');

//   }
// }
// @Base // 或 Base(Http)
// class Http {}

// const http = new Http() as any

// http.fn()

// 2. 装饰器工厂 柯里化
// const Base = (name: string) => {
//   const fn: ClassDecorator = (target) => {
//     target.prototype._newName = name;
//     target.prototype.fn = () => {
//       console.log("新的" + name);
//     };
//   };

//   return fn;
// };

// @Base("柯里化")
// class Http {}
// const http = new Http() as any;
// http.fn();

// 3. 属性装饰器 PropertyDecorator
// 4. 参数装饰器 ParameterDecorator
// 5. 方法装饰器 MethodDecorator PropertyDescriptor
// 6. reflect-metadata es6 添加和读取元数据
import axios from "axios";
import 'reflect-metadata';
const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    target.prototype._newName = name;
    target.prototype.fn = () => {
      console.log("新的" + name);
    };
  };

  return fn;
};
// 方法修饰器
const Get = (url: string) => {
  const fn: MethodDecorator = (target, key, des: PropertyDescriptor) => {
    console.log('target', target);
    console.log('key', key);
    console.log('des', des);
    console.log('url', url);
    const resKey = Reflect.getMetadata('k', target)
    console.log(resKey, '---');
    axios.get(url).then((res) => {
      // console.log("res", res);
      // @ts-ignore //跳过类型检查
      des.value(resKey ? res[resKey] : res.status) //回传
    });
  };
  return fn;
};
// 参数装饰器
const Result = () =>{
  const fn:ParameterDecorator = (target, key, index) =>{
    console.log('x', target, key, index);
    Reflect.defineMetadata('k', 'data', target)
  }
  return fn
}
// 属性装饰器
const Name:PropertyDecorator = (target, key) =>{
  console.log(target, key, 'sssss');
  
}
@Base("柯里化")
class Http {
  @Get("https://es6.ruanyifeng.com/sidebar.md")
  // getList(data: any) {
  //   console.log('data',data);
  // }
  getList(@Result() data: any, index: any) {
    console.log('data',data, index);
  }
  @Name
  name: string
  constructor() {
    this.name = '属性装饰器'
  }
}
const http = new Http() as any;
// http.fn();
http
