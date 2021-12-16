const values = [5.7, 8.888, 666.6, 4242, 0.30]
console.log(values[1], values[3])
console.log(values[8])

values[5] = 7
values[8] = 9
console.log(values)
console.log(values.length)

values.push({id: 3}, false, null, Infinity, 'ABC') //add elements
console.log(values);

console.log(values.pop())

delete values[0]
console.log(values)
console.log(typeof values)