const objArray = {0: "Test1", 1: "Test2", 2: "Test3"}
console.log(objArray)

Object.defineProperty(objArray, 'toString',{
    value: function(){return Object.values(this)},
    enumerable: false
})

console.log(objArray[0])

const array1 = ["Test1", "Test2", "Test3"]
console.log(objArray.toString(), array1)