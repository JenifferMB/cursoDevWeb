/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangle(x,y,z){ 
    if(x != y && y != z) return "scalene"
    if(x == y && y == z) return "equilateral"
    else return "isosceles" 
}

console.log(triangle(1,1,1), triangle(1,5,5), triangle(1,2,3))