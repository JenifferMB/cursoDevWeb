class Grandfather {
    constructor(surname){
        this.surname = surname
    }
}

class Father extends Grandfather{
    constructor(surname, job = "dev"){
        super(surname)
        this.job = job
    }
}

class Son extends Father{
    constructor(){
        super("Smith")
    }
}

const son = new Son
console.log(son)