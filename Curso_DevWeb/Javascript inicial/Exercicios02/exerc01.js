/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

function hello(text){
    let greetings = "Hello "
    return greetings.concat(text)
}

console.log(hello("world"))