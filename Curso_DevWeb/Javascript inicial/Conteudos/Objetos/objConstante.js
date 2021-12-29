// game -> Chrono Trigger -> {...} //pointer
const obj = {game: "Chrono Trigger"}
obj.game = "Chrono Cross"

console.log(obj)

//game -> 456 -> {...}
//obj = {game: "Fatal Frame"} //error

Object.freeze(obj)

obj.game = "The Sims"
obj.id = 1

console.log(obj.game)

delete obj

console.log(obj)

