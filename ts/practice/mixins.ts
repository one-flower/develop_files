// ! 对象混入

interface Name {
  name: string
}
interface Age {
  age: number
}
interface Sex {
  sex: number
}

let people1: Name = { name: '对象混入' }
let people2: Age = { age: 18 }
let people3: Sex = { sex: 0 }

const people = Object.assign(people1, people2, people3)

// ! 类混入
class minA {
  type: boolean
  changeType(): void {
    this.type = !this.type
  }
}

class minB {
  name: string
  getName(): string {
    return this.name
  }
}

class minC implements minA, minB {
  type: boolean = false
  name: string = 'mixins'
  changeType!: () => void
  getName!: () => string
}

mixins(minC, [minA, minB])
function mixins(curClas: any, itemCls: any[]) {
  itemCls.forEach((item) => {
    Object.getOwnPropertyNames(item.prototype).forEach((name) => {
      curClas.prototype[name] = item.prototype[name]
    })
  })
}

let ccc = new minC()
console.log(ccc.type);
ccc.changeType()
console.log(ccc.type);

