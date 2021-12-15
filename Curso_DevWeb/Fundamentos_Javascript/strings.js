const phrase = "Leia isso aqui"

console.log(phrase.charAt(3)) //find the current letter, position = letter - 1
console.log(phrase.charAt(5)) 
console.log(phrase.charCodeAt(3)) //return unicode letter

console.log(phrase.indexOf('w')) //if have an equal character in the phrase, return the position, else return -1.
console.log(phrase.indexOf('i'))

console.log(phrase.substring(5)) //read the sentence from a position
console.log(phrase.substring(0,4)) //read the sentence from one position to the other

console.log("Concatena ".concat(phrase).concat(" isso aqui"))
console.log(phrase.replace("e",3)) //replace original letter in the phrase to other character

console.log("one, two, three, four".split(",")) //transform the sentence into an array //