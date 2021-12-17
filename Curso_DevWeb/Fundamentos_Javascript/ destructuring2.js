const [a] = [10]
console.log(a)

const [n1, , n3, , , n5, n6 = 0] = [7,4,1,11]
console.log(n1, n3, n5, n6)

function rand({min = 0, max = 1000}){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {max: 30, min: 11}
const obj2 = {max: 89}
console.log("Object: " +rand(obj), rand(obj2))

function rand2([min = 0, max = 1000]){
    if(min > max) 
    [min,max] = [max, min]
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

console.log("Array: " +rand2([60,850]), rand2([30]))