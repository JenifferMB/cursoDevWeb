const father = {name: "Rafael", eyeColor: "brown"}

const daughter1 = Object.create(father)
daughter1.name = "Maria"

console.log(daughter1.eyeColor)

const daughter2 = Object.create(father, {
    name: {value: "Tereza", writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = "Jessica"
console.log(`${daughter2.name} have a ${daughter2.eyeColor} eyes`)

console.log(Object.keys(daughter1), Object.keys(daughter2))

for (let key in daughter2){
    daughter2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`from ${key}`)
}