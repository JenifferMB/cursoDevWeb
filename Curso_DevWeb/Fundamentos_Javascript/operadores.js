const a = 3
let b = 3

console.log(b)

b += a //b = b + a
console.log(b)

b-= 1 //b = b - 1 
console.log(b)

b*=3 // b = b * 3
console.log(b)

b/=2 //b = b / 2 
console.log(b)

b%=2 // b = b % 2
console.log(b)

console.log("Ver: ")
console.log('01)', '1' == 1)
console.log('02)', '1' === 1) //exacly the same
console.log('03)', '3' != 3)
console.log('04)', '4' !== 3)


console.log("Ver2: ")
function purchases(money1, salary){
    const buy1 = money1 || salary
    const buy2 = money1 && salary
    const buy3 = money1 != salary
    const notbuy = !buy1

    return {buy1, buy2, buy3, notbuy}
}

console.log(purchases(false, true))


console.log("Ver3: ")
const result = grade => grade >= 7 ? 'V' : 'F' // if & else

console.log(result(8.4))
console.log(result(5))