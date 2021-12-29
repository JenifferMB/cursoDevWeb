const a = {name: "Chiquinha"}
console.log(a)
const b = a //Pointer
console.log(b)
b.name = "Chaves"
console.log(b, a)

let c = 7 
let d = c //primitive type = copy by value
d++ 
console.log(c, d); //independent values