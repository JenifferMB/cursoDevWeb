//ES8: Object.values//Object.entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//////
const game = "Red Dead Redemption 2"
const games = {
    game,
    getGame(){return `Game: ${game}`}
}

console.log(games.game, games.getGame())