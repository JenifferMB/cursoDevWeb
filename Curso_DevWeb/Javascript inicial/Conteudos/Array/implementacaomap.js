Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const sales = [
    '{ "item": "Laptop", "price": 2700 }',
    '{ "item": "Air conditioner", "price": 1200 }',
    '{ "item": "Fridge", "price": 1600 }',
    '{ "item": "SmartPhone", "price": 1300 }'
]

const obj = json => JSON.parse(json)
const prod = prod => prod.price

let returnPrice = sales.map2(obj).map2(prod)

console.log(returnPrice)