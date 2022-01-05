const students = [
    { name: "Joao", grade: 8},
    { name: "Maria", grade: 7.2},
    { name: "Marta", grade: 8.8},
    { name: "Roberto", grade: 9.3}
]

//imperativa

let total1 = 0
for (let i = 0; i < students.length; i++){
    total1 += students[i].grade
}

console.log(total1/students.length)

//declarativa

const getGrade = students => students.grade
const sum = (total, actual) => total + actual
const total2 = students.map(getGrade).reduce(sum)

console.log(total2/students.length)