const people = {
    talk: 'Hello!',
    talking(){
        console.log(this.talk);
    }
}

people.talking()
const talking1 = people.talking
talking1() //error paradigm program

const peopleistalking = people.talking.bind(people)
peopleistalking()

//bind = fix the function pointer

function time1(){
    this.age = 0

    const self = this

    setInterval(function(){
        //this.age++
        self.age++
        //console.log(this.age)
        console.log(self.age);
    }/*.bind*/, 1000)
}

new time1