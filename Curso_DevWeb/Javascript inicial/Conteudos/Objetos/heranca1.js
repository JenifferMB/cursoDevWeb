const chronoCross = {
    genre: "RPG",
    developer: "SquareSoft"
}

const tombRaider = {
    genre: "Acao",
    developer: "SquareEnix"
}

console.log(chronoCross.__proto__)
console.log(chronoCross.__proto__ == Object.prototype)
console.log(tombRaider.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__)

function object(){}

console.log(typeof Object, typeof object)
console.log(Object.prototype, object.prototype)