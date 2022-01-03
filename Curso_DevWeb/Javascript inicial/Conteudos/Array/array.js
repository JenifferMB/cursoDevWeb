console.log(typeof Array, typeof new Array, typeof [])

let vinyls = new Array("Unknown Pleasures", "Disintegration", "Hatful of Hollow")
console.log(vinyls)

vinyls = ["Unknown Pleasures", "Disintegration", "Hatful of Hollow"]
console.log(vinyls[0], ": ", vinyls[1], ": ", vinyls[2], ":",  vinyls[3])


vinyls.push("The Velvet Underground & Nico")
console.log(vinyls.length)
vinyls[7] = "Substance"
console.log(vinyls.length)
console.log(vinyls[6] === undefined)

console.log(vinyls)
vinyls.sort() //ordination
console.log(vinyls)

delete vinyls[3]
console.log(vinyls)

vinyls.splice(5,0, "Depeche Mode") //Select the first position, which you want to select, number of elements to be excluded and if you want to add elements, type after the second comma.
console.log(vinyls.sort())