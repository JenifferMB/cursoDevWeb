/* Crie uma função que receba dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. */



function multiplicationVector(vector, multi){
    let result = []
    vector.forEach(elemento => {
        result.push(elemento * multi) 
    });

    return result
}

let vector = [9, 8, 7, 6, 5]

console.log(multiplicationVector(vector, 7))