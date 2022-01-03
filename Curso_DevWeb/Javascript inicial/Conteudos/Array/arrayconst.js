const songs = ["Enjoy The Silence", "Just Like Heaven", "A Forest", "How Soon Is Now?"]
songs.pop() //remove last element
console.log(songs)

songs.push("How Soon Is Now?")
console.log(songs)

songs.shift(songs) //remove first element
console.log(songs)

songs.unshift("Enjoy The Silence") //add in first position
console.log(songs)

songs.splice(2,0, "After Dark", "Wonderwall") //add
console.log(songs)

songs.splice(4,2) //remove 
console.log(songs)

const songs2 = songs.slice(1,4) //create new array from an element
console.log(songs2)