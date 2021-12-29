const weight1 = 1
const weight2 = Number('2.3')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1)) //is int
console.log(Number.isInteger(weight2)) //isnt int

const grade1 = 6.855
const grade2 = 8.4

console.log(grade1.toFixed(2)) //rounding
console.log(grade2.toString()) //binarie value
console.log(typeof grade1, typeof grade2)

console.log(10/0) //infinite
console.log("50.5" /2) //accept
console.log('4' + 2) //concat "+"
console.log(0.1 + 0.7) //imprecise

const radius = 7.7
const area = Math.PI * Math.pow(radius,2)

console.log(area)
console.log(typeof Math) //object

