/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */



function concatUnion(vectorInt, vectorString, vectorDouble, ...args) {
    result = []
    for(let i = 0; i<arguments.length; i++){
        result = result.concat(arguments[i])
    }
    return result;
}

let vectorInt = [77, 42, 23, 64]
let vectorString = ['Robert', 'Morrissey', 'Simon', 'Eddie']
let vectorDouble = [5.7, 2.4, 8.3, 4.4]

console.log(concatUnion(vectorInt, vectorDouble, vectorString))
console.log(concatUnion(vectorDouble, vectorString))