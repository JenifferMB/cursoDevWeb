const seq = {
    _value: 1, //conversion
    
    get value(){return this._value++},
    
    set value(value){
        if(value > this._value)
        this._value = value
    }
}

console.log(seq.value, seq.value)
seq.value = 1000
console.log(seq.value, seq.value)
seq.value = 555
console.log(seq.value, seq.value)