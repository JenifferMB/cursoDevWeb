const fs = require('fs')

const pwd = __dirname + '/arquivo.json'

//sincrono
const conteudo = fs.readFileSync(pwd, 'utf-8')
console.log(conteudo)

//assincrona
fs.readFile(pwd, 'utf-8', (err, elements) => {
    const config = JSON.parse(elements)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, file) => {
    console.log("cd")
    console.log(file)
})