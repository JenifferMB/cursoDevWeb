const bands = ["The Cure", "The Smiths", "Joy Division", "U2", "New Order", "Pearl Jam"]

function print(band, i){
    console.log(`${i+1}, ${band}`)
}

bands.forEach(print)
bands.forEach(bands => console.log(bands))