Array.prototype.reduce2 = function(callback, value){
    const i = value ? 0 : 1
    let cont = value || this[0]

    for(let i = 0; i < this.length; i++){
        cont = callback(cont, this[i], i, this)
    }
    return cont
}

const students = [
    { name: "Joao", grade: 8, scholarshipHolder: false},
    { name: "Maria", grade: 7.2, scholarshipHolder: false},
    { name: "Marta", grade: 8.8, scholarshipHolder: true},
    { name: "Roberto", grade: 9.3, scholarshipHolder: true}
]

const result = students.map(s => s.grade).reduce2(function(i, actual){
    console.log(i, actual)
    return i + actual
}, /*initial value*/)
