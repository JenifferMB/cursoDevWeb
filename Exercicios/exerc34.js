/* Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function verification(string1, string2) {
    let isContained = true;
    for(let i = 0; i < string1.length; i++) {
        let charsString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let charsString2 = string2.charAt(j).toLowerCase()
            if(charsString1 == charsString2) {
                isContained = true
                break
            } else {
                isContained = false
            }
        }
        if(!isContained)
            return isContained
    }
    return isContained
 }

console.log(verification("abc", "bca"))


 