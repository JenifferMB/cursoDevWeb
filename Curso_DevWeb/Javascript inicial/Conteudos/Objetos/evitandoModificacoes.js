//Object.preventExtensions

const product = Object.preventExtensions({
    name: "Random", price: 43.2, tag: "promo"
})

console.log("Ext: ", Object.isExtensible(product))

product.name = "Air cooler"
product.info = "Geladinho"
delete product.tag
console.log(product) //dcant add new attributes, only delete

//Object.seal

const animal = {name: "Ant", stature: "small"}
Object.seal(animal)
console.log("seal> ", Object.isSealed(animal))

animal.add = "Test"
delete animal.stature
animal.name = "Lion" //cant delete, but you can modify the value of attribute
console.log(animal)

//Object.freeze = seal + const