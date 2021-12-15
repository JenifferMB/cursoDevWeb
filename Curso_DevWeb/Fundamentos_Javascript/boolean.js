let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)

console.log("verdadeiros: ")
console.log(!!6)
console.log(!!8)
console.log(!!" ")
console.log(!!Infinity);

console.log("falsos: ")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log("questions: ")
console.log(!!('' || null || 0 || " "))
