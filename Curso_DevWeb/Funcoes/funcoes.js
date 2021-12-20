//literal funcion
function example1(){}

//anonymous function
const example2 = function(){}

//array function 
const array = [function(a,b){return a+b}, example1,example2]
console.log(array[0](4,6))

//attribute in an object
const obj = {}
obj.ok = function(){return "OK"}
console.log(obj.ok())

//function in parameter

function run(fun){
    fun()
}

run(function() { console.log("loading....")})

//functions can be given other functions
function sub(a,b){
    return function(c){
        console.log(a-b+c);
    }
}

sub(7,3)(5)

