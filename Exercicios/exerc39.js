/* Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

function replaceVector(vectorA, vectorB) {
    if (vectorA.length == vectorB.length) {
        for(let i = 0; i < vectorA.length; i++){
            vectorA[i] = vectorA[i] + vectorB[i]
            vectorB[i] = vectorA[i] - vectorB[i]
            vectorA[i] = vectorA[i] - vectorB[i]
        }
    } else {
        return "Not possible replace"
    }

    console.log('New vector A: ' + vectorA)
    console.log('New vector B: ' + vectorB)
}

let vectorA = [15, 22, 43]
let vectorB = [44, 55, 76]

replaceVector(vectorA, vectorB)