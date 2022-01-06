/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

function inverse(value) {
    const type = typeof value
    if (type == "boolean") return !value
    else if (type == "number") return -value
    else
    return `parameter type ${type}`
}

console.log(inverse(-5), inverse(false), inverse("string"))
