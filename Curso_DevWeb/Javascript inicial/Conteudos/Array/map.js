const nums = [1,2,3,4,5]

let result = nums.map(function(e){
    return e*2
})

console.log(result, nums)

const sum30 = e => e + 30
const x3 = e => e * 3
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

result = nums.map(sum30).map(x3).map(forMoney)
console.log(result)

const sales = [
    '{ "item": "Laptop", "price": 2700 }',
    '{ "item": "Air conditioner", "price": 1200 }',
    '{ "item": "Fridge", "price": 1600 }',
    '{ "item": "SmartPhone", "price": 1300 }'
]

const obj = json => JSON.parse(json)
const prod = prod => prod.price

let returnPrice = sales.map(obj).map(prod)

console.log(returnPrice)