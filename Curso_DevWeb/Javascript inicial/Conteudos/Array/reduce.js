const students = [
    { name: "Joao", grade: 8, scholarshipHolder: false},
    { name: "Maria", grade: 7.2, scholarshipHolder: false},
    { name: "Marta", grade: 8.8, scholarshipHolder: true},
    { name: "Roberto", grade: 9.3, scholarshipHolder: true}
]

const result = students.map(s => s.grade).reduce(function(i, actual){
    console.log(i, actual)
    return i + actual
}, /*initial value*/)

console.log(result)

const printHolders = (confirm, holders) => confirm && holders
const holders = students.map(s => s.scholarshipHolder).reduce(printHolders)
console.log(holders)

const printHolder = (confirm, holders) => confirm || holders

const holder = students.map(s => s.scholarshipHolder).reduce(printHolder)
console.log(holder)