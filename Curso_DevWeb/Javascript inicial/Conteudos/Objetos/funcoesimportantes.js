const people = {
    name: "Aloy",
    age: 21,
    weight: 54
}

console.log(Object.values(people)) //values
console.log(Object.keys(people)) //keys
console.log(Object.entries(people)) //values and keys

Object.entries(people).forEach(([key,value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(people, "yearOfBirth", {
    enumerable: true,
    writable: false,
    value: 2000
}) //freeze only one variable

people.yearOfBirth = 2001
console.log(people)

//Objetct.assign

const dest = {a: 1}
const repl = {b: 2}
const repl2 = {c: 7, a: 36}
const objFinal = Object.assign(dest, repl, repl2)

console.log("objFinal: ", objFinal)
console.log("dest: ", dest) 

Object.freeze(objFinal)
objFinal.c = 666
console.log(objFinal)