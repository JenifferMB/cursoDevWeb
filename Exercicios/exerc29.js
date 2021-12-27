/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function interval1020(vector){
    let cont = 0

    /*for(let i = 0; i < vector.length; i++){
        if(vector[i] >= 10 && vector[i] <= 20)
        cont++
    }*/

    vector.forEach(element => {
        if(element >= 10 && element <= 20)
        cont++
    });

    return cont
}

console.log(interval1020([40, 50, 21, 10, 20, 16, 9, 88,11, 1]))