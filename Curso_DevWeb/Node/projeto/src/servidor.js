const port = 3003

const express = require('express')
const app = express()
const bd = require('./bancoDeDados')

app.get('/products', (req, res, next) => {
    res.send(bd.getProds())
})

app.get('/products/:id', (req, res, next) =>{
    res.send(bd.getProd(req.params.id))
})

app.post('/products', (res, req, next) =>{
    const prod = bd.regProd({
        name: req.body.name,
        price: req.body.price
    })
    res.send(prod) //JSON
})

app.listen(port, () => {
    console.log(`Port exec: ${port}`)
})