//colletion of key and value

const product = new Object
product.name = "Table"
product["product brand"] = "xD"
product.price = 355

console.log(product)

delete product.price
delete product["product brand"]

console.log(product)

const car = {
    model: "A4",
    price: 55000,
    owner: {
        name: "Felipe",
        age: 47,
        adress: {
            n: 286,
            publicPlace: "Street test"
        }
    },
    
    conductors: [{
        name: "Elias",
        age: 35
    },{
        name: "Fernanda",
        age: 25
    },
    {
        name: "Roberto",
        age: 61
    }],

    insurancePrice: function(){
        return price/2
    }
}

car.owner.adress.n = 287
car.owner.adress.publicPlace = "rua dos bobos"

console.log(car)

delete car.owner.adress
delete car.insurancePrice

console.log(car)