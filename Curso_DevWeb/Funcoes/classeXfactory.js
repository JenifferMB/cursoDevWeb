//classe
class People{
    constructor(name, age, course){
        this.name = name
        this.age = age
        this.course = course
    }

    info(){
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old and my college course is ${this.course}`);
    }
} 

const p1 = new People("Jeniffer", 21, "Science Computer")
p1.info()

//factory 

const newPeople = (name, age, course) => {
    return {
        infoPeople: () => console.log(`Hi, my name is ${name}, I'm ${age} years old and my college course is ${course}!`)
    }
}

const p2 = newPeople("Jeniffer", 21, "Science Computer")
p2.infoPeople()