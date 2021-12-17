const costumer = {
    name: "Sofia",
    age: 10,
    height: 90,
    address: {
        street: "Terra do Sao Nunca",
        n: 666
    }
}

console.log(costumer)

const {name, age} = costumer

console.log(name, age)

const {name: ninfo, age: i} = costumer

console.log(ninfo,i)

const {potato, tree = true} = costumer
console.log(potato, tree)

const {address: {street, n, cep}} = costumer

console.log(street, n, cep)