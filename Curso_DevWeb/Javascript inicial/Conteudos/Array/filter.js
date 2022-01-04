const sales = [
    { item: "Laptop", price: 2700, fragile: true },
    { item: "Air conditioner", price: 1000, fragile: true },
    { item: "Fridge", price: 1600, fragile: false },
    { item: "SmartPhone", price: 850, fragile: true }
]

/*console.log(sales.filter(function(p){
    //if(p.fragile == true && p.price > 1000)
    //return p
}))*/

const returnPrice = sales => sales.price > 1000
const returnFragile = sales => sales.fragile = true

console.log(sales.filter(returnPrice).filter(returnFragile))