/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

function gradeAverage(code, a1 ,a2 ,a3){
    let grades = [a1, a2, a3]
    grades.sort()
    let average = (grades[0]*3 + grades[1]*3 + grades[2] * 4)/10 
    return [code, average]
}

function aproved(average){
    /*if(average < 5)
    return "failed"
    else
    return "passed"
    */
    return (average < 5 ? "failed": "passed")
    
}

const student1 = gradeAverage(0 ,6 , 3 , 8)
console.log(aproved(student1[1]))