function rand(min, max){
    const  value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let op = 0;

while(op != -1){
    op = rand(-1, 10)
    console.log(op)
    console.log("continue")
}

console.log("stop")

console.log("Do While: ");

function rand(min, max){
    const  value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let op1 = 0;

do {
    op1 = rand(-1, 10)
    console.log(op1)
    console.log("continue")
} while(op1 != -1)