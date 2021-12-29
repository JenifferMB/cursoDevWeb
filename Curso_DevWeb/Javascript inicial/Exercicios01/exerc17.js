/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function salary(category, salary){
    switch(category){
        case "A": return salary = (salary * 0.10) + salary
        case "B": return salary = (salary * 0.15) + salary
        case "C": return salary = (salary* 0.20) + salary
        default: return "invalid"
    }
}

console.log(salary("A", 700), salary("B", 500), salary("C", 300), salary("D", 100))