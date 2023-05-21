//! 1.生成器
function* fn1(num: number) {
  let a: number = yield num * num
  console.log(a, 'a')
  let b: number = yield a / 2
  console.log(b, 'b')
  yield b + 1
  console.log(b, 'c')
  return b
}

const iteartor = fn1(0)

console.log(iteartor.next(), '111')
// { value: 0, done: false } 111
console.log(iteartor.next(22), '222')
// 22 a
// { value: 11, done: false } 222
console.log(iteartor.next(33), '333')
// 33 b
// { value: 34, done: false } 333
console.log(iteartor.next(), '444')
// 33 c
// { value: 33, done: true } 444

//! 2.迭代器
// set map
let set: Set<number> = new Set([1, 1, 2, 3])
console.log(set)

let map: Map<string, number | string> = new Map()

map.set('name', 'map')
map.set('age', 18)
console.log(map.get('age'))
console.log(map.size)
// console.log(map.clear); //清空
console.log(map.has('name'))
console.log(map.delete('age')) //删除指定键

function aggs() {
  console.log(arguments) //伪数组
}

// let list = document.querySelectorAll('div') //同上
const each = (value: any) => {
  let it: any = value[Symbol.iterator]()
  let next: any = { done: false }
  while (!next.done) {
    next = it.next()
    console.log(next.value)
  }
}
each(set)

// 迭代器语法糖 forof 对象没有iterator
// 结构