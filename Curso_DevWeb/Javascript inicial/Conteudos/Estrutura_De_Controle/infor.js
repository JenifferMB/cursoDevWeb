for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const values = [6.4, 7.4, 4.5, 3.9, 5.6]

for(let i = 0; i < values.length; i++){
    console.log(`values = ${values[i]}`)
}

for (i in values){
    console.log("values: " + i, values[i])
}

const pokemon = {
    name: "Charmander",
    number: 4,
    height: 0.6,
    category: "Lizard"
}

for(i in pokemon){
    console.log(`${i} = ${pokemon[i]}`)
}


