function Car(velMax = 200, plus = 5){
    let actualVel = 0 //private int

    //public method
    this.speedup = function(){
        actualVel + plus <= velMax ? actualVel += plus : actualVel = velMax 
    }

    //public method
    this.getActualSpeed = function() {return actualVel}
}

const cruze = new Car
cruze.speedup()
console.log(cruze.getActualSpeed())

const mclaren = new Car(350, 20)
mclaren.speedup()
mclaren.speedup()
mclaren.speedup()
console.log(mclaren.getActualSpeed())