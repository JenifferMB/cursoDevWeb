function MyObj(){}
console.log(MyObj.prototype)

const obj1 = new MyObj
const obj2 = new MyObj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MyObj.prototype === obj1.__proto__)

MyObj.prototype.name = "Random"
MyObj.prototype.talk = function() {
    console.log(`My name is ${this.name}`)
}

obj1.talk()

obj2.name = "Jeniffer"
obj2.talk()

const obj3 = {}
obj3.__proto__ = MyObj.prototype
obj3.name = "Obj3"
obj3.talk()