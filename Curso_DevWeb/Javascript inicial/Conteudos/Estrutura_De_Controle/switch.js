const printresult = function (number){
    switch(Math.floor(number)){
        case 10:
            //break;
        case 9:
            console.log("OK.")
            break;
        case 4:
            console.log("CASE CASE")
            break;
        default: 
            console.log("nothing.")
        
    }
}

printresult(10)
printresult(4)
printresult(42)