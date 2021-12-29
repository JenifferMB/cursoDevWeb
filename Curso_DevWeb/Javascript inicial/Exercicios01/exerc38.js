/* Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function printOdd(begin = 0, end = 100) {
    if(begin > end) {
        begin = end + begin
        end = begin - end
        begin = begin - end        
    }

    for(let i = begin; i <= end; i++) {        
        if(i % 2 == 1) 
        console.log(i)
    }
}

imprimirImpares(19, 3)