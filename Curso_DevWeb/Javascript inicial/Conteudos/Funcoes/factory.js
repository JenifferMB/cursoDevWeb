//simple factory

function people(name, age, course){
    return {
        name: name,
        age: age,
        collegeCourse: course
    }
}

console.log(people("Jeniffer", 21, "Science Computer"))