var variable = 3; 
let variable2 = 4;

var variable = 6; //global variable
//let variable2 = 7; error
variable2 = 8

console.log(variable, variable2) 

const variable3 = 3.16;

console.log(variable3);


/*
dont use generic titles or acronyms

Examples: 
number
value
name
*/


{{{{{var test1 = "test"}}}}} //global

console.log(test)

function test(){
    var local = 123
    console.log(local)
}

//console.log(local) = error

var numberTest = 1

{
    let numberTest = 2
    console.log("inside = " +numberTest)
}


console.log("outside = " +numberTest)


//var = global escope and function
//let = global escope, function e block.