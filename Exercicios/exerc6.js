/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

simple = (capIni, tax, time) => capIni + (capIni*tax*time)
compound = (capIni, tax, time) => capIni * Math.pow(1+tax,time)

console.log(simple(100, 10/100, 2))
console.log(compound(100, 10/100, 2))