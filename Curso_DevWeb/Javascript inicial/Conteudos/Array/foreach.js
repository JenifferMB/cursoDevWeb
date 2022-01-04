const songs = ["Enjoy The Silence", "Just Like Heaven", "A Forest", "How Soon Is Now?"]

songs.forEach(function(song, i){
    console.log(`${i + 1}, ${song}`)
})

songs.forEach(song => console.log(song))

const printSongs = song => console.log(song)

songs.forEach(printSongs)

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

songs.forEach2(function(song, i){
    console.log(`${i + 1}, ${song}`)
})