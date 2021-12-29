const a = 1, b = 3, c = 6

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nameAttribute = "example1"
const valueAttribute = 3.8

const obj3 = { }
obj3[nameAttribute] = valueAttribute
console.log(obj3)

const obj4 = {[nameAttribute]: valueAttribute}
console.log(obj4)

const obj5 = {
    
    function1: function(){
        //...
    },
    function2(){
        //...
    }
}

console.log(obj5)