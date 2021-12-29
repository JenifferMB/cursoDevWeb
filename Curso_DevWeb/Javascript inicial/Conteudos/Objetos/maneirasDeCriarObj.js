//literal

const obj1 = {

}

console.log(obj1)

//OBJ JS
const obj2 = new Object

console.log(obj2)


//constructor functions
function obj3(name, price, discount){
    this.name = name
    this.getPricewithDiscount= () => {
        return price * (1 - discount)
    }
}

const p1 = new obj3("air cooler", 198, 0.2)
const p2 = new obj3("game Horizon Zero Dawn", 200, 0.5)
console.log(p1.name, p1.getPricewithDiscount(), p2.name, p2.getPricewithDiscount())


//function factory
function newStudent(name, number, school){
    return {
        name, number, school, confirmPresence(){
            return `the student attended the school`
        }
    }
}

const student1 = newStudent("Patrick", 7, "Fenda do Biquini")
const student2 = newStudent("Bob", 2, "Fenda do Biquini")
console.log(student1, student1.confirmPresence() + "|", student2, student2.confirmPresence())

//Object.create

const cd = Object.create(null)
cd.artist = "Robert Smith"
cd.artist2 = "Humberto Gessinger"
console.log(cd)

//JSON 

const fromJSON = JSON.parse('{"info": "JSON"}')
console.log(fromJSON.info)