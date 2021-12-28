/* Faça uma função que receba como parâmetro um vetor de grades e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function conceptsGrades(grades) {
    let concepts = []
    for(let i = 0; i < grades.length; i++) {
        if(grades[i]>=0 && grades[i]<=4.9)
            concepts.push('D')
        else if(grades[i]>=5 && grades[i]<=6.9)
            concepts.push('C')            
        else if(grades[i]>=7 && grades[i]<=8.9)
            concepts.push('B')
        else if(grades[i]>=9 && grades[i]<=10)
            concepts.push('A')
        else
        concepts.push('Nota inválida')       
    }
    return concepts
}

let grades = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]

console.log(conceptsGrades(grades))