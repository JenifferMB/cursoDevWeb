//closure = an escope created when function is declared, that escope can access function modify external variables

const x = "global"

function outside(){
    const x = "local"
 
    function inside(){
        return x
    }
    return inside
}

const fun = outside()
console.log(fun())

