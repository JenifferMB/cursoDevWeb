//void
function printSoma(a,b){
    console.log(a+b)
}

// with return
function soma(a,b){
    return a+b
}

printSoma(6,6)
printSoma(6) // 6 + undefined = NaN
printSoma(6,7,7,7,7,7) //6, 7, the rest is ignored
printSoma() //undefined + undefined = NaN 

console.log(soma(8,8))


//function in a variable
const somaPrint = function(a,b){
    console.log(a+b)
}

somaPrint(1,1)

//arrow function

const arrowSoma = (a,b) => {
    return a+b
}

console.log(arrowSoma(5,8))


//implicit return
const sub = (a,b) => a-b

console.log(sub(4,2))


////////////////////////////////////////////////////////////////////////////////////
