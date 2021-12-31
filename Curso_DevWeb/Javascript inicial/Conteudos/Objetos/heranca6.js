function Video (name, videoID) {
    this.name = name
    this.videoID = videoID
}

const video1 = new Video("Evolution of Batman games", 25)
const video2 = new Video("Ant Canada", 122)

//simulation of new
function new1 (f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const video3 = new1(Video, "Plataform test", 0)
console.log(video1, video2, video3)