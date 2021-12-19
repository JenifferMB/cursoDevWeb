function grades(grade){
    if(grade >=7)
        console.log("congratz! passed the course with %d", grade);
    if(grade >=5)
    console.log("only one line accepted")
    console.log("bleh")//ever printed.
}

grades(9.7)
grades(5)

function isAccepted(zeroorten){
    if(zeroorten <= 7)
    console.log("Refused!");
    else
    console.log("Accepted!");
}