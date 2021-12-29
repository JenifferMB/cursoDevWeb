//without callback
const grades = [7.7, 5.3, 9, 3.3, 7, 10, 2.5]

let f = []

for(let i in grades){
    if(grades[i] < 7)
    f.push(grades[i])
}

console.log(f)

//with callback
const add = grades=> grades < 7
f2 = grades.filter(add)

console.log(f2)