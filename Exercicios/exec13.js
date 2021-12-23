/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function weekday(day){
    switch(day){
        case 1: return "weekend"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: return "weekday"
        case 7: return "weekend"
        default: return "invalid"
    }
}

for(let i = 0; i < 8; i++){
    console.log("day " +i +" is " +weekday(i))
}