const school = [{
    name: "class 505",
    students: [{
        student: "Rafael",
        grade: 6.4 
    }, {
        student: "Joana",
        grade: 8.7
    }]
},  {
    name: "class 404",
    students: [{
        student: "Leonardo",
        grade: 9.1
        },
    {
        student: "Raquel",
        grade: 7.9
    }]
}]

const getGrade = a => a.grade
const getGradeClass = c => c.students.map(getGrade)

const grades1 = school.map(getGradeClass)
console.log(grades1)

console.log([].concat([6.4, 8.7], [9.1, 7.9]))

Array.prototype.flatmap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades2 = school.flatmap(getGradeClass)
console.log(grades2)