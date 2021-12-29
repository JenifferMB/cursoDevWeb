console.log(sum(1,2)) //allowed
//console.log(sub(3,2)) not allowed
//console.log(mult(3,2)) not allowed

//functions declarations

function sum(x,y){return x+y}
console.log(sum(1,2))

//functions expression
const sub = function(x,y){return x-y}
console.log(sub(3,2))

//named functions expression
const mult = function mult(x,y){return x*y}
console.log(mult(2,7))