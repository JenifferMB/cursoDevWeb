//1
function sum(a,b,c){
    a = a | 1, b = b | 1, c = c | 1
    return a+b+c
}

console.log(sum(), sum(6,6,6), sum(7,7,7,7), sum(0,0,0), sum(1,6))

//2 
function sum2(a,b,c){
    a = a != undefined ? a:1, b = 1 in arguments ? b:1, c = isNaN(c) ? 1:c
    return a+b+c
}

console.log(sum2(), sum2(6,6,6), sum2(7,7,7,7), sum2(0,0,0), sum2(1,6), sum2("abc"))

//recommended
function sum3(a = 1, b = 1, c = 1){
    return a+b+c
}

console.log(sum3(), sum3(6,6,6), sum3(7,7,7,7), sum3(0,0,0), sum3(1,6), sum3("abc"))
