// ! 作用: 不去破坏这个类的自身的结构，给添加新的类型和结构，相当于一个修饰的作用
// 1. 类装饰器 ClassDecorator target 构造函数

const Base: ClassDecorator = (target) => {
  console.log(target)
  target.prototype._newName = 'name'
  target.prototype.fn = () => {
    console.log('新加的');
    
  }
}
@Base // 或 Base(Http)
class Http {}

const http = new Http() as any

http.fn()
console.log();
