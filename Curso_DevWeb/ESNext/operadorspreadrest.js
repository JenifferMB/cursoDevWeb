// ... rest (juntar)/spread (espalhar)

//spread + obj
const student = {name: "Felipe", grade: 7.9}
const clone = {situation: "Aproved", ...student}
console.log(clone)

//spread + array
const groupA = ["Ciencia da computacao", "Engenharia de Software", "Engenharia da computacao"]
const groupFinal = ["Sistemas da informacao", "Analise e desenvolvimento de sistemas", "Tec em informatica", ...groupA]
console.log(groupFinal);
