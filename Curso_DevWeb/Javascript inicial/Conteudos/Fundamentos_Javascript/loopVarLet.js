for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log("i =" +i)

for (let i = 10; i < 20; i++){
    console.log(i)
}

//console.log("i"= +i) error

console.log("Test 2: ");
const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


console.log("Test 3: ");

const funcs2 = []

for(let i = 0; i < 10;i++){
    funcs2.push(function (){
        console.log(i)
    })
}

funcs2[6]()
funcs2[9]()