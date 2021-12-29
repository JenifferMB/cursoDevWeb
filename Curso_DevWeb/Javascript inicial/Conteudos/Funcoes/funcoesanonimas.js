const sum = function(x,y){
    return x+y
}

const printResult = function(x,y, res = sum) {
    console.log(res(x,y))
}

printResult(7,4)
printResult(4,7, function(x,y){return y-x})
printResult(3,2, (x,y)=>x*y)