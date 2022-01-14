//let & const

{
    var a = 1
    var b = 2
    console.log(b)
}

console.log(a)

//template string
const song = "Terra dos Gigantes"
console.log(`${song} sz`)

//destructuring
const [l, e, ...tras] = "Engenheiros do Hawaii"
console.log(l, e, tras)

const [x, y] = [1, 7, 4]
console.log(x,y)

const { years: i, name } = {name: "Juliana", years: 19}
console.log(i, name)