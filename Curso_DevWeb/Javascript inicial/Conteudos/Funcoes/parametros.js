//Not recommended
function area(height,width){
    const area = height * width

    if(area < 20)
    console.log("very small area");
    if(area > 100)
    console.log("very large area");
    
    else
    return area
}

console.log(area(5,5))
console.log(area(1,1))
console.log(area(100,100))



//old 
function sum(){
    let sum = 0
    for (i in arguments){
        sum += arguments[i]
    }
    return sum
}

console.log(sum())
console.log(sum(5))
console.log(sum(1.7, 5.5, 75))
console.log(sum("a", "b", "c"))


