//arrow function
const sum = (a, b) => a + b
console.log(sum(7,3))

//arrow function with this
const lex = () => console.log(this === exports)
const lex2 = lex.bind({})
lex()
lex2()

//default parameter
function log (text = "text"){
    console.log(text)
}

console.log(log(), log("xd"))

//operador rest
function numbers(...num){
    let cont = 0
    num.forEach(n => cont += n)
    return cont
}

console.log(numbers(6,2,7,8))