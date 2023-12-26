//! 泛型:动态类型
function fn<T>(a: T, b: T) {
  return [a, b]
}

fn(1, 2)
fn(false, true)
// fn('str', 1) //错误

type A<T> = string | number | T
let a: A<boolean> = true // boolean 替换 T

interface Data<T> {
  msg: T
}
let data: Data<number> = {
  msg: 1,
}

function toArr<T = number, K = number>(a: T, b: K): Array<T | K> {
  return [a, b]
}
toArr(false, '999')

//! 泛型约束
function add<T extends number>(a: T, b: T) {
  return a + b
}
add(1, 2)

interface Len {
  length: number
}
function len<T extends Len>(a: T) {
  a.length
}
len('1111')

let obj = {
  name: 'Ts',
  type: 'language',
}
// type Key = keyof typeof obj
function ob<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
ob(obj, 'name')

interface Data2 {
  name: string
  age: number
  sex: string
}
type Options<T extends object> = {
  [Key in keyof T]?: T[Key]
}
type B = Options<Data2>
