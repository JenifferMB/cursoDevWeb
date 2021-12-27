/* Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function biggerOrSmaller(vector) {
    let big, small
    
    for (let i = 0; i < vector.length; i++){
        if (big === undefined && small === undefined){
            big = vector[i]
            small = vector[i]
        } 
        else {
            if (vector[i] > big){
                big = vector[i]
            }
            if(vector[i] < small){
                small = vector[i]
            }
        }
    }
    return [big, small]
}

let vector = [70.2, 70.1, 40, 1.5, 0.2, 54.1, 42.2, 27]
console.log(biggerOrSmaller(vector))