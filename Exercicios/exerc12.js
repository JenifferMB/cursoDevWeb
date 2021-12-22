/* Faça um algoritmo que calcule o fatorial de um número. */

function fat(number){
    if(number < 1)
    return 1
    else
    return number * fat(number - 1)
}

console.log(fat(5))