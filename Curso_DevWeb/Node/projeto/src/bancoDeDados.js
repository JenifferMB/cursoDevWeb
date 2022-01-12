const seq = {
    _id: 1,
    get id(){ return this._id++}
}

const prod = {}

function regProd(product){
    if(!product.id) product.id = seq.id
    product[product.id] = product 
    return product
}

function getProd(id){
    return prod[id] || null
}

function getProds(){
    return Object.values(prod)
}

module.exports = {regProd, getProd, getProds}