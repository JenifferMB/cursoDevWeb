/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array */

function firstLast (array){
    const first = array[0]
    const last = array.length

    return [first, last]
}
//////////////////////////////////////////////
function lastFirst (array){
    const firstElem = array.shift()
    const lastElem = array.pop()
    return [firstElem, lastElem]
    }

console.log(firstLast([6,2,16,4]), lastFirst([76,6,11,"x"]))