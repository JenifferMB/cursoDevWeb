/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function vectorAverage(vector) {
    let cont = 0
    
    for(let i=0; i<vector.length; i++) {
        cont += vector[i]
    }

    return cont/vector.length
}

console.log(vectorAverage([1, 2, 3, 4, 5]))