const songs = ["Enjoy The Silence", "Just Like Heaven", "A Forest", "How Soon Is Now?"]

songs.forEach(function(song, i){
    console.log(`${i + 1}, ${song}`)
})

songs.forEach(song => console.log(song))

const printSongs = song => console.log(song)

songs.forEach(printSongs)
