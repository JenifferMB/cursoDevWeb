Array.prototype.filter2 = function(callback){
    const newArray = []

    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
        newArray.push(this[i])
    }
    return newArray
}
const sales = [
    { item: "Laptop", price: 2700, fragile: true },
    { item: "Air conditioner", price: 1000, fragile: true },
    { item: "Fridge", price: 1600, fragile: false },
    { item: "SmartPhone", price: 850, fragile: true }
]

const returnPrice = sales => sales.price > 1000
const returnFragile = sales => sales.fragile = true

console.log(sales.filter2(returnPrice).filter2(returnFragile))