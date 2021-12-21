function getPrice(tax = 0, currency = "R$"){
    return `${currency} = ${this.price * (1-this.disc) * (1 +tax)}`
}

const product = {
    name: "Laptop",
    price: 3999,
    disc: 0.15,
    getPrice
}

global.price = 20
global.disc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const pcGamer = {price: 4000, disc: 0.20}

console.log(getPrice.call(pcGamer))
console.log(getPrice.apply(pcGamer))

console.log(getPrice.call(pcGamer, 0.17, "$"))
console.log(getPrice.apply(pcGamer, [0.17, "$"]))