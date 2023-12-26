namespace A {
  export const a = 'nameA'

  export namespace B {
    export const b = 'nameB'
  }
}

console.log(A.a)
console.log(A.B.b)

import { B } from "./namespace2"; //引入

import AAA = A.B

//! 三斜线指令 
/// <reference path="namespage2.ts" />

console.log(B.a);
