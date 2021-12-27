/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console */

function negativeNumbers (vector) {
    let contNegative = 0

    vector.forEach(element => {
        if(element < 0)
        contNegative++
    })

    return contNegative
}

console.log(negativeNumbers([5, 7, -1, -2, 5]))
