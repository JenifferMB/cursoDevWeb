/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function loop (elem, x){
    
    if(x == 1)
    return elem 
    
    return elem + loop(elem, x-1)
}

console.log(loop("xd ", 6))