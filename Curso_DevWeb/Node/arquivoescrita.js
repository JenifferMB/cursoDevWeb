const fs = require('fs')

const prod = {
    name: "smartphone",
    price: 1649.99,
    desc: 0.15
}

fs.writeFile(__dirname + '/arquivogerado.json', JSON.stringify(prod), err => {
    console.log(err || "Sucess")
})