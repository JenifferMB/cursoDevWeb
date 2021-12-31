const obj = {a: 1, b: 2, c: 3, sum(){return a + b + c}}
console.log(JSON.stringify(obj)) //textual - obj to json

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) //json to obj
console.log(JSON.parse('{"a": 1, "b": 2.5151, "c": "string", "d": true, "e": {}, "f": []}'))

