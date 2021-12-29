/*  Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas */

function calculator (x, string, y){
    switch(string){
        case "+": return x+y
        case "-": return x-y
        case "*": return x*y
        case "/": return x/y
        default: "invalid"
    }
}

console.log(calculator(6,"+",4), calculator(6,"-",3), calculator(4,"*",5), calculator(7,"/",3))