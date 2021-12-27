/*  Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function evenOrOdd(vector){
    let contEven = 0, contOdd = 0
    for(let i = 0; i < vector.length;i++){
        if(vector[i] % 2 == 0)
        contEven++
        else
        contOdd++
    }
    console.log(`${contEven} are even numbers and ${contOdd} are odd numbers.`)
}

evenOrOdd([7,4,1,2,9])