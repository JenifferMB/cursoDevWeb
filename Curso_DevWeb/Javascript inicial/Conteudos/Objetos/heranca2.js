//prototype chain
Object.prototype.attribute0 = 0 //dont use that
const grandfather = {attribute1: 1}
const father = {__proto__: grandfather, attribute2: 2}
const son = {__proto__: father, attribute3: 3}

console.log(son.attribute0, son.attribute1, son.attribute2, son.attribute3)

const motorcycle = {
    velActual: 0,
    velMax: 400,
    aceleration(v){
        if(this.velActual + v <= this.velMax)
        this.velActual += v
        else
        this.velActual = this.velMax
    },
    status(){
        return `${this.velActual} km/h of ${this.velMax} km/h`
    }
}

const yamaha = {
    model: "MT-09",
    velMax: 260 //shadowring
}

const kawasaki = {
    model: "Ninja ZX-6R",
    status(){
        return `${this.model}: ${super.status()}`
    }
} 

Object.setPrototypeOf(yamaha, motorcycle)
Object.setPrototypeOf(kawasaki, motorcycle)

console.log(yamaha)
console.log(kawasaki)

kawasaki.aceleration(50)
console.log(kawasaki.status())
yamaha.aceleration(300)
console.log(yamaha.status())